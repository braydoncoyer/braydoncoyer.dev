"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedTextProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
};

export function AnimatedText({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  as = "div",
}: AnimatedTextProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        ease: "easeOut",
        delay,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
