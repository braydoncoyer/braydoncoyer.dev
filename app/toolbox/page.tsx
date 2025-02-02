import { BorderCard } from "app/components/BorderCard";
import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { PageTitle } from "app/components/PageTitle";
import { hardwareData, softwareData } from "app/data/toolbox";
import { HorizontalLine } from "app/components/HorizontalLine";
import { GridWrapper } from "app/components/GridWrapper";

export default function ToolboxPage() {
  return (
    <div className="relative">
      <title>Toolbox | Braydon Coyer</title>
      <span className="absolute left-1/2 top-20 -translate-y-1/2 translate-x-1/2">
        <HorizontalLine />
      </span>
      <div className="relative space-y-10 md:space-y-16">
        <div className="mx-auto text-balance pt-14 md:pt-16">
          <GridWrapper>
            <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
              Hardware && software I keep in my toolbox.
            </h1>
          </GridWrapper>
        </div>
        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* Applications */}
        <div className="relative">
          <GridWrapper>
            <div className="text-center text-sm font-medium text-indigo-600">
              <span>Applications</span>
            </div>
          </GridWrapper>
        </div>
        {/* List */}
        <GridWrapper>
          <div className="relative grid grid-cols-3 place-items-center gap-6 md:grid-cols-8">
            {softwareData.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
              >
                <div className="group inline-block text-center">
                  <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                      style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                    >
                      <img
                        className="h-10 w-10"
                        alt={item.title}
                        src={item.imgSrc}
                      />
                    </div>
                  </div>
                  {item.title ? (
                    <p className="mt-3 text-sm text-gray-500">{item.title}</p>
                  ) : null}
                </div>
              </a>
            ))}
          </div>
        </GridWrapper>
        {/* Hardware */}
        <div className="relative">
          <GridWrapper>
            <div className="text-center text-sm font-medium text-indigo-600">
              <span>Hardware</span>
            </div>
          </GridWrapper>
          <span className="absolute left-56 top-10">
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
        </div>

        <div>
          <GridWrapper>
            <div className="grid grid-cols-1 grid-rows-2 gap-2 md:grid-cols-3">
              {hardwareData.map((item) => (
                <a
                  href={item.link}
                  className="group block h-full"
                  key={item.title}
                >
                  <BorderCard>
                    <div className="flex flex-col space-y-3">
                      <p className="text-base font-semibold leading-5 text-text-primary">
                        {item.title}
                      </p>
                      <p className="leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                    <span className="inline-block text-right">
                      <span className="text-sm text-purple-primary/50 group-hover:text-purple-primary">
                        Learn more
                      </span>
                    </span>
                  </BorderCard>
                </a>
              ))}
            </div>
          </GridWrapper>
          <div className="relative h-16">
            <span className="absolute left-64 top-5">
              <svg
                width="89"
                height="27"
                viewBox="0 0 89 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M80 1C84.4183 1 88 4.58172 88 9V18C88 22.4183 84.4183 26 80 26L9 26C4.58172 26 0.999998 22.4183 0.999998 18V9C0.999998 4.58172 4.58172 1 9 1L80 1Z"
                  stroke="#D6DADE"
                />
                <g filter="url(#filter0_i_0_1)">
                  <rect
                    x="58"
                    y="7"
                    width="24"
                    height="7"
                    rx="1"
                    fill="#EDEEF2"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_0_1"
                    x="58"
                    y="7"
                    width="24"
                    height="8.5"
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
                      result="effect1_innerShadow_0_1"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
