"use client";

import { forwardRef } from "react";
import { LinkPreviewImage } from "./LinkPreviewImage";

interface LinkPreviewPopoverProps {
  id: string;
  screenshotPath: string;
  url: string;
  width: number;
  height: number;
  position: { top: number; left: number } | null;
  anchorName?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
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
>(({ id, screenshotPath, url, width, height, position, anchorName, onMouseEnter, onMouseLeave }, ref) => {
  const displayUrl = formatDisplayUrl(url);
  const faviconUrl = getFaviconUrl(url);

  // Build style object - use CSS Anchor Positioning when supported, fallback to JS position
  const popoverStyle: React.CSSProperties = anchorName
    ? { positionAnchor: anchorName } as React.CSSProperties
    : position
      ? { top: position.top, left: position.left }
      : {};

  return (
    <div
      ref={ref}
      id={id}
      // @ts-expect-error - popover is a valid HTML attribute
      popover="manual"
      role="tooltip"
      className={`link-preview-popover${anchorName ? ' anchor-positioned' : ''}`}
      style={popoverStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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

          {/* Subtle gradient overlay at bottom of image */}
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
    </div>
  );
});

LinkPreviewPopover.displayName = "LinkPreviewPopover";
