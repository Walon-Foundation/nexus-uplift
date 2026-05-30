"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-6 sm:bottom-6 z-50 w-11 h-11 rounded-full
            bg-primary text-white
            flex items-center justify-center
            shadow-[0_4px_20px_rgba(232,93,63,0.45)]
            hover:bg-primary/90 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(232,93,63,0.5)]
            active:translate-y-0 active:shadow-[0_4px_20px_rgba(232,93,63,0.45)]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
            transition-all duration-200"
        >
          <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
