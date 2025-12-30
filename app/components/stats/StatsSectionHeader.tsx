"use client";

import { motion } from "framer-motion";

interface StatsSectionHeaderProps {
  title: string;
  description?: string;
  delay?: number;
}

export function StatsSectionHeader({
  title,
  description,
  delay = 0,
}: StatsSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="mb-4"
    >
      <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
      {description && (
        <p className="mt-0.5 text-sm text-text-secondary">{description}</p>
      )}
    </motion.div>
  );
}
