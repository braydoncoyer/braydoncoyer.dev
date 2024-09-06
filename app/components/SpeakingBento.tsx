import Link from "next/link";

export function SpeakingBento() {
  return (
    <Link href="/speaking">
      <div className="p-6 rounded-2xl col-span-1 h-[276px] border border-border-primary flex flex-col bg-gradient-to-tl group relative overflow-hidden">
        <span className="absolute inset-x-0">
          <CirclePattern />
        </span>
        <span className="absolute bottom-16 z-20 left-1/2 -translate-x-1/2">
          <AudioIndicator />
        </span>
        <span className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
          <PrimaryPhoto />
        </span>

        <span className="absolute top-24 left-10">
          <LeftPhoto />
        </span>

        <span className="absolute top-24 right-10">
          <LeftPhoto />
        </span>
        {/* Gradient overlay */}
        <div className="w-full h-full bg-gradient-to-t from-white absolute inset-0"></div>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 h-full items-end z-10">
          <div className="col-1 row-start-2">
            <h2 className="font-semibold mb-2">Speaking</h2>
            <p className="text-text-secondary">
              Talks, podcasts, tutorials and more
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CirclePattern() {
  return (
    <svg
      className="w-[400px] h-full"
      viewBox="0 0 368 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="86.5"
        y="108.5"
        width="195"
        height="195"
        rx="97.5"
        stroke="#D6DADE"
        strokeOpacity="0.5"
      />
      <rect
        x="50.5"
        y="72.5"
        width="267"
        height="267"
        rx="133.5"
        stroke="#D6DADE"
        strokeOpacity="0.5"
      />
      <rect
        x="14.5"
        y="36.5"
        width="339"
        height="339"
        rx="169.5"
        stroke="#D6DADE"
        strokeOpacity="0.5"
      />
      <rect
        x="-21.5"
        y="0.5"
        width="411"
        height="411"
        rx="205.5"
        stroke="#D6DADE"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

function AudioIndicator() {
  return (
    <svg
      width="103"
      height="32"
      viewBox="0 0 103 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_1_2713)">
        <rect width="103" height="32" rx="16" fill="#F7F7F8" />
        <rect
          x="0.75"
          y="0.75"
          width="101.5"
          height="30.5"
          rx="15.25"
          stroke="#D6DADE"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76.5 8C76.5 7.44772 76.9477 7 77.5 7C78.0523 7 78.5 7.44772 78.5 8V24C78.5 24.5523 78.0523 25 77.5 25C76.9477 25 76.5 24.5523 76.5 24V8ZM24.5 9C24.5 8.44772 24.9477 8 25.5 8C26.0523 8 26.5 8.44772 26.5 9V23C26.5 23.5523 26.0523 24 25.5 24C24.9477 24 24.5 23.5523 24.5 23V9ZM17.5 9C16.9477 9 16.5 9.44772 16.5 10V22C16.5 22.5523 16.9477 23 17.5 23C18.0523 23 18.5 22.5523 18.5 22V10C18.5 9.44772 18.0523 9 17.5 9ZM21.5 11C20.9477 11 20.5 11.4477 20.5 12V20C20.5 20.5523 20.9477 21 21.5 21C22.0523 21 22.5 20.5523 22.5 20V12C22.5 11.4477 22.0523 11 21.5 11ZM29.5 10C28.9477 10 28.5 10.4477 28.5 11V21C28.5 21.5523 28.9477 22 29.5 22C30.0523 22 30.5 21.5523 30.5 21V11C30.5 10.4477 30.0523 10 29.5 10ZM32.5 12C32.5 11.4477 32.9477 11 33.5 11C34.0523 11 34.5 11.4477 34.5 12V20C34.5 20.5523 34.0523 21 33.5 21C32.9477 21 32.5 20.5523 32.5 20V12ZM37.5 9C36.9477 9 36.5 9.44772 36.5 10V22C36.5 22.5523 36.9477 23 37.5 23C38.0523 23 38.5 22.5523 38.5 22V10C38.5 9.44772 38.0523 9 37.5 9ZM44.5 10C44.5 9.44772 44.9477 9 45.5 9C46.0523 9 46.5 9.44772 46.5 10V22C46.5 22.5523 46.0523 23 45.5 23C44.9477 23 44.5 22.5523 44.5 22V10ZM53.5 9C52.9477 9 52.5 9.44772 52.5 10V22C52.5 22.5523 52.9477 23 53.5 23C54.0523 23 54.5 22.5523 54.5 22V10C54.5 9.44772 54.0523 9 53.5 9ZM60.5 10C60.5 9.44772 60.9477 9 61.5 9C62.0523 9 62.5 9.44772 62.5 10V22C62.5 22.5523 62.0523 23 61.5 23C60.9477 23 60.5 22.5523 60.5 22V10ZM57.5 13C56.9477 13 56.5 13.4477 56.5 14V18C56.5 18.5523 56.9477 19 57.5 19C58.0523 19 58.5 18.5523 58.5 18V14C58.5 13.4477 58.0523 13 57.5 13ZM64.5 14C64.5 13.4477 64.9477 13 65.5 13C66.0523 13 66.5 13.4477 66.5 14V18C66.5 18.5523 66.0523 19 65.5 19C64.9477 19 64.5 18.5523 64.5 18V14ZM73.5 10C72.9477 10 72.5 10.4477 72.5 11V21C72.5 21.5523 72.9477 22 73.5 22C74.0523 22 74.5 21.5523 74.5 21V11C74.5 10.4477 74.0523 10 73.5 10ZM84.5 15C84.5 14.4477 84.9477 14 85.5 14C86.0523 14 86.5 14.4477 86.5 15V19C86.5 19.5523 86.0523 20 85.5 20C84.9477 20 84.5 19.5523 84.5 19V15ZM81.5 13C80.9477 13 80.5 13.4477 80.5 14V20C80.5 20.5523 80.9477 21 81.5 21C82.0523 21 82.5 20.5523 82.5 20V14C82.5 13.4477 82.0523 13 81.5 13ZM69.5 7C68.9477 7 68.5 7.44772 68.5 8V24C68.5 24.5523 68.9477 25 69.5 25C70.0523 25 70.5 24.5523 70.5 24V8C70.5 7.44772 70.0523 7 69.5 7ZM40.5 9C40.5 8.44772 40.9477 8 41.5 8C42.0523 8 42.5 8.44772 42.5 9V23C42.5 23.5523 42.0523 24 41.5 24C40.9477 24 40.5 23.5523 40.5 23V9ZM49.5 7C48.9477 7 48.5 7.44772 48.5 8V24C48.5 24.5523 48.9477 25 49.5 25C50.0523 25 50.5 24.5523 50.5 24V8C50.5 7.44772 50.0523 7 49.5 7Z"
          fill="url(#paint0_linear_1_2713)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 7C48.9477 7 48.5 7.44772 48.5 8V24C48.5 24.5523 48.9477 25 49.5 25C50.0523 25 50.5 24.5523 50.5 24V8C50.5 7.44772 50.0523 7 49.5 7ZM25.5 8C24.9477 8 24.5 8.44772 24.5 9V23C24.5 23.5523 24.9477 24 25.5 24C26.0523 24 26.5 23.5523 26.5 23V9C26.5 8.44772 26.0523 8 25.5 8ZM16.5 10C16.5 9.44772 16.9477 9 17.5 9C18.0523 9 18.5 9.44772 18.5 10V22C18.5 22.5523 18.0523 23 17.5 23C16.9477 23 16.5 22.5523 16.5 22V10ZM20.5 12C20.5 11.4477 20.9477 11 21.5 11C22.0523 11 22.5 11.4477 22.5 12V20C22.5 20.5523 22.0523 21 21.5 21C20.9477 21 20.5 20.5523 20.5 20V12ZM28.5 11C28.5 10.4477 28.9477 10 29.5 10C30.0523 10 30.5 10.4477 30.5 11V21C30.5 21.5523 30.0523 22 29.5 22C28.9477 22 28.5 21.5523 28.5 21V11ZM33.5 11C32.9477 11 32.5 11.4477 32.5 12V20C32.5 20.5523 32.9477 21 33.5 21C34.0523 21 34.5 20.5523 34.5 20V12C34.5 11.4477 34.0523 11 33.5 11ZM36.5 10C36.5 9.44772 36.9477 9 37.5 9C38.0523 9 38.5 9.44772 38.5 10V22C38.5 22.5523 38.0523 23 37.5 23C36.9477 23 36.5 22.5523 36.5 22V10ZM45.5 9C44.9477 9 44.5 9.44772 44.5 10V22C44.5 22.5523 44.9477 23 45.5 23C46.0523 23 46.5 22.5523 46.5 22V10C46.5 9.44772 46.0523 9 45.5 9ZM52.5 10C52.5 9.44772 52.9477 9 53.5 9C54.0523 9 54.5 9.44772 54.5 10V22C54.5 22.5523 54.0523 23 53.5 23C52.9477 23 52.5 22.5523 52.5 22V10ZM57.5 13C56.9477 13 56.5 13.4477 56.5 14V18C56.5 18.5523 56.9477 19 57.5 19C58.0523 19 58.5 18.5523 58.5 18V14C58.5 13.4477 58.0523 13 57.5 13ZM40.5 9C40.5 8.44772 40.9477 8 41.5 8C42.0523 8 42.5 8.44772 42.5 9V23C42.5 23.5523 42.0523 24 41.5 24C40.9477 24 40.5 23.5523 40.5 23V9Z"
          fill="#6C47FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_2713"
          x="0"
          y="-2"
          width="103"
          height="34"
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
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1_2713"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_2713"
          x1="16.5"
          y1="16"
          x2="86.5"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5AEB8" stopOpacity="0.25" />
          <stop offset="0.496333" stopColor="#A5AEB8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#A5AEB8" stopOpacity="0.25" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PrimaryPhoto() {
  return (
    <div className="relative">
      <svg
        width="117"
        height="116"
        viewBox="0 0 117 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_1_2745)">
          <rect x="0.5" width="116" height="116" rx="58" fill="#F7F7F8" />
          <rect
            x="1.25"
            y="0.75"
            width="114.5"
            height="114.5"
            rx="57.25"
            stroke="#D6DADE"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_1_2745"
            x="0.5"
            y="-2"
            width="116"
            height="118"
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
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_2745"
            />
          </filter>
        </defs>
      </svg>

      <img
        className="h-[100px] w-[100px] rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        src="/braydon_headshot_1.jpeg"
        alt=""
      />
    </div>
  );
}

function LeftPhoto() {
  return (
    <div>
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_1_2749)">
          <rect width="76" height="76" rx="38" fill="#F7F7F8" />
          <rect
            x="0.75"
            y="0.75"
            width="74.5"
            height="74.5"
            rx="37.25"
            stroke="#D6DADE"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_1_2749"
            x="0"
            y="-2"
            width="76"
            height="78"
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
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_2749"
            />
          </filter>
        </defs>
      </svg>
      <img
        className="h-[64px] w-[64px] rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        src="/braydon_headshot_1.jpeg"
        alt=""
      />
    </div>
  );
}
