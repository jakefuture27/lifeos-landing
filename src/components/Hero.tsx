"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, Copy } from "lucide-react";

const CONTRACT_ADDRESS = "2fZ8n8VCimt5rgRuLbkqdeGMet9Be9PwbzkNDxaJLife";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyContractAddress = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

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

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
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

          <div className="flex justify-center pt-2">
            <div className="flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 py-2 pl-4 pr-2">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                CA
              </span>
              <code className="min-w-0 truncate font-mono text-xs text-slate-300 sm:text-sm">
                {CONTRACT_ADDRESS}
              </code>
              <button
                type="button"
                onClick={copyContractAddress}
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={copied ? "Contract address copied" : "Copy contract address"}
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Contract address copied to clipboard" : ""}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
