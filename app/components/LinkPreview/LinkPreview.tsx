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
const POPOVER_HEIGHT_ESTIMATE = 220;

export function LinkPreview({
  href,
  children,
  preview,
  className,
}: LinkPreviewProps) {
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringPopover, setIsHoveringPopover] = useState(false);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();

  const popoverId = `popover-${uniqueId.replace(/:/g, "")}`;

  // Mount check for portal
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

    // If still no space, don't show
    if (top + POPOVER_HEIGHT_ESTIMATE > viewportHeight - 10 && top < 10) {
      return null;
    }

    return { top, left };
  }, []);

  // Show/hide logic based on hover state of both link and popover
  useEffect(() => {
    const shouldShow = isHoveringLink || isHoveringPopover;

    if (shouldShow) {
      // Clear any pending hide
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      // Delay before showing
      if (!popoverRef.current?.matches(":popover-open")) {
        showTimeoutRef.current = setTimeout(() => {
          const pos = calculatePosition();
          if (pos) {
            setPosition(pos);
            try {
              popoverRef.current?.showPopover();
            } catch (e) {
              // Ignore
            }
          }
        }, 200);
      }
    } else {
      // Clear any pending show
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
        showTimeoutRef.current = null;
      }

      // Small delay before hiding (allows moving between link and popover)
      hideTimeoutRef.current = setTimeout(() => {
        try {
          popoverRef.current?.hidePopover();
        } catch (e) {
          // Ignore
        }
      }, 100);
    }

    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [isHoveringLink, isHoveringPopover, calculatePosition]);

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
        onMouseEnter={() => setIsHoveringLink(true)}
        onMouseLeave={() => setIsHoveringLink(false)}
        onFocus={() => setIsHoveringLink(true)}
        onBlur={() => setIsHoveringLink(false)}
        aria-describedby={popoverId}
      >
        {children}
      </a>

      {isMounted &&
        createPortal(
          <LinkPreviewPopover
            ref={popoverRef}
            id={popoverId}
            screenshotPath={preview.screenshotPath}
            url={href}
            width={preview.width}
            height={preview.height}
            position={position}
            onMouseEnter={() => setIsHoveringPopover(true)}
            onMouseLeave={() => setIsHoveringPopover(false)}
          />,
          document.body
        )}
    </>
  );
}
