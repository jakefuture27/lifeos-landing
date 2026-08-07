"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  HeartPulse,
  Briefcase,
  Home,
  Landmark,
  Plane,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const domainSteps = [
    {
      id: "finance",
      domain: "FINANCE AGENT",
      subtitle: "Predictive Cash Flow & Overdraft Prevention",
      metric: "+$820 Projected Buffer",
      icon: Wallet,
      badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      glowColor: "rgba(16, 185, 129, 0.2)",
    },
    {
      id: "health",
      domain: "HEALTH AGENT",
      subtitle: "Wearable Biometrics & Recovery Radar",
      metric: "92% REM Sleep Recovery",
      icon: HeartPulse,
      badgeBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
      glowColor: "rgba(244, 63, 94, 0.2)",
    },
    {
      id: "career",
      domain: "CAREER AGENT",
      subtitle: "Salary Negotiation & Job Market Scouter",
      metric: "+18% Market Upside",
      icon: Briefcase,
      badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      glowColor: "rgba(168, 85, 247, 0.2)",
    },
    {
      id: "home",
      domain: "HOME AGENT",
      subtitle: "Warranty Tracking & Maintenance Guard",
      metric: "100% Assets Protected",
      icon: Home,
      badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
      glowColor: "rgba(245, 158, 11, 0.2)",
    },
    {
      id: "government",
      domain: "GOVERNMENT AGENT",
      subtitle: "Automated Tax Filing & Legal Permits",
      metric: "Zero Penalty Compliance",
      icon: Landmark,
      badgeBg: "bg-blue-500/10 border-blue-500/30 text-[#7C9EFF]",
      glowColor: "rgba(79, 127, 255, 0.2)",
    },
    {
      id: "travel",
      domain: "TRAVEL AGENT",
      subtitle: "Flight Radar & Passport Expiration Guard",
      metric: "Active Flight Re-booking",
      icon: Plane,
      badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      glowColor: "rgba(0, 240, 255, 0.2)",
    },
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 850);
        }, 500);
      } else {
        const stepIdx = Math.min(
          Math.floor((currentProgress / 100) * domainSteps.length),
          domainSteps.length - 1
        );
        setActiveStep(stepIdx);
      }
      setProgress(currentProgress);
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  const current = domainSteps[activeStep];
  const Icon = current.icon;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, y: -15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#040509] flex flex-col justify-between p-8 sm:p-14 select-none overflow-hidden"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
            <span className="font-bold text-white tracking-tight text-sm">LifeOS</span>
            <span className="text-slate-500 font-mono">[ 0{activeStep + 1} / 0{domainSteps.length} ]</span>
          </div>

          {/* Center Stage: Crystal-Clear Vector Icon & 3D Spatial Gyroscope */}
          <div className="max-w-xl mx-auto w-full space-y-8 text-center my-auto relative z-10">
            
            {/* 3D Gyroscope Outer Rings + Sharp Vector Badge */}
            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
              
              {/* Ring 1 */}
              <motion.div
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/20"
              />

              {/* Ring 2 */}
              <motion.div
                animate={{
                  rotateX: [60, -300],
                  rotateZ: [0, 360],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-white/10 border-dashed"
              />

              {/* Center Crystal-Clear Vector Icon Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ scale: 0.6, opacity: 0, y: 15, rotateX: -30 }}
                  animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ scale: 0.6, opacity: 0, y: -15, rotateX: 30 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-20 h-20 rounded-2xl border flex flex-col items-center justify-center shadow-2xl z-10 ${current.badgeBg}`}
                >
                  <Icon className="w-9 h-9 shrink-0 stroke-[2]" />
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Counter & Domain Telemetry Details */}
            <div className="space-y-4">
              <motion.div
                key={progress}
                initial={{ opacity: 0.95 }}
                animate={{ opacity: 1 }}
                className="text-6xl sm:text-7xl font-bold tracking-tighter font-mono text-white"
              >
                {progress.toString().padStart(3, "0")}
                <span className="text-xl sm:text-2xl font-light ml-1 text-slate-500">%</span>
              </motion.div>

              {/* Animated Domain Header */}
              <div className="space-y-1.5 h-16 flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.domain}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm font-mono font-bold tracking-[0.2em] text-white uppercase"
                  >
                    {current.domain}
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.subtitle}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    className="text-xs font-mono text-slate-400"
                  >
                    {current.subtitle}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Live Metric Chip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.metric}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{current.metric}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sharp Progress Bar Track */}
            <div className="w-full max-w-xs mx-auto h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-white transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>

          {/* Bottom Footer Info */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 relative z-10">
            <span>PRIVACY VAULT ENCLAVE</span>
            <span>LIFEOS TECHNOLOGIES</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
