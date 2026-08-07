"use client";

import { motion } from "framer-motion";

const items = [
  "Missed bill payments",
  "Wasted subscriptions",
  "Health pattern changes",
  "Expired documents",
];

export default function ProactiveDefense() {
  return (
    <section
      id="defense"
      className="py-28 relative bg-[#06070B] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — headline & description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Problems shouldn&apos;t
              <br />
              surprise you.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Most tools wait for you to notice something&apos;s wrong. LifeOS
              catches it first — quietly, in the background — so you can deal
              with it on your terms.
            </p>
          </motion.div>

          {/* Right — numbered list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-0"
          >
            {items.map((item, i) => (
              <div
                key={item}
                className="flex items-baseline gap-5 py-5 border-b border-white/[0.06] first:border-t first:border-white/[0.06]"
              >
                <span className="text-sm text-slate-500 font-mono tabular-nums w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-slate-200 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
