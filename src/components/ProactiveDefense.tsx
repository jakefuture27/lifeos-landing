"use client";

import { motion } from "framer-motion";
import { CreditCard, HeartPulse, Sparkles, Calendar, ArrowRight } from "lucide-react";
import TiltCard from "./TiltCard";

export default function ProactiveDefense() {
  const cards = [
    {
      id: "bills",
      title: "Missed Bills",
      quote: "Know before you're short.",
      description:
        "LifeOS analyzes incoming cashflow against upcoming auto-debits 30 days ahead, alerting you to potential shortfalls before overdraft fees occur.",
      icon: CreditCard,
    },
    {
      id: "health",
      title: "Health",
      quote: "Notice patterns before they become problems.",
      description:
        "By correlating wearable sleep metrics, activity levels, and stress markers, LifeOS catches burnout and immune dips before you get sick.",
      icon: HeartPulse,
    },
    {
      id: "subscriptions",
      title: "Subscriptions",
      quote: "Stop wasting money automatically.",
      description:
        "Detects hidden price increases, unused trials, and duplicate streaming services, canceling or negotiating them with one click.",
      icon: Sparkles,
    },
    {
      id: "organization",
      title: "Daily Organization",
      quote: "Your AI keeps life running.",
      description:
        "From passport renewals to car maintenance schedules and tax document deadlines, LifeOS schedules work so you never miss a life beat.",
      icon: Calendar,
    },
  ];

  return (
    <section id="defense" className="py-24 relative bg-[#06070C] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Problems shouldn't surprise you.
          </h2>

          <p className="text-slate-400 text-base">
            Traditional tools respond after you ask. LifeOS runs quietly in the background, neutralizing friction before it impacts your life.
          </p>
        </div>

        {/* 4 Minimal Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <TiltCard className="h-full">
                  <div className="group p-8 rounded-2xl bg-[#0C0F17] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                        <p className="text-sm font-medium text-[#7C9EFF]">
                          "{card.quote}"
                        </p>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                      <span>Explore capability</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
