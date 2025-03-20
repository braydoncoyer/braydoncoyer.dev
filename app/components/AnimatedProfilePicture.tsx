"use client";

import { motion } from "framer-motion";
import { ProfilePicture } from "./ProfilePicture";

interface AnimatedProfilePictureProps {
  delay?: number;
}

export function AnimatedProfilePicture({
  delay = 0,
}: AnimatedProfilePictureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay,
      }}
    >
      <ProfilePicture />
    </motion.div>
  );
}
