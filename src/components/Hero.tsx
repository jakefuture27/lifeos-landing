"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Play,
} from "lucide-react";
import TiltCard from "./TiltCard";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  const [aiOptimized, setAiOptimized] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#06070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
                Meet LifeOS. <br />
                <span className="text-slate-300 font-normal">
                  The AI that prevents problems before they happen.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-xl">
                LifeOS quietly watches over your finances, health, schedule, subscriptions, and daily life—helping you stay ahead instead of catching up.
              </p>
            </div>

            {/* Solid Matte CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
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
                <Play className="w-3.5 h-3.5 text-slate-300 fill-slate-300" />
                <span>Watch Demo</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Native UI Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Dashboard Container */}
            <TiltCard>
              <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-6 sm:p-7 shadow-2xl space-y-6">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono">Overview</div>
                </div>

                {/* Alert Card */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <div className="font-semibold text-amber-200">⚠ Rent Due in 9 Days</div>
                    <p className="text-slate-300">
                      Forecast shows projected cash dip on the 15th unless automated buffer is enabled.
                    </p>
                  </div>
                </div>

                {/* Grid: Forecast & Suggestions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Forecast */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 text-xs">
                    <div className="text-slate-400 font-medium">Forecast</div>
                    <div className="space-y-2 font-mono">
                      <div className="flex items-center justify-between text-emerald-400">
                        <span className="flex items-center gap-1">
                          <ArrowUpRight className="w-3.5 h-3.5" /> Paycheck
                        </span>
                        <span className="font-semibold">+$820</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1">
                          <ArrowDownRight className="w-3.5 h-3.5" /> Utilities
                        </span>
                        <span>-$145</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1">
                          <ArrowDownRight className="w-3.5 h-3.5" /> Rent
                        </span>
                        <span>-$1,400</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono">
                      <span className="text-slate-400">Projected Balance:</span>
                      <span className={`font-bold ${aiOptimized ? "text-emerald-400" : "text-amber-400"}`}>
                        {aiOptimized ? "+$317" : "+$96"}
                      </span>
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 text-xs">
                    <div className="text-slate-400 font-medium">Suggestions</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Pause unused subscription</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Transfer $75 from Savings</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Delay non-essential purchase</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Status Footer */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="text-slate-300">
                      <span className="text-slate-400">Status: </span>
                      <span className="font-semibold text-white">
                        {aiOptimized ? "Rent secured & buffer applied." : "Rent secured."}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setAiOptimized(!aiOptimized)}
                    className="btn-matte-secondary px-3 py-1.5 rounded-lg text-xs shrink-0"
                  >
                    {aiOptimized ? "Reset" : "Simulate Autopilot"}
                  </button>
                </div>

              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
