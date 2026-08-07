"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

export default function InteractiveDemo() {
  const queries = [
    {
      question: "Can I afford a vacation next month?",
      answer: "Yes — you have $850 of flexible spending after all bills and savings contributions are covered.",
    },
    {
      question: "Should I switch jobs right now?",
      answer: "Not yet. Waiting 45 days secures your $6,500 bonus. After that, your runway covers 4 months comfortably.",
    },
    {
      question: "Am I overspending on food?",
      answer: "You're 28% over your target. Weekday lunch delivery is the biggest factor — cutting it saves $2,880/year.",
    },
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
    setShowAnswer(false);
    setTypedText("");

    const full = queries[idx].question;
    let i = 0;
    const timer = setInterval(() => {
      if (i < full.length) {
        setTypedText(full.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowAnswer(true), 300);
      }
    }, 25);
  };

  useEffect(() => {
    handleSelect(0);
  }, []);

  return (
    <section id="demo" className="py-28 relative bg-[#06070B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ask anything about your life.
          </h2>
          <p className="text-slate-400 text-base">
            LifeOS connects the dots across your finances, schedule, and goals to answer complex questions instantly.
          </p>
        </div>

        {/* Query Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {queries.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedIdx === idx
                  ? "bg-white text-black"
                  : "bg-white/5 text-slate-400 border border-white/10 hover:text-white"
              }`}
            >
              {q.question}
            </button>
          ))}
        </div>

        {/* Demo Console */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-[#0D1017] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">

          {/* Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              readOnly
              value={typedText}
              placeholder="Ask LifeOS..."
              className="w-full pl-4 pr-10 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none"
            />
            <Send className="w-4 h-4 text-slate-500 absolute right-3.5" />
          </div>

          {/* Response */}
          <div className="min-h-[80px] flex items-start">
            <AnimatePresence mode="wait">
              {showAnswer ? (
                <motion.p
                  key={`answer-${selectedIdx}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-slate-300 leading-relaxed"
                >
                  {queries[selectedIdx].answer}
                </motion.p>
              ) : (
                <motion.p
                  key="thinking"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-slate-600"
                >
                  Thinking...
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
