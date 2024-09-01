"use client";

import { useState } from "react";
import { HorizontalLine } from "./HorizontalLine";

type NewsletterSignUpProps = {
  title?: string;
  description?: string;
  buttonText?: string;
};

export function NewsletterSignUp({
  title = "Subscribe to my newsletter",
  description = "A periodic update about my life, recent blog posts, how-tos, and discoveries.",
  buttonText = "Subscribe",
}: NewsletterSignUpProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(false);
    setIsLoading(true);

    if (!email) {
      setMessage("Please provide an email address.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/create-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("You're signed up!");
        setIsSuccess(true);
        setEmail("");
      } else {
        setMessage("Something went wrong. :(");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("Something went wrong. :(");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

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

          <h2 className="text-3xl text-slate-50 mb-4 semibold">{title}</h2>
          <p className="text-gray-300 text-base w-[336px] mb-12">
            {description}
          </p>
          <div className="space-y-4 mb-4">
            <form onSubmit={handleSubmit} className="relative inline-block">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="bobloblaw@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[425px] px-5 py-3 bg-transparent border border-gray-400 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2 focus:ring-offset-dark-primary text-white"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="absolute w-28 bg-white hover:bg-slate-200 rounded-full h-[42px] right-1 top-1 text-xs text-slate-900"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : buttonText}
              </button>
            </form>
            {/* Set minimum height to prevent layout shift */}
            <div className="min-h-[30px]">
              {message && (
                <p
                  className={`text-sm ${
                    isSuccess ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
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
      <span className="absolute bottom-6 left-8">
        <svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.24"
            d="M0.827592 6.88352V6.01349C1.39104 6.01349 1.7838 5.89915 2.00586 5.67045C2.23124 5.43845 2.34393 5.06226 2.34393 4.5419V3.27415C2.34393 2.71401 2.41353 2.25497 2.55273 1.89702C2.69525 1.53906 2.9024 1.26065 3.17418 1.06179C3.44596 0.862926 3.7774 0.725378 4.1685 0.649147C4.5596 0.569602 5.00373 0.52983 5.50089 0.52983V1.91193C5.10979 1.91193 4.80984 1.96662 4.60103 2.07599C4.39222 2.18205 4.24805 2.34612 4.1685 2.56818C4.09227 2.79025 4.05415 3.07363 4.05415 3.41832V5.04901C4.05415 5.30421 4.01107 5.54285 3.92489 5.76491C3.83872 5.98698 3.68129 6.18253 3.45259 6.35156C3.2239 6.51728 2.89743 6.6482 2.47319 6.74432C2.05226 6.83712 1.50373 6.88352 0.827592 6.88352ZM5.50089 13.1626C5.00373 13.1626 4.5596 13.1229 4.1685 13.0433C3.7774 12.9671 3.44596 12.8295 3.17418 12.6307C2.9024 12.4318 2.69525 12.1534 2.55273 11.7955C2.41353 11.4375 2.34393 10.9785 2.34393 10.4183V9.15554C2.34393 8.63518 2.23124 8.26065 2.00586 8.03196C1.7838 7.79995 1.39104 7.68395 0.827592 7.68395V6.81392C1.50373 6.81392 2.05226 6.86198 2.47319 6.9581C2.89743 7.0509 3.2239 7.18182 3.45259 7.35085C3.68129 7.51657 3.83872 7.71046 3.92489 7.93253C4.01107 8.15459 4.05415 8.39157 4.05415 8.64347V10.2741C4.05415 10.6188 4.09227 10.9022 4.1685 11.1243C4.24805 11.3464 4.39222 11.5121 4.60103 11.6214C4.80984 11.7308 5.10979 11.7855 5.50089 11.7855V13.1626ZM0.827592 7.68395V6.01349H2.40359V7.68395H0.827592ZM14.4286 0.340908L11.1474 12.5312H9.57138L12.8526 0.340908H14.4286ZM23.1712 6.81392V7.68395C22.6077 7.68395 22.2133 7.79995 21.9879 8.03196C21.7659 8.26065 21.6548 8.63518 21.6548 9.15554V10.4183C21.6548 10.9785 21.5836 11.4375 21.4411 11.7955C21.3018 12.1534 21.0964 12.4318 20.8246 12.6307C20.5528 12.8295 20.2214 12.9671 19.8303 13.0433C19.4392 13.1229 18.995 13.1626 18.4979 13.1626V11.7855C18.889 11.7855 19.1889 11.7308 19.3977 11.6214C19.6065 11.5121 19.7491 11.3464 19.8253 11.1243C19.9048 10.9022 19.9446 10.6188 19.9446 10.2741V8.64347C19.9446 8.39157 19.9877 8.15459 20.0739 7.93253C20.16 7.71046 20.3175 7.51657 20.5462 7.35085C20.7749 7.18182 21.0997 7.0509 21.5206 6.9581C21.9448 6.86198 22.495 6.81392 23.1712 6.81392ZM18.4979 0.52983C18.995 0.52983 19.4392 0.569602 19.8303 0.649147C20.2214 0.725378 20.5528 0.862926 20.8246 1.06179C21.0964 1.26065 21.3018 1.53906 21.4411 1.89702C21.5836 2.25497 21.6548 2.71401 21.6548 3.27415V4.5419C21.6548 5.06226 21.7659 5.43845 21.9879 5.67045C22.2133 5.89915 22.6077 6.01349 23.1712 6.01349V6.88352C22.495 6.88352 21.9448 6.83712 21.5206 6.74432C21.0997 6.6482 20.7749 6.51728 20.5462 6.35156C20.3175 6.18253 20.16 5.98698 20.0739 5.76491C19.9877 5.54285 19.9446 5.30421 19.9446 5.04901V3.41832C19.9446 3.07363 19.9048 2.79025 19.8253 2.56818C19.7491 2.34612 19.6065 2.18205 19.3977 2.07599C19.1889 1.96662 18.889 1.91193 18.4979 1.91193V0.52983ZM23.1712 6.01349V7.68395H21.5952V6.01349H23.1712Z"
            fill="#A5AEB8"
          />
        </svg>
      </span>
      <span className="absolute bottom-6 right-8">
        <svg
          width="24"
          height="8"
          viewBox="0 0 24 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_185_3210)">
            <rect width="24" height="8" rx="1" fill="#EDEEF2" />
          </g>
          <defs>
            <filter
              id="filter0_i_185_3210"
              x="0"
              y="0"
              width="24"
              height="9.5"
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
                result="effect1_innerShadow_185_3210"
              />
            </filter>
          </defs>
        </svg>
      </span>
    </div>
  );
}
