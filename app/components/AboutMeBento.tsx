import { getTimeOfDayGreeting } from "../lib/utils";
import { BentoCard } from "./BentoCard";

export function AboutMeBento({ linkTo }: { linkTo?: string }) {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <BentoCard height="h-[220px]" linkTo={linkTo}>
      <div className="group flex h-full justify-center md:mx-auto md:w-3/4 md:justify-around">
        <div className="flex-1">
          <h2 className="mb-4 text-base font-medium">Learn more about me</h2>
          <p className="mb-2 text-balance text-text-secondary">
            {timeOfDayGreeting} <br />
            I&apos;m Braydon, an experienced front-end developer.
          </p>
        </div>
        <div className="relative flex-1">
          <div className="group absolute right-4 text-center">
            <div
              className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 ease-out group-hover:border-indigo-400"
              style={{ width: 188, height: 278 }}
            >
              <div
                className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              >
                <img
                  className="absolute -top-1 left-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105"
                  src="/braydon_headshot_1.jpeg"
                  alt="A headshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
