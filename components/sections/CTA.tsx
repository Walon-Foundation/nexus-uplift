"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#1a2744] dark:bg-[#0d1220]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Get Involved
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
            Help Us Reach Every Child
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you are a healthcare professional, a teacher, or a community member —
            there is a place for you at Nexus Uplift Foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <a href="/contact">
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline-white" asChild>
              <a href="/about">Our Story</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
