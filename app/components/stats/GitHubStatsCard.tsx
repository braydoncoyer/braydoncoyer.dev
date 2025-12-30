"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

type GitHubStatType = "stars" | "forks" | "commits";

interface GitHubStatsCardProps {
  type: GitHubStatType;
  label: string;
  value: number;
  delay?: number;
}

// Decoration configs for each type
const starDecorations = [
  { x: "12%", y: "18%", size: 16, rotate: 0, delay: 0 },
  { x: "78%", y: "12%", size: 12, rotate: 15, delay: 0.1 },
  { x: "85%", y: "55%", size: 14, rotate: -10, delay: 0.15 },
  { x: "20%", y: "65%", size: 10, rotate: 20, delay: 0.2 },
  { x: "65%", y: "70%", size: 8, rotate: -5, delay: 0.25 },
];

const forkDecorations = [
  { x: "15%", y: "20%", rotate: -20, delay: 0 },
  { x: "80%", y: "15%", rotate: 25, delay: 0.1 },
  { x: "75%", y: "60%", rotate: -15, delay: 0.15 },
  { x: "25%", y: "70%", rotate: 10, delay: 0.2 },
];

const commitDecorations = [
  { x: "15%", y: "25%", delay: 0 },
  { x: "30%", y: "18%", delay: 0.05 },
  { x: "75%", y: "20%", delay: 0.1 },
  { x: "85%", y: "50%", delay: 0.15 },
  { x: "20%", y: "65%", delay: 0.2 },
  { x: "70%", y: "70%", delay: 0.25 },
];

// Star SVG component
function StarShape({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// Fork/Branch SVG component
function BranchShape({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <circle cx="10" cy="4" r="2" />
      <circle cx="4" cy="20" r="2" />
      <circle cx="16" cy="20" r="2" />
      <path d="M10 6v6M10 12c0 4-6 4-6 8M10 12c0 4 6 4 6 8" />
    </svg>
  );
}

// Commit dot SVG component
function CommitDot({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <circle cx="8" cy="8" r="4" />
      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

// Theme configs
const themeConfig = {
  stars: {
    decorColor: "text-amber-400",
  },
  forks: {
    decorColor: "text-teal-400",
  },
  commits: {
    decorColor: "text-violet-400",
  },
};

export function GitHubStatsCard({
  type,
  label,
  value,
  delay = 0,
}: GitHubStatsCardProps) {
  const { shouldReduceAnimations } = usePerformanceMode();
  const [isHovered, setIsHovered] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  const theme = themeConfig[type];

  useEffect(() => {
    if (shouldReduceAnimations) {
      setDisplayValue(value);
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
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [value, delay, shouldReduceAnimations]);

  const cardClassName = "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-4 transition-all duration-300 hover:border-indigo-400 hover:bg-white";

  // Mobile: Plain div (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <div className={cardClassName}>
        {/* Hover gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Floating decorations based on type */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {type === "stars" &&
            starDecorations.map((star, i) => (
              <div
                key={i}
                className={`absolute ${theme.decorColor}`}
                style={{
                  left: star.x,
                  top: star.y,
                  opacity: 0.3,
                  transform: `rotate(${star.rotate}deg)`,
                }}
              >
                <StarShape size={star.size} />
              </div>
            ))}

          {type === "forks" &&
            forkDecorations.map((fork, i) => (
              <div
                key={i}
                className={`absolute ${theme.decorColor}`}
                style={{
                  left: fork.x,
                  top: fork.y,
                  opacity: 0.28,
                  transform: `rotate(${fork.rotate}deg)`,
                }}
              >
                <BranchShape />
              </div>
            ))}

          {type === "commits" &&
            commitDecorations.map((commit, i) => (
              <div
                key={i}
                className={`absolute ${theme.decorColor}`}
                style={{
                  left: commit.x,
                  top: commit.y,
                  opacity: 0.32,
                }}
              >
                <CommitDot />
              </div>
            ))}
        </div>

        {/* Content */}
        <div className="relative z-20 flex h-full flex-col">
          <h2 className="mb-1 text-sm font-medium text-text-primary">{label}</h2>

          <p className="mt-auto text-2xl font-semibold tracking-tight text-purple-primary">
            {displayValue.toLocaleString()}
          </p>
        </div>
      </div>
    );
  }

  // Desktop: Full Framer Motion animations
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cardClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Floating decorations based on type */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {type === "stars" &&
          starDecorations.map((star, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: star.rotate - 30 }}
              animate={{
                opacity: isHovered ? 0.55 : 0.3,
                scale: isHovered ? 1.4 : 1,
                rotate: isHovered ? star.rotate + 15 : star.rotate,
                y: isHovered ? -8 : 0,
              }}
              transition={{
                opacity: { duration: 0.2 },
                scale: { type: "spring", stiffness: 200, damping: 15 },
                rotate: { type: "spring", stiffness: 200, damping: 15 },
                y: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className={`absolute ${theme.decorColor}`}
              style={{ left: star.x, top: star.y }}
            >
              <StarShape size={star.size} />
            </motion.div>
          ))}

        {type === "forks" &&
          forkDecorations.map((fork, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: fork.rotate }}
              animate={{
                opacity: isHovered ? 0.5 : 0.28,
                scale: isHovered ? 1.3 : 1,
                rotate: isHovered ? fork.rotate * 1.3 : fork.rotate,
                y: isHovered ? -8 : 0,
              }}
              transition={{
                opacity: { duration: 0.2 },
                scale: { type: "spring", stiffness: 200, damping: 15 },
                rotate: { type: "spring", stiffness: 200, damping: 15 },
                y: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className={`absolute ${theme.decorColor}`}
              style={{ left: fork.x, top: fork.y }}
            >
              <BranchShape />
            </motion.div>
          ))}

        {type === "commits" &&
          commitDecorations.map((commit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isHovered ? 0.55 : 0.32,
                scale: isHovered ? 1.5 : 1,
                y: isHovered ? -6 : 0,
              }}
              transition={{
                opacity: { duration: 0.2 },
                scale: { type: "spring", stiffness: 250, damping: 15 },
                y: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className={`absolute ${theme.decorColor}`}
              style={{ left: commit.x, top: commit.y }}
            >
              <CommitDot />
            </motion.div>
          ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col">
        <h2 className="mb-1 text-sm font-medium text-text-primary">{label}</h2>

        <motion.p
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mt-auto text-2xl font-semibold tracking-tight text-purple-primary"
        >
          {displayValue.toLocaleString()}
        </motion.p>
      </div>
    </motion.div>
  );
}
