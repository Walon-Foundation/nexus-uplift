"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  MapPin, Users, BookOpen, ClipboardCheck,
  MessageCircle, Microscope, RefreshCw, BarChart3,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    num: "01",
    icon: MapPin,
    title: "Community Identification",
    desc: "We work with local leaders, teachers, and healthcare workers to identify communities where health myths are causing the most harm. Priority is given to areas with low clinic attendance and high rates of myth-driven treatment delays.",
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "Needs & Myth Assessment",
    desc: "Before entering a community, we conduct informal conversations to understand the specific beliefs in circulation. Myths differ by region — what is believed about asthma in one community may differ from the next. Our content adapts accordingly.",
  },
  {
    num: "03",
    icon: Users,
    title: "Volunteer Educator Training",
    desc: "We recruit and train local volunteers — teachers, nurses, and community health workers — to lead the workshops. Training covers the science behind each health topic, child-friendly communication, and how to address myths respectfully without alienating families.",
  },
  {
    num: "04",
    icon: BookOpen,
    title: "The Workshop",
    desc: "Each workshop runs for two to three hours and is designed for children aged 8–16, with parallel sessions for parents and caregivers. Content is delivered in plain language and, where possible, local languages. We use visual materials, real-life scenarios, and open discussion — not lectures.",
  },
  {
    num: "05",
    icon: Microscope,
    title: "Science Over Superstition",
    desc: "Each of our six health topics is covered with the same structure: name the myth, explain why people believe it, present the medical evidence clearly, and give practical guidance. We never mock cultural beliefs — we replace fear with knowledge.",
  },
  {
    num: "06",
    icon: ClipboardCheck,
    title: "Before & After Survey",
    desc: "Every participant completes a short anonymous survey before and after the workshop. We track changes in belief about specific health myths, confidence in seeking medical care, and intention to visit a clinic for the conditions covered.",
  },
  {
    num: "07",
    icon: RefreshCw,
    title: "Community Follow-Up",
    desc: "Trained local volunteers remain in the community after the workshop to answer questions, correct misinformation as it resurfaces, and refer families to appropriate care. The goal is lasting change, not a single event.",
  },
  {
    num: "08",
    icon: BarChart3,
    title: "Impact Reporting",
    desc: "We compile survey data and field observations into transparent reports shared with partners and funders. Our primary metric is myth rejection rate — the proportion of participants who, after the workshop, correctly identify a health condition as medical rather than spiritual.",
  },
];

const principles = [
  {
    title: "Science-First, Always",
    desc: "Every statement we make in a workshop is medically accurate. We consult with healthcare professionals to verify content before delivery.",
  },
  {
    title: "Locally Rooted",
    desc: "We do not parachute in. We train and support community members to lead — they know the language, the context, and the trust networks.",
  },
  {
    title: "Culturally Respectful",
    desc: "We address myths directly without dismissing the communities that hold them. Our tone is curious and collaborative, not superior.",
  },
  {
    title: "Radically Transparent",
    desc: "Our survey data, methods, and outcomes are shared openly. We will publish results as they come in — the good and the difficult.",
  },
];

const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

function TimelineStep({
  step,
  index,
}: {
  step: { num: string; icon: LucideIcon; title: string; desc: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative grid md:grid-cols-[1fr_48px_1fr] gap-0 items-start mb-12 last:mb-0">

      {/* Left card slot */}
      <div className={`hidden md:flex justify-end pr-6 ${isLeft ? "" : "invisible"}`}>
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative max-w-sm w-full rounded-2xl p-6 overflow-hidden
            bg-white/70 dark:bg-white/[0.04] backdrop-blur-md
            border border-black/[0.07] dark:border-white/[0.08]
            shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]
            dark:shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]
            hover:border-primary/30 transition-all duration-200"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          <span className="absolute top-4 right-5 text-4xl font-black text-foreground/[0.04] select-none">{step.num}</span>
          <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4 group-hover:bg-primary/[0.14] transition-colors">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
        </motion.div>
      </div>

      {/* Centre dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10
            shadow-[0_0_0_4px_var(--background),0_0_0_6px_var(--primary)]"
        >
          <span className="text-white text-xs font-bold">{step.num}</span>
        </motion.div>
      </div>

      {/* Right card slot */}
      <div className={`md:pl-6 ${isLeft ? "invisible hidden md:block" : ""}`}>
        {/* Mobile card (always visible) */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`group relative max-w-sm w-full rounded-2xl p-6 overflow-hidden
            bg-white/70 dark:bg-white/[0.04] backdrop-blur-md
            border border-black/[0.07] dark:border-white/[0.08]
            shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]
            dark:shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]
            hover:border-primary/30 transition-all duration-200
            ${isLeft ? "md:invisible" : ""}
          `}
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          <span className="absolute top-4 right-5 text-4xl font-black text-foreground/[0.04] select-none">{step.num}</span>
          <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4 group-hover:bg-primary/[0.14] transition-colors">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
        </motion.div>
      </div>

      {/* Mobile layout: dot + card stacked */}
      <div className="md:hidden flex gap-4 col-span-full">
        <div className="flex flex-col items-center gap-0 pt-1 shrink-0">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 shrink-0
              shadow-[0_0_0_3px_var(--background),0_0_0_5px_var(--primary)]"
          >
            <span className="text-white text-[10px] font-bold">{step.num}</span>
          </motion.div>
          <div className="w-px flex-1 bg-border mt-2" />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="group relative flex-1 rounded-2xl p-5 mb-2 overflow-hidden
            bg-white/70 dark:bg-white/[0.04] backdrop-blur-md
            border border-black/[0.07] dark:border-white/[0.08]
            shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]
            dark:shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-3">
            <Icon className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-bold text-sm text-foreground mb-1.5">{step.title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
        </motion.div>
      </div>

    </div>
  );
}

export default function HowWeWorkPage() {
  return (
    <div className="pt-20 pb-24">

      {/* Header */}
      <section className="border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Method</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              How We Work
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Nexus Uplift is not a one-day event. It is a structured, community-embedded process
              designed to produce lasting change in how children and families understand their health.
              Here is exactly how it works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process steps — animated timeline */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">The Process</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Eight Steps, One Goal</h2>
          </motion.div>

          {/* Timeline wrapper — desktop vertical line */}
          <div className="relative">
            {/* Static background line */}
            <div className="absolute left-1/2 top-5 bottom-5 w-px -translate-x-1/2 bg-border hidden md:block" />

            {steps.map((step, i) => (
              <TimelineStep key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Principles</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">What We Will Never Compromise On</h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {principles.map(({ title, desc }) => (
              <motion.div
                key={title}
                variants={item}
                className="bg-white/70 dark:bg-white/[0.04] backdrop-blur-md rounded-xl
                  border border-black/[0.07] dark:border-white/[0.08]
                  shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]
                  dark:shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]
                  p-6"
              >
                <div className="w-1.5 h-6 rounded-full bg-primary mb-4" />
                <h3 className="font-semibold text-sm text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Measurement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Measurement</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">How We Know It Is Working</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {[
              { metric: "Myth Rejection Rate", detail: "Primary metric — percentage of participants who correctly identify health conditions as medical post-workshop", target: "Target: 90%+" },
              { metric: "Clinic Referral Rate", detail: "Proportion of participants who report visiting a clinic for a covered condition within 30 days of the workshop", target: "Target: 40%+" },
              { metric: "Knowledge Retention", detail: "Follow-up survey at 60 days measuring sustained myth rejection and health literacy improvement", target: "Target: 80% retention" },
            ].map(({ metric, detail, target }) => (
              <div
                key={metric}
                className="relative rounded-xl p-6 overflow-hidden
                  bg-white/70 dark:bg-white/[0.04] backdrop-blur-md
                  border border-black/[0.07] dark:border-white/[0.08]
                  shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]
                  dark:shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
                <h3 className="font-bold text-sm text-foreground mb-3">{metric}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{detail}</p>
                <span className="text-xs font-bold text-primary">{target}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Want to Bring a Workshop to Your Community?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We welcome schools, community organisations, clinics, and local leaders who want to partner with us.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
