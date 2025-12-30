"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface CoffeeCupsCardProps {
  cups: number;
  delay?: number;
}

export function CoffeeCupsCard({ cups, delay = 0 }: CoffeeCupsCardProps) {
  const { shouldReduceAnimations } = usePerformanceMode();
  const [isHovered, setIsHovered] = useState(false);
  const [displayCups, setDisplayCups] = useState(0);

  useEffect(() => {
    if (shouldReduceAnimations) {
      setDisplayCups(cups);
      return;
    }

    const duration = 1500;
    const startTime = performance.now();
    const startDelay = delay * 1000;

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime - startDelay;

      if (elapsed < 0) {
        requestAnimationFrame(animateCount);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayCups(Math.floor(eased * cups));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [cups, delay, shouldReduceAnimations]);

  // Use actual value immediately if animations are reduced to prevent flash from 0
  const effectiveDisplayCups = shouldReduceAnimations ? cups : displayCups;

  // Staggered coffee cup decorations
  const coffeeCups = [
    { x: "10%", y: "20%", rotate: -15, delay: 0 },
    { x: "75%", y: "15%", rotate: 10, delay: 0.1 },
    { x: "85%", y: "60%", rotate: -8, delay: 0.2 },
    { x: "15%", y: "70%", rotate: 12, delay: 0.3 },
  ];

  const cardClassName = "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-white";

  // Mobile: Plain div (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <div className={cardClassName}>
        {/* Hover gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Floating coffee cups */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {coffeeCups.map((cup, i) => (
            <span
              key={i}
              className="absolute text-2xl"
              style={{
                left: cup.x,
                top: cup.y,
                opacity: 0.15,
                transform: `rotate(${cup.rotate}deg)`,
              }}
            >
              ☕
            </span>
          ))}
        </div>

        <div className="relative z-20 flex h-full flex-col">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl">
            ☕
          </div>

          <h2 className="mb-2 font-medium text-text-primary">Coffee Consumed</h2>
          <p className="text-sm text-text-secondary">Estimated fuel</p>

          <div className="mt-auto">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-semibold tracking-tight text-purple-primary">
                ~{effectiveDisplayCups.toLocaleString()}
              </span>
              <span className="text-sm text-text-secondary">cups</span>
            </div>
            <p className="mt-2 text-xs text-text-tertiary">
              1 cup per 500 words
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Desktop: Full Framer Motion animations
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cardClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Floating coffee cups */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {coffeeCups.map((cup, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: cup.rotate - 20 }}
            animate={{
              opacity: 0.15,
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? cup.rotate + 10 : cup.rotate,
              y: isHovered ? -8 : 0,
            }}
            transition={{
              opacity: { duration: 0.4, delay: delay + cup.delay },
              scale: { type: "spring", stiffness: 200, damping: 15 },
              rotate: { type: "spring", stiffness: 200, damping: 15 },
              y: { type: "spring", stiffness: 200, damping: 15 },
            }}
            className="absolute text-2xl"
            style={{ left: cup.x, top: cup.y }}
          >
            ☕
          </motion.span>
        ))}
      </div>

      <div className="relative z-20 flex h-full flex-col">
        <motion.div
          animate={{
            rotate: isHovered ? [0, -5, 5, 0] : 0,
            y: isHovered ? -4 : 0,
          }}
          transition={{
            rotate: { duration: 0.5 },
            y: { type: "spring", stiffness: 200, damping: 15 },
          }}
          className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl"
        >
          ☕
        </motion.div>

        <h2 className="mb-2 font-medium text-text-primary">Coffee Consumed</h2>
        <p className="text-sm text-text-secondary">Estimated fuel</p>

        <div className="mt-auto">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-baseline gap-1"
          >
            <span className="text-3xl font-semibold tracking-tight text-purple-primary">
              ~{effectiveDisplayCups.toLocaleString()}
            </span>
            <span className="text-sm text-text-secondary">cups</span>
          </motion.div>
          <p className="mt-2 text-xs text-text-tertiary">
            1 cup per 500 words
          </p>
        </div>
      </div>
    </motion.div>
  );
}
