"use client";

import {
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export function useRotationVelocity(initialRotation: number) {
  const x = useMotionValue(0);
  const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });
  const xVelocity = useVelocity(xSmooth);
  const rotate = useTransform(
    xVelocity,
    [-3000, 0, 3000],
    [-25, initialRotation, 25],
    {
      clamp: true,
    },
  );
  return { rotate, x };
}
