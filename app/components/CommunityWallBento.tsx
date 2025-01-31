"use client";
import { BentoCard } from "./BentoCard";
import { motion } from "framer-motion";

const lineVariants = {
  initial: {
    opacity: 0.5,
  },
  hover: {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const card1Variants = {
  initial: {
    rotate: -8,
    y: -15,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const card2Variants = {
  initial: {
    rotate: 8,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.15,
    },
  },
};

export function CommunityWallBento() {
  return (
    <motion.div initial="initial" whileHover="hover">
      <BentoCard linkTo="/community-wall" height="h-[276px]">
        {/* Dots */}
        <div className="absolute top-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Card 1 */}
        <motion.svg
          className="absolute top-0 w-48 md:w-40"
          viewBox="0 0 171 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={card1Variants}
        >
          <g clipPath="url(#clip0_1_2784)">
            <g filter="url(#filter0_d_1_2784)">
              <g filter="url(#filter1_i_1_2784)">
                <rect
                  x="-0.170898"
                  y="-17.4697"
                  width="130"
                  height="160"
                  rx="8"
                  transform="rotate(-12 -0.170898 -17.4697)"
                  fill="#F7F7F8"
                />
              </g>
              <g opacity="0.75">
                <g clipPath="url(#clip1_1_2784)">
                  <rect
                    width="125.899"
                    height="124.298"
                    rx="2.56284"
                    transform="matrix(-0.978148 0.207912 0.207912 0.978148 120.827 -35.0101)"
                    fill="#E6649C"
                  />
                  <g filter="url(#filter2_f_1_2784)">
                    <circle
                      cx="53.2161"
                      cy="53.2161"
                      r="53.2161"
                      transform="matrix(-0.978148 0.207912 0.207912 0.978148 99.5933 25.9023)"
                      fill="#56D5B2"
                    />
                  </g>
                  <g filter="url(#filter3_f_1_2784)">
                    <circle
                      cx="61.0174"
                      cy="61.0174"
                      r="61.0174"
                      transform="matrix(-0.978148 0.207912 0.207912 0.978148 81.0605 -88.0841)"
                      fill="#7A4DD3"
                    />
                  </g>
                  <g filter="url(#filter4_f_1_2784)">
                    <circle
                      cx="32.0411"
                      cy="32.0411"
                      r="32.0411"
                      transform="matrix(-0.978148 0.207912 0.207912 0.978148 168.312 32.9433)"
                      fill="#B1DDD1"
                    />
                  </g>
                  <g filter="url(#filter5_f_1_2784)">
                    <ellipse
                      cx="35.9418"
                      cy="33.7128"
                      rx="35.9418"
                      ry="33.7128"
                      transform="matrix(-0.978148 0.207912 0.207912 0.978148 60.8179 9.64755)"
                      fill="#74A3FF"
                    />
                  </g>
                  <g filter="url(#filter6_f_1_2784)">
                    <circle
                      cx="53.2161"
                      cy="53.2161"
                      r="53.2161"
                      transform="matrix(-0.978148 0.207912 0.207912 0.978148 164.068 -83.5099)"
                      fill="#E38079"
                    />
                  </g>
                  <motion.rect
                    opacity="0.5"
                    x="32.8682"
                    y="22.5352"
                    width="58"
                    height="8"
                    rx="4"
                    transform="rotate(-12 32.8682 22.5352)"
                    fill="white"
                    variants={lineVariants}
                  />
                  <motion.rect
                    opacity="0.5"
                    x="39.5215"
                    y="53.8359"
                    width="58"
                    height="8"
                    rx="4"
                    transform="rotate(-12 39.5215 53.8359)"
                    fill="white"
                    variants={lineVariants}
                  />
                  <motion.rect
                    opacity="0.5"
                    x="97.4263"
                    y="8.81303"
                    width="16"
                    height="8"
                    rx="4"
                    transform="rotate(-12 97.4263 8.81303)"
                    fill="white"
                    variants={lineVariants}
                  />
                  <motion.rect
                    opacity="0.5"
                    width="58"
                    height="8"
                    rx="4"
                    transform="matrix(-0.978148 0.207912 0.207912 0.978148 116.403 21.1368)"
                    fill="white"
                    variants={lineVariants}
                  />
                  <motion.rect
                    opacity="0.5"
                    width="16"
                    height="8"
                    rx="4"
                    transform="matrix(-0.978148 0.207912 0.207912 0.978148 51.8452 34.859)"
                    fill="white"
                    variants={lineVariants}
                  />
                </g>
              </g>
              <circle
                opacity="0.25"
                cx="46.9592"
                cy="117.685"
                r="10"
                transform="rotate(-12 46.9592 117.685)"
                fill="#A5AEB8"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1_2784"
              x="1.31592"
              y="-43.0114"
              width="165.451"
              height="188.558"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="8" dy="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.839216 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2784"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2784"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_1_2784"
              x="1.31592"
              y="-44.5114"
              width="157.451"
              height="182.058"
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
              <feOffset dy="-1.5" />
              <feGaussianBlur stdDeviation="0.75" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_2784"
              />
            </filter>
            <filter
              id="filter2_f_1_2784"
              x="-36.4153"
              y="-6.00002"
              width="190.04"
              height="190.04"
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
              <feGaussianBlur
                stdDeviation="20.8964"
                result="effect1_foregroundBlur_1_2784"
              />
            </filter>
            <filter
              id="filter3_f_1_2784"
              x="-68.7601"
              y="-118.537"
              width="205.646"
              height="205.645"
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
              <feGaussianBlur
                stdDeviation="20.8964"
                result="effect1_foregroundBlur_1_2784"
              />
            </filter>
            <filter
              id="filter4_f_1_2784"
              x="27.9999"
              y="-44.6873"
              width="231.267"
              height="231.266"
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
              <feGaussianBlur
                stdDeviation="41.7928"
                result="effect1_foregroundBlur_1_2784"
              />
            </filter>
            <filter
              id="filter5_f_1_2784"
              x="-44.9773"
              y="-25.516"
              width="155.296"
              height="151.225"
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
              <feGaussianBlur
                stdDeviation="20.8964"
                result="effect1_foregroundBlur_1_2784"
              />
            </filter>
            <filter
              id="filter6_f_1_2784"
              x="14.1283"
              y="-129.343"
              width="217.902"
              height="217.902"
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
              <feGaussianBlur
                stdDeviation="27.8619"
                result="effect1_foregroundBlur_1_2784"
              />
            </filter>
            <clipPath id="clip0_1_2784">
              <rect width="171" height="152" fill="white" />
            </clipPath>
            <clipPath id="clip1_1_2784">
              <rect
                width="114"
                height="116"
                rx="2"
                transform="matrix(-0.978148 0.207912 0.207912 0.978148 120.826 -35.0097)"
                fill="white"
              />
            </clipPath>
          </defs>
        </motion.svg>

        {/* Card 2 */}
        <motion.svg
          className="absolute -right-5 top-8 w-56 md:right-0 md:top-0"
          viewBox="0 0 214 223"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={card2Variants}
        >
          <g filter="url(#filter0_dd_1_2773)">
            <g filter="url(#filter1_i_1_2773)">
              <rect
                x="64.5547"
                y="8.50171"
                width="130"
                height="160"
                rx="8"
                transform="rotate(12 64.5547 8.50171)"
                fill="#F7F7F8"
              />
            </g>
            <g opacity="0.75">
              <g clipPath="url(#clip0_1_2773)">
                <rect
                  width="125.899"
                  height="124.298"
                  rx="2.56284"
                  transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 182.226 41.6919)"
                  fill="url(#paint0_linear_1_2773)"
                />
                <motion.rect
                  opacity="0.5"
                  x="78.4663"
                  y="58.4864"
                  width="58"
                  height="8"
                  rx="4"
                  transform="rotate(12 78.4663 58.4864)"
                  fill="white"
                  variants={lineVariants}
                />
                <motion.rect
                  opacity="0.5"
                  x="71.8135"
                  y="89.7871"
                  width="58"
                  height="8"
                  rx="4"
                  transform="rotate(12 71.8135 89.7871)"
                  fill="white"
                  variants={lineVariants}
                />
                <motion.rect
                  opacity="0.5"
                  x="143.024"
                  y="72.2085"
                  width="16"
                  height="8"
                  rx="4"
                  transform="rotate(12 143.024 72.2085)"
                  fill="white"
                  variants={lineVariants}
                />
                <motion.rect
                  opacity="0.5"
                  width="58"
                  height="8"
                  rx="4"
                  transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 155.348 91.1855)"
                  fill="white"
                  variants={lineVariants}
                />
                <motion.rect
                  opacity="0.5"
                  width="16"
                  height="8"
                  rx="4"
                  transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 90.79 77.4633)"
                  fill="white"
                  variants={lineVariants}
                />
              </g>
            </g>
            <circle
              opacity="0.25"
              cx="52.6379"
              cy="151.141"
              r="10"
              transform="rotate(12 52.6379 151.141)"
              fill="#A5AEB8"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_1_2773"
              x="0.775879"
              y="-22.0115"
              width="221.451"
              height="244.558"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="8" dy="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.839216 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2773"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1_2773"
                result="effect2_dropShadow_1_2773"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1_2773"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_1_2773"
              x="32.7759"
              y="8.48854"
              width="157.451"
              height="182.058"
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
              <feOffset dy="-1.5" />
              <feGaussianBlur stdDeviation="0.75" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_2773"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_2773"
              x1="110.398"
              y1="-2.56166"
              x2="-4.8642"
              y2="120.596"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD2ED" />
              <stop offset="1" stopColor="#C691FF" />
            </linearGradient>
            <clipPath id="clip0_1_2773">
              <rect
                width="114"
                height="116"
                rx="2"
                transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 182.226 41.6921)"
                fill="white"
              />
            </clipPath>
          </defs>
        </motion.svg>

        <div className="grid h-full grid-cols-2 grid-rows-2 items-end gap-8">
          <div className="col-1 z-10 row-start-2">
            <h2 className="mb-2 font-medium">Community Wall</h2>
            <p className="text-text-secondary">
              Let everyone know you were here
            </p>
          </div>
        </div>
      </BentoCard>
    </motion.div>
  );
}
