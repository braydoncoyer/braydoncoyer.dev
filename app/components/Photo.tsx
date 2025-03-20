"use client";

import { Ref, forwardRef, useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "../lib/utils";
import { getRandomNumberInRange } from "@/app/lib/getRandomNumberInRange";

const MotionImage = motion(
  forwardRef(function MotionImage(
    props: ImageProps,
    ref: Ref<HTMLImageElement>,
  ) {
    return <Image ref={ref} {...props} />;
  }),
);
type Direction = "left" | "right";

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, []);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing",
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg shadow-sm shadow-slate-900/30">
        <MotionImage
          className={cn("rounded-lg object-cover")}
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
