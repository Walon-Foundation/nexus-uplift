"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-muted border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden
            bg-white/70 dark:bg-white/[0.04]
            backdrop-blur-md
            border border-black/[0.07] dark:border-white/[0.08]
            shadow-[0_4px_28px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.9)]
            dark:shadow-[0_4px_28px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
            p-8 sm:p-10
          "
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">You are on the list.</p>
                <p className="text-sm text-muted-foreground">
                  We will reach out when our first workshops go live. Thank you for your support.
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Stay Updated
                </p>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Follow Our First Workshops
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Be the first to know when we reach our first community.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-56 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground"
                />
                <Button type="submit" size="default" className="w-full sm:w-auto">
                  <ArrowRight className="w-4 h-4" />
                  <span className="sm:hidden ml-2">Stay Updated</span>
                </Button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
