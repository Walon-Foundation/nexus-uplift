"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wind, Brain, FlaskConical, Thermometer, Droplets, Smile } from "lucide-react";

const topics = [
  {
    icon: Wind,
    glow: "#38bdf8",
    title: "Asthma",
    tag: "Respiratory",
    description:
      "Asthma is not a curse — it is a manageable condition where airways become inflamed. We teach kids to recognise triggers, use inhalers correctly, and live active lives.",
    facts: [
      "1 in 11 children has asthma",
      "Triggers include dust, smoke, and cold air",
      "Properly managed, kids can play sports freely",
    ],
  },
  {
    icon: Brain,
    glow: "#a78bfa",
    title: "Mental Health",
    tag: "Wellness",
    description:
      "Feeling sad, anxious, or overwhelmed is not weakness or a spiritual attack. We help children name their emotions and seek the right help confidently.",
    facts: [
      "1 in 6 children has a mental health condition",
      "Talking helps — stigma does not",
      "Early support leads to better outcomes",
    ],
  },
  {
    icon: FlaskConical,
    glow: "#34d399",
    title: "Peptic Ulcer",
    tag: "Digestive",
    description:
      "Stomach ulcers are caused by H. pylori bacteria or overuse of pain medicines — not bad luck. We demystify symptoms and treatment.",
    facts: [
      "Often caused by H. pylori bacteria",
      "Stress worsens but does not cause ulcers",
      "Antibiotics can cure most cases",
    ],
  },
  {
    icon: Thermometer,
    glow: "#fb923c",
    title: "Malaria & Fever",
    tag: "Infectious",
    description:
      "Fever is the body fighting infection — not a punishment. We explain how malaria parasites spread and why mosquito nets and treatment matter.",
    facts: [
      "Malaria is caused by Plasmodium parasite",
      "Spread only via infected Anopheles mosquitoes",
      "Treated nets prevent 50%+ of cases",
    ],
  },
  {
    icon: Droplets,
    glow: "#f472b6",
    title: "Anaemia",
    tag: "Nutritional",
    description:
      "Constant tiredness and pale skin are not spiritual. Anaemia often comes from low iron. We show kids how food choices directly affect their energy and growth.",
    facts: [
      "Iron-rich foods include beans, meat, leafy greens",
      "Affects 40% of children globally",
      "Vitamin C helps the body absorb iron",
    ],
  },
  {
    icon: Smile,
    glow: "#22d3ee",
    title: "Oral Health",
    tag: "Hygiene",
    description:
      "Tooth decay is not caused by forbidden food. Bacteria feed on sugar and create acid. Brushing twice daily is medicine, not just hygiene.",
    facts: [
      "Brush for 2 minutes, twice daily",
      "Sugar feeds cavity-causing bacteria",
      "Fluoride toothpaste strengthens enamel",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function GlassCard({ topic }: { topic: (typeof topics)[number] }) {
  const Icon = topic.icon;
  return (
    <div className="relative rounded-2xl p-6 overflow-hidden group cursor-default
      bg-white/[0.04] border border-white/[0.08]
      backdrop-blur-md
      shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]
      hover:shadow-[0_20px_56px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)]
      hover:-translate-y-1.5
      transition-all duration-300 ease-out
    ">
      {/* Top-edge light sheen */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Per-topic colour glow */}
      <div
        className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none"
        style={{ background: topic.glow }}
      />

      {/* Icon */}
      <div
        className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${topic.glow}18` }}
      >
        <Icon className="w-5 h-5" style={{ color: topic.glow }} />
      </div>

      {/* Tag */}
      <p
        className="text-[10px] font-bold uppercase tracking-widest mb-2"
        style={{ color: topic.glow }}
      >
        {topic.tag}
      </p>

      {/* Title */}
      <h3 className="font-bold text-base text-white mb-3">{topic.title}</h3>

      {/* Description */}
      <p className="text-sm text-white/50 leading-relaxed mb-4">{topic.description}</p>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] mb-4" />

      {/* Facts */}
      <ul className="space-y-2">
        {topic.facts.map((fact) => (
          <li key={fact} className="flex items-start gap-2 text-xs text-white/40">
            <span
              className="mt-1.5 w-1 h-1 rounded-full shrink-0"
              style={{ background: topic.glow }}
            />
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HealthTopics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="topics" className="py-16 sm:py-24 bg-[#0f1117] relative overflow-hidden">
      {/* Subtle background noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Health Topics
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Science Over Superstition
            </h2>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              Each condition we address carries myths in many communities. We replace fear with facts, and confusion with clarity.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {topics.map((topic) => (
            <motion.div key={topic.title} variants={item}>
              <GlassCard topic={topic} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
