"use client";

import { Ref, forwardRef, useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "../lib/utils";
import { getRandomNumberInRange } from "@/app/lib/getRandomNumberInRange";

const MotionImage = motion(
  forwardRef(function MotionImage(
    props: ImageProps,
    ref: Ref<HTMLImageElement>
  ) {
    return <Image ref={ref} {...props} />;
  })
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
  const [savedRotation] = useState<number>(getRandomNumberInRange(1, 4));
  const initialRotation = savedRotation * (direction == "left" ? -1 : 1);
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });
  const ySmooth = useSpring(y, { damping: 50, stiffness: 400 });
  const rotateY = useTransform(xSmooth, [0, 400], [-15, 15]);
  const rotateX = useTransform(ySmooth, [0, 400], [15, -15]);

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
        rotateZ: 2 * (direction == "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: initialRotation }}
      style={{
        width,
        height,
        perspective: 400,
        rotateX,
        rotateY,
        zIndex: 1,
      }}
      className={cn(
        className,
        "shrink-0 mx-auto cursor-grab active:cursor-grabbing relative"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow">
        <MotionImage
          className={cn("rounded-lg shadow object-cover")}
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
