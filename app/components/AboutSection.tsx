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
        <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary">
          Here&apos;s what sets me apart and makes me unique
        </h2>
      </div>

      {/* About Grid */}
      <div>
        <HorizontalLine />
        <div>
          <HorizontalLine />
          <div className="grid grid-cols-1 grid-rows-[14] gap-2 md:grid-cols-12">
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
      <div className="grid grid-cols-1 grid-rows-[14] gap-2 md:grid-cols-12">
        <div className="group relative col-span-5 row-span-6 flex h-[220px] flex-col overflow-hidden rounded-2xl border border-border-primary p-6 hover:bg-white"></div>

        <ConnectionsBento />

        <ToolboxBento />

        <CalendarBento />
      </div>
      <HorizontalLine />
    </section>
  );
}
