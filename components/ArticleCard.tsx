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
          className="rounded-xl"
          objectFit="fill"
          src={article.coverImage}
          placeholder="blur"
          blurDataURL={article.coverImage}
          width={1200}
          height={684}
          layout="intrinsic"
          alt={'article cover'}
        />
        <div className="text-left w-full">
          <h3 className="mt-2">
            {article.title}{' '}
            {hasRead && (
              <span className="text-sm inline-flex items-center text-teal-600 opacity-75 dark:text-teal-800">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
                  ></path>
                </svg>
                <span>read</span>
              </span>
            )}
          </h3>
          <p>{article.summary}</p>
        </div>
      </button>
    </div>
  );
}
