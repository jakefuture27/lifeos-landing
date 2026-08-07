"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
} from "lucide-react";
import TiltCard from "./TiltCard";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  const [aiOptimized, setAiOptimized] = useState(false);

  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#06070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-6 mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.08] text-white">
            The AI that prevents problems
            <br />
            <span className="text-slate-400">before they happen.</span>
          </h1>
          <p className="text-lg text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
            LifeOS watches over your finances, health, career, and daily
            life — so you can stop catching up and start getting ahead.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
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

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <TiltCard>
            <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-6 sm:p-7 shadow-2xl space-y-5">

              {/* Window Chrome */}
              <div className="flex items-center justify-between pb-4 border-b border-white/8">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <div className="text-xs text-slate-500">LifeOS Dashboard</div>
              </div>

              {/* Alert */}
              <div className="p-4 rounded-xl bg-amber-500/8 border border-amber-500/15 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm">
                  <div className="font-medium text-amber-200">Rent due in 9 days</div>
                  <p className="text-slate-400 text-xs">
                    Your projected balance drops below your rent amount on the 15th.
                  </p>
                </div>
              </div>

              {/* Forecast + Suggestions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 text-sm">
                  <div className="text-slate-500 text-xs font-medium">Upcoming</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" /> Paycheck
                      </span>
                      <span className="font-mono text-emerald-400 text-xs">+$820</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <ArrowDownRight className="w-3.5 h-3.5" /> Utilities
                      </span>
                      <span className="font-mono text-slate-400 text-xs">−$145</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <ArrowDownRight className="w-3.5 h-3.5" /> Rent
                      </span>
                      <span className="font-mono text-slate-400 text-xs">−$1,400</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-slate-500 text-xs">Balance after</span>
                    <span className={`font-mono text-xs font-semibold ${aiOptimized ? "text-emerald-400" : "text-amber-400"}`}>
                      {aiOptimized ? "+$317" : "+$96"}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 text-sm">
                  <div className="text-slate-500 text-xs font-medium">Suggestions</div>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-slate-300 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Pause unused Hulu subscription
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Move $75 from savings as buffer
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Delay Amazon order until the 18th
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="flex items-center justify-between text-xs pt-2">
                <span className="text-slate-500">
                  {aiOptimized ? "✓ Buffer applied. Rent is covered." : "Rent is covered, but tight."}
                </span>
                <button
                  onClick={() => setAiOptimized(!aiOptimized)}
                  className="btn-matte-secondary px-3 py-1.5 rounded-lg text-xs"
                >
                  {aiOptimized ? "Reset" : "Apply suggestions"}
                </button>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
