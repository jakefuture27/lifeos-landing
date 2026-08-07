"use client";

import { motion } from "framer-motion";

const statements = [
  "End-to-end encrypted",
  "Never sold or shared",
  "You approve every action",
  "On-device processing",
];

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      className="py-28 relative bg-[#06070B] border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
        >
          Your data stays yours.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-lg mt-5 max-w-md mx-auto"
        >
          Privacy isn&apos;t a feature we bolt on. It&apos;s the foundation everything else is built on.
        </motion.p>

        {/* Statements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-center"
        >
          {statements.map((statement, i) => (
            <div
              key={statement}
              className={`py-5 w-full max-w-sm ${
                i !== statements.length - 1
                  ? "border-b border-white/[0.06]"
                  : ""
              }`}
            >
              <span className="text-white text-lg font-medium tracking-tight">
                {statement}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
