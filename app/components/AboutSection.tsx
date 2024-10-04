import { SectionTitlePill } from "./SectionTitlePill";
import { HorizontalLine } from "./HorizontalLine";
import { ConnectionsBento } from "./ConnectionsBento";
import { ToolboxBento } from "./ToolboxBento";
import { CalendarBento } from "./CalendarBento";
import { BentoCard } from "./BentoCard";
import { CurrentlyPlayingBento } from "./CurrentlyPlayingBento";

export function AboutSection(): React.ReactNode {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <SectionTitlePill title="About" />
        <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-3xl tracking-tight max-w-lg leading-10">
          Here&apos;s what sets me apart and makes me unique
        </h2>
      </div>

      {/* About Grid */}
      <div>
        <HorizontalLine />
        <div>
          <HorizontalLine />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 grid-rows-[14]">
            <BentoCard colSpan={5} rowSpan={6} height="h-[220px]">
              Currnetly Playing
            </BentoCard>
            <ConnectionsBento />
            <ToolboxBento />
            <CalendarBento />
          </div>
          <HorizontalLine />
        </div>
        <HorizontalLine />
      </div>
      <HorizontalLine />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 grid-rows-[14]">
        <div className="p-6 rounded-2xl col-span-5 row-span-6 h-[220px] border border-border-primary flex flex-col hover:bg-white group relative overflow-hidden"></div>

        <ConnectionsBento />

        <ToolboxBento />

        <CalendarBento />
      </div>
      <HorizontalLine />
    </section>
  );
}
