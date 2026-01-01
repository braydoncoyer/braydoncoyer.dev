"use client";

import { useState } from "react";

interface LinkPreviewImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function LinkPreviewImage({
  src,
  alt,
  width,
  height,
}: LinkPreviewImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If there's an error, don't render anything (graceful degradation)
  if (hasError) {
    return null;
  }

  // Calculate display dimensions (scaled down for the popover)
  const displayWidth = 320;
  const displayHeight = Math.round((height / width) * displayWidth);

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: displayWidth, height: displayHeight }}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-[length:200%_100%]" />
      )}

      {/* Image with CSS transition */}
      <img
        src={src}
        alt={alt}
        width={displayWidth}
        height={displayHeight}
        className="h-full w-full object-cover object-top transition-opacity duration-200"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
