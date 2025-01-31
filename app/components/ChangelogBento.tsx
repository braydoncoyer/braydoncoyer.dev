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
      <div className="border-px absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 transform border-x border-[#A5AEB8]/10 bg-[#D6DADE]/35"></div>
      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
          {changelogItems.map((item, index) => (
            <div
              key={item.publishedAt}
              className={`absolute ${index % 2 === 1 ? "right-0" : "left-0"}`}
              style={{ top: getTopPosition(index) }}
            >
              <span
                className={`absolute top-[27px] ${
                  index % 2 === 1 ? "left-[-20px]" : "right-[-20px]"
                } hidden h-px w-[20px] bg-border-primary md:inline-block`}
              />
              <EntreeCard title={item.title} publishedAt={item.publishedAt} />
            </div>
          ))}
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white to-transparent"></div>
      <div className="z-10 grid h-full grid-cols-2 grid-rows-2 items-end gap-8">
        <div className="col-1 row-start-2">
          <h2 className="mb-2 font-medium">Changelog</h2>
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
    <div className="z-10 inline-block w-[160px] space-y-px rounded-xl border border-border-primary bg-white px-3 py-2.5 text-xs">
      <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-text-secondary">
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
