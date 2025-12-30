"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface SiteViewsCardProps {
  value: number;
  delay?: number;
}

// Elegant rising wave visualization
function RisingWave({ isHovered, delay, shouldReduceAnimations }: { isHovered: boolean; delay: number; shouldReduceAnimations: boolean }) {
  // Curve with natural variance - dips and climbs while trending upward
  // Starts lower-left, has organic ups and downs, ends at top-right
  const curvePath =
    "M -10 105 " +
    "C 20 100, 35 95, 50 88 " +  // Initial rise
    "C 65 81, 75 85, 90 82 " +   // Small dip then recover
    "C 105 79, 115 70, 130 65 " + // Climb
    "C 145 60, 155 62, 170 58 " + // Slight plateau
    "C 185 54, 195 45, 210 42 " + // Rise again
    "C 225 39, 235 44, 250 38 " + // Small dip
    "C 265 32, 280 22, 295 15 " + // Final climb
    "L 310 10";                    // End point

  // Area fill extends well below viewBox to prevent cutoff on hover
  const areaPath = `${curvePath} L 310 150 L -10 150 Z`;

  // Mobile: Static SVG (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 320 130"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.03" />
              <stop offset="40%" stopColor="rgb(129, 140, 248)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(167, 139, 250)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="rgb(129, 140, 248)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#waveGradient)" />
          <path d={curvePath} fill="none" stroke="url(#lineGrad)" strokeWidth={2} strokeLinecap="round" />
          <circle cx="310" cy="10" r="4" fill="rgb(99, 102, 241)" />
        </svg>
      </div>
    );
  }

  // Desktop: Full Framer Motion animations
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 320 130"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.03" />
            <stop offset="40%" stopColor="rgb(129, 140, 248)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="waveGradientHover" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.08" />
            <stop offset="40%" stopColor="rgb(129, 140, 248)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.28" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(167, 139, 250)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="rgb(129, 140, 248)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="lineGradHover" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(167, 139, 250)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="rgb(129, 140, 248)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="1" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d={areaPath}
          fill={isHovered ? "url(#waveGradientHover)" : "url(#waveGradient)"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: isHovered ? -3 : 0 }}
          transition={{
            opacity: { duration: 0.8, delay },
            y: { duration: 0.3, ease: "easeOut" }
          }}
        />

        <motion.path
          d={curvePath}
          fill="none"
          stroke={isHovered ? "url(#lineGradHover)" : "url(#lineGrad)"}
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, y: isHovered ? -3 : 0 }}
          transition={{
            pathLength: { duration: 1.2, delay: delay + 0.2, ease: "easeOut" },
            opacity: { duration: 0.5, delay },
            y: { duration: 0.3, ease: "easeOut" }
          }}
        />

        <motion.path
          d={curvePath}
          fill="none"
          stroke="rgb(129, 140, 248)"
          strokeWidth={4}
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.4 : 0, y: isHovered ? -3 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.circle
          cx="310"
          cy="10"
          r="4"
          fill="rgb(99, 102, 241)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.5, scale: 1, y: isHovered ? -3 : 0 }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { duration: 0.5, delay: delay + 1 },
            y: { duration: 0.3 }
          }}
        />

        <motion.circle
          cx="310"
          cy="10"
          r="4"
          fill="none"
          stroke="rgb(99, 102, 241)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: isHovered ? [0.6, 0] : 0,
            scale: isHovered ? [1, 2.5] : 1,
            y: isHovered ? -3 : 0,
          }}
          transition={{
            opacity: { duration: 1, repeat: Infinity },
            scale: { duration: 1, repeat: Infinity },
            y: { duration: 0.3 }
          }}
        />
      </svg>
    </div>
  );
}

// Small upward arrow icon
function TrendArrow({ isHovered, shouldReduceAnimations }: { isHovered: boolean; shouldReduceAnimations: boolean }) {
  const svg = (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17l5-5 5 5" />
      <path d="M7 11l5-5 5 5" />
    </svg>
  );

  // Mobile: Plain div (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <div className="flex items-center gap-1 text-emerald-500">
        {svg}
      </div>
    );
  }

  // Desktop: Animated
  return (
    <motion.div
      className="flex items-center gap-1 text-emerald-500"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0, y: isHovered ? -2 : 0 }}
      transition={{
        opacity: { duration: 0.5, delay: 0.8 },
        y: { duration: 0.2 }
      }}
    >
      {svg}
    </motion.div>
  );
}

export function SiteViewsCard({ value, delay = 0 }: SiteViewsCardProps) {
  const { shouldReduceAnimations } = usePerformanceMode();
  const [isHovered, setIsHovered] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Skip expensive counting animation for users with reduced motion preference
    if (shouldReduceAnimations) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const startTime = performance.now();
    const startDelay = delay * 1000;

    let rafId: number;

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime - startDelay;

      if (elapsed < 0) {
        rafId = requestAnimationFrame(animateCount);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(animateCount);
      }
    };

    rafId = requestAnimationFrame(animateCount);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, delay, shouldReduceAnimations]);

  const cardClassName = "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-white";

  // Mobile: Plain div (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <div className={cardClassName}>
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <RisingWave isHovered={isHovered} delay={delay} shouldReduceAnimations={shouldReduceAnimations} />

        <div className="relative z-20 flex h-full flex-col">
          <div className="mb-2 flex items-center gap-2">
            <h2 className="font-medium text-text-primary">Total Site Views</h2>
            <TrendArrow isHovered={isHovered} shouldReduceAnimations={shouldReduceAnimations} />
          </div>

          <p className="mt-auto text-3xl font-semibold tracking-tight text-purple-primary">
            {displayValue.toLocaleString()}
          </p>
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
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <RisingWave isHovered={isHovered} delay={delay} shouldReduceAnimations={shouldReduceAnimations} />

      <div className="relative z-20 flex h-full flex-col">
        <div className="mb-2 flex items-center gap-2">
          <h2 className="font-medium text-text-primary">Total Site Views</h2>
          <TrendArrow isHovered={isHovered} shouldReduceAnimations={shouldReduceAnimations} />
        </div>

        <motion.p
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mt-auto text-3xl font-semibold tracking-tight text-purple-primary"
        >
          {displayValue.toLocaleString()}
        </motion.p>
      </div>
    </motion.div>
  );
}
