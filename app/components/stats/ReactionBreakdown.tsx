"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { ReactionType } from "@/app/lib/stats/types";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface ReactionBreakdownProps {
  reactions: Record<ReactionType, number>;
  delay?: number;
}

// SVG Icons - Mobile (static) and Desktop (animated) versions
const LikeSVG = ({ isHovered, shouldReduceAnimations }: { isHovered: boolean; shouldReduceAnimations: boolean }) => {
  if (shouldReduceAnimations) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M12.25 9.75001H11.5C11.5 10.1642 11.8358 10.5 12.25 10.5V9.75001ZM18 9.75001L18 9.00001H18V9.75001ZM12.25 6.897L11.5 6.897V6.897H12.25ZM9.77107 5.59894L9.02168 5.56871L9.02168 5.56871L9.77107 5.59894ZM7.25 9.75001L7.25 9.00001C7.05109 9.00001 6.86032 9.07903 6.71967 9.21968C6.57902 9.36033 6.5 9.5511 6.5 9.75001L7.25 9.75001ZM18 12.25L18 11.5H18V12.25ZM16.75 11.5C16.3358 11.5 16 11.8358 16 12.25C16 12.6642 16.3358 13 16.75 13V11.5ZM17.2658 17.5267L16.523 17.4234L17.2658 17.5267ZM15.0809 19.2407L15.0044 19.9868L15.0044 19.9868L15.0809 19.2407ZM8.14797 18.5296L8.22449 17.7835L8.22449 17.7835L8.14797 18.5296ZM7.25 17.5348L8 17.5348L7.25 17.5348ZM10.9795 4.84133L10.6441 5.51215L10.6441 5.51215L10.9795 4.84133ZM12.25 10.5H18V9.00001H12.25V10.5ZM13 9.75001V6.897H11.5V9.75001H13ZM9.02168 5.56871C8.98986 6.35737 8.87029 7.28162 8.55917 7.98426C8.25916 8.66183 7.85682 9.00001 7.25 9.00001L7.25 10.5C8.66762 10.5 9.49282 9.58057 9.93074 8.59156C10.3575 7.62762 10.4863 6.47634 10.5205 5.62917L9.02168 5.56871ZM18 11.5H16.75V13H18V11.5ZM17.2572 12.1467L16.523 17.4234L18.0087 17.6301L18.7428 12.3534L17.2572 12.1467ZM15.1574 18.4946L8.22449 17.7835L8.07145 19.2757L15.0044 19.9868L15.1574 18.4946ZM8 17.5348L8 9.75001L6.5 9.75001L6.5 17.5348L8 17.5348ZM8.22449 17.7835C8.09697 17.7704 8 17.663 8 17.5348L6.5 17.5348C6.5 18.4322 7.17877 19.1841 8.07145 19.2757L8.22449 17.7835ZM18.5 11C18.5 11.2762 18.2761 11.5 18 11.5L18 13C19.1046 13 20 12.1046 20 11L18.5 11ZM16.523 17.4234C16.4303 18.0898 15.8267 18.5632 15.1574 18.4946L15.0044 19.9868C16.4769 20.1378 17.8047 19.0962 18.0087 17.6301L16.523 17.4234ZM11.3149 4.17051C10.2352 3.63063 9.06523 4.48919 9.02168 5.56871L10.5205 5.62917C10.5217 5.59822 10.5406 5.5562 10.5864 5.52693C10.6071 5.51378 10.6234 5.51013 10.6311 5.50947C10.6361 5.50905 10.6385 5.50932 10.6441 5.51215L11.3149 4.17051ZM13 6.897C13 5.74239 12.3477 4.68687 11.3149 4.17051L10.6441 5.51215C11.1687 5.77443 11.5 6.31055 11.5 6.897L13 6.897ZM18 10.5C18.2761 10.5 18.5 10.7239 18.5 11L20 11C20 9.89544 19.1046 9.00001 18 9.00001L18 10.5Z" fill="#64748b" />
          <path d="M5.75 9.5H6.25V8H5.75V9.5ZM6.5 9.75V18.25H8V9.75H6.5ZM6.25 18.5H5.75V20H6.25V18.5ZM5.5 18.25V9.75H4V18.25H5.5ZM5.75 18.5C5.61193 18.5 5.5 18.3881 5.5 18.25H4C4 19.2165 4.7835 20 5.75 20V18.5ZM6.5 18.25C6.5 18.3881 6.38807 18.5 6.25 18.5V20C7.2165 20 8 19.2165 8 18.25H6.5ZM6.25 9.5C6.38807 9.5 6.5 9.61193 6.5 9.75H8C8 8.7835 7.2165 8 6.25 8V9.5ZM5.75 8C4.7835 8 4 8.7835 4 9.75H5.5C5.5 9.61193 5.61193 9.5 5.75 9.5V8Z" fill="#64748b" />
        </g>
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g animate={{ rotate: isHovered ? [0, -15, 20, 0] : 0 }} transition={{ rotate: { duration: 0.6, ease: "easeInOut", times: [0, 0.3, 0.6, 1] } }} style={{ transformOrigin: "center" }}>
        <path d="M12.25 9.75001H11.5C11.5 10.1642 11.8358 10.5 12.25 10.5V9.75001ZM18 9.75001L18 9.00001H18V9.75001ZM12.25 6.897L11.5 6.897V6.897H12.25ZM9.77107 5.59894L9.02168 5.56871L9.02168 5.56871L9.77107 5.59894ZM7.25 9.75001L7.25 9.00001C7.05109 9.00001 6.86032 9.07903 6.71967 9.21968C6.57902 9.36033 6.5 9.5511 6.5 9.75001L7.25 9.75001ZM18 12.25L18 11.5H18V12.25ZM16.75 11.5C16.3358 11.5 16 11.8358 16 12.25C16 12.6642 16.3358 13 16.75 13V11.5ZM17.2658 17.5267L16.523 17.4234L17.2658 17.5267ZM15.0809 19.2407L15.0044 19.9868L15.0044 19.9868L15.0809 19.2407ZM8.14797 18.5296L8.22449 17.7835L8.22449 17.7835L8.14797 18.5296ZM7.25 17.5348L8 17.5348L7.25 17.5348ZM10.9795 4.84133L10.6441 5.51215L10.6441 5.51215L10.9795 4.84133ZM12.25 10.5H18V9.00001H12.25V10.5ZM13 9.75001V6.897H11.5V9.75001H13ZM9.02168 5.56871C8.98986 6.35737 8.87029 7.28162 8.55917 7.98426C8.25916 8.66183 7.85682 9.00001 7.25 9.00001L7.25 10.5C8.66762 10.5 9.49282 9.58057 9.93074 8.59156C10.3575 7.62762 10.4863 6.47634 10.5205 5.62917L9.02168 5.56871ZM18 11.5H16.75V13H18V11.5ZM17.2572 12.1467L16.523 17.4234L18.0087 17.6301L18.7428 12.3534L17.2572 12.1467ZM15.1574 18.4946L8.22449 17.7835L8.07145 19.2757L15.0044 19.9868L15.1574 18.4946ZM8 17.5348L8 9.75001L6.5 9.75001L6.5 17.5348L8 17.5348ZM8.22449 17.7835C8.09697 17.7704 8 17.663 8 17.5348L6.5 17.5348C6.5 18.4322 7.17877 19.1841 8.07145 19.2757L8.22449 17.7835ZM18.5 11C18.5 11.2762 18.2761 11.5 18 11.5L18 13C19.1046 13 20 12.1046 20 11L18.5 11ZM16.523 17.4234C16.4303 18.0898 15.8267 18.5632 15.1574 18.4946L15.0044 19.9868C16.4769 20.1378 17.8047 19.0962 18.0087 17.6301L16.523 17.4234ZM11.3149 4.17051C10.2352 3.63063 9.06523 4.48919 9.02168 5.56871L10.5205 5.62917C10.5217 5.59822 10.5406 5.5562 10.5864 5.52693C10.6071 5.51378 10.6234 5.51013 10.6311 5.50947C10.6361 5.50905 10.6385 5.50932 10.6441 5.51215L11.3149 4.17051ZM13 6.897C13 5.74239 12.3477 4.68687 11.3149 4.17051L10.6441 5.51215C11.1687 5.77443 11.5 6.31055 11.5 6.897L13 6.897ZM18 10.5C18.2761 10.5 18.5 10.7239 18.5 11L20 11C20 9.89544 19.1046 9.00001 18 9.00001L18 10.5Z" fill={isHovered ? "#3b82f6" : "#64748b"} className="transition-colors duration-200" />
        <path d="M5.75 9.5H6.25V8H5.75V9.5ZM6.5 9.75V18.25H8V9.75H6.5ZM6.25 18.5H5.75V20H6.25V18.5ZM5.5 18.25V9.75H4V18.25H5.5ZM5.75 18.5C5.61193 18.5 5.5 18.3881 5.5 18.25H4C4 19.2165 4.7835 20 5.75 20V18.5ZM6.5 18.25C6.5 18.3881 6.38807 18.5 6.25 18.5V20C7.2165 20 8 19.2165 8 18.25H6.5ZM6.25 9.5C6.38807 9.5 6.5 9.61193 6.5 9.75H8C8 8.7835 7.2165 8 6.25 8V9.5ZM5.75 8C4.7835 8 4 8.7835 4 9.75H5.5C5.5 9.61193 5.61193 9.5 5.75 9.5V8Z" fill={isHovered ? "#3b82f6" : "#64748b"} className="transition-colors duration-200" />
      </motion.g>
    </svg>
  );
};

const HeartSVG = ({ isHovered, shouldReduceAnimations }: { isHovered: boolean; shouldReduceAnimations: boolean }) => {
  if (shouldReduceAnimations) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path d="M9.497 10.877c-.95-1.233-2.534-1.565-3.724-.436-1.19 1.13-1.357 3.019-.423 4.355l4.147 4.454 4.146-4.454c.934-1.336.787-3.237-.423-4.355-1.21-1.117-2.774-.797-3.723.436Z" fill="transparent" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
      <motion.path d="M9.497 10.877c-.95-1.233-2.534-1.565-3.724-.436-1.19 1.13-1.357 3.019-.423 4.355l4.147 4.454 4.146-4.454c.934-1.336.787-3.237-.423-4.355-1.21-1.117-2.774-.797-3.723.436Z" animate={{ fill: isHovered ? "#fda4af" : "transparent", stroke: isHovered ? "#e11d48" : "#64748b" }} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transition={{ duration: 0.2 }} />
      <motion.path d="M16.998 5.284c-.45-.584-1.2-.742-1.763-.207a1.606 1.606 0 0 0-.2 2.063l1.963 2.11 1.964-2.11c.443-.633.373-1.533-.2-2.063-.573-.529-1.314-.377-1.764.207Z" animate={{ fill: isHovered ? "#fda4af" : "transparent", stroke: isHovered ? "#e11d48" : "#64748b", opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transition={{ duration: 0.3 }} />
    </svg>
  );
};

const CelebrateSVG = ({ isHovered, shouldReduceAnimations }: { isHovered: boolean; shouldReduceAnimations: boolean }) => {
  if (shouldReduceAnimations) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.89062 9.28125L4.87279 17.7937C4.44606 18.628 5.29889 19.5379 6.16008 19.1671L14.6016 16.1875" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
        <path d="M13.3196 10.9774C14.9594 12.8695 15.698 15.085 14.9691 15.9259C14.2403 16.7669 12.3202 15.9147 10.6804 14.0226C9.04057 12.1305 8.30205 9.91499 9.03085 9.07406C9.75966 8.23313 11.6798 9.08527 13.3196 10.9774Z" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
        <path d="M11.5 5C11.5 5.27614 11.2761 5.5 11 5.5C10.7239 5.5 10.5 5.27614 10.5 5C10.5 4.72386 10.7239 4.5 11 4.5C11.2761 4.5 11.5 4.72386 11.5 5Z" stroke="#64748b" fill="transparent" />
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.89062 9.28125L4.87279 17.7937C4.44606 18.628 5.29889 19.5379 6.16008 19.1671L14.6016 16.1875" stroke={isHovered ? "#4f46e5" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={isHovered ? "#c7d2fe" : "transparent"} className="transition-all duration-200" />
      <path d="M13.3196 10.9774C14.9594 12.8695 15.698 15.085 14.9691 15.9259C14.2403 16.7669 12.3202 15.9147 10.6804 14.0226C9.04057 12.1305 8.30205 9.91499 9.03085 9.07406C9.75966 8.23313 11.6798 9.08527 13.3196 10.9774Z" stroke={isHovered ? "#4f46e5" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={isHovered ? "#c7d2fe" : "transparent"} className="transition-all duration-200" />
      <motion.path d="M11.5 5C11.5 5.27614 11.2761 5.5 11 5.5C10.7239 5.5 10.5 5.27614 10.5 5C10.5 4.72386 10.7239 4.5 11 4.5C11.2761 4.5 11.5 4.72386 11.5 5Z" stroke={isHovered ? "#4f46e5" : "#64748b"} fill={isHovered ? "#eab308" : "transparent"} animate={{ opacity: isHovered ? 1 : 0.3 }} />
      <motion.path d="M15.75 9.25L15.8787 9.12132C17.0503 7.94975 17.0503 6.05025 15.8787 4.87868L15.75 4.75" stroke={isHovered ? "#6366f1" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0 }} />
      <motion.path d="M17 13.0001L17.2929 12.7072C17.6834 12.3167 18.3166 12.3167 18.7071 12.7072L19 13.0001" stroke={isHovered ? "#4f46e5" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0 }} />
    </svg>
  );
};

const InsightfulSVG = ({ isHovered, shouldReduceAnimations }: { isHovered: boolean; shouldReduceAnimations: boolean }) => {
  if (shouldReduceAnimations) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.75C8.5 4.75 6.75 7.5 6.75 10C6.75 14 9.75 14.5 9.75 16V18.2505C9.75 18.8028 10.1977 19.25 10.75 19.25H13.25C13.8023 19.25 14.25 18.8028 14.25 18.2505V16C14.25 14.5 17.25 14 17.25 10C17.25 7.5 15.5 4.75 12 4.75Z" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
        <path d="M10 16.75H14" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M12 4.75C8.5 4.75 6.75 7.5 6.75 10C6.75 14 9.75 14.5 9.75 16V18.2505C9.75 18.8028 10.1977 19.25 10.75 19.25H13.25C13.8023 19.25 14.25 18.8028 14.25 18.2505V16C14.25 14.5 17.25 14 17.25 10C17.25 7.5 15.5 4.75 12 4.75Z" stroke={isHovered ? "#d97706" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={isHovered ? "#fcd34d" : "transparent"} className="transition-all duration-200" />
      <path d="M10 16.75H14" stroke={isHovered ? "#d97706" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" className="transition-colors duration-200" />
      <motion.path d="M3.5 9H5.75" stroke={isHovered ? "#d97706" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0 }} />
      <motion.path d="M5 3.75L7.5 6" stroke={isHovered ? "#d97706" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0 }} />
      <motion.path d="M12 1.5V3.75" stroke={isHovered ? "#d97706" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0 }} />
      <motion.path d="M19 3.75L16.5 6" stroke={isHovered ? "#d97706" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0 }} />
      <motion.path d="M20.5 9H18.25" stroke={isHovered ? "#d97706" : "#64748b"} strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0 }} />
    </svg>
  );
};

const REACTION_CONFIG: Record<
  ReactionType,
  {
    Icon: React.FC<{ isHovered: boolean; shouldReduceAnimations: boolean }>;
    label: string;
    bgColor: string;
    hoverBg: string;
  }
> = {
  like: {
    Icon: LikeSVG,
    label: "Likes",
    bgColor: "bg-blue-50",
    hoverBg: "bg-blue-100",
  },
  heart: {
    Icon: HeartSVG,
    label: "Hearts",
    bgColor: "bg-rose-50",
    hoverBg: "bg-rose-100",
  },
  celebrate: {
    Icon: CelebrateSVG,
    label: "Celebrates",
    bgColor: "bg-indigo-50",
    hoverBg: "bg-indigo-100",
  },
  insightful: {
    Icon: InsightfulSVG,
    label: "Insightful",
    bgColor: "bg-amber-50",
    hoverBg: "bg-amber-100",
  },
};

export function ReactionBreakdown({
  reactions,
  delay = 0,
}: ReactionBreakdownProps) {
  const { shouldReduceAnimations } = usePerformanceMode();
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredReaction, setHoveredReaction] = useState<ReactionType | null>(null);
  const total = Object.values(reactions).reduce((sum, count) => sum + count, 0);

  const cardClassName = "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-white";

  // Mobile: Plain divs (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <div className={cardClassName}>
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-20 flex h-full flex-col">
          <h2 className="mb-2 font-medium text-text-primary">Reactions</h2>
          <p className="mb-4 text-3xl font-bold tabular-nums tracking-tight text-purple-primary">
            {total.toLocaleString()}
            <span className="ml-2 text-sm font-normal text-text-tertiary">total</span>
          </p>

          <div className="grid flex-1 grid-cols-2 gap-3">
            {(Object.keys(REACTION_CONFIG) as ReactionType[]).map((type) => {
              const count = reactions[type] || 0;
              const config = REACTION_CONFIG[type];

              return (
                <div key={type} className={`flex flex-col items-center justify-center rounded-xl border border-border-primary/50 p-3 bg-white/50`}>
                  <div className="mb-2">
                    <config.Icon isHovered={false} shouldReduceAnimations={shouldReduceAnimations} />
                  </div>
                  <span className="text-lg font-semibold tabular-nums text-text-primary">{count.toLocaleString()}</span>
                  <span className="text-xs text-text-tertiary">{config.label}</span>
                </div>
              );
            })}
          </div>
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
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-20 flex h-full flex-col">
        <h2 className="mb-2 font-medium text-text-primary">Reactions</h2>
        <motion.p
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mb-4 text-3xl font-bold tabular-nums tracking-tight text-purple-primary"
        >
          {total.toLocaleString()}
          <span className="ml-2 text-sm font-normal text-text-tertiary">total</span>
        </motion.p>

        <div className="grid flex-1 grid-cols-2 gap-3">
          {(Object.keys(REACTION_CONFIG) as ReactionType[]).map((type, index) => {
            const count = reactions[type] || 0;
            const config = REACTION_CONFIG[type];
            const isReactionHovered = hoveredReaction === type;

            return (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                onMouseEnter={() => setHoveredReaction(type)}
                onMouseLeave={() => setHoveredReaction(null)}
                className={`flex flex-col items-center justify-center rounded-xl border border-border-primary/50 p-3 transition-all duration-200 ${
                  isReactionHovered
                    ? `${config.hoverBg} border-transparent`
                    : "bg-white/50"
                }`}
              >
                <motion.div
                  animate={{ scale: isReactionHovered ? 1.15 : 1, y: isReactionHovered ? -2 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="mb-2"
                >
                  <config.Icon isHovered={isReactionHovered} shouldReduceAnimations={shouldReduceAnimations} />
                </motion.div>
                <motion.span
                  animate={{ scale: isReactionHovered ? 1.1 : 1 }}
                  className="text-lg font-semibold tabular-nums text-text-primary"
                >
                  {count.toLocaleString()}
                </motion.span>
                <span className="text-xs text-text-tertiary">{config.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
