"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const words = [
    "Finance",
    "Health",
    "Career",
    "Home",
    "Travel",
  ];

  const stableOnComplete = useCallback(onComplete, []);

  useEffect(() => {
    const wordDuration = 900; // ms each word stays visible
    const totalWords = words.length;

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step >= totalWords) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(stableOnComplete, 800);
        }, 600);
      } else {
        setActiveStep(step);
      }
    }, wordDuration);

    return () => clearInterval(interval);
  }, [stableOnComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#050506] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Top-left brand */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 z-10">
            <span className="text-sm font-semibold text-white/70 tracking-tight">LifeOS</span>
          </div>

          {/* Center Stage */}
          <div className="relative flex flex-col items-center justify-center gap-8" style={{ perspective: "900px" }}>

            {/* Large 3D Rotating Word */}
            <div className="relative h-[100px] sm:h-[150px] lg:h-[180px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={words[activeStep]}
                  initial={{
                    opacity: 0,
                    rotateX: 80,
                    y: 60,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotateX: -80,
                    y: -60,
                    scale: 0.9,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className="text-[72px] sm:text-[110px] lg:text-[140px] font-bold tracking-tighter leading-none text-white"
                >
                  {words[activeStep]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm sm:text-base text-white/25 tracking-wide font-light"
            >
              AI that helps you live better.
            </motion.p>

          </div>

          {/* Bottom progress dots */}
          <div className="absolute bottom-10 sm:bottom-12 flex items-center gap-2 z-10">
            {words.map((_, i) => (
              <div
                key={i}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i <= activeStep ? "w-6 bg-white/50" : "w-3 bg-white/10"
                }`}
              />
            ))}
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
