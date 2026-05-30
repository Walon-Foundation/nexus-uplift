"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Check, Wind, Brain, FlaskConical, Thermometer, Droplets, Smile } from "lucide-react";

const topics = [
  {
    icon: Wind,
    label: "Asthma",
    myth: "Asthma is caused by a spiritual attack or bad night air. It cannot be treated — only prayed away.",
    fact: "Asthma is inflammation of the airways triggered by dust, smoke, or cold air. It is fully manageable with an inhaler and trigger avoidance.",
  },
  {
    icon: Brain,
    label: "Mental Health",
    myth: "Feeling persistently sad or anxious is a sign of spiritual weakness, sin, or a curse placed on you.",
    fact: "Depression and anxiety are medical conditions affecting brain chemistry. Talking to a doctor or counsellor leads to real, measurable improvement.",
  },
  {
    icon: FlaskConical,
    label: "Peptic Ulcer",
    myth: "Stomach ulcers are caused by witchcraft or eating forbidden food. Only a spiritual cleansing can cure them.",
    fact: "Most ulcers are caused by H. pylori bacteria or overuse of pain medicines. A short course of antibiotics cures the majority of cases.",
  },
  {
    icon: Thermometer,
    label: "Malaria & Fever",
    myth: "Fever is a punishment from God or a sign that evil has entered the body.",
    fact: "Fever is the immune system fighting infection. Malaria is spread by infected Anopheles mosquitoes — treated nets and antimalarials save lives.",
  },
  {
    icon: Droplets,
    label: "Anaemia",
    myth: "Constant tiredness and pale skin are a spiritual affliction or a sign of being cursed.",
    fact: "Anaemia is usually caused by low iron. Iron-rich foods — beans, meat, leafy greens — and simple supplements restore energy and normal growth.",
  },
  {
    icon: Smile,
    label: "Oral Health",
    myth: "Tooth decay is caused by eating forbidden food or a hex. It is a punishment, not a disease.",
    fact: "Bacteria feed on sugar and produce acid that erodes enamel. Brushing twice daily with fluoride toothpaste prevents decay entirely.",
  },
];

export function MythBuster() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const topic = topics[active];

  return (
    <section id="mythbuster" className="py-16 sm:py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Myth vs. Fact
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              What We Are Up Against
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              These are the exact beliefs we encounter in communities — and the science that replaces them.
            </p>
          </div>
        </motion.div>

        {/* Tab row — horizontal scroll on mobile, wrap on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex gap-2 mb-10 overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
        >
          {topics.map(({ label, icon: Icon }, i) => (
            <button
              key={label}
              onClick={() => setActive(i)}
              className={`
                flex items-center gap-2 px-4 py-2.5 sm:py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0
                border transition-all duration-200 min-h-[44px] sm:min-h-0
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                ${active === i
                  ? "bg-primary text-white border-primary shadow-[0_4px_16px_rgba(232,93,63,0.3)]"
                  : "bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm border-black/[0.08] dark:border-white/[0.08] text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }
              `}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Myth / Fact cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
          >
            {/* Myth */}
            <div className="relative rounded-2xl p-5 sm:p-7 overflow-hidden
              bg-red-50/80 dark:bg-red-950/20
              backdrop-blur-md
              border border-red-200/60 dark:border-red-500/15
              shadow-[0_2px_20px_rgba(239,68,68,0.06)]
              dark:shadow-[0_4px_24px_rgba(239,68,68,0.08)]
            ">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-300/30 to-transparent dark:via-red-500/20" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/40 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                  The Myth
                </span>
              </div>
              <p className="text-foreground/80 text-base leading-relaxed font-medium italic">
                &ldquo;{topic.myth}&rdquo;
              </p>
            </div>

            {/* Fact */}
            <div className="relative rounded-2xl p-5 sm:p-7 overflow-hidden
              bg-emerald-50/80 dark:bg-emerald-950/20
              backdrop-blur-md
              border border-emerald-200/60 dark:border-emerald-500/15
              shadow-[0_2px_20px_rgba(16,185,129,0.06)]
              dark:shadow-[0_4px_24px_rgba(16,185,129,0.08)]
            ">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent dark:via-emerald-500/20" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  The Science
                </span>
              </div>
              <p className="text-foreground/80 text-base leading-relaxed">
                {topic.fact}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Topic indicator */}
        <div className="flex items-center gap-2 mt-8">
          {topics.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="py-3 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Select topic ${i + 1}`}
            >
              <span
                className="block h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  background: i === active ? "var(--primary)" : "var(--border)",
                }}
              />
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground tabular-nums">
            {active + 1} / {topics.length}
          </span>
        </div>

      </div>
    </section>
  );
}
