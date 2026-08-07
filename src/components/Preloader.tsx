"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DollarSign,
  HeartPulse,
  Briefcase,
  Home,
  Landmark,
  Plane,
  Sparkles,
} from "lucide-react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const domainSteps = [
    {
      label: "FINANCE AI: CASHFLOW RADAR",
      icon: DollarSign,
      color: "text-emerald-400 border-emerald-500/30",
    },
    {
      label: "HEALTH & FITNESS AI: BIOMETRIC RECOVERY",
      icon: HeartPulse,
      color: "text-rose-400 border-rose-500/30",
    },
    {
      label: "CAREER AI: SALARY & OPPORTUNITY ADVISOR",
      icon: Briefcase,
      color: "text-purple-400 border-purple-500/30",
    },
    {
      label: "HOME AI: ASSET & WARRANTY GUARD",
      icon: Home,
      color: "text-amber-400 border-amber-500/30",
    },
    {
      label: "GOVERNMENT AI: COMPLIANCE & TAX PILOT",
      icon: Landmark,
      color: "text-[#7C9EFF] border-[#4F7FFF]/30",
    },
    {
      label: "TRAVEL AI: FLIGHT & PASSPORT LOGISTICS",
      icon: Plane,
      color: "text-cyan-400 border-cyan-500/30",
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
    }, 28); // ~2.8s total cinematic domain tour

    return () => clearInterval(interval);
  }, [onComplete]);

  const currentDomain = domainSteps[activeStep];
  const CurrentIcon = currentDomain.icon;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#040509] flex flex-col justify-between p-8 sm:p-14 select-none overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
            <span className="font-bold text-white tracking-tight text-sm">LifeOS</span>
            <span className="text-slate-500 font-mono">[ {activeStep + 1} / {domainSteps.length} ]</span>
          </div>

          {/* Center 3D Gyroscope & Morphing Domain Icon */}
          <div className="max-w-4xl mx-auto w-full space-y-10 text-center my-auto relative z-10">
            
            {/* 3D Gyroscope Sphere with Morphing Icon */}
            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
              
              {/* Ring 1: Outer Primary Tilt */}
              <motion.div
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              />

              {/* Ring 2: Reverse Gyroscope Axis */}
              <motion.div
                animate={{
                  rotateX: [60, -300],
                  rotateZ: [0, 360],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-[#4F7FFF]/40 border-dashed"
              />

              {/* Ring 3: Counter Rotator */}
              <motion.div
                animate={{
                  rotateY: [360, 0],
                  rotateZ: [45, -315],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute inset-7 rounded-full border border-white/10"
              />

              {/* Center Morphing Domain Icon */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotate: 20 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 rounded-2xl bg-[#0D1017] border flex items-center justify-center shadow-xl ${currentDomain.color}`}
                >
                  <CurrentIcon className="w-7 h-7" />
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Counter & Domain Label Display */}
            <div className="space-y-3">
              <motion.div
                key={progress}
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }}
                className="text-6xl sm:text-8xl font-bold tracking-tighter font-mono text-white"
              >
                {progress.toString().padStart(3, "0")}
                <span className="text-xl sm:text-3xl text-slate-500 font-light ml-1">%</span>
              </motion.div>

              {/* Active Domain Label */}
              <div className="h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDomain.label}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs font-mono tracking-[0.2em] text-slate-300 uppercase"
                  >
                    {currentDomain.label}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Minimal Progress Track Line */}
            <div className="w-full max-w-xs mx-auto h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>

          {/* Bottom Footer Info */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 relative z-10">
            <span>PRIVACY VAULT</span>
            <span>LIFEOS TECHNOLOGIES</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
