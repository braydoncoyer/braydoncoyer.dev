"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { changelogItems } from "#site/content";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface ChangelogUpdatesCardProps {
  count: number;
  delay?: number;
}

export function ChangelogUpdatesCard({
  count,
  delay = 0,
}: ChangelogUpdatesCardProps) {
  const { shouldReduceAnimations } = usePerformanceMode();
  const [isHovered, setIsHovered] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  // Get recent changelog items - show more for scrolling effect
  const recentItems = changelogItems
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 8);

  useEffect(() => {
    if (shouldReduceAnimations) {
      setDisplayCount(count);
      return;
    }

    const duration = 1500;
    const startTime = performance.now();
    const startDelay = delay * 1000;

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime - startDelay;

      if (elapsed < 0) {
        requestAnimationFrame(animateCount);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayCount(Math.floor(eased * count));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [count, delay, shouldReduceAnimations]);

  const getTopPosition = (index: number) => {
    const basePosition = -5;
    const spacing = 42;
    return `${basePosition + index * spacing}px`;
  };

  const cardClassName = "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-white";

  // Mobile: Plain div (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <Link href="/changelog" className="block h-full">
        <div className={cardClassName}>
          {/* Hover gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Central vertical timeline - matching ChangelogBento */}
          <div className="border-px absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 transform border-x border-[#A5AEB8]/10 bg-[#D6DADE]/35" />

          {/* Timeline entries */}
          <div className="relative flex-1">
            <div className="absolute left-0 right-0 top-0">
              {recentItems.map((item, index) => (
                <div
                  key={item.publishedAt}
                  className="absolute"
                  style={{
                    top: getTopPosition(index),
                    ...(index % 2 === 1
                      ? { left: "calc(50% + 6px)" }
                      : { right: "calc(50% + 6px)" }),
                  }}
                >
                  {/* Connecting line to timeline */}
                  <span
                    className={`absolute top-[14px] h-px w-[6px] bg-border-primary ${
                      index % 2 === 1 ? "left-[-6px]" : "right-[-6px]"
                    }`}
                  />
                  {/* Entry card */}
                  <div className="z-10 inline-block w-[100px] space-y-px rounded-lg border border-border-primary bg-white px-2 py-1.5 text-xs shadow-sm">
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-text-secondary">
                      {item.title}
                    </p>
                    <time
                      dateTime={item.publishedAt}
                      className="text-[9px] text-text-tertiary"
                    >
                      {new Date(item.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for scroll effect */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-bg-primary to-transparent transition-colors group-hover:from-white" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-bg-primary via-bg-primary/75 to-transparent transition-colors group-hover:from-white group-hover:via-white/75" />

          {/* Content at bottom */}
          <div className="relative z-20 mt-auto">
            <h2 className="mb-1 font-medium text-text-primary">
              Changelog
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tabular-nums tracking-tight text-purple-primary">
                {displayCount}
              </span>
              <span className="text-sm text-text-tertiary">updates</span>
            </div>
          </div>

          {/* Link arrow */}
          <div className="absolute bottom-4 right-4 z-40 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 opacity-0 transition-opacity group-hover:opacity-100">
            <svg
              className="h-4 w-4 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  // Desktop: Full Framer Motion animations
  return (
    <Link href="/changelog" className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={cardClassName}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Central vertical timeline - matching ChangelogBento */}
        <div className="border-px absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 transform border-x border-[#A5AEB8]/10 bg-[#D6DADE]/35" />

        {/* Timeline entries */}
        <div className="relative flex-1">
          <motion.div
            animate={{
              y: isHovered ? -120 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
            }}
            className="absolute left-0 right-0 top-0"
          >
            {recentItems.map((item, index) => (
              <motion.div
                key={item.publishedAt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: delay + index * 0.05 }}
                className="absolute"
                style={{
                  top: getTopPosition(index),
                  ...(index % 2 === 1
                    ? { left: "calc(50% + 6px)" }
                    : { right: "calc(50% + 6px)" }),
                }}
              >
                {/* Connecting line to timeline */}
                <span
                  className={`absolute top-[14px] h-px w-[6px] bg-border-primary ${
                    index % 2 === 1 ? "left-[-6px]" : "right-[-6px]"
                  }`}
                />
                {/* Entry card */}
                <div className="z-10 inline-block w-[100px] space-y-px rounded-lg border border-border-primary bg-white px-2 py-1.5 text-xs shadow-sm">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-text-secondary">
                    {item.title}
                  </p>
                  <time
                    dateTime={item.publishedAt}
                    className="text-[9px] text-text-tertiary"
                  >
                    {new Date(item.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for scroll effect */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-bg-primary to-transparent transition-colors group-hover:from-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-bg-primary via-bg-primary/75 to-transparent transition-colors group-hover:from-white group-hover:via-white/75" />

        {/* Content at bottom */}
        <div className="relative z-20 mt-auto">
          <h2 className="mb-1 font-medium text-text-primary">
            Changelog
          </h2>
          <div className="flex items-baseline gap-2">
            <motion.span
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-2xl font-bold tabular-nums tracking-tight text-purple-primary"
            >
              {displayCount}
            </motion.span>
            <span className="text-sm text-text-tertiary">updates</span>
          </div>
        </div>

        {/* Link arrow */}
        <motion.div
          animate={{
            x: isHovered ? 0 : 8,
            y: isHovered ? 0 : 8,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 right-4 z-40 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100"
        >
          <svg
            className="h-4 w-4 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
}
