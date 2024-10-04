"use client";

import { BentoCard } from "./BentoCard";
import { motion } from "framer-motion";

export function Scrapbook() {
  return (
    <BentoCard
      colSpan={9}
      rowSpan={4}
      height="h-[220px]"
      showHoverGradient={false}
    >
      {/* Dots */}
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_40%,transparent_100%)]"></div>
      Scrapbook
      <div className="z-50 flex justify-around items-center">
        <motion.div
          className="hover:cursor-pointer"
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          dragElastic={0.7}
          dragMomentum={true}
          whileDrag={{ scale: 1.07, cursor: "grabbing" }}
          animate={{ x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          }}
        >
          <img
            src="https://images.vexels.com/media/users/3/291940/isolated/lists/ff0c1ff226e5363a38f65ffece74fd6d-flat-smiley-face-sticker.png"
            className="w-24 user-select-none pointer-events-none"
            alt=""
          />
        </motion.div>
        <motion.div
          className="hover:cursor-pointer"
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          dragElastic={0.7}
          dragMomentum={true}
          whileDrag={{ scale: 1.07, cursor: "grabbing" }}
          animate={{ x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          }}
        >
          <img
            src="https://images.vexels.com/media/users/3/291940/isolated/lists/ff0c1ff226e5363a38f65ffece74fd6d-flat-smiley-face-sticker.png"
            className="w-24 user-select-none pointer-events-none"
            alt=""
          />
        </motion.div>
        <motion.div
          className="hover:cursor-pointer mt-12"
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          dragElastic={0.7}
          dragMomentum={true}
          whileDrag={{ scale: 1.07, cursor: "grabbing" }}
          animate={{ x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          }}
        >
          <img
            src="https://images.vexels.com/media/users/3/291940/isolated/lists/ff0c1ff226e5363a38f65ffece74fd6d-flat-smiley-face-sticker.png"
            className="w-24 user-select-none pointer-events-none"
            alt=""
          />
        </motion.div>
        <motion.div
          className="hover:cursor-pointer"
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          dragElastic={0.7}
          dragMomentum={true}
          whileDrag={{ scale: 1.07, cursor: "grabbing" }}
          animate={{ x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          }}
        >
          <img
            src="https://images.vexels.com/media/users/3/291940/isolated/lists/ff0c1ff226e5363a38f65ffece74fd6d-flat-smiley-face-sticker.png"
            className="w-24 user-select-none pointer-events-none"
            alt=""
          />
        </motion.div>
        <motion.div
          className="hover:cursor-pointer"
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          dragElastic={0.7}
          dragMomentum={true}
          whileDrag={{ scale: 1.07, cursor: "grabbing" }}
          animate={{ x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          }}
        >
          <img
            src="https://images.vexels.com/media/users/3/291940/isolated/lists/ff0c1ff226e5363a38f65ffece74fd6d-flat-smiley-face-sticker.png"
            className="w-24 user-select-none pointer-events-none"
            alt=""
          />
        </motion.div>
      </div>
    </BentoCard>
  );
}
