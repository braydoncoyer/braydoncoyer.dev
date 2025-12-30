"use client";

import { useEffect, useState } from "react";

interface PerformanceMode {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  shouldReduceAnimations: boolean;
}

/**
 * Hook to detect performance constraints and adjust animations accordingly.
 * Returns flags for mobile detection and reduced motion preferences.
 */
export function usePerformanceMode(): PerformanceMode {
  const [mode, setMode] = useState<PerformanceMode>({
    isMobile: false,
    prefersReducedMotion: false,
    shouldReduceAnimations: false,
  });

  useEffect(() => {
    // Check if viewport is mobile-sized
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      setMode({
        isMobile,
        prefersReducedMotion,
        shouldReduceAnimations: isMobile || prefersReducedMotion,
      });
    };

    checkMobile();

    // Listen for viewport changes
    window.addEventListener("resize", checkMobile);

    // Listen for reduced motion preference changes
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => checkMobile();

    // Modern browsers
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", handleMotionChange);
    } else {
      // Fallback for older browsers
      motionQuery.addListener(handleMotionChange);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  return mode;
}
