"use client";

import { motion } from "framer-motion";
import { ArrowRight, Apple } from "lucide-react";

interface FinalCTAProps {
  onOpenWaitlist: () => void;
}

export default function FinalCTA({ onOpenWaitlist }: FinalCTAProps) {
  return (
    <section className="py-28 relative bg-[#06070B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              The future isn't about asking AI questions.
            </h2>
            <p className="text-2xl sm:text-4xl font-bold text-slate-300 leading-tight">
              It's about AI preventing problems before they happen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenWaitlist}
              className="btn-matte-primary px-9 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#download-soon"
              className="btn-matte-secondary px-8 py-4 rounded-full font-medium text-sm"
            >
              Download Soon
            </a>
          </div>

          {/* Badges */}
          <div id="download-soon" className="pt-10 border-t border-white/5 space-y-4">
            <div className="text-xs font-mono text-slate-500 uppercase">
              Native Client Platforms
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="px-4 py-2.5 rounded-xl bg-[#0D1017] border border-white/10 flex items-center gap-3 opacity-80">
                <Apple className="w-5 h-5 text-white" />
                <div className="text-left text-xs">
                  <div className="text-slate-400 font-mono text-[10px]">Mac & iOS</div>
                  <div className="font-semibold text-white">App Store</div>
                </div>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-slate-300">
                  Coming Soon
                </span>
              </div>

              <div className="px-4 py-2.5 rounded-xl bg-[#0D1017] border border-white/10 flex items-center gap-3 opacity-80">
                <div className="w-5 h-5 flex items-center justify-center text-slate-300 text-xs">▶</div>
                <div className="text-left text-xs">
                  <div className="text-slate-400 font-mono text-[10px]">Android</div>
                  <div className="font-semibold text-white">Google Play</div>
                </div>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-slate-300">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
