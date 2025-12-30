"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { ArticleMetric } from "@/app/lib/stats/types";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

interface TopArticlesCardProps {
  title: string;
  articles: ArticleMetric[];
  metricLabel: string;
  delay?: number;
}

export function TopArticlesCard({
  title,
  articles,
  metricLabel,
  delay = 0,
}: TopArticlesCardProps) {
  const { shouldReduceAnimations } = usePerformanceMode();
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const cardClassName = "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-white";

  // Mobile: Plain div (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <div className={cardClassName}>
        {/* Hover gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-20 flex h-full flex-col">
          <h2 className="mb-4 font-medium text-text-primary">{title}</h2>

          {articles.length > 0 ? (
            <ul className="flex flex-1 flex-col justify-center space-y-3">
              {articles.map((article, index) => (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-primary/10 text-xs font-medium text-purple-primary">
                        {index + 1}
                      </span>
                      <span className="line-clamp-2 text-sm leading-relaxed text-text-secondary">
                        {article.title}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs font-semibold tabular-nums text-text-tertiary">
                      {article.count.toLocaleString()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-text-tertiary">No data available yet</p>
          )}
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

      <div className="relative z-20 flex h-full flex-col">
        <h2 className="mb-4 font-medium text-text-primary">{title}</h2>

        {articles.length > 0 ? (
          <ul className="flex flex-1 flex-col justify-center space-y-3">
            {articles.map((article, index) => (
              <motion.li
                key={article.slug}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <motion.span
                      animate={{
                        scale: hoveredItem === index ? 1.15 : 1,
                        backgroundColor:
                          hoveredItem === index
                            ? "rgb(108, 71, 255)"
                            : "rgba(108, 71, 255, 0.1)",
                        color:
                          hoveredItem === index
                            ? "white"
                            : "rgb(108, 71, 255)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium"
                    >
                      {index + 1}
                    </motion.span>
                    <motion.span
                      animate={{
                        color:
                          hoveredItem === index
                            ? "rgb(30, 41, 59)"
                            : "rgb(94, 95, 110)",
                      }}
                      className="line-clamp-2 text-sm leading-relaxed"
                    >
                      {article.title}
                    </motion.span>
                  </div>
                  <motion.span
                    animate={{
                      scale: hoveredItem === index ? 1.1 : 1,
                    }}
                    className="shrink-0 text-xs font-semibold tabular-nums text-text-tertiary"
                  >
                    {article.count.toLocaleString()}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-text-tertiary">No data available yet</p>
        )}
      </div>
    </motion.div>
  );
}
