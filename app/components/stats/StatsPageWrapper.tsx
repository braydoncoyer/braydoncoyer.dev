"use client";

import { MotionConfig } from "framer-motion";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface StatsPageWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that optimizes animations for mobile performance and accessibility.
 * Disables animations on mobile devices (<768px) OR when user has prefers-reduced-motion enabled.
 * This hybrid approach balances performance with accessibility - production standard for animation-heavy apps.
 */
export function StatsPageWrapper({ children }: StatsPageWrapperProps) {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <MotionConfig reducedMotion={shouldReduceAnimations ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
