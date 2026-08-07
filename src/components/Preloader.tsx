"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const words = [
    "Finance",
    "Health",
    "Career",
    "Home",
    "Government",
    "Travel",
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
          setTimeout(onComplete, 900);
        }, 400);
      } else {
        const stepIdx = Math.min(
          Math.floor((currentProgress / 100) * words.length),
          words.length - 1
        );
        setActiveStep(stepIdx);
      }
      setProgress(currentProgress);
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#050506] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Top-left brand */}
          <div className="absolute top-8 left-8 sm:top-14 sm:left-14 z-10">
            <span className="text-sm font-semibold text-white/80 tracking-tight">LifeOS</span>
          </div>

          {/* Main 3D Word Stage */}
          <div className="relative flex flex-col items-center justify-center gap-6" style={{ perspective: "800px" }}>

            {/* Large 3D Morphing Word */}
            <div className="relative h-[120px] sm:h-[160px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={words[activeStep]}
                  initial={{
                    opacity: 0,
                    rotateX: 70,
                    y: 80,
                    scale: 0.85,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    rotateX: -70,
                    y: -80,
                    scale: 0.85,
                    filter: "blur(6px)",
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className="text-[80px] sm:text-[120px] lg:text-[140px] font-bold tracking-tight leading-none text-white"
                >
                  {words[activeStep]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subtle Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm text-white/30 tracking-wide"
            >
              AI that helps you live better.
            </motion.p>

          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-10 sm:bottom-14 left-8 right-8 sm:left-14 sm:right-14 z-10">
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="h-full bg-white/60"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
