"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "My son has asthma and our neighbours kept saying it was a spiritual problem. After Nexus Uplift visited our school, my son can explain to them why it isn't. He even knows how to use his inhaler properly now.",
    name: "Amina Koroma",
    role: "Parent, Freetown",
    initials: "AK",
  },
  {
    quote:
      "I used to hide the fact that I felt sad a lot. I thought something was wrong with me spiritually. The workshop helped me understand depression is a medical thing, not a curse. I told my mum and we went to the clinic.",
    name: "Isata, age 13",
    role: "Workshop Participant",
    initials: "IS",
  },
  {
    quote:
      "The children in our community came back from the workshop and started correcting their grandparents about fever. It is wonderful to see them confident in their knowledge. This is exactly what is needed.",
    name: "Mr. Bangura",
    role: "Community Leader",
    initials: "MB",
  },
  {
    quote:
      "I had stomach pains for months. My family thought it was witchcraft. At the session I learned about ulcers and told my dad. He took me to the doctor. It was H. pylori. I got antibiotics. Now I am fine.",
    name: "Foday, age 11",
    role: "Workshop Participant",
    initials: "FD",
  },
];

const INTERVAL = 8000;

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(index + 1, 1), INTERVAL);
    return () => clearInterval(t);
  }, [index, paused, go]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit:  (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  };

  const t = testimonials[index];

  return (
    <section
      className="py-16 sm:py-24 bg-muted"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Minimal top row — label + arrows only, no heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            In Their Words
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(index - 1, -1)}
              className="w-10 h-10 rounded-full backdrop-blur-md bg-white/70 dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] hover:border-primary/50 shadow-[0_1px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_8px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => go(index + 1, 1)}
              className="w-10 h-10 rounded-full backdrop-blur-md bg-white/70 dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] hover:border-primary/50 shadow-[0_1px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_8px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-black/[0.07] dark:border-white/[0.08] shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] min-h-[220px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-5 sm:p-8 md:p-12"
              >
                {/* Coral accent */}
                <div className="w-8 h-[3px] bg-primary rounded mb-6" />

                <blockquote className="text-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-medium max-w-3xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators + progress */}
          <div className="flex items-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > index ? 1 : -1)}
                className="relative py-3 flex items-center"
                aria-label={`Go to story ${i + 1}`}
              >
                <span
                  className="relative block h-2 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: i === index ? 32 : 12, background: i === index ? "transparent" : "var(--border)" }}
                >
                  {i === index && (
                    <motion.span
                      className="absolute inset-0 bg-primary rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                      key={`${index}-progress`}
                    />
                  )}
                </span>
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground tabular-nums">
              {index + 1} / {testimonials.length}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
