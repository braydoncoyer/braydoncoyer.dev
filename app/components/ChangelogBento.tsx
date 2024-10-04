import { Changelog } from "@/.velite";
import { fetchAndSortChangelogEntrees } from "app/lib/utils";
import Link from "next/link";

export function ChangelogBento() {
  const changelogItems = fetchAndSortChangelogEntrees().slice(0, 3);

  return (
    <Link href="/changelog">
      <div className="p-6 rounded-2xl col-span-1 h-[276px] border border-border-primary flex flex-col bg-gradient-to-tl group relative overflow-hidden">
        <div className="absolute top-0 h-full left-1/2 transform -translate-x-1/2 w-2 bg-[#D6DADE]/35 border-x border-px border-[#A5AEB8]/10"></div>
        <div className="absolute left-4 top-[-40px]">
          <span className="absolute top-[27px] left-[-20px] w-[20px] h-px bg-border-primary"></span>
          <EntreeCard />
        </div>

        <div className="absolute top-9 right-4">
          <span className="absolute top-[27px] left-[-20px] w-[20px] h-px bg-border-primary" />
          <EntreeCard
            title={changelogItems[0].title}
            publishedAt={changelogItems[0].publishedAt}
          />
        </div>

        <div className="absolute top-24 left-4">
          <span className="absolute top-[27px] right-[-20px] w-[20px] h-px bg-border-primary" />
          <EntreeCard
            title={changelogItems[1].title}
            publishedAt={changelogItems[1].publishedAt}
          />
        </div>

        <div className="absolute top-40 right-4">
          <span className="absolute top-[27px] left-[-20px] w-[20px] h-px bg-border-primary" />
          <EntreeCard
            title={changelogItems[2].title}
            publishedAt={changelogItems[2].publishedAt}
          />
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
      </div>
    </Link>
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
