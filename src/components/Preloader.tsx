"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING CORE KERNEL");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const statusPhrases = [
      "INITIALIZING CORE KERNEL",
      "PREPARING CONTEXT GRAPH",
      "ENCRYPTING TELEMETRY",
      "LIFEOS UNLOCKED",
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setStatusText("LIFEOS UNLOCKED");
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 850);
        }, 500);
      } else {
        const phraseIdx = Math.min(
          Math.floor((currentProgress / 100) * statusPhrases.length),
          statusPhrases.length - 1
        );
        setStatusText(statusPhrases[phraseIdx]);
      }
      setProgress(currentProgress);
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#040509] flex flex-col justify-between p-8 sm:p-14 select-none overflow-hidden"
        >
          {/* Top Bar: Clean Monochrome, No Green Dot */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
            <span className="font-bold text-white tracking-tight text-sm">LifeOS</span>
            <span className="text-slate-500 font-mono">[ 01 / 04 ]</span>
          </div>

          {/* Center Eye-Worthy 3D Gyroscope & Counter */}
          <div className="max-w-4xl mx-auto w-full space-y-10 text-center my-auto relative z-10">
            
            {/* 3D Astrolabe / Gyroscope Sphere */}
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

              {/* Ring 4: Inner Core Hoop */}
              <motion.div
                animate={{
                  rotateX: [-45, 315],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-11 rounded-full border border-[#00F0FF]/30"
              />

              {/* Center Specular Core Node */}
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#FFFFFF]" />
            </div>

            {/* Counter & Status Display */}
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

              {/* Status Phrase */}
              <div className="h-5 flex items-center justify-center">
                <motion.div
                  key={statusText}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-mono tracking-[0.2em] text-slate-400 uppercase"
                >
                  {statusText}
                </motion.div>
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
