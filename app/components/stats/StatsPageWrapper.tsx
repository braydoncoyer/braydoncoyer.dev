"use client";

import { MotionConfig } from "framer-motion";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface StatsPageWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that completely disables all Framer Motion animations on mobile
 * to prevent performance issues from too many simultaneous animations.
 *
 * Uses a multi-pronged approach:
 * 1. MotionConfig with reducedMotion="always" to disable Framer Motion animations
 * 2. CSS to force-disable any remaining animations and transitions
 * 3. Zero-duration transitions as a final catch-all
 */
export function StatsPageWrapper({ children }: StatsPageWrapperProps) {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <MotionConfig
      reducedMotion={shouldReduceAnimations ? "always" : "user"}
      transition={shouldReduceAnimations ? { duration: 0, delay: 0 } : undefined}
    >
      <div
        className={shouldReduceAnimations ? "disable-all-animations" : ""}
        style={
          shouldReduceAnimations
            ? {
                // Force disable all CSS animations and transitions
                // @ts-expect-error - CSS custom properties
                "--motion-duration": "0s",
                "--motion-delay": "0s",
              }
            : undefined
        }
      >
        {children}
      </div>
      {/* Inject CSS to forcefully disable all animations on mobile */}
      {shouldReduceAnimations && (
        <style dangerouslySetInnerHTML={{
          __html: `
            .disable-all-animations *,
            .disable-all-animations *::before,
            .disable-all-animations *::after {
              animation-duration: 0s !important;
              animation-delay: 0s !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          `
        }} />
      )}
    </MotionConfig>
  );
}
