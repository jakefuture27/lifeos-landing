"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative pt-40 pb-32 md:pt-52 md:pb-44 overflow-hidden bg-[#06070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Hero — Typography Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.08] text-white">
            The AI that prevents problems
            <br />
            <span className="text-slate-500">before they happen.</span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            LifeOS watches over your finances, health, career, and daily
            life — so you can stop catching up and start getting ahead.
          </p>

          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={onOpenWaitlist}
              className="btn-matte-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm"
            >
              <span>Join the Waitlist</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#demo"
              className="btn-matte-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm"
            >
              See how it works
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
