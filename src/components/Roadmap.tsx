"use client";

import { motion } from "framer-motion";

const phases = [
  {
    label: "Now",
    title: "Finance intelligence",
    description: "Cash flow, bills, and subscriptions — managed before they become problems.",
  },
  {
    label: "Next",
    title: "Health, career & home",
    description: "The same approach, applied to the rest of your life.",
  },
  {
    label: "Vision",
    title: "The complete OS for life",
    description: "One system that understands everything and connects the dots for you.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#06070B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-16"
        >
          Where we're headed.
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-12">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-8"
              >
                {/* Dot */}
                <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-white/20 bg-[#06070B]">
                  {idx === 0 && (
                    <div className="absolute inset-[3px] rounded-full bg-white" />
                  )}
                </div>

                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {phase.label}
                </span>
                <h3 className="text-lg font-semibold text-white mt-1">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1 max-w-md">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
