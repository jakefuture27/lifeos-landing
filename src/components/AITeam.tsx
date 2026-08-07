"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  HeartPulse,
  Briefcase,
  Home,
  Landmark,
  Plane,
  Check,
} from "lucide-react";

export default function AITeam() {
  const agents = [
    {
      id: "finance",
      name: "Finance Agent",
      role: "Cash Flow & Expense Radar",
      icon: Wallet,
      bullets: [
        "Predicts future cash flow",
        "Detects risky spending",
        "Prevents missed payments",
        "Finds savings",
      ],
    },
    {
      id: "health",
      name: "Health Agent",
      role: "Biometric & Habit Tracker",
      icon: HeartPulse,
      bullets: [
        "Connects wearables",
        "Tracks sleep",
        "Detects concerning trends",
        "Encourages healthy habits",
      ],
    },
    {
      id: "career",
      name: "Career Agent",
      role: "Growth & Salary Advisor",
      icon: Briefcase,
      bullets: [
        "Tracks goals",
        "Finds opportunities",
        "Prepares resumes",
        "Negotiates salaries",
      ],
    },
    {
      id: "home",
      name: "Home Agent",
      role: "Property & Asset Guard",
      icon: Home,
      bullets: [
        "Tracks warranties",
        "Maintenance",
        "Utilities",
        "Recurring expenses",
      ],
    },
    {
      id: "government",
      name: "Government Agent",
      role: "Forms & Compliance Pilot",
      icon: Landmark,
      bullets: [
        "Taxes",
        "Forms",
        "Benefits",
        "Renewals",
      ],
    },
    {
      id: "travel",
      name: "Travel Agent",
      role: "Flight & Visa Assistant",
      icon: Plane,
      bullets: [
        "Passport reminders",
        "Flight tracking",
        "Visa requirements",
        "Trip planning",
      ],
    },
  ];

  return (
    <section id="ai-team" className="py-24 relative bg-[#06070C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Your AI Team.
          </h2>

          <p className="text-slate-400 text-base">
            Six specialized AI agents working synchronously under one unified operating system.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-7 rounded-2xl bg-[#0C0F17] border border-white/10 hover:border-white/20 transition-all space-y-5"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4F7FFF]">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{agent.role}</p>
                </div>

                <ul className="space-y-2 pt-3 border-t border-white/5">
                  {agent.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#4F7FFF] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
