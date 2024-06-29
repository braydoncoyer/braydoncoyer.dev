import Image from "next/image";
import { ShadowBox } from "app/components/ShadowBox";
import { BorderCard } from "app/components/BorderCard";
import { SectionTitlePill } from "app/components/SectionTitlePill";
import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { PageTitle } from "app/components/PageTitle";
import { hardwareData, softwareData } from "app/data/toolbox";
import { HorizontalLine } from "app/components/HorizontalLine";
import { BgSectionTag, TagType } from "app/components/BgSectionTag";
import { BgGradient } from "app/components/BgGradient";

export default function ToolboxPage() {
  return (
    <div className="relative">
      <span className="absolute top-20 -translate-y-1/2 left-1/2 translate-x-1/2">
        <HorizontalLine />
      </span>
      <span className="absolute left-32 top-6 border p-2 rounded-lg border-border-primary/50">
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_i_185_2882)">
            <circle
              cx="14.5"
              cy="14.5"
              r="11.5"
              stroke="#EDEEF2"
              stroke-width="6"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_185_2882"
              x="0"
              y="0"
              width="29"
              height="30.5"
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
                result="effect1_innerShadow_185_2882"
              />
            </filter>
          </defs>
        </svg>
      </span>
      <span className="absolute right-4 top-14">
        <BgSectionTag width={250} tagType={TagType.TOOLBOX} />
      </span>
      <span className="absolute left-36">
        <BgGradient />
      </span>
      <div className="space-y-[80px] border-x border-border-primary/50 relative">
        <div className="pt-[90px]">
          <PageTitle title="Hardware and software I keep in my toolbox." />
        </div>
        <span className="absolute top-40 -translate-y-1/2 left-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* Applications */}
        <div className="relative">
          <SectionTitlePill title="Applications" />
          <span className="absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-1/2">
            <HorizontalLine />
          </span>
          <span className="absolute -right-14 top-12">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_185_3011)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.73721e-07 22.9537C2.86893e-07 24.0583 0.900245 24.9403 1.99645 25.076C8.91996 25.9331 14.1015 31.1905 15.0193 37.4613C15.1793 38.5542 16.06 39.4548 17.1645 39.4548L38.1645 39.4548C39.2691 39.4548 40.1699 38.5582 40.1144 37.455C39.0853 16.9813 22.338 0.99127 1.99962 0.00227915C0.896353 -0.0513691 1.01271e-08 0.849178 2.3299e-08 1.95375L2.73721e-07 22.9537Z"
                  fill="#EDEEF0"
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_185_3011"
                  x="0"
                  y="0"
                  width="40.1167"
                  height="40.9548"
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
                    result="effect1_innerShadow_185_3011"
                  />
                </filter>
              </defs>
            </svg>
          </span>
        </div>
        <span className="absolute -left-[120px] top-[188px]">
          <BgSectionTag tagType={TagType.SECTION} />
        </span>
        {/* List */}
        <div className="grid grid-cols-8 grid-rows-2 gap-6 place-items-center relative">
          <span className="absolute top-0">
            <HorizontalLine />
          </span>
          {softwareData.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <ShadowBox width={120} height={120} label={item.title}>
                <Image
                  className="w-10 h-10 group-hover:w-11 group-hover:h-11 transition-all"
                  alt={item.title}
                  src={item.imgSrc}
                  width={40}
                  height={40}
                />
              </ShadowBox>
            </a>
          ))}
          <span className="absolute bottom-0">
            <HorizontalLine />
          </span>
        </div>
        {/* Hardware */}
        <div className="relative">
          <SectionTitlePill title="Hardware" />
          <span className="absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-1/2">
            <HorizontalLine />
          </span>
          <span className="absolute top-14 -left-11">
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
          <HorizontalLine />
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            {hardwareData.map((item) => (
              <a href={item.link} className="group" key={item.title}>
                <BorderCard>
                  <div className="flex flex-col space-y-3">
                    <p className="text-base leading-5 text-text-primary font-semibold">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-xs leading-4">
                      {item.description}
                    </p>
                  </div>
                  <span className="inline-block text-right">
                    <span className="text-purple-primary/50 group-hover:text-purple-primary text-sm">
                      Learn more
                    </span>
                  </span>
                </BorderCard>
              </a>
            ))}
          </div>

          <div className="h-16 relative">
            <HorizontalLine />
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
                      result="effect1_innerShadow_0_1"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          </div>
          <HorizontalLine />
        </div>

        {/* Newsletter */}
        <NewsletterSignUp />
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
    </div>
  );
}
