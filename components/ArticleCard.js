import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { useIsArticleRead } from "../lib/useIsArticleRead";
import { useRouter } from "next/dist/client/router";

export function ArticleCard({ article }) {
    const router = useRouter();
    const slug = slugify(article.title).toLowerCase();

    const [hasRead] = useIsArticleRead(slug);

    function handleArticleClicked() {
        const localData = JSON.parse(localStorage.getItem(slug));
        if (typeof window !== "undefined") {
          localStorage.setItem(slug, JSON.stringify({...localData, has_read: true}));
        }

        router.push(`/blog/${slug}`);
    }
  return (
    <div>
      <button onClick={handleArticleClicked}>
        <Image
          objectFit="cover"
          src={article.coverImage}
          layout="fixed"
          placeholder="blur"
          blurDataURL={article.coverImage}
          width={600}
          height={400}
        />
        <p>
          {article.title} {!hasRead && "- UNREAD"}
        </p>
      </button>
    </div>
  );
}
