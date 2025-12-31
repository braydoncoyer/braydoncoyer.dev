"use client";

import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkPreviewImage } from "./LinkPreviewImage";

interface LinkPreviewPopoverProps {
  id: string;
  screenshotPath: string;
  url: string;
  isVisible: boolean;
  width: number;
  height: number;
  // Position relative to the link
  position?: { top: number; left: number };
}

/**
 * Get favicon URL using Google's favicon service
 */
function getFaviconUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${parsed.hostname}&sz=32`;
  } catch {
    return "";
  }
}

/**
 * Format URL for display (hostname only, no protocol)
 */
function formatDisplayUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export const LinkPreviewPopover = forwardRef<
  HTMLDivElement,
  LinkPreviewPopoverProps
>(({ id, screenshotPath, url, isVisible, width, height, position }, ref) => {
  const displayUrl = formatDisplayUrl(url);
  const faviconUrl = getFaviconUrl(url);

  return (
    <AnimatePresence>
      {isVisible && position && (
        <motion.div
          ref={ref}
          id={id}
          role="tooltip"
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.8,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: 8,
            transition: { duration: 0.12, ease: "easeOut" },
          }}
          className="link-preview-popover"
          style={{
            position: "fixed",
            top: position.top,
            left: position.left,
            zIndex: 50,
          }}
        >
          {/* Tether Arrow */}
          <div className="link-preview-arrow" aria-hidden="true" />

          {/* Popover Card */}
          <div className="link-preview-card drama-shadow overflow-hidden rounded-xl bg-white">
            {/* Screenshot Preview */}
            <div className="relative">
              <LinkPreviewImage
                src={screenshotPath}
                alt={`Preview of ${displayUrl}`}
                width={width}
                height={height}
              />

              {/* Subtle gradient overlay at bottom of image for smooth transition */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/50 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* URL Bar */}
            <div className="flex items-center gap-2.5 border-t border-border-primary/50 px-3 py-2.5">
              {/* Favicon */}
              <div className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                {faviconUrl && (
                  <img
                    src={faviconUrl}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 rounded-sm object-contain"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Domain */}
              <span className="truncate font-mono text-xs tracking-tight text-text-secondary">
                {displayUrl}
              </span>

              {/* External Link Icon */}
              <svg
                className="ml-auto h-3 w-3 shrink-0 text-text-tertiary"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3.5 3h5.5v5.5M9 3L3 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

LinkPreviewPopover.displayName = "LinkPreviewPopover";
