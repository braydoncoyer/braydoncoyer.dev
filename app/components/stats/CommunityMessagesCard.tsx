"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface CommunityMessagesCardProps {
  count: number;
  delay?: number;
}

// Mini card patterns for fan-out effect
const miniCards = [
  { rotate: -12, x: -25, y: 8, gradient: "url(#grad1)" },
  { rotate: 0, x: 0, y: 0, gradient: "url(#grad2)" },
  { rotate: 12, x: 25, y: 8, gradient: "url(#grad3)" },
];

export function CommunityMessagesCard({
  count,
  delay = 0,
}: CommunityMessagesCardProps) {
  const { shouldReduceAnimations } = usePerformanceMode();
  const [isHovered, setIsHovered] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

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

  const cardClassName = "group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-white";

  // Mobile: Plain div (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <Link href="/community-wall" className="block h-full">
        <div className={cardClassName}>
          {/* Dot pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          {/* Hover gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Stacked cards with fan-out animation */}
          <div className="absolute inset-0 flex items-center justify-center pb-16">
            <div className="relative h-32 w-40">
              {miniCards.map((card, index) => (
                <svg
                  key={index}
                  className="absolute left-1/2 top-1/2 w-36"
                  style={{
                    zIndex: index === 1 ? 3 : index === 2 ? 2 : 1,
                    transform: `translate(calc(-50% + ${card.x * 0.6}px), calc(-50% + ${card.y * 0.5}px)) rotate(${card.rotate * 0.8}deg) scale(${1 - (2 - index) * 0.02})`,
                    transformOrigin: "center",
                  }}
                  viewBox="-15 -15 160 155"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#90D2AA" />
                      <stop offset="100%" stopColor="#FEFFB4" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C48EFF" />
                      <stop offset="100%" stopColor="#FCCEED" />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#81E0CA" />
                      <stop offset="100%" stopColor="#E9F2FE" />
                    </linearGradient>
                    <filter id={`shadow${index}`} x="-20%" y="-20%" width="150%" height="150%">
                      <feDropShadow dx="4" dy="4" stdDeviation="8" floodOpacity="0.15" />
                    </filter>
                  </defs>

                  {/* Card background with shadow */}
                  <g filter={`url(#shadow${index})`}>
                    <rect
                      width="120"
                      height="115"
                      x="5"
                      y="5"
                      rx="8"
                      fill="#F7F7F8"
                    />
                  </g>

                  {/* Gradient header area */}
                  <rect
                    x="10"
                    y="10"
                    width="110"
                    height="90"
                    rx="4"
                    fill={card.gradient}
                    opacity="0.85"
                  />

                  {/* Decorative circles on gradient */}
                  <circle cx="85" cy="35" r="25" fill="white" opacity="0.3" />
                  <circle cx="40" cy="60" r="18" fill="white" opacity="0.2" />

                  {/* Text lines */}
                  <rect
                    x="25"
                    y="35"
                    width="50"
                    height="6"
                    rx="3"
                    fill="white"
                    opacity={0.5}
                  />
                  <rect
                    x="25"
                    y="50"
                    width="35"
                    height="6"
                    rx="3"
                    fill="white"
                    opacity={0.5}
                  />

                  {/* Avatar circle - left side */}
                  <circle
                    cx="26"
                    cy="110"
                    r="7"
                    fill="#D1D5DB"
                  />

                  {/* User name line */}
                  <rect
                    x="40"
                    y="106"
                    width="50"
                    height="7"
                    rx="3"
                    fill="#E5E7EB"
                  />
                </svg>
              ))}
            </div>
          </div>

          {/* Content at bottom */}
          <div className="relative z-20 mt-auto">
            <h2 className="mb-1 font-medium text-text-primary">
              Community Messages
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold tabular-nums tracking-tight text-purple-primary">
                {displayCount.toLocaleString()}
              </span>
              <span className="text-sm text-text-tertiary">messages</span>
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
    <Link href="/community-wall" className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={cardClassName}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Hover gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Stacked cards with fan-out animation */}
        <div className="absolute inset-0 flex items-center justify-center pb-16">
          <div className="relative h-32 w-40">
            {miniCards.map((card, index) => (
              <motion.svg
                key={index}
                className="absolute left-1/2 top-1/2 w-36"
                style={{
                  zIndex: index === 1 ? 3 : index === 2 ? 2 : 1,
                  originX: "50%",
                  originY: "50%",
                }}
                initial={{
                  x: "-50%",
                  y: "-50%",
                  rotate: card.rotate * 0.6,
                  scale: 1 - (2 - index) * 0.02,
                }}
                animate={{
                  x: isHovered
                    ? `calc(-50% + ${card.x * 2.2}px)`
                    : `calc(-50% + ${card.x * 0.6}px)`,
                  y: isHovered
                    ? `calc(-50% + ${card.y * 2 - 15}px)`
                    : `calc(-50% + ${card.y * 0.5}px)`,
                  rotate: isHovered ? card.rotate * 2.2 : card.rotate * 0.8,
                  scale: isHovered ? 1 : 1 - (2 - index) * 0.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.05,
                }}
                viewBox="-15 -15 160 155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#90D2AA" />
                    <stop offset="100%" stopColor="#FEFFB4" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C48EFF" />
                    <stop offset="100%" stopColor="#FCCEED" />
                  </linearGradient>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#81E0CA" />
                    <stop offset="100%" stopColor="#E9F2FE" />
                  </linearGradient>
                  <filter id={`shadow${index}`} x="-20%" y="-20%" width="150%" height="150%">
                    <feDropShadow dx="4" dy="4" stdDeviation="8" floodOpacity="0.15" />
                  </filter>
                </defs>

                {/* Card background with shadow */}
                <g filter={`url(#shadow${index})`}>
                  <rect
                    width="120"
                    height="115"
                    x="5"
                    y="5"
                    rx="8"
                    fill="#F7F7F8"
                  />
                </g>

                {/* Gradient header area */}
                <rect
                  x="10"
                  y="10"
                  width="110"
                  height="90"
                  rx="4"
                  fill={card.gradient}
                  opacity="0.85"
                />

                {/* Decorative circles on gradient */}
                <circle cx="85" cy="35" r="25" fill="white" opacity="0.3" />
                <circle cx="40" cy="60" r="18" fill="white" opacity="0.2" />

                {/* Text lines */}
                <motion.rect
                  x="25"
                  y="35"
                  width="50"
                  height="6"
                  rx="3"
                  fill="white"
                  opacity={isHovered ? 0.8 : 0.5}
                  transition={{ duration: 0.3 }}
                />
                <motion.rect
                  x="25"
                  y="50"
                  width="35"
                  height="6"
                  rx="3"
                  fill="white"
                  opacity={isHovered ? 0.8 : 0.5}
                  transition={{ duration: 0.3, delay: 0.05 }}
                />

                {/* Avatar circle - left side */}
                <circle
                  cx="26"
                  cy="110"
                  r="7"
                  fill="#D1D5DB"
                />

                {/* User name line */}
                <rect
                  x="40"
                  y="106"
                  width="50"
                  height="7"
                  rx="3"
                  fill="#E5E7EB"
                />
              </motion.svg>
            ))}
          </div>
        </div>

        {/* Content at bottom */}
        <div className="relative z-20 mt-auto">
          <h2 className="mb-1 font-medium text-text-primary">
            Community Messages
          </h2>
          <div className="flex items-baseline gap-2">
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
          initial={{ x: 8, y: 8, opacity: 0 }}
          animate={{
            x: isHovered ? 0 : 8,
            y: isHovered ? 0 : 8,
            opacity: isHovered ? 1 : 0
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
