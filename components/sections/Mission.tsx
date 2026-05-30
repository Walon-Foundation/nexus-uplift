"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FlaskConical, BookOpen, Users, Shield } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: FlaskConical,
    title: "Science-First",
    tag: "Evidence-based",
    desc: "Every health explanation is rooted in medical evidence and age-appropriate science.",
  },
  {
    num: "02",
    icon: BookOpen,
    title: "Plain Language",
    tag: "Child-friendly",
    desc: "No jargon. We translate complex conditions into words every child and parent can understand.",
  },
  {
    num: "03",
    icon: Users,
    title: "Community-Led",
    tag: "Locally driven",
    desc: "We train local volunteers and teachers to sustain health conversations within communities.",
  },
  {
    num: "04",
    icon: Shield,
    title: "Myth Busting",
    tag: "Culture-aware",
    desc: "We directly address the specific superstitions tied to each condition in each community.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mission" className="py-16 sm:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Our Mission
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Replacing Myths With Medical Facts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              In many communities, asthma is called a &ldquo;spiritual attack&rdquo;, depression
              is dismissed as weakness, and stomach ulcers are blamed on witchcraft. These
              beliefs delay treatment and cost lives — especially children&apos;s lives.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nexus Uplift goes into communities with child-friendly health workshops, teaching
              kids and their caregivers the real causes, real symptoms, and real cures —
              building a generation that chooses clinics over superstitions.
            </p>
          </motion.div>

          {/* Right — pillar cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map(({ num, icon: Icon, title, tag, desc }) => (
              <motion.div
                key={title}
                variants={item}
                className="
                  group relative rounded-2xl p-6 overflow-hidden
                  bg-white/70 dark:bg-white/[0.04]
                  backdrop-blur-md
                  border border-black/[0.07] dark:border-white/[0.08]
                  shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]
                  dark:shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]
                  hover:border-primary/40 dark:hover:border-primary/40
                  hover:-translate-y-1
                  hover:shadow-[0_12px_36px_rgba(232,93,63,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]
                  dark:hover:shadow-[0_12px_36px_rgba(232,93,63,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]
                  transition-all duration-300
                "
              >
                {/* Ghost number */}
                <span className="
                  absolute top-4 right-5
                  text-5xl font-black leading-none select-none pointer-events-none
                  text-foreground/[0.04]
                  group-hover:text-primary/[0.07]
                  transition-colors duration-300
                ">
                  {num}
                </span>

                {/* Icon */}
                <div className="
                  w-11 h-11 rounded-xl flex items-center justify-center mb-5
                  bg-primary/8
                  group-hover:bg-primary/14
                  transition-colors duration-300
                ">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm text-foreground mb-2">{title}</h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{desc}</p>

                {/* Tag */}
                <span className="
                  inline-block text-[10px] font-bold uppercase tracking-widest
                  text-primary/70 border border-primary/20 rounded-full
                  px-2.5 py-0.5
                  group-hover:text-primary group-hover:border-primary/40
                  transition-colors duration-300
                ">
                  {tag}
                </span>

                {/* Bottom bar — draws left → right on hover */}
                <div className="
                  absolute bottom-0 left-0 right-0 h-[3px]
                  bg-primary
                  origin-left scale-x-0
                  group-hover:scale-x-100
                  transition-transform duration-500 ease-out
                " />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
