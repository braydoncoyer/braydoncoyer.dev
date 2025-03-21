// components/article-reactions.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toggleReaction } from "../db/actions";
import { motion, AnimatePresence } from "framer-motion";

type ReactionType = "like" | "heart" | "celebrate" | "insightful";

interface ArticleReactionsProps {
  slug: string;
  initialReactions: Record<string, number>;
  initialUserReactions: string[];
}

const CelebrateSVG = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors duration-200"
  >
    <path
      d="M8.89062 9.28125L4.87279 17.7937C4.44606 18.628 5.29889 19.5379 6.16008 19.1671L14.6016 16.1875"
      stroke={isActive ? "#4f46e5" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200"
      fill={isActive ? "#c7d2fe" : "transparent"}
    />
    <path
      d="M13.3196 10.9774C14.9594 12.8695 15.698 15.085 14.9691 15.9259C14.2403 16.7669 12.3202 15.9147 10.6804 14.0226C9.04057 12.1305 8.30205 9.91499 9.03085 9.07406C9.75966 8.23313 11.6798 9.08527 13.3196 10.9774Z"
      stroke={isActive ? "#4f46e5" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200"
      fill={isActive ? "#c7d2fe" : "transparent"}
    />
    <path
      d="M9.49994 17.6367C8.90314 17.2553 8.27339 16.707 7.68032 16.0227C7.28976 15.5721 6.95033 15.1031 6.66968 14.6387"
      stroke={isActive ? "#4f46e5" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200"
    />
    <motion.path
      d="M11.5 5C11.5 5.27614 11.2761 5.5 11 5.5C10.7239 5.5 10.5 5.27614 10.5 5C10.5 4.72386 10.7239 4.5 11 4.5C11.2761 4.5 11.5 4.72386 11.5 5Z"
      stroke={isActive ? "#4f46e5" : "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={isActive ? "#eab308" : "transparent"}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        pathLength: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.15 },
      }}
    />
    <motion.path
      d="M15.75 9.25L15.8787 9.12132C17.0503 7.94975 17.0503 6.05025 15.8787 4.87868L15.75 4.75"
      stroke={isActive ? "#6366f1" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        pathLength: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.15 },
      }}
    />
    <motion.path
      d="M17 13.0001L17.2929 12.7072C17.6834 12.3167 18.3166 12.3167 18.7071 12.7072L19 13.0001"
      stroke={isActive ? "#4f46e5" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        pathLength: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.15 },
      }}
    />
  </svg>
);

const InsightfulSVG = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors duration-200"
  >
    <motion.path
      d="M12 4.75C8.5 4.75 6.75 7.5 6.75 10C6.75 14 9.75 14.5 9.75 16V18.2505C9.75 18.8028 10.1977 19.25 10.75 19.25H13.25C13.8023 19.25 14.25 18.8028 14.25 18.2505V16C14.25 14.5 17.25 14 17.25 10C17.25 7.5 15.5 4.75 12 4.75Z"
      stroke={isActive ? "#d97706" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={isActive ? "#fcd34d" : "transparent"}
      className="transition-all duration-200"
    />
    <motion.path
      d="M10 16.75H14"
      stroke={isActive ? "#d97706" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Light rays - with increased gaps and varied lengths */}
    <motion.path
      d="M3.5 9H5.75" // longer horizontal ray, moved further left
      stroke={isActive ? "#d97706" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0, pathOffset: 1 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
        pathOffset: isActive ? 0 : 1,
      }}
      transition={{
        pathLength: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.15 },
        pathOffset: { duration: 0.3 },
        delay: isActive ? 0 : 0.4,
      }}
    />
    <motion.path
      d="M5 3.75L7.5 6" // longer diagonal, moved further from bulb
      stroke={isActive ? "#d97706" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0, pathOffset: 1 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
        pathOffset: isActive ? 0 : 1,
      }}
      transition={{
        pathLength: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.15 },
        pathOffset: { duration: 0.3 },
        delay: isActive ? 0.1 : 0.3,
      }}
    />
    <motion.path
      d="M12 1.5V3.75" // longer vertical ray, moved higher
      stroke={isActive ? "#d97706" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0, pathOffset: 1 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
        pathOffset: isActive ? 0 : 1,
      }}
      transition={{
        pathLength: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.15 },
        pathOffset: { duration: 0.3 },
        delay: isActive ? 0.2 : 0.2,
      }}
    />
    <motion.path
      d="M19 3.75L16.5 6" // longer diagonal, moved further from bulb
      stroke={isActive ? "#d97706" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0, pathOffset: 1 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
        pathOffset: isActive ? 0 : 1,
      }}
      transition={{
        pathLength: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.15 },
        pathOffset: { duration: 0.3 },
        delay: isActive ? 0.3 : 0.1,
      }}
    />
    <motion.path
      d="M20.5 9H18.25" // shorter horizontal ray, moved further right
      stroke={isActive ? "#d97706" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0, pathOffset: 1 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
        pathOffset: isActive ? 0 : 1,
      }}
      transition={{
        pathLength: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.15 },
        pathOffset: { duration: 0.3 },
        delay: isActive ? 0.4 : 0,
      }}
    />
  </svg>
);

const HeartSVG = ({ isActive }: { isActive: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className="relative -top-[2px] left-[1px]"
  >
    {/* Main heart - synchronized stroke and fill transitions */}
    <motion.path
      d="M9.497 10.877c-.95-1.233-2.534-1.565-3.724-.436-1.19 1.13-1.357 3.019-.423 4.355l4.147 4.454 4.146-4.454c.934-1.336.787-3.237-.423-4.355-1.21-1.117-2.774-.797-3.723.436Z"
      animate={{
        fill: isActive ? "#fda4af" : "transparent",
        stroke: isActive ? "#e11d48" : "currentColor",
      }}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      transition={{
        fill: { duration: 0.2, delay: isActive ? 0 : 0.3 },
        stroke: { duration: 0.2, delay: isActive ? 0 : 0.3 },
      }}
    />
    {/* Secondary heart - appears after main heart on entry, disappears first on exit */}
    <motion.path
      d="M16.998 5.284c-.45-.584-1.2-.742-1.763-.207a1.606 1.606 0 0 0-.2 2.063l1.963 2.11 1.964-2.11c.443-.633.373-1.533-.2-2.063-.573-.529-1.314-.377-1.764.207Z"
      animate={{
        fill: isActive ? "#fda4af" : "transparent",
        stroke: isActive ? "#e11d48" : "currentColor",
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
      }}
      initial={{ pathLength: 0, opacity: 0 }}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      transition={{
        fill: { duration: 0.2, delay: isActive ? 0.2 : 0 },
        stroke: { duration: 0.2, delay: isActive ? 0.2 : 0 },
        pathLength: {
          type: "spring",
          stiffness: 400,
          damping: 40,
          delay: isActive ? 0.3 : 0,
        },
        opacity: { duration: 0.15, delay: isActive ? 0.2 : 0 },
      }}
    />
  </svg>
);

const LikeSVG = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="relative -top-[1px]"
  >
    <motion.g
      animate={{
        rotate: isActive ? [0, -15, 20, 0] : 0,
        transformOrigin: "center",
      }}
      transition={{
        rotate: {
          duration: 0.6,
          ease: "easeInOut",
          times: [0, 0.3, 0.6, 1],
        },
      }}
    >
      {/* Main thumb path */}
      <path
        d="M12.25 9.75001H11.5C11.5 10.1642 11.8358 10.5 12.25 10.5V9.75001ZM18 9.75001L18 9.00001H18V9.75001ZM12.25 6.897L11.5 6.897V6.897H12.25ZM9.77107 5.59894L9.02168 5.56871L9.02168 5.56871L9.77107 5.59894ZM7.25 9.75001L7.25 9.00001C7.05109 9.00001 6.86032 9.07903 6.71967 9.21968C6.57902 9.36033 6.5 9.5511 6.5 9.75001L7.25 9.75001ZM18 12.25L18 11.5H18V12.25ZM16.75 11.5C16.3358 11.5 16 11.8358 16 12.25C16 12.6642 16.3358 13 16.75 13V11.5ZM17.2658 17.5267L16.523 17.4234L17.2658 17.5267ZM15.0809 19.2407L15.0044 19.9868L15.0044 19.9868L15.0809 19.2407ZM8.14797 18.5296L8.22449 17.7835L8.22449 17.7835L8.14797 18.5296ZM7.25 17.5348L8 17.5348L7.25 17.5348ZM10.9795 4.84133L10.6441 5.51215L10.6441 5.51215L10.9795 4.84133ZM12.25 10.5H18V9.00001H12.25V10.5ZM13 9.75001V6.897H11.5V9.75001H13ZM9.02168 5.56871C8.98986 6.35737 8.87029 7.28162 8.55917 7.98426C8.25916 8.66183 7.85682 9.00001 7.25 9.00001L7.25 10.5C8.66762 10.5 9.49282 9.58057 9.93074 8.59156C10.3575 7.62762 10.4863 6.47634 10.5205 5.62917L9.02168 5.56871ZM18 11.5H16.75V13H18V11.5ZM17.2572 12.1467L16.523 17.4234L18.0087 17.6301L18.7428 12.3534L17.2572 12.1467ZM15.1574 18.4946L8.22449 17.7835L8.07145 19.2757L15.0044 19.9868L15.1574 18.4946ZM8 17.5348L8 9.75001L6.5 9.75001L6.5 17.5348L8 17.5348ZM8.22449 17.7835C8.09697 17.7704 8 17.663 8 17.5348L6.5 17.5348C6.5 18.4322 7.17877 19.1841 8.07145 19.2757L8.22449 17.7835ZM18.5 11C18.5 11.2762 18.2761 11.5 18 11.5L18 13C19.1046 13 20 12.1046 20 11L18.5 11ZM16.523 17.4234C16.4303 18.0898 15.8267 18.5632 15.1574 18.4946L15.0044 19.9868C16.4769 20.1378 17.8047 19.0962 18.0087 17.6301L16.523 17.4234ZM11.3149 4.17051C10.2352 3.63063 9.06523 4.48919 9.02168 5.56871L10.5205 5.62917C10.5217 5.59822 10.5406 5.5562 10.5864 5.52693C10.6071 5.51378 10.6234 5.51013 10.6311 5.50947C10.6361 5.50905 10.6385 5.50932 10.6441 5.51215L11.3149 4.17051ZM13 6.897C13 5.74239 12.3477 4.68687 11.3149 4.17051L10.6441 5.51215C11.1687 5.77443 11.5 6.31055 11.5 6.897L13 6.897ZM18 10.5C18.2761 10.5 18.5 10.7239 18.5 11L20 11C20 9.89544 19.1046 9.00001 18 9.00001L18 10.5Z"
        fill={isActive ? "#3b82f6" : "currentColor"}
      />
      {/* Base of thumb */}
      <path
        d="M5.75 9.5H6.25V8H5.75V9.5ZM6.5 9.75V18.25H8V9.75H6.5ZM6.25 18.5H5.75V20H6.25V18.5ZM5.5 18.25V9.75H4V18.25H5.5ZM5.75 18.5C5.61193 18.5 5.5 18.3881 5.5 18.25H4C4 19.2165 4.7835 20 5.75 20V18.5ZM6.5 18.25C6.5 18.3881 6.38807 18.5 6.25 18.5V20C7.2165 20 8 19.2165 8 18.25H6.5ZM6.25 9.5C6.38807 9.5 6.5 9.61193 6.5 9.75H8C8 8.7835 7.2165 8 6.25 8V9.5ZM5.75 8C4.7835 8 4 8.7835 4 9.75H5.5C5.5 9.61193 5.61193 9.5 5.75 9.5V8Z"
        fill={isActive ? "#3b82f6" : "currentColor"}
      />
    </motion.g>
  </svg>
);

const REACTION_EMOJIS: Record<
  ReactionType,
  (isActive: boolean) => React.ReactNode
> = {
  like: (isActive) => <LikeSVG isActive={isActive} />,
  heart: (isActive) => <HeartSVG isActive={isActive} />,
  celebrate: (isActive) => <CelebrateSVG isActive={isActive} />,
  insightful: (isActive) => <InsightfulSVG isActive={isActive} />,
};

const AnimatedNumber = ({ number }: { number: number }) => {
  const [prevNumber, setPrevNumber] = useState(number);

  useEffect(() => {
    if (number !== prevNumber) {
      setPrevNumber(number);
    }
  }, [number]);

  const isIncrementing = number > prevNumber;

  return (
    <div className="relative inline-flex h-[1.2em] min-w-[2.5ch] items-center overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={number}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: isIncrementing ? "-100%" : "100%" }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center font-mono"
        >
          {number}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default function ArticleReactions({
  slug,
  initialReactions,
  initialUserReactions,
}: ArticleReactionsProps) {
  const router = useRouter();
  const [reactions, setReactions] =
    useState<Record<string, number>>(initialReactions);
  const [userReactions, setUserReactions] =
    useState<string[]>(initialUserReactions);
  const [isSubmitting, setIsSubmitting] = useState<ReactionType | null>(null);

  const handleReaction = async (type: ReactionType) => {
    // Prevent multiple clicks
    if (isSubmitting) return;

    setIsSubmitting(type);

    try {
      // Optimistic UI update
      const hasReacted = userReactions.includes(type);

      // Update local state optimistically
      if (hasReacted) {
        setUserReactions((prev) => prev.filter((r) => r !== type));
        setReactions((prev) => ({
          ...prev,
          [type]: Math.max(0, (prev[type] || 0) - 1),
        }));
      } else {
        setUserReactions((prev) => [...prev, type]);
        setReactions((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }));
      }

      // Call server action
      const result = await toggleReaction(slug, type);

      // If server action successful, update with server data
      if (result.success && result.userReactions) {
        // Update with actual server values
        setUserReactions(result.userReactions);
        router.refresh(); // Refresh to get updated counts from server
      } else {
        // If there was an error, revert optimistic update
        console.error("Error toggling reaction");

        // Revert optimistic update
        if (hasReacted) {
          setUserReactions((prev) => [...prev, type]);
          setReactions((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }));
        } else {
          setUserReactions((prev) => prev.filter((r) => r !== type));
          setReactions((prev) => ({
            ...prev,
            [type]: Math.max(0, (prev[type] || 0) - 1),
          }));
        }
      }
    } catch (error) {
      console.error("Error handling reaction:", error);
    } finally {
      setIsSubmitting(null);
    }
  };

  return (
    <div className="my-6 flex flex-wrap items-center gap-3">
      {Object.entries(REACTION_EMOJIS).map(([type, emoji]) => {
        const count = reactions[type] || 0;
        const isActive = userReactions.includes(type);

        return (
          <motion.button
            key={type}
            onClick={() => handleReaction(type as ReactionType)}
            disabled={isSubmitting !== null}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center gap-1 rounded-full border px-3 py-1 text-sm ${
              isActive
                ? "bg-white text-text-primary"
                : "bg-bg-primary text-text-secondary hover:bg-slate-100"
            } `}
            aria-label={`${isActive ? "Remove" : "Add"} ${type} reaction`}
          >
            <span>{emoji(isActive)}</span>
            {count > 0 && <AnimatedNumber number={count} />}
          </motion.button>
        );
      })}
    </div>
  );
}
