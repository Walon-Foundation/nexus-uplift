"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+",     static: false, display: "",        label: "Kids to Reach",    desc: "Children we aim to equip with science-based health education in Year 1" },
  { value: 6,   suffix: "",      static: false, display: "",        label: "Health Topics",    desc: "Conditions we will demystify and address in every workshop" },
  { value: 12,  suffix: "+",     static: false, display: "",        label: "Communities",      desc: "Communities we are targeting across the region in our first year" },
  { value: 0,   suffix: "",      static: true,  display: "2–3 hrs", label: "Per Workshop",     desc: "Each session runs two to three hours, with separate streams for children and caregivers" },
];

function Counter({ to, suffix, inView }: { to: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / (1600 / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, to);
      setCount(start);
      if (start >= to) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span>{count}{suffix}</span>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Year 1 Goals
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              What We Are Building Toward
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            We are at the start. These are the targets we have set for our first year of operation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, suffix, static: isStatic, display, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group relative rounded-2xl p-6 sm:p-8 overflow-hidden
                bg-white/70 dark:bg-white/[0.04] backdrop-blur-md
                border border-black/[0.07] dark:border-white/[0.08]
                shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]
                dark:shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]
                hover:border-primary/30
                hover:shadow-[0_6px_24px_rgba(232,93,63,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]
                dark:hover:shadow-[0_6px_24px_rgba(232,93,63,0.12),inset_0_1px_0_rgba(255,255,255,0.05)]
                transition-all duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <p className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-primary to-orange-400 bg-clip-text text-transparent tracking-tight mb-3 leading-none">
                {isStatic ? display : <Counter to={value} suffix={suffix} inView={inView} />}
              </p>
              <p className="font-semibold text-sm text-foreground mb-2">{label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
