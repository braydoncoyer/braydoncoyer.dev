"use client";

import { motion } from "framer-motion";
import { ShadowBox } from "./ShadowBox";

interface AnimatedMobilePhotosProps {
  delay: number;
}

export function AnimatedMobilePhotos({ delay }: AnimatedMobilePhotosProps) {
  return (
    <div className="relative -mx-12 lg:hidden">
      <div className="relative w-full overflow-hidden py-12">
        <div className="flex items-center justify-center space-x-14">
          <motion.div
            className="relative w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: delay,
            }}
          >
            <ShadowBox width={170} height={252}></ShadowBox>
            <img
              className="absolute left-0 top-2 h-[245px] w-[163px] rotate-[-5deg] rounded-lg object-cover"
              src="/c3_speaker_head.png"
              alt="A headshot"
            />
          </motion.div>
          <motion.div
            className="relative w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: delay + 0.1,
            }}
          >
            <ShadowBox width={188} height={278}></ShadowBox>
            <img
              className="absolute left-0 top-0 h-[280px] w-[190px] rotate-[-8deg] rounded-lg object-cover shadow-lg shadow-black/20"
              src="/braydon_speaking_photo.jpeg"
              alt="A headshot"
            />
          </motion.div>
          <motion.div
            className="relative w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: delay + 0.2,
            }}
          >
            <ShadowBox width={170} height={252}></ShadowBox>
            <img
              className="absolute left-0 top-0 h-[245px] w-[163px] rotate-[10deg] rounded-lg object-cover shadow-lg shadow-black/20"
              src="/braydon_speaking_head_3.jpeg"
              alt="A headshot"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
