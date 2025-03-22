"use client";

import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export function AboutTrackPattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const verticalPathRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const [pathLength, setPathLength] = useState(0);
  const [position, setPosition] = useState({ x: 145, y: 0 });

  useEffect(() => {
    if (!pathRef.current && !verticalPathRef.current) return;
    const length =
      pathRef.current?.getTotalLength() ||
      verticalPathRef.current?.getTotalLength() ||
      0;
    setPathLength(length);
  }, []);

  useEffect(() => {
    if ((!pathRef.current && !verticalPathRef.current) || !pathLength) return;

    return scrollYProgress.on("change", (latest) => {
      const clampedProgress = Math.max(0, Math.min(latest, 1));
      if (latest > 0) {
        // Get the active path based on screen size
        const activePath =
          window.innerWidth >= 1024 ? pathRef.current : verticalPathRef.current;
        if (!activePath) return;

        const point = activePath.getPointAtLength(pathLength * clampedProgress);
        setPosition({ x: point.x, y: point.y });
      }
    });
  }, [pathLength, scrollYProgress]);

  return (
    <div ref={containerRef}>
      <svg
        className="user-select-none pointer-events-none hidden lg:block"
        width="380"
        height="1787"
        viewBox="-10 -10 380 1795"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="purpleGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.423
                      0 0 0 0 0.278
                      0 0 0 0 1
                      0 0 0 0.6 0"
            />
          </filter>

          {/* Create a mask using the path */}
          <mask id="pathMask">
            <path
              d="M145 0.49999L145 43C145 51.8365 137.836 59 129 59L19.9999 59C11.1633 59 3.99987 66.1634 3.99987 75L3.99962 515C3.99961 523.837 11.163 531 19.9996 531L256 531C264.836 531 272 538.163 272 547L272 830.373C272 834.616 270.314 838.686 267.314 841.686L78.6861 1030.31C75.6855 1033.31 71.6158 1035 67.3724 1035L19.9996 1035C11.163 1035 3.99959 1042.16 3.99959 1051L3.99963 1471C3.99963 1479.84 11.1631 1487 19.9996 1487L256 1487C264.836 1487 272 1494.16 272 1503L272 1757C272 1765.84 279.163 1773 288 1773L380 1773"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
              fill="none"
            />
          </mask>

          <filter
            id="filter0_i_395_898"
            x="0"
            y="0.5"
            width="380"
            height="1778"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_395_898"
            />
          </filter>
        </defs>

        {/* Container for masked elements */}
        <g mask="url(#pathMask)">
          {/* Glowing circle */}
          <motion.circle
            cx={position.x}
            cy={position.y}
            r="120"
            fill="#6C47FF"
            filter="url(#purpleGlow)"
            opacity="0.5"
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              mass: 0.5,
            }}
          />
        </g>

        {/* Path on top */}
        <g filter="url(#filter0_i_395_898)">
          <path
            ref={pathRef}
            d="M145 0.49999L145 43C145 51.8365 137.836 59 129 59L19.9999 59C11.1633 59 3.99987 66.1634 3.99987 75L3.99962 515C3.99961 523.837 11.163 531 19.9996 531L256 531C264.836 531 272 538.163 272 547L272 830.373C272 834.616 270.314 838.686 267.314 841.686L78.6861 1030.31C75.6855 1033.31 71.6158 1035 67.3724 1035L19.9996 1035C11.163 1035 3.99959 1042.16 3.99959 1051L3.99963 1471C3.99963 1479.84 11.1631 1487 19.9996 1487L256 1487C264.836 1487 272 1494.16 272 1503L272 1757C272 1765.84 279.163 1773 288 1773L380 1773"
            stroke="#D6DADE"
            strokeOpacity="0.24"
            strokeWidth="8"
            strokeLinejoin="round"
          />
        </g>

        {/* Main circle on top */}
        <motion.circle
          className="fill-indigo-600"
          cx={position.x}
          cy={position.y}
          r="10"
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            mass: 0.5,
          }}
        />
      </svg>
    </div>
  );
}
