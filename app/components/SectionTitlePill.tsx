import { HorizontalLine } from "./HorizontalLine";

type SectionTitlePillProps = {
  title: string;
};

export function SectionTitlePill({ title }: SectionTitlePillProps) {
  return (
    <div className="relative flex items-center justify-center">
      <HorizontalLine />
      <div className="z-10 grid place-items-center rounded-[200px] border border-border-primary bg-[#F7F7F8] px-5 py-0.5 text-base font-medium uppercase text-slate-600">
        <span>{title}</span>
      </div>
    </div>
  );
}
