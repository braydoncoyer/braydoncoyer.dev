"use client";

import { useEffect, useState } from "react";

interface PerformanceMode {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  shouldReduceAnimations: boolean;
}

/**
 * Hook to detect performance constraints and accessibility preferences.
 * Combines viewport detection (for performance) with prefers-reduced-motion (for accessibility).
 * This is the production-standard hybrid approach used by apps like Stripe and Notion.
 */
export function usePerformanceMode(): PerformanceMode {
  const [mode, setMode] = useState<PerformanceMode>({
    isMobile: false,
    prefersReducedMotion: false,
    shouldReduceAnimations: false,
  });

  useEffect(() => {
    const checkPerformanceMode = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      setMode({
        isMobile,
        prefersReducedMotion,
        // Reduce animations for EITHER mobile performance OR accessibility
        shouldReduceAnimations: isMobile || prefersReducedMotion,
      });
    };

    checkPerformanceMode();

    // Listen for viewport changes
    window.addEventListener("resize", checkPerformanceMode);

    // Listen for reduced motion preference changes
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Modern browsers
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", checkPerformanceMode);
    } else {
      // Fallback for older browsers
      motionQuery.addListener(checkPerformanceMode);
    }

    return () => {
      window.removeEventListener("resize", checkPerformanceMode);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", checkPerformanceMode);
      } else {
        motionQuery.removeListener(checkPerformanceMode);
      }
    };
  }, []);

  return mode;
}
