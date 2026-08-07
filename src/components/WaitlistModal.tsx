"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Copy, Check, Sparkles, Share2 } from "lucide-react";
import confetti from "canvas-confetti";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [queuePosition, setQueuePosition] = useState<number>(1420);
  const [copied, setCopied] = useState(false);
  const [boosted, setBoosted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFFFFF", "#7C9EFF", "#4F7FFF"],
    });

    setQueuePosition(1420);
    setSubmitted(true);
  };

  const handleSimulateBoost = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#10B981", "#00F0FF", "#FFFFFF"],
    });

    setQueuePosition(112);
    setBoosted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://lifeos.ai/join?ref=early_access");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setBoosted(false);
    setEmail("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#040711]/80 backdrop-blur-xl"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg p-7 sm:p-8 rounded-3xl bg-[#0D1017] border border-white/15 shadow-2xl overflow-hidden z-10 space-y-6"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Join the LifeOS Waitlist</h3>
                  <p className="text-xs text-slate-400 mt-1">Early access batch opening Q3 2026</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Be among the first to experience zero-latency proactive life intelligence. Early members receive priority agent dispatching and zero setup fees.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Work or Personal Email
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-matte-primary w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    <span>Reserve Priority Spot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono pt-2 border-t border-white/5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero-spam guarantee. Instant 1-click unsubscribe.</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-4 space-y-5">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white">You're on the list!</h3>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    We've assigned your priority queue position for early OS onboarding.
                  </p>
                </div>

                {/* Queue Position Box */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-center relative overflow-hidden">
                  <div className="text-xs text-slate-400 uppercase">Waitlist Position</div>
                  <motion.div
                    key={queuePosition}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-3xl font-extrabold text-[#7C9EFF] mt-1"
                  >
                    #{queuePosition}
                  </motion.div>
                  {boosted && (
                    <span className="text-[10px] text-emerald-400 font-semibold block mt-1">
                      ⚡ Jumped 1,308 spots via referral boost!
                    </span>
                  )}
                </div>

                {/* Interactive Referral Link Box */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Share2 className="w-3.5 h-3.5 text-[#4F7FFF]" />
                      Your Priority Referral Link
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">+500 Rank per invite</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value="https://lifeos.ai/join?ref=early_access"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 focus:outline-none"
                    />
                    <button
                      onClick={handleCopyLink}
                      className="btn-matte-secondary px-3 py-2 rounded-lg text-xs font-semibold shrink-0 flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>

                  {!boosted && (
                    <button
                      onClick={handleSimulateBoost}
                      className="w-full py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Simulate 3 Referral Shares</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={handleReset}
                  className="btn-matte-secondary w-full py-3 rounded-xl font-semibold text-xs"
                >
                  Close Confirmation
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
