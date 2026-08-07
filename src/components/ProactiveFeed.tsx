"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ProactiveFeed() {
  const initialNotifications = [
    {
      id: "1",
      category: "Finance",
      text: "You're projected to miss rent next week.",
      actionLabel: "Rebalance",
      resolved: false,
    },
    {
      id: "2",
      category: "Subscriptions",
      text: "Found $46/month in subscriptions you don't use.",
      actionLabel: "Cancel & save",
      resolved: false,
    },
    {
      id: "3",
      category: "Health",
      text: "Your sleep quality dropped 18% this week.",
      actionLabel: "See details",
      resolved: false,
    },
    {
      id: "4",
      category: "Travel",
      text: "Passport expires in 5 months — renew now to avoid delays.",
      actionLabel: "Start renewal",
      resolved: false,
    },
    {
      id: "5",
      category: "Home",
      text: "Your car insurance is $340 more than comparable plans.",
      actionLabel: "Compare",
      resolved: false,
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const handleResolve = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, resolved: true } : item))
    );
  };

  return (
    <section id="live-feed" className="py-28 relative bg-[#06070B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            It tells you before you ask.
          </h2>
          <p className="text-slate-400 text-base">
            LifeOS surfaces what matters — and lets you handle it in one tap.
          </p>
        </div>

        {/* Notification Stack */}
        <div className="max-w-2xl mx-auto space-y-2">
          {notifications.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`px-5 py-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                item.resolved
                  ? "bg-[#0D1017] border-emerald-500/20 opacity-60"
                  : "bg-[#0D1017] border-white/8 hover:border-white/15"
              }`}
            >
              <div className="min-w-0">
                <span className="text-[11px] text-slate-500 block mb-0.5">{item.category}</span>
                <p className="text-sm text-slate-200 truncate">{item.text}</p>
              </div>

              <div className="shrink-0">
                {!item.resolved ? (
                  <button
                    onClick={() => handleResolve(item.id)}
                    className="btn-matte-secondary px-3 py-1.5 rounded-lg text-xs"
                  >
                    {item.actionLabel}
                  </button>
                ) : (
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Done
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
