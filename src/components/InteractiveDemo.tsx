"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function InteractiveDemo() {
  const presetQueries = [
    {
      query: "Can I afford a vacation next month?",
      intro: "Based on your projected income, upcoming bills, and savings goals:",
      verdict: "Yes.",
      budgetLabel: "Recommended budget:",
      budgetVal: "$850",
      points: [
        "Your rent and bills remain fully covered.",
        "Savings goal remains on track.",
      ],
      confidence: "94%",
    },
    {
      query: "Can I switch jobs right now?",
      intro: "Based on your current liquid runway and bonus vesting timeline:",
      verdict: "Recommended in 45 Days.",
      budgetLabel: "Target Cash Buffer:",
      budgetVal: "$14,200",
      points: [
        "Waiting until Oct 1st secures your $6,500 bonus payout.",
        "Severance buffer is fully intact.",
      ],
      confidence: "98%",
    },
    {
      query: "Am I overspending on dining out?",
      intro: "Based on your last 60 days of transaction data & target budget:",
      verdict: "Yes (+28% vs Target).",
      budgetLabel: "Suggested Adjustment:",
      budgetVal: "-$240/mo",
      points: [
        "Weekday lunch delivery accounts for majority of excess.",
        "Redirecting to savings yields +$2,880 yearly.",
      ],
      confidence: "91%",
    },
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const current = presetQueries[selectedIdx];

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
    setIsTyping(true);
    setTypedText("");

    const full = presetQueries[idx].query;
    let i = 0;
    const timer = setInterval(() => {
      if (i < full.length) {
        setTypedText(full.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 20);
  };

  useEffect(() => {
    handleSelect(0);
  }, []);

  return (
    <section id="demo" className="py-24 relative bg-[#06070B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ask Anything. LifeOS Knows Your Full Context.
          </h2>

          <p className="text-slate-400 text-base">
            Select a sample query to see how LifeOS calculates complex life decisions.
          </p>
        </div>

        {/* Solid Query Option Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {presetQueries.map((q, idx) => (
            <button
              key={q.query}
              onClick={() => handleSelect(idx)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedIdx === idx
                  ? "btn-matte-primary"
                  : "btn-matte-secondary"
              }`}
            >
              "{q.query}"
            </button>
          ))}
        </div>

        {/* Demo Box */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-[#0D1017] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
          
          {/* Prompt Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              readOnly
              value={typedText}
              placeholder="Ask LifeOS..."
              className="w-full pl-4 pr-10 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm font-mono text-white placeholder-slate-500 focus:outline-none"
            />
            <Send className="w-4 h-4 text-slate-400 absolute right-3" />
          </div>

          {/* Response Box */}
          {isTyping ? (
            <div className="text-xs font-mono text-slate-500 py-6 text-center">
              Calculating context parameters...
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5 text-sm"
              >
                <p className="text-slate-400 font-mono text-xs leading-relaxed">
                  {current.intro}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Verdict</div>
                    <div className="text-2xl font-bold text-white mt-0.5">{current.verdict}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-mono">{current.budgetLabel}</div>
                    <div className="text-xl font-mono font-semibold text-[#7C9EFF] mt-0.5">
                      {current.budgetVal}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {current.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Confidence Score:</span>
                  <span className="text-emerald-400 font-semibold">{current.confidence}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          )}

        </div>

      </div>
    </section>
  );
}
