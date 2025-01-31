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
    <div className="group inline-block text-center">
      <div
        className="rounded-lg border border-border-primary bg-bg-primary p-1"
        style={{ width, height }}
      >
        <div
          className="grid h-full place-items-center rounded border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] py-1"
          style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
        >
          <p className="inline-block text-sm font-semibold text-gray-400">
            {tagType}
          </p>
        </div>
      </div>
    </div>
  );
}
