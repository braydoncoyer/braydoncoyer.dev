import { PageTitle } from "./PageTitle";
import { SectionTitlePill } from "./SectionTitlePill";

export function BlogPageHeader({
  title,
  sectionTitle,
}: {
  title: string;
  sectionTitle?: string;
}) {
  return (
    <>
      <div className="z-10 mx-auto max-w-2xl">
        <PageTitle title={title} />
      </div>
      {sectionTitle && (
        <div className="text-center text-sm font-medium text-indigo-600">
          <span>{sectionTitle}</span>
        </div>
      )}
    </>
  );
}
