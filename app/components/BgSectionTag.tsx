export enum TagType {
  FOOTER = "<footer>",
  HEADER = "<header>",
  NAV = "<nav>",
  BODY = "<body>",
  MAIN = "<main>",
  SECTION = "<section>",
  TOOLBOX = "console.log('Check these out!');",
}

type BgSectionTagProps = {
  tagType: TagType;
  width?: number;
  height?: number;
};

export function BgSectionTag({
  tagType = TagType.SECTION,
  width = 112,
  height = 40,
}: BgSectionTagProps) {
  return (
    <div className="text-center inline-block group">
      <div
        className="rounded-lg border border-border-primary p-1 bg-bg-primary"
        style={{ width, height }}
      >
        <div
          className="border-2 h-full rounded border-[#A5AEB81F]/10 bg-[#EDEEF0] grid place-items-center py-1"
          style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
        >
          <p className="inline-block font-semibold text-sm text-gray-400">
            {tagType}
          </p>
        </div>
      </div>
    </div>
  );
}
