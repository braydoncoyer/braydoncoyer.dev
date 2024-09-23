export function ProfilePicture() {
  return (
    <div className="relative mt-9">
      <svg
        className="mx-auto"
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="74" cy="74" r="73.5" stroke="#D6DADE" strokeOpacity="0.5" />
        <g filter="url(#filter0_i_0_1)">
          <rect x="16" y="16" width="116" height="116" rx="58" fill="#F7F7F8" />
          <rect
            x="16.75"
            y="16.75"
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
            id="filter0_i_0_1"
            x="16"
            y="14"
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
              result="effect1_innerShadow_0_1"
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
