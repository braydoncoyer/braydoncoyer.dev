"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import type { TocHeading } from "@/app/lib/toc-utils";

interface TableOfContentsProps {
  headings: TocHeading[];
}

/**
 * Check if the browser supports CSS anchor positioning
 */
function supportsAnchorPositioning(): boolean {
  if (typeof CSS === "undefined") return false;
  return CSS.supports("anchor-name", "--test");
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const headingIds = headings.map((h) => h.slug);
  const activeId = useActiveSection({ headingIds });
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [supportsAnchors, setSupportsAnchors] = useState(false);
  const [topPosition, setTopPosition] = useState(140);
  const fixedTop = 140; // The fixed top position when scrolled

  // Check for anchor positioning support on mount
  useEffect(() => {
    setSupportsAnchors(supportsAnchorPositioning());
  }, []);

  // Track scroll position to calculate dynamic top value
  useEffect(() => {
    // Find the article content wrapper (.wrapper.z-10)
    const contentWrapper = document.querySelector("article .wrapper.z-10");
    if (!contentWrapper) return;

    const calculateTopPosition = () => {
      // Get the content wrapper's position relative to the viewport
      const wrapperRect = contentWrapper.getBoundingClientRect();

      // If the content wrapper is below the fixed position, TOC follows it
      // If the content wrapper has scrolled past, TOC stays fixed
      const newTop = Math.max(fixedTop, wrapperRect.top);
      setTopPosition(newTop);
    };

    // Calculate on mount
    calculateTopPosition();

    // Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateTopPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", calculateTopPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateTopPosition);
    };
  }, []);

  // Update indicator position (handles both vertical and horizontal positioning)
  const updateIndicatorPosition = useCallback(() => {
    if (!activeId || !navRef.current || !indicatorRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href="#${activeId}"]`,
    ) as HTMLElement | null;

    if (!activeLink) return;

    const tocContent = navRef.current.querySelector(".toc-content");
    if (!tocContent) return;

    const contentRect = tocContent.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    // Calculate vertical position (center of the link)
    const top = linkRect.top - contentRect.top + linkRect.height / 2;

    // Calculate horizontal position based on link's padding
    // H3 links have padding-left, so the dot should shift right
    const isH3 = activeLink.classList.contains("toc-link--h3");
    const left = isH3 ? 11 : -3; // Shift right for H3s to align with indented text

    indicatorRef.current.style.top = `${top}px`;
    indicatorRef.current.style.left = `${left}px`;
  }, [activeId]);

  // Trigger moving animation and update position
  useEffect(() => {
    if (!activeId) return;

    setIsMoving(true);
    const timer = setTimeout(() => setIsMoving(false), 600);

    // Update CSS anchor-name for anchor positioning browsers
    if (supportsAnchors && navRef.current) {
      const links = navRef.current.querySelectorAll("a[data-toc-link]");
      links.forEach((link) => {
        (link as HTMLElement).style.removeProperty("anchor-name");
      });

      const activeLink = navRef.current.querySelector(`a[href="#${activeId}"]`);
      if (activeLink) {
        // Use setProperty for CSS anchor-name (not yet in TypeScript CSSStyleDeclaration)
        (activeLink as HTMLElement).style.setProperty(
          "anchor-name",
          "--toc-active",
        );
      }
    }

    // Always update position via JS (CSS anchor positioning doesn't handle horizontal shift for H3s)
    updateIndicatorPosition();

    return () => clearTimeout(timer);
  }, [activeId, supportsAnchors, updateIndicatorPosition]);

  // Handle smooth scroll on link click
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL without scroll jump
      window.history.pushState(null, "", `#${slug}`);
    }
  };

  // Don't render if no headings
  if (headings.length === 0) return null;

  return (
    <nav
      ref={navRef}
      aria-label="Table of contents"
      className="toc-container"
      style={{ top: `${topPosition}px` }}
    >
      <div className="toc-content">
        <p className="toc-label">Table of Contents</p>

        {/* The animated dot indicator */}
        <span
          ref={indicatorRef}
          className={`toc-indicator ${activeId ? "toc-indicator--visible" : ""} ${isMoving ? "toc-indicator--moving" : ""}`}
          aria-hidden="true"
        />

        <ul className="toc-list">
          {headings.map((heading) => (
            <li key={heading.slug} className="toc-item">
              <a
                href={`#${heading.slug}`}
                data-toc-link
                className={`toc-link toc-link--h${heading.level} ${activeId === heading.slug ? "toc-link--active" : ""}`}
                onClick={(e) => handleLinkClick(e, heading.slug)}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
