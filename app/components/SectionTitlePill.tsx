type SectionTitlePillProps = {
  title: string;
};

export function SectionTitlePill({ title }: SectionTitlePillProps) {
  return (
    <div className="flex justify-center relative">
      <div className="px-5 py-0.5 rounded-[200px] text-slate-600 text-base border grid place-items-center border-border-primary z-10 bg-[#F7F7F8] uppercase font-medium">
        <span>{title}</span>
      </div>
    </div>
  );
}
