"use client";

import { MotionConfig } from "framer-motion";

interface StatsPageWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that respects user's motion preferences.
 * Uses Framer Motion's standard reducedMotion="user" setting,
 * which automatically disables animations for users with prefers-reduced-motion enabled.
 * Individual components optimize expensive RAF loops via usePerformanceMode hook.
 */
export function StatsPageWrapper({ children }: StatsPageWrapperProps) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
