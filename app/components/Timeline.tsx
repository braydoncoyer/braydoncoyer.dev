"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface TimelineProps {
  avatarUrl: string;
}

export function Timeline({ avatarUrl }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end 50%", "start 50%"],
  });

  return (
    <div ref={containerRef} className="timeline-container relative h-full">
      <div className="sticky top-1/2 z-10 flex -translate-y-1/2 justify-center">
        <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-bg-primary bg-bg-primary shadow-md">
          <Image src={avatarUrl} alt="Profile" fill className="object-cover" />
        </div>
      </div>
      <div className="bg-opacity-24 absolute bottom-0 left-1/2 top-0 w-2 -translate-x-1/2 rounded-full bg-[#E8ECEF] shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.32)]">
        <motion.div
          className="absolute inset-0 w-full origin-bottom rounded-full bg-gradient-to-b from-indigo-300 to-transparent"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
    </div>
  );
}
