"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { BentoCard } from "./BentoCard";

// Bar data with heights as percentages
const bars = [
  { height: 35 },
  { height: 52 },
  { height: 45 },
  { height: 68 },
  { height: 58 },
  { height: 82 },
  { height: 75 },
];

const peakIndex = bars.findIndex(
  (b) => b.height === Math.max(...bars.map((b) => b.height))
);

// Subtle grid lines background with pulse on hover
function GridLines({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute left-0 -right-6 bottom-0 top-8 pointer-events-none">
      {[0, 25, 50, 75, 100].map((percent, i) => (
        <motion.div
          key={percent}
          className="absolute left-0 right-0 border-t border-dashed"
          style={{ bottom: `${percent}%` }}
          initial={{ opacity: 0.4, borderColor: "rgba(209, 213, 219, 0.6)" }}
          animate={{
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.4,
            borderColor: isHovered
              ? "rgba(139, 92, 246, 0.3)"
              : "rgba(209, 213, 219, 0.6)",
          }}
          transition={{
            opacity: {
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              delay: i * 0.1,
              ease: "easeInOut",
            },
            borderColor: { duration: 0.3 },
          }}
        />
      ))}
    </div>
  );
}

// Interpolate Y position on the trend line for a given X percentage
function getYOnLine(xPercent: number): number {
  const totalBars = bars.length;
  const getX = (index: number) => ((index * 2 + 1) / (totalBars * 2)) * 100;

  // Find which segment we're in
  for (let i = 0; i < bars.length - 1; i++) {
    const x1 = getX(i);
    const x2 = getX(i + 1);
    if (xPercent >= x1 && xPercent <= x2) {
      // Linear interpolation between points
      const t = (xPercent - x1) / (x2 - x1);
      const y1 = 100 - bars[i].height;
      const y2 = 100 - bars[i + 1].height;
      return y1 + t * (y2 - y1);
    }
  }
  // Edge cases
  if (xPercent < getX(0)) return 100 - bars[0].height;
  return 100 - bars[bars.length - 1].height;
}

// Trend line connecting bar tops + interactive indicator
function TrendLineWithIndicator({
  isHovered,
  animatedX,
}: {
  isHovered: boolean;
  animatedX: ReturnType<typeof useSpring>;
}) {
  const totalBars = bars.length;

  // Calculate evenly spaced X positions (center of each bar)
  const getX = (index: number) => ((index * 2 + 1) / (totalBars * 2)) * 100;

  // Y is inverted (0 = top, 100 = bottom in SVG)
  const getY = (height: number) => 100 - height;

  // Build points for polyline
  const points = bars.map((bar, i) => `${getX(i)},${getY(bar.height)}`).join(" ");

  // Build area path for gradient fill (line + close to bottom)
  const areaPath = bars
    .map((bar, i) => `${getX(i)},${getY(bar.height)}`)
    .join(" L ");
  const firstX = getX(0);
  const lastX = getX(bars.length - 1);
  const fillPath = `M ${firstX},100 L ${areaPath} L ${lastX},100 Z`;

  // Derive Y from animated X - this keeps the indicator on the line
  const animatedY = useTransform(animatedX, (x) => getYOnLine(x));

  return (
    <svg
      className="absolute left-0 -right-6 bottom-0 top-8 pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.4" />
          <stop offset="50%" stopColor="rgb(139, 92, 246)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity={isHovered ? "0.25" : "0.12"} />
          <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Gradient fill under the line - only on hover */}
      <motion.path
        d={fillPath}
        fill="url(#areaGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Trend line */}
      <motion.polyline
        points={points}
        fill="none"
        stroke="url(#trendGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      {/* Interactive indicator dot */}
      <motion.circle
        cx={animatedX}
        cy={animatedY}
        r="2.5"
        fill="rgb(139, 92, 246)"
        vectorEffect="non-scaling-stroke"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
        style={{
          filter: isHovered
            ? "drop-shadow(0 0 6px rgba(139, 92, 246, 0.8))"
            : "drop-shadow(0 0 3px rgba(139, 92, 246, 0.5))",
        }}
      />

      {/* Pulse ring */}
      <motion.circle
        cx={animatedX}
        cy={animatedY}
        r="2.5"
        fill="none"
        stroke="rgb(139, 92, 246)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        animate={{
          scale: [1, 2],
          opacity: [0.6, 0],
        }}
        transition={{
          scale: { duration: 1.5, repeat: Infinity, ease: "easeOut" },
          opacity: { duration: 1.5, repeat: Infinity, ease: "easeOut" },
        }}
      />
    </svg>
  );
}

// Peak X position for default indicator location
const peakXPosition = ((peakIndex * 2 + 1) / (bars.length * 2)) * 100;

export function StatsBento() {
  const [isHovered, setIsHovered] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  // Spring animation for X position - snaps instantly when hovered, animates back when not
  const animatedX = useSpring(peakXPosition, {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!chartRef.current) return;
    const rect = chartRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    // Clamp to valid range and set immediately (no spring when following mouse)
    animatedX.set(Math.max(0, Math.min(100, percent)));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Animate back to peak position along the path
    animatedX.set(peakXPosition);
  };

  return (
    <div
      ref={chartRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <BentoCard height="h-[220px]" className="group" linkTo="/stats">
        {/* Title */}
        <motion.h2
          className="relative z-10 font-medium text-text-primary"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Stats
        </motion.h2>

        {/* Background grid */}
        <GridLines isHovered={isHovered} />

        {/* Bar chart */}
        <div className="absolute left-0 -right-6 bottom-0 top-8 flex items-end justify-around">
          {bars.map((bar, i) => (
            <div key={i} className="relative flex flex-col items-center" style={{ width: `${100 / bars.length}%` }}>
              {/* Main bar */}
              <motion.div
                className="relative w-3/4 overflow-hidden rounded-t-md"
                initial={{ height: 0 }}
                animate={{ height: `${bar.height}%` }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                style={{
                  background:
                    i === peakIndex
                      ? "linear-gradient(to top, rgb(99, 102, 241), rgb(139, 92, 246))"
                      : isHovered
                        ? "linear-gradient(to top, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.6))"
                        : "linear-gradient(to top, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.3))",
                  boxShadow:
                    i === peakIndex && isHovered
                      ? "0 0 20px rgba(139, 92, 246, 0.4)"
                      : "none",
                  transition: "background 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Inner highlight */}
                <div
                  className="absolute inset-x-0 top-0 h-1/3 rounded-t-md"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)",
                  }}
                />

                {/* Shine sweep on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent"
                  animate={{ y: isHovered ? [100, -100] : 100 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: isHovered ? i * 0.03 : 0,
                  }}
                  style={{ height: "200%" }}
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Trend line with interactive indicator - rendered on top */}
        <TrendLineWithIndicator isHovered={isHovered} animatedX={animatedX} />
      </BentoCard>
    </div>
  );
}
