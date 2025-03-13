"use client";

import { motion } from "framer-motion";
import { Photo } from "./Photo";
import { useEffect, useState } from "react";

type Direction = "left" | "right";

export const PhotoGallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after a short delay to trigger the animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: (custom) => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      zIndex: 60 - custom.order, // Stack them in reverse order initially
    }),
    visible: (custom) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0, // No rotation
      scale: 1,
      zIndex: custom.zIndex,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15, // Explicit delay based on order
      },
    }),
  };

  // Photo positions - horizontal layout with random y offsets
  const photos = [
    {
      id: 1,
      order: 0,
      src: "/c3_speaker_head.png",
      x: "-320px",
      y: "15px",
      zIndex: 10,
      direction: "left" as Direction,
    },
    {
      id: 2,
      order: 1,
      src: "/braydon_speaking_photo.jpeg",
      x: "-160px",
      y: "32px",
      zIndex: 20,
      direction: "left" as Direction,
    },
    {
      id: 3,
      order: 2,
      src: "/braydon_headshot_1.jpeg",
      x: "0px",
      y: "8px",
      zIndex: 30,
      direction: "right" as Direction,
    },
    {
      id: 4,
      order: 3,
      src: "/family_03.jpeg",
      x: "160px",
      y: "22px",
      zIndex: 40,
      direction: "right" as Direction,
    },
    {
      id: 5,
      order: 4,
      src: "/braydon_speaking_head_3.jpeg",
      x: "320px",
      y: "44px",
      zIndex: 50,
      direction: "right" as Direction,
    },
  ];

  return (
    <div className="relative mb-8 hidden h-[350px] w-full items-center justify-center lg:flex">
      <motion.div
        className="relative mx-auto flex w-full max-w-6xl justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="relative h-[220px] w-[220px]">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="absolute left-0 top-0"
              variants={photoVariants}
              custom={{
                x: photo.x,
                y: photo.y,
                zIndex: photo.zIndex,
                order: photo.order,
              }}
            >
              <Photo
                width={220}
                height={220}
                src={photo.src}
                alt="Family photo"
                direction={photo.direction}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
