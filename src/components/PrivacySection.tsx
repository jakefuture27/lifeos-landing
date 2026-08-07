"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Key, EyeOff, UserCheck } from "lucide-react";

export default function PrivacySection() {
  const securityPillars = [
    {
      icon: Lock,
      title: "Bank-grade encryption",
      desc: "AES-256 encryption at rest and TLS 1.3 in transit.",
    },
    {
      icon: Key,
      title: "User owns all data",
      desc: "Your data is never sold, shared, or trained on public models.",
    },
    {
      icon: Shield,
      title: "End-to-end security",
      desc: "Hardware-isolated memory enclaves protect your telemetry.",
    },
    {
      icon: UserCheck,
      title: "Nothing happens without approval",
      desc: "LifeOS prepares actions, but you retain final sign-off.",
    },
    {
      icon: EyeOff,
      title: "Privacy-first AI",
      desc: "On-device processing & zero-retention anonymized queries.",
    },
  ];

  return (
    <section id="privacy" className="py-24 relative bg-[#06070C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built on Privacy.
          </h2>

          <p className="text-slate-400 text-base">
            An operating system for your life requires complete, absolute trust.
          </p>
        </div>

        {/* Minimal Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-6 rounded-2xl bg-[#0C0F17] border border-white/10 space-y-3"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
