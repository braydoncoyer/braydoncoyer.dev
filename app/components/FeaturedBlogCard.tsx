import Link from "next/link";

type FeaturedBlogCardProps = {
  slug: string;
  imageName: string;
  title: string;
  summary: string;
};

export function FeaturedBlogCard({
  slug,
  imageName,
  title,
  summary,
}: FeaturedBlogCardProps) {
  return (
    <li className="z-50 flex h-full flex-col rounded-3xl border border-border-primary bg-bg-primary p-2">
      <Link className="flex h-full flex-col rounded-2xl" href={`/blog/${slug}`}>
        <img
          src={
            `/blog/${imageName}` ||
            "https://image.isu.pub/190918160849-8822f46c79620853d26cb2aad7175839/jpg/page_1_thumb_large.jpg"
          }
          alt=""
          className="h-[280px] rounded-2xl object-cover md:h-[225px]"
        />
        <div className="my-4 flex w-full flex-grow flex-col space-y-4 text-balance px-4">
          <h2 className="text-lg font-medium leading-7 tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="flex-grow leading-7 text-text-secondary">{summary}</p>
        </div>
      </Link>
    </li>
  );
}
