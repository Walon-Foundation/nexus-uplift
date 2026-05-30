"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Kids Educated", desc: "Children who received science-based health education" },
  { value: 6,   suffix: "",  label: "Health Topics",  desc: "Conditions demystified and covered in workshops" },
  { value: 12,  suffix: "+", label: "Communities",    desc: "Communities reached across the region" },
  { value: 95,  suffix: "%", label: "Myth Rejection", desc: "Of participants reject health superstitions after workshops" },
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
    <section className="py-24 bg-background border-y border-border">
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
              Our Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Small Numbers, Big Meaning
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Every child counts. These numbers represent real lives changed by health knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {stats.map(({ value, suffix, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-8 group hover:bg-muted transition-colors duration-200"
            >
              <p className="text-5xl sm:text-6xl font-black text-primary tracking-tight mb-3 leading-none">
                <Counter to={value} suffix={suffix} inView={inView} />
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
