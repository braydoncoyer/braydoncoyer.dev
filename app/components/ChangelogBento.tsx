import { Changelog } from "@/.velite";
import { fetchAndSortChangelogEntrees } from "app/lib/utils";
import { BentoCard } from "./BentoCard";

export function ChangelogBento() {
  const changelogItems = fetchAndSortChangelogEntrees().slice(0, 4);

  const getTopPosition = (index: number) => {
    const basePosition = -30;
    const spacing = 60;
    return `${basePosition + index * spacing}px`;
  };

  return (
    <BentoCard height="h-[276px]" linkTo="/changelog" className="group">
      <div className="absolute top-0 h-full left-1/2 transform -translate-x-1/2 w-2 bg-[#D6DADE]/35 border-x border-px border-[#A5AEB8]/10"></div>
      {/* Timeline */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
          {changelogItems.map((item, index) => (
            <div
              key={item.publishedAt}
              className={`absolute ${index % 2 === 1 ? "right-0" : "left-0"}`}
              style={{ top: getTopPosition(index) }}
            >
              <span
                className={`absolute top-[27px] ${
                  index % 2 === 1 ? "left-[-20px]" : "right-[-20px]"
                } w-[20px] h-px bg-border-primary`}
              />
              <EntreeCard title={item.title} publishedAt={item.publishedAt} />
            </div>
          ))}
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="w-full h-full bg-gradient-to-t from-white to-transparent absolute inset-0"></div>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 h-full items-end z-10">
        <div className="col-1 row-start-2">
          <h2 className="font-medium mb-2">Changelog</h2>
          <p className="text-text-secondary">
            Here&apos;s what&apos;s new on my site
          </p>
        </div>
      </div>
    </BentoCard>
  );
}

function EntreeCard({
  title = "A new entree!",
  publishedAt = "2022-12-13",
}: Partial<Changelog>) {
  return (
    <div className="rounded-xl inline-block px-3 py-2.5 bg-white text-xs space-y-px border border-border-primary w-[160px] z-10">
      <p className="font-semibold text-text-secondary text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </p>
      <time dateTime={publishedAt}>
        {new Date(publishedAt as string).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </time>
    </div>
  );
}
