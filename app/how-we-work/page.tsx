"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  MapPin, Users, BookOpen, ClipboardCheck,
  Microscope, BarChart3,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    num: "01",
    icon: MapPin,
    title: "Finding the Right Communities",
    desc: "We start by talking — to local leaders, teachers, and clinics. We look for communities where specific health myths are actively delaying treatment. Before we enter, we understand exactly what is being believed and why.",
  },
  {
    num: "02",
    icon: Users,
    title: "Training Local Educators",
    desc: "We do not parachute in. We recruit teachers, nurses, and community health workers who already have the trust of their neighbours. We train them in the science behind each topic and in how to address beliefs respectfully — not dismissively.",
  },
  {
    num: "03",
    icon: BookOpen,
    title: "The Workshop",
    desc: "Two to three hours. Children aged 8–16 in one room, parents and caregivers in another. No lectures — real conversations, local language where possible, visual materials, and the specific myths of that specific community addressed directly.",
  },
  {
    num: "04",
    icon: Microscope,
    title: "Science Over Superstition",
    desc: "Every topic follows the same logic: state the myth clearly, explain why people believe it without condescension, then replace it with medical fact and practical guidance. We never mock. We replace fear with something more useful.",
  },
  {
    num: "05",
    icon: ClipboardCheck,
    title: "Measurement & Follow-Up",
    desc: "Participants complete anonymous surveys before and after. Trained local volunteers stay in the community to answer questions and correct new misinformation as it surfaces. A workshop is an event. The goal is lasting change.",
  },
  {
    num: "06",
    icon: BarChart3,
    title: "Transparent Reporting",
    desc: "We publish what we find — the numbers that went up and the ones that did not. Our funders and partners see the same data we do. We believe organisations that hide their results should not be trusted with children's health.",
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

const cardClasses = `
  group relative w-full rounded-2xl p-5 sm:p-6 overflow-hidden
  bg-white/70 dark:bg-white/[0.04] backdrop-blur-md
  border border-black/[0.07] dark:border-white/[0.08]
  shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]
  dark:shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]
  hover:border-primary/30 transition-all duration-200
`;

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

  const cardInner = (
    <>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <span className="absolute top-4 right-5 text-4xl font-black text-foreground/[0.04] select-none">{step.num}</span>
      <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4 group-hover:bg-primary/[0.14] transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-bold text-sm text-foreground mb-2">{step.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
    </>
  );

  const dot = (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.35, delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shrink-0
        shadow-[0_0_0_4px_var(--background),0_0_0_6px_var(--primary)]"
    >
      <span className="text-white text-xs font-bold">{step.num}</span>
    </motion.div>
  );

  return (
    <div ref={ref} className="mb-10 last:mb-0">

      {/* ── Mobile layout (< md) — left line, card on right ── */}
      <div className="flex gap-4 md:hidden">
        <div className="flex flex-col items-center shrink-0 pt-1">
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
          initial={{ opacity: 0, x: 16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cardClasses + " flex-1 mb-2"}
        >
          {cardInner}
        </motion.div>
      </div>

      {/* ── Desktop layout (md+) — alternating left / right ── */}
      <div className="hidden md:grid grid-cols-[1fr_48px_1fr] items-start">
        {/* Left slot */}
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cardClasses + " mr-6 max-w-sm ml-auto"}
          >
            {cardInner}
          </motion.div>
        ) : (
          <div />
        )}

        {/* Centre dot */}
        <div className="flex justify-center pt-4">{dot}</div>

        {/* Right slot */}
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cardClasses + " ml-6 max-w-sm"}
          >
            {cardInner}
          </motion.div>
        ) : (
          <div />
        )}
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Six Steps, One Goal</h2>
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
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
