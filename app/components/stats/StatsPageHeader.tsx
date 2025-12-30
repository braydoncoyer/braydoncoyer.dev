"use client";

import { motion } from "framer-motion";
import { GridWrapper } from "../GridWrapper";
import { usePerformanceMode } from "@/app/hooks/usePerformanceMode";

export function StatsPageHeader() {
  const { shouldReduceAnimations } = usePerformanceMode();

  // Mobile: Plain divs (zero animation overhead)
  if (shouldReduceAnimations) {
    return (
      <section>
        <GridWrapper>
          <div className="text-center">
            <span className="text-sm font-medium text-indigo-600">Stats</span>
          </div>
        </GridWrapper>
        <GridWrapper>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl">
            A peek behind the curtain
          </h1>
        </GridWrapper>
        <GridWrapper>
          <p className="mx-auto mt-4 max-w-xl text-center leading-8 text-text-secondary">
            Numbers, metrics, and fun facts about this little corner of the
            internet. Updated in real-time.
          </p>
        </GridWrapper>
      </section>
    );
  }

  // Desktop: Full Framer Motion animations
  return (
    <section>
      <GridWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-indigo-600">Stats</span>
        </motion.div>
      </GridWrapper>
      <GridWrapper>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl"
        >
          A peek behind the curtain
        </motion.h1>
      </GridWrapper>
      <GridWrapper>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-center leading-8 text-text-secondary"
        >
          Numbers, metrics, and fun facts about this little corner of the
          internet. Updated in real-time.
        </motion.p>
      </GridWrapper>
    </section>
  );
}
