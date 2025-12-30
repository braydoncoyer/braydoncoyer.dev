"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatCardProps {
  label: string;
  value: number | string;
  suffix?: string;
  icon?: React.ReactNode;
  animate?: boolean;
  delay?: number;
  className?: string;
}

export function StatCard({
  label,
  value,
  suffix,
  icon,
  animate = true,
  delay = 0,
  className = "",
}: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const numericValue = typeof value === "number" ? value : null;
  const [displayValue, setDisplayValue] = useState(animate ? 0 : numericValue);

  useEffect(() => {
    if (!animate || numericValue === null) return;

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
      setDisplayValue(Math.floor(eased * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [numericValue, animate, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-white ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-20 flex h-full flex-col">
        {icon && (
          <motion.div
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-primary/10 text-purple-primary"
          >
            {icon}
          </motion.div>
        )}

        <h2 className="mb-2 font-medium text-text-primary">{label}</h2>

        <motion.p
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mt-auto text-3xl font-semibold tracking-tight text-purple-primary"
        >
          {numericValue !== null ? (
            <>
              {displayValue?.toLocaleString()}
              {suffix && (
                <span className="ml-1 text-lg font-normal text-text-secondary">
                  {suffix}
                </span>
              )}
            </>
          ) : (
            value
          )}
        </motion.p>
      </div>
    </motion.div>
  );
}
