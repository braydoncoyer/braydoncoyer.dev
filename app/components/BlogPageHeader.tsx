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
      {sectionTitle && <SectionTitlePill title={sectionTitle} />}
    </>
  );
}
