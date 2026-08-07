"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Roadmap() {
  const stages = [
    {
      year: "2026",
      title: "Finance AI Core",
      status: "Active",
      description: "Cash flow forecasting, bill prediction & subscription intelligence.",
      bullets: [
        "Cash flow forecasting",
        "Bill prediction",
        "Subscription intelligence",
      ],
    },
    {
      year: "Future",
      title: "Health, Career & Home AI",
      status: "In Development",
      description: "Biometric integration, career equity & home asset management.",
      bullets: [
        "Health AI & Wearable Sync",
        "Career AI & Opportunity Scouter",
        "Home AI & Maintenance Guard",
        "Government AI & Form Automation",
        "Travel AI & Visa Reminders",
      ],
    },
    {
      year: "Horizon",
      title: "LifeOS",
      status: "Vision Architecture",
      description: "The complete AI Operating System.",
      bullets: [
        "Unified cross-domain intelligence graph",
        "Proactive zero-latency life protection",
        "100% private local enclave execution",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 relative bg-[#06070C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The Evolution of LifeOS.
          </h2>

          <p className="text-slate-400 text-base">
            From specialized financial intelligence to the complete AI Operating System.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-3xl mx-auto space-y-6">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#0C0F17] border border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-2 md:max-w-xs">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#7C9EFF]">{stage.year}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {stage.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{stage.description}</p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                {stage.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4F7FFF] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
