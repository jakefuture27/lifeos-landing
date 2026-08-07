"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  DollarSign,
  Moon,
  FileCheck,
  ShieldCheck,
  MailWarning,
  Check,
} from "lucide-react";

export default function ProactiveFeed() {
  const initialNotifications = [
    {
      id: "1",
      icon: AlertTriangle,
      category: "Finance",
      time: "2m ago",
      text: "You're projected to miss rent next week.",
      actionLabel: "Rebalance",
      resolved: false,
    },
    {
      id: "2",
      icon: DollarSign,
      category: "Subscriptions",
      time: "14m ago",
      text: "I found $46/month in subscriptions you never use.",
      actionLabel: "Cancel & Save",
      resolved: false,
    },
    {
      id: "3",
      icon: Moon,
      category: "Health",
      time: "1h ago",
      text: "Your sleep has dropped 18%.",
      actionLabel: "Adjust Calendar",
      resolved: false,
    },
    {
      id: "4",
      icon: FileCheck,
      category: "Travel",
      time: "3h ago",
      text: "Your passport expires in 5 months.",
      actionLabel: "Renew Form",
      resolved: false,
    },
    {
      id: "5",
      icon: ShieldCheck,
      category: "Home & Auto",
      time: "5h ago",
      text: "You're paying more than similar users for insurance.",
      actionLabel: "Compare Rate",
      resolved: false,
    },
    {
      id: "6",
      icon: MailWarning,
      category: "Security",
      time: "6h ago",
      text: "This email looks like a scam.",
      actionLabel: "Block & Secure",
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
    <section id="live-feed" className="py-24 relative bg-[#06070B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            LifeOS doesn't wait for you to ask.
          </h2>

          <p className="text-slate-400 text-base">
            Proactive intelligence delivered before friction occurs.
          </p>
        </div>

        {/* Solid Notification Stack */}
        <div className="max-w-3xl mx-auto space-y-3">
          {notifications.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`p-4 rounded-xl bg-[#0D1017] border transition-all flex items-center justify-between gap-4 ${
                  item.resolved
                    ? "border-emerald-500/30 opacity-70"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#4F7FFF] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span>{item.time}</span>
                    </div>
                    <p className="text-sm font-medium text-white truncate">{item.text}</p>
                  </div>
                </div>

                <div className="shrink-0">
                  {!item.resolved ? (
                    <button
                      onClick={() => handleResolve(item.id)}
                      className="btn-matte-secondary px-3.5 py-1.5 rounded-lg text-xs font-semibold"
                    >
                      {item.actionLabel}
                    </button>
                  ) : (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Handled
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
