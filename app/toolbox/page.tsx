import { BorderCard } from "@/app/components/BorderCard";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { hardwareData, softwareData } from "app/data/toolbox";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { GridWrapper } from "@/app/components/GridWrapper";

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
          <div className="relative grid grid-cols-3 place-items-center md:grid-cols-4 lg:grid-cols-8 lg:gap-6">
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
        </div>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
