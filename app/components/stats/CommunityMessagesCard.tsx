"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

interface CommunityMessagesCardProps {
  count: number;
  delay?: number;
}

// Mini message card patterns (simplified versions of the community wall)
const miniPatterns = [
  { gradient: "from-[#90D2AA] to-[#FEFFB4]", rotate: -6, x: -20, y: 10 },
  { gradient: "from-[#C48EFF] to-[#FCCEED]", rotate: 3, x: 0, y: 0 },
  { gradient: "from-[#81E0CA] to-[#E9F2FE]", rotate: 8, x: 15, y: 5 },
];

export function CommunityMessagesCard({
  count,
  delay = 0,
}: CommunityMessagesCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
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
  }, [count, delay]);

  return (
    <Link href="/community-wall" className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-20 flex h-full flex-col">
          <h2 className="mb-2 font-medium text-text-primary">
            Community Messages
          </h2>
          <p className="text-sm text-text-secondary">From the wall</p>

          {/* Stacked mini message cards - bigger and fan out more */}
          <div className="relative my-4 flex flex-1 items-center justify-center">
            {miniPatterns.map((pattern, index) => (
              <motion.div
                key={index}
                initial={{
                  rotate: pattern.rotate,
                  x: pattern.x * 0.3,
                  y: pattern.y * 0.3,
                  scale: 1 - index * 0.03,
                }}
                animate={{
                  rotate: isHovered
                    ? pattern.rotate * 2.5
                    : pattern.rotate,
                  x: isHovered ? pattern.x * 2.2 : pattern.x * 0.3,
                  y: isHovered ? pattern.y * 2 - 15 : pattern.y * 0.3,
                  scale: isHovered ? 1 : 1 - index * 0.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.03,
                }}
                className={`absolute h-28 w-36 rounded-xl border-2 border-white/60 bg-gradient-to-b ${pattern.gradient} shadow-md`}
                style={{ zIndex: 3 - index }}
              >
                {/* Mini card content lines */}
                <div className="flex h-full flex-col justify-center p-4">
                  <div className="mb-2 h-2 w-full rounded bg-white/60" />
                  <div className="mb-2 h-2 w-4/5 rounded bg-white/50" />
                  <div className="h-2 w-3/5 rounded bg-white/40" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Count */}
          <div className="mt-auto flex items-baseline gap-2">
            <motion.span
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-3xl font-bold tabular-nums tracking-tight text-purple-primary"
            >
              {displayCount.toLocaleString()}
            </motion.span>
            <span className="text-sm text-text-tertiary">messages</span>
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
