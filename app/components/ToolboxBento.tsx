import { softwareData } from "../data/toolbox";
import { BentoCard } from "./BentoCard";

const items = softwareData
  .map((item, index) => (
    <a
      key={item.title}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div className="text-center inline-block group">
        <div
          className={`rounded-[20px] border border-border-primary group-hover:border-indigo-400 p-2 transition-all duration-500
            ${
              index === 2
                ? "group-hover:-translate-y-3 delay-0"
                : index === 1 || index === 3
                ? "group-hover:-translate-y-3 delay-100"
                : "group-hover:-translate-y-3 delay-200"
            }`}
          style={{
            width: index === 2 ? 130 : 110,
            height: index === 2 ? 130 : 110,
          }}
        >
          <div
            className="border-2 h-full rounded-xl border-[#A5AEB81F]/10 bg-[#EDEEF0] grid place-items-center"
            style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
          >
            <img className="w-10 h-10" alt={item.title} src={item.imgSrc} />
          </div>
        </div>
      </div>
    </a>
  ))
  .slice(0, 5);

export function ToolboxBento({ linkTo }: { linkTo?: string }) {
  return (
    <BentoCard linkTo={linkTo} height="h-[300px]">
      <div className="absolute left-0 inset-y-0 w-1/5 bg-gradient-to-r from-bg-primary group-hover:from-bg-white to-transparent z-20"></div>
      <div className="absolute right-0 inset-y-0 w-1/5 bg-gradient-to-l from-bg-primary group-hover:from-bg-white to-transparent z-20"></div>
      <div className="text-center z-20">
        <h2 className="text-base font-medium">Toolbox</h2>
        <p className="mt-1 text-text-secondary">
          Check out my favorite tools and spots around the web.
        </p>
      </div>
      <div className="mt-12 transition-all duration-500 ease-in-out flex gap-3 items-center justify-center">
        {items}
      </div>
    </BentoCard>
  );
}
