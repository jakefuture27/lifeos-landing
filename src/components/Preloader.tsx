"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const domainSteps = [
    {
      domain: "FINANCE AI",
      title: "CASHFLOW RADAR & ASSET PROTECTION",
      accent: "#10B981", // Emerald
      meshGradient: "from-emerald-400 to-teal-600",
      shape: "coin",
    },
    {
      domain: "HEALTH AI",
      title: "BIOMETRIC RECOVERY & SLEEP TELEMETRY",
      accent: "#F43F5E", // Rose
      meshGradient: "from-rose-400 to-pink-600",
      shape: "pulse",
    },
    {
      domain: "CAREER AI",
      title: "SALARY NEGOTIATION & EQUITY STRATEGY",
      accent: "#A855F7", // Purple
      meshGradient: "from-purple-400 to-indigo-600",
      shape: "diamond",
    },
    {
      domain: "HOME AI",
      title: "PROPERTY MAINTENANCE & WARRANTY GUARD",
      accent: "#F59E0B", // Amber
      meshGradient: "from-amber-400 to-orange-600",
      shape: "cube",
    },
    {
      domain: "GOVERNMENT AI",
      title: "AUTOMATED TAX FILING & LEGAL PERMITS",
      accent: "#4F7FFF", // Sapphire
      meshGradient: "from-blue-400 to-[#4F7FFF]",
      shape: "shield",
    },
    {
      domain: "TRAVEL AI",
      title: "FLIGHT RADAR & PASSPORT LOGISTICS",
      accent: "#00F0FF", // Cyan
      meshGradient: "from-cyan-400 to-blue-500",
      shape: "orbit",
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
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  const currentDomain = domainSteps[activeStep];

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#040509] flex flex-col justify-between p-8 sm:p-14 select-none overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
            <span className="font-bold text-white tracking-tight text-sm">LifeOS</span>
            <span className="text-slate-500 font-mono">[ 0{activeStep + 1} / 0{domainSteps.length} ]</span>
          </div>

          {/* Center True 3D Spatial Geometry Stage */}
          <div className="max-w-4xl mx-auto w-full space-y-12 text-center my-auto relative z-10">
            
            {/* 3D Perspective Stage Container */}
            <div className="relative w-56 h-56 mx-auto flex items-center justify-center [perspective:1200px]">
              
              {/* 3D Outer Spatial Gyroscope Ring 1 */}
              <motion.div
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                  rotateZ: [0, 180],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute inset-0 rounded-full border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
              />

              {/* 3D Outer Spatial Gyroscope Ring 2 */}
              <motion.div
                animate={{
                  rotateX: [60, -300],
                  rotateY: [360, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute inset-4 rounded-full border border-[#4F7FFF]/30 border-dashed"
              />

              {/* Center Morphing 3D Isometric Element */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ rotateY: -90, scale: 0.4, opacity: 0, z: -100 }}
                  animate={{ rotateY: 0, scale: 1, opacity: 1, z: 0 }}
                  exit={{ rotateY: 90, scale: 0.4, opacity: 0, z: 100 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-24 h-24 flex items-center justify-center"
                >
                  {/* Dynamic 3D Geometric Shape Rendering */}
                  {currentDomain.shape === "coin" && (
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-300 border-2 border-emerald-200 shadow-[0_0_35px_rgba(16,185,129,0.5)] flex items-center justify-center font-bold font-mono text-xl text-black"
                    >
                      $
                    </motion.div>
                  )}

                  {currentDomain.shape === "pulse" && (
                    <motion.div
                      animate={{ scale: [1, 1.25, 1], rotateZ: [0, 180, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-300 border-2 border-rose-200 shadow-[0_0_35px_rgba(244,63,94,0.5)] flex items-center justify-center"
                    >
                      <div className="w-6 h-6 rounded-full bg-white animate-ping" />
                    </motion.div>
                  )}

                  {currentDomain.shape === "diamond" && (
                    <motion.div
                      animate={{ rotateX: [0, 360], rotateZ: [45, 405] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-14 h-14 bg-gradient-to-tr from-purple-500 to-indigo-300 border-2 border-purple-200 shadow-[0_0_35px_rgba(168,85,247,0.5)] transform rotate-45"
                    />
                  )}

                  {currentDomain.shape === "cube" && (
                    <motion.div
                      animate={{ rotateX: [20, 380], rotateY: [20, 380] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-16 h-16 bg-gradient-to-tr from-amber-500 to-orange-300 border-2 border-amber-200 shadow-[0_0_35px_rgba(245,158,11,0.5)] rounded-xl"
                    />
                  )}

                  {currentDomain.shape === "shield" && (
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-16 h-20 bg-gradient-to-tr from-blue-600 to-[#4F7FFF] border-2 border-blue-200 shadow-[0_0_35px_rgba(79,127,255,0.5)] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center"
                    />
                  )}

                  {currentDomain.shape === "orbit" && (
                    <motion.div
                      animate={{ rotateZ: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="relative w-20 h-20 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-cyan-400 border-dashed shadow-[0_0_35px_rgba(0,240,255,0.5)]" />
                      <div className="absolute w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_15px_#00F0FF] -top-2" />
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* 3D Dynamic Floor Lighting Reflection */}
              <div
                className="absolute -bottom-6 w-32 h-4 rounded-full blur-md opacity-40 transition-colors duration-500"
                style={{ backgroundColor: currentDomain.accent }}
              />

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
                <span className="text-xl sm:text-3xl font-light ml-1 text-slate-500">%</span>
              </motion.div>

              {/* Active 3D Domain Badge & Title */}
              <div className="space-y-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDomain.domain}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs font-mono font-bold tracking-[0.25em] uppercase"
                    style={{ color: currentDomain.accent }}
                  >
                    {currentDomain.domain}
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDomain.title}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    className="text-[11px] font-mono tracking-widest text-slate-400 uppercase"
                  >
                    {currentDomain.title}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Minimal Progress Track Line */}
            <div className="w-full max-w-xs mx-auto h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="h-full transition-all duration-300"
                style={{ width: `${progress}%`, backgroundColor: currentDomain.accent }}
              />
            </div>

          </div>

          {/* Bottom Footer Info */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 relative z-10">
            <span>3D SPATIAL TELEMETRY</span>
            <span>LIFEOS TECHNOLOGIES</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
