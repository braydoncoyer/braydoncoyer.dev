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
    <li className="flex flex-col h-full border border-border-primary rounded-3xl p-2 hover:bg-white z-50">
      <Link className="flex flex-col rounded-2xl h-full" href={`/blog/${slug}`}>
        <img
          src={
            `/blog/${imageName}` ||
            "https://image.isu.pub/190918160849-8822f46c79620853d26cb2aad7175839/jpg/page_1_thumb_large.jpg"
          }
          alt=""
          className="rounded-2xl h-[225px] object-cover"
        />
        <div className="my-4 flex flex-col w-full space-y-4 px-4 flex-grow text-balance">
          <h2 className="tracking-tight text-slate-900 text-lg font-medium leading-7">
            {title}
          </h2>
          <p className="leading-7 text-text-secondary flex-grow">{summary}</p>
        </div>
      </Link>
    </li>
  );
}
