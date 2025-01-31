"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { useState } from "react";

export default function Marquee(props) {
  const { itemSize, gap, items, speed, isHovered } = props;

  const marqueeContainer = {
    display: "flex",
    gap: gap,
    width: "fit-content",
  };

  const itemStyle = {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={{ width: "fit-content", overflow: "hidden" }}>
      <motion.div
        initial="idle"
        whileHover="active"
        variants={{ idle: {}, active: {} }}
        className={clsx("group flex gap-4")}
      >
        {props.items.map((item, index) => (
          <div
            className={clsx(
              "animate-marquee group-hover:[animation-play-state:running]",
            )}
            style={{ ...itemStyle, animationDuration: `${speed}s` }}
            key={`${item}-${index}`}
          >
            {item}
          </div>
        ))}
        {props.items.map((item, index) => (
          <div
            className={clsx(
              "[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]",
            )}
            style={itemStyle}
            key={`${item}-repeat-${index}`}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
