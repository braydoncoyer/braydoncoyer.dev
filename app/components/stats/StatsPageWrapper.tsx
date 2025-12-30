"use client";

import { MotionConfig } from "framer-motion";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface StatsPageWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that disables Framer Motion animations on mobile.
 * Uses MotionConfig with reducedMotion="always" to skip all motion animations.
 * Individual components handle RAF loop optimization via usePerformanceMode hook.
 */
export function StatsPageWrapper({ children }: StatsPageWrapperProps) {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <MotionConfig reducedMotion={shouldReduceAnimations ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
