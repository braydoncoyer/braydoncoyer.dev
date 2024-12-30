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
      <div className="max-w-2xl mx-auto z-10">
        <PageTitle title={title} />
      </div>
      {sectionTitle && (
        <div className="text-sm font-medium text-indigo-600 text-center">
          <span>{sectionTitle}</span>
        </div>
      )}
    </>
  );
}
