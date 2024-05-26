import { HorizontalLine } from "./HorizontalLine";

export function NewsletterSignUp() {
  return (
    <div className="pb-16 relative">
      <HorizontalLine />
      <div className="relative overflow-x-clip">
        <div className="bg-dark-primary p-[100px] rounded-2xl">
          <div className="w-2 h-px bg-zinc-300 absolute right-[44.5px] top-[48px] z-20"></div>
          <div className="w-px h-2 bg-zinc-300 absolute right-[48px] top-[44.5px] z-20"></div>

          <div className="w-full h-px bg-zinc-600 absolute left-0 right-0 top-[48px] z-10"></div>
          <div className="w-px h-full bg-zinc-600 absolute right-[48px] top-0 bottom-0 z-10"></div>

          <div className="w-2 h-px bg-zinc-300 absolute left-[44.5px] right-0 top-[48px] z-20"></div>
          <div className="w-px h-2 bg-zinc-300 absolute left-[48px] right-0 top-[44.5px] z-20"></div>

          <h2 className="text-3xl text-slate-50 mb-4 semibold">
            Subscribe to my newsletter
          </h2>
          <p className="text-gray-300 text-base w-[336px] mb-12">
            A periodic update about my life, recent blog posts, how-tos, and
            discoveries.
          </p>
          <div className="relative inline-block">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="bobloblaw@gmail.com"
              className="w-[425px] mb-[59px] px-5 py-3 bg-transparent border border-gray-400 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2 focus:ring-offset-dark-primary"
            />
            <button className="absolute w-28 bg-white hover:bg-slate-200 rounded-full h-[42px] right-1 top-1 text-xs text-slate-900">
              Subscribe
            </button>
          </div>
          <p className="text-gray-300 text-base">
            <span className="font-bold text-white">NO SPAM.</span> I never send
            spam. You can unsubscribe at any time!
          </p>
          <svg
            className="absolute -top-8 right-0 z-10"
            width="453"
            height="501"
            viewBox="0 0 453 501"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_185_3161)">
              <path
                d="M297.175 327.447C262.78 292.292 227.449 258.05 192.524 223.411C190.939 221.838 189.299 220.266 187.713 218.655C178.01 208.641 177.197 195.879 185.721 187.847C193.907 180.092 206.375 181.017 215.916 190.476C252.019 226.079 287.797 261.973 324.077 297.418C372.201 344.41 450.615 334.752 485.987 277.787C511.045 237.427 504.404 186.063 468.545 150.222C434.438 116.082 400.142 82.1269 325.61 8.37003C320.933 3.74206 313.386 3.72751 308.711 8.35643L296.238 20.705C291.483 25.4123 291.513 33.1151 296.283 37.8068C371.954 112.236 407.14 147.218 442.212 182.311C471.025 211.177 463.408 259.384 427.427 279.002C402.396 292.609 373.583 288.527 351.669 267.178C315.024 231.482 279.002 195.311 242.573 159.509C236.998 153.957 230.347 149.54 223.006 146.515C215.666 143.49 207.782 141.916 199.812 141.885C191.842 141.854 183.945 143.367 176.58 146.336C169.215 149.305 162.529 153.67 156.909 159.179C145.247 170.485 138.652 185.833 138.569 201.866C138.485 217.899 144.918 233.312 156.462 244.733C191.955 280.376 227.937 315.583 263.349 351.306C269.339 357.33 274.963 364.345 278.595 371.941C291.998 400.041 283 431.483 257.318 449.371C233.276 466.122 200.588 463.256 178.62 441.708C151.254 414.827 124.13 387.723 38.1941 302.517C33.5176 297.88 25.977 297.878 21.2989 302.513L8.59664 315.098C3.86063 319.791 3.85839 327.445 8.59103 332.141C95.0067 417.885 122.889 445.32 151.203 472.384C170.047 490.507 195.387 500.769 221.857 500.996C248.327 501.223 273.848 491.397 293.015 473.6C334.837 434.918 337.114 368.308 297.175 327.447Z"
                fill="url(#paint0_linear_185_3161)"
              />
              <path
                d="M215.221 416.712C215.709 416.91 216.156 417.108 216.644 417.28C225.724 419.817 234.045 417.478 239.181 409.036C245.049 399.432 243.261 390.475 235.346 382.601C198.795 346.377 162.109 310.284 125.721 273.915C92.9516 241.099 87.2866 190.593 111.342 149.732C133.947 111.341 181.638 92.0789 225.642 103.586C243.545 108.276 259.063 116.784 272.235 129.876C307.892 165.4 343.507 200.964 379.854 235.761C385.072 240.768 394.532 244.164 401.66 243.596C407 243.199 413.437 236.131 416.378 230.477C420.579 222.366 416.215 214.769 409.819 208.428C373.214 172.296 336.745 135.966 300.099 99.8338C282.047 81.9858 260.255 70.7302 235.671 64.2304C178.413 49.0906 113.294 72.7779 80.9713 120.668C46.5348 171.741 46.4536 240.24 83.9935 286.465C88.3032 291.802 92.8703 296.928 97.6001 301.935C112.44 319.862 159.141 364.304 189.214 392.562L211.06 414.202C211.589 414.73 212.158 415.18 212.768 415.536C213.5 415.946 214.231 416.302 214.977 416.593"
                fill="url(#paint1_linear_185_3161)"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_185_3161"
                x="0"
                y="0"
                width="501"
                height="503"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_185_3161"
                />
              </filter>
              <linearGradient
                id="paint0_linear_185_3161"
                x1="250.5"
                y1="119.845"
                x2="250.5"
                y2="501"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4B4B4F" />
                <stop offset="1" stop-color="#3C3C3F" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_185_3161"
                x1="236.758"
                y1="59.688"
                x2="236.758"
                y2="418.249"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4B4B4F" />
                <stop offset="1" stop-color="#3C3C3F" />
              </linearGradient>
            </defs>
          </svg>

          <div className="w-2 h-px bg-zinc-300 absolute right-[44.5px] bottom-[48px] z-20"></div>
          <div className="w-px h-2 bg-zinc-300 absolute right-[48px] bottom-[44.5px] z-20"></div>

          <div className="w-full h-px bg-zinc-600 absolute left-0 right-0 bottom-[48px] z-10"></div>
          <div className="w-px h-full bg-zinc-600 absolute left-[48px] top-0 bottom-0 z-10"></div>

          <div className="w-2 h-px bg-zinc-300 absolute left-[44.5px] right-0 bottom-[48px] z-20"></div>
          <div className="w-px h-2 bg-zinc-300 absolute left-[48px] right-0 bottom-[44.5px] z-20"></div>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
}
