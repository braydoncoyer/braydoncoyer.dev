"use client";

import { MotionConfig } from "framer-motion";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface StatsPageWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that disables all Framer Motion animations on mobile
 * to prevent performance issues from too many simultaneous animations.
 */
export function StatsPageWrapper({ children }: StatsPageWrapperProps) {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <MotionConfig
      transition={
        shouldReduceAnimations
          ? { duration: 0 }
          : undefined
      }
      reducedMotion={shouldReduceAnimations ? "always" : "user"}
    >
      {children}
    </MotionConfig>
  );
}
