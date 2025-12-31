"use client";

import { useState, useRef, useCallback, useId, useEffect } from "react";
import { createPortal } from "react-dom";
import { LinkPreviewPopover } from "./LinkPreviewPopover";
import type { LinkPreviewData } from "@/app/lib/link-previews/types";

interface LinkPreviewProps {
  href: string;
  children: React.ReactNode;
  preview: LinkPreviewData | null;
  className?: string;
}

const POPOVER_WIDTH = 320;
const POPOVER_HEIGHT_ESTIMATE = 220; // Approximate height

export function LinkPreview({
  href,
  children,
  preview,
  className,
}: LinkPreviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const uniqueId = useId();

  const popoverId = `popover-${uniqueId.replace(/:/g, "")}`;

  // Check if we're in the browser
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculatePosition = useCallback(() => {
    if (!linkRef.current) return null;

    const rect = linkRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Default: position above the link, centered
    let top = rect.top - POPOVER_HEIGHT_ESTIMATE - 12;
    let left = rect.left + rect.width / 2 - POPOVER_WIDTH / 2;

    // If not enough space above, position below
    if (top < 10) {
      top = rect.bottom + 12;
    }

    // Keep within horizontal viewport bounds
    if (left < 10) {
      left = 10;
    } else if (left + POPOVER_WIDTH > viewportWidth - 10) {
      left = viewportWidth - POPOVER_WIDTH - 10;
    }

    // If still no space (very small viewport), don't show
    if (top + POPOVER_HEIGHT_ESTIMATE > viewportHeight - 10 && top < 10) {
      return null;
    }

    return { top, left };
  }, []);

  const showPreview = useCallback(() => {
    if (!preview) return;

    // Clear any pending hide timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Delay before showing (prevents flicker on quick hover)
    timeoutRef.current = setTimeout(() => {
      const pos = calculatePosition();
      if (pos) {
        setPosition(pos);
        setIsVisible(true);
      }
    }, 200);
  }, [preview, calculatePosition]);

  const hidePreview = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  }, []);

  // If no preview available, render simple link
  if (!preview) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <>
      <a
        ref={linkRef}
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={showPreview}
        onMouseLeave={hidePreview}
        onFocus={showPreview}
        onBlur={hidePreview}
        aria-describedby={isVisible ? popoverId : undefined}
      >
        {children}
      </a>

      {isMounted &&
        createPortal(
          <LinkPreviewPopover
            id={popoverId}
            screenshotPath={preview.screenshotPath}
            url={href}
            isVisible={isVisible}
            width={preview.width}
            height={preview.height}
            position={position}
          />,
          document.body
        )}
    </>
  );
}
