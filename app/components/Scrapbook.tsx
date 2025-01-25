"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAnyWhere, useMediaQuery } from "usehooks-ts";

import { cn } from "../lib/utils";
import { useRotationVelocity } from "../lib/useRotationVelocity";
import { getRandomNumberInRange } from "../lib/getRandomNumberInRange";
import { useElementBoundingRect } from "../lib/useelementBoundingRect";
import { BentoCard } from "./BentoCard";

function Sticker({
  children,
  index = 1,
  caption,
  className,
  preventYOffsetOnMobile: preventYOffset,
}: {
  children: React.ReactNode;
  index: number;
  caption?: string;
  className?: string;
  preventYOffsetOnMobile?: boolean;
}) {
  // Create refs for the sticker and caption, and set up measurement of elements
  const itemRef = useRef<HTMLDivElement | null>(null);
  const boundingRect = useElementBoundingRect(itemRef);

  // Manage state of stickers
  const [isDragging, setIsDragging] = useState<Boolean>(false);
  const [isCaptionVisible, setIsCaptionVisible] = useState<Boolean>(false);
  const [isModal, setIsModal] = useState<Boolean>(false);

  // Set up initial values persisted in state even while dragging
  const [initialRotation] = useState<number>(getRandomNumberInRange(-15, 15));
  const [initialY] = useState<number>(
    getRandomNumberInRange(10, 25) *
      (index === 0 ? 1 : index % 2 === 0 ? -0.5 : 0.5)
  );

  // Handle smaller devices with different behavior
  const matches = useMediaQuery("(max-width: 768px)");

  function onOpen() {
    if (matches) {
      setIsModal(!isModal);
      setIsCaptionVisible(!isModal);
    }
  }

  function onStart() {
    if (!matches) {
      // setDirty && setDirty(true)
      setIsCaptionVisible(true);
      setIsDragging(true);
    }
  }

  function onEnd() {
    if (!matches) {
      setIsCaptionVisible(false);
      setIsDragging(false);
    }
  }

  useClickAnyWhere((e) => {
    if (
      e.target != itemRef.current &&
      !itemRef.current?.contains(e.target as Node) &&
      isModal &&
      matches
    ) {
      setIsModal(false);
      setIsCaptionVisible(false);
    }
  });

  // Setup rotation based on speed of drag
  const { rotate, x } = useRotationVelocity(initialRotation);

  const stickerVariants = {
    default: {},
    modal: {
      x: -boundingRect.x / 2 + boundingRect.width,
      rotate: 0,
      scale: 1.2,
      zIndex: 1000,
    },
    dragging: {
      scale: 1.2,
      zIndex: 1000,
    },
  };

  return (
    <motion.div
      ref={itemRef}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.9,
          y: 10,
        },
        shown: {
          opacity: 1,
          scale: 1,
          y: matches && preventYOffset ? Math.abs(initialY) : initialY,
        },
      }}
      style={{
        zIndex: isModal || isDragging ? 1000 : undefined,
      }}
      className={cn("relative cursor-grab active:cursor-grabbing", className)}
    >
      <motion.div
        variants={stickerVariants}
        className={cn(
          "relative drop-shadow-lg h-fit flex-shrink-1 min-w-[96px]"
        )}
        drag={!matches}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{
          power: 0.1,
          bounceStiffness: 200,
        }}
        dragElastic={0.8}
        style={{
          rotate: isModal ? 0 : rotate,
          x,
        }}
        animate={
          matches
            ? isModal
              ? "modal"
              : "default"
            : isDragging
            ? "dragging"
            : "default"
        }
        onTap={onOpen}
        onHoverStart={onStart}
        onHoverEnd={onEnd}
        onDragEnd={onEnd}
      >
        <div className="pointer-events-none select-none">{children}</div>

        <AnimatePresence>
          {caption && caption.length > 0 && isCaptionVisible && (
            <motion.div
              key="child"
              initial={{ opacity: 0, y: -48, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 0.9 }}
              exit={{ opacity: 0, y: -48, scale: 0.5 }}
              style={{
                left: `50%`,
                x: `-50%`,
              }}
              className={cn(
                "pointer-events-none max-w-screen-sm select-none z-10 absolute top-full mx-auto text-[10px] text-center bg-white/95 backdrop-blur-3xl text-black mt-2 py-2 px-3 text-balance rounded-sm min-w-[160px]"
              )}
            >
              {caption}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function Scrapbook({ className }: { className?: string }) {
  const [resetIndex, setResetIndex] = useState<number>(0);

  const container = {
    hidden: { opacity: 0 },
    shown: {
      opacity: 1,
      transition: {
        delayChilcren: 0,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <BentoCard
      colSpan={9}
      rowSpan={4}
      height="h-[220px]"
      showHoverGradient={false}
    >
      <h2 className="font-medium mb-2">Scrapbook</h2>
      <div className="absolute h-[220px] top-0 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_40%,transparent_100%)]"></div>
      <div
        key={resetIndex}
        className={cn(
          "w-full bg-secondary rounded-3xl p-6 @container xs:max-h-none",
          className
        )}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="shown"
          className="grid grid-cols-4 gap-4 h-full w-full items-center -mt-8"
        >
          <Sticker
            caption="THAT Conference was my favorite tech event of 2024! I even kicked off my speaking season with my very first talk of the year there!"
            index={0}
          >
            <img
              width="80"
              src="/that_conf_sticker.png"
              className="max-w-[100px] xs:max-w-none"
              draggable={false}
            />
          </Sticker>
          <Sticker
            caption={`I became an international speaker at C3 Dev Fest, where I shared insights on "The Power of a Second Brain in a Developer's Workflow."`}
            index={1}
          >
            <img
              width="96"
              src="c3_conf_sticker.png"
              className="max-w-[100px] xs:max-w-none"
              draggable={false}
            />
          </Sticker>
          <Sticker
            caption="I'm a huge Lord of the Rings nerd and host an epic 3-day marathon every year to watch the extended editions with friends and family."
            index={2}
          >
            <img
              width="130"
              src="/lotr_sticker.png"
              className=""
              draggable={false}
            />
          </Sticker>
          <Sticker
            caption="I helped create, organize, and speak at the inaugural Commit Your Code Conference in 2024, where every penny went to charity!"
            index={3}
          >
            <img
              width="160"
              src="/cyc_sticker.png"
              draggable={false}
              className="xs:max-w-none"
            />
          </Sticker>
        </motion.div>
      </div>
    </BentoCard>
  );
}
