import { Article } from '@/lib/types';
import Image from 'next/image';
import slugify from 'slugify';
import { useIsArticleRead } from '@/hooks/useIsArticleRead';
import { useRouter } from 'next/dist/client/router';

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const router = useRouter();
  const slug = slugify(article.title).toLowerCase();

  const [hasRead] = useIsArticleRead(slug);

  function handleArticleClicked() {
    const localData = JSON.parse(localStorage.getItem(slug));
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        slug,
        JSON.stringify({ ...localData, has_read: true })
      );
    }

    router.push(`/blog/${slug}`);
  }
  return (
    <div>
      <button onClick={handleArticleClicked}>
        <Image
          objectFit="cover"
          src={article.coverImage}
          placeholder="blur"
          blurDataURL={article.coverImage}
          width={600}
          height={400}
          alt={'article cover'}
        />
        <p>
          {article.title} {!hasRead && '- UNREAD'}
        </p>
        <p>{article.summary}</p>
      </button>
    </div>
  );
}
