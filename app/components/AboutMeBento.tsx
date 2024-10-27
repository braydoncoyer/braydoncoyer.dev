import { getTimeOfDayGreeting } from "../lib/utils";
import { BentoCard } from "./BentoCard";
import { ShadowBox } from "./ShadowBox";

export function AboutMeBento({ linkTo }: { linkTo?: string }) {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <BentoCard height="h-[220px]" linkTo={linkTo}>
      <div className="flex h-full space-x-4 group">
        <div>
          <h2 className="text-base font-medium mb-4">Learn more about me</h2>
          <p className="mb-2 text-text-secondary text-balance">
            {timeOfDayGreeting} <br />
            I&apos;m Braydon, an experienced front-end developer.
          </p>
        </div>
        <div className="relative">
          <ShadowBox width={188} height={278}></ShadowBox>
          <img
            className="w-[180px] h-[270px] absolute -top-1 left-0 rotate-[8deg] object-cover rounded-lg shadow group-hover:rotate-[6deg] group-hover:scale-105 transition-all"
            src="/braydon_headshot_1.jpeg"
            alt="A headshot"
          />
        </div>
      </div>
    </BentoCard>
  );
}
