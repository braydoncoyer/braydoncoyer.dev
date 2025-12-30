"use client";

import { useEffect, useState } from "react";

interface PerformanceMode {
  shouldReduceAnimations: boolean;
}

/**
 * Hook to detect user's reduced motion preference.
 * Respects the prefers-reduced-motion accessibility setting.
 * This follows Framer Motion's standard pattern for animation control.
 */
export function usePerformanceMode(): PerformanceMode {
  const [shouldReduceAnimations, setShouldReduceAnimations] = useState(false);

  useEffect(() => {
    // Check user's reduced motion preference
    const checkReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      setShouldReduceAnimations(prefersReducedMotion);
    };

    checkReducedMotion();

    // Listen for reduced motion preference changes
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => checkReducedMotion();

    // Modern browsers
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", handleMotionChange);
    } else {
      // Fallback for older browsers
      motionQuery.addListener(handleMotionChange);
    }

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  return { shouldReduceAnimations };
}
