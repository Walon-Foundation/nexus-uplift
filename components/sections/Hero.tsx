"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function Hero() {
  return (
    <section className="relative sm:min-h-[90vh] flex items-center overflow-hidden">

      {/* ── Gradient mesh ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/[0.12] blur-[120px]"
          style={{ animation: "drift-1 10s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-secondary/[0.12] blur-[100px]"
          style={{ animation: "drift-2 13s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full bg-primary/[0.07] blur-[90px]"
          style={{ animation: "drift-3 8s ease-in-out infinite" }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: NOISE }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-primary mb-6"
            >
              Science-Based Health Education
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm border-l-2 border-primary/40 pl-4 italic"
            >
              A child died from a treatable asthma attack while the family
              prayed for a spiritual cure. We exist so that changes.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6 sm:mb-7"
            >
              Empowering
              <br />
              Kids Through
              <br />
              <span className="bg-gradient-to-r from-[#4DB6AC] via-[#A8D5BA] to-[#CDB4DB] bg-clip-text text-transparent">
                Health
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-md"
            >
              Nexus Uplift Foundation replaces dangerous health myths with
              science — giving every child a clear, accurate understanding
              of their body and their care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-wrap gap-3"
            >
              <Button size="lg" asChild>
                <a href="/how-we-work">
                  How We Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
            </motion.div>
          </div>

          {/* Right — featured quote */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0f2f2d] p-8 shadow-lg">
              {/* Top sheen */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="w-8 h-[3px] bg-primary rounded mb-6" />
                <blockquote className="text-white/85 text-lg leading-relaxed mb-8 font-medium">
                  &ldquo;I used to hide that I felt sad a lot. I thought
                  something was wrong with me spiritually. The workshop helped
                  me understand depression is medical, not a curse. I told my
                  mum and we went to the clinic.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                    IS
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Isata, age 13</p>
                    <p className="text-xs text-white/40">Workshop Participant</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
