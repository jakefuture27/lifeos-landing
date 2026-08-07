"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenWaitlist: () => void;
}

export default function FinalCTA({ onOpenWaitlist }: FinalCTAProps) {
  return (
    <section className="py-32 bg-[#06070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            <span className="text-white">Stop reacting.</span>
            <br />
            <span className="text-slate-500">Start preventing.</span>
          </h2>

          <div className="mt-10">
            <button
              onClick={onOpenWaitlist}
              className="btn-matte-primary px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2"
            >
              Join the Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
