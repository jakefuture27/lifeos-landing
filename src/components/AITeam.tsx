"use client";

import { motion } from "framer-motion";

const agents = [
  {
    name: "Finance",
    line: "Watches your cash flow, catches billing errors, and keeps subscriptions in check.",
  },
  {
    name: "Health",
    line: "Connects to your wearables and flags sleep, activity, or stress changes early.",
  },
  {
    name: "Career",
    line: "Tracks your goals, surfaces relevant opportunities, and prepares you for reviews.",
  },
  {
    name: "Home",
    line: "Remembers warranties, maintenance schedules, and when your lease terms matter.",
  },
  {
    name: "Government",
    line: "Handles tax deadlines, benefit renewals, and the forms you keep putting off.",
  },
  {
    name: "Travel",
    line: "Monitors passport expiry, visa rules, and flight changes so you don't have to.",
  },
];

export default function AITeam() {
  return (
    <section
      id="ai-team"
      className="py-28 relative bg-[#06070B] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            One system. Six specialists.
          </h2>
          <p className="text-slate-400 text-lg mt-4">
            Each agent handles a different part of your life. They share context, so you don&apos;t repeat yourself.
          </p>
        </motion.div>

        {/* 3-column grid — clean typography only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="border-l border-white/[0.08] pl-6"
            >
              <h3 className="text-white font-semibold text-base mb-2">
                {agent.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {agent.line}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
