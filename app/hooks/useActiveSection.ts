"use client";

import { useState, useEffect, useCallback } from "react";

interface UseActiveSectionOptions {
  /**
   * Array of heading IDs to track
   */
  headingIds: string[];
  /**
   * Offset from top of viewport to consider a heading "active"
   * Accounts for fixed navbar, etc.
   */
  topOffset?: number;
}

/**
 * Hook that tracks which section heading is currently active based on scroll position.
 * Uses a simple scroll-based approach: the active heading is the last one
 * that has scrolled past the top offset.
 */
export function useActiveSection({
  headingIds,
  topOffset = 120,
}: UseActiveSectionOptions): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  const calculateActiveHeading = useCallback(() => {
    if (headingIds.length === 0) return;

    // Get all heading positions
    const headingPositions = headingIds
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
          id,
          top: rect.top,
        };
      })
      .filter(Boolean) as { id: string; top: number }[];

    if (headingPositions.length === 0) return;

    // Find the last heading that has scrolled past the top offset
    // This gives us the "current" section the user is reading
    let currentHeading: string | null = null;

    for (const heading of headingPositions) {
      // If this heading is above or at the offset line, it's a candidate
      if (heading.top <= topOffset) {
        currentHeading = heading.id;
      }
    }

    // If no heading has passed the offset yet, use the first one
    // (user is at the top of the article)
    if (currentHeading === null && headingPositions.length > 0) {
      // Check if the first heading is close to the viewport
      const firstHeading = headingPositions[0];
      if (firstHeading.top < window.innerHeight * 0.5) {
        currentHeading = firstHeading.id;
      }
    }

    if (currentHeading !== null) {
      setActiveId(currentHeading);
    }
  }, [headingIds, topOffset]);

  useEffect(() => {
    if (headingIds.length === 0) return;

    // Calculate on mount
    calculateActiveHeading();

    // Throttled scroll handler for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateActiveHeading();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headingIds, calculateActiveHeading]);

  return activeId;
}
