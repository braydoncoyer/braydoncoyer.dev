import { Article } from '@/lib/types';
import Image from 'next/legacy/image';
import { handleArticleClicked } from '@/lib/handleArticleClick';
import siteMetadata from '@/data/siteMetadata';
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

  return (
    <div>
      <button onClick={() => handleArticleClicked(slug)}>
        <div className="group">
          <Image
            className="rounded-3xl group-hover:opacity-75"
            objectFit="cover"
            src={article.coverImage}
            placeholder="blur"
            blurDataURL={article.coverImage}
            width={684}
            height={800}
            layout="intrinsic"
            alt={'article cover'}
          />
          <div className="w-full text-left">
            <h3 className="mt-2 text-2xl">{article.title}</h3>
            {/* {JSON.stringify(article)} */}
            {/* <p>{article.summary}</p> */}
            <span className="flex items-center text-base font-semibold">
              {new Date(article.publishedDate).toLocaleDateString(
                siteMetadata.locale,
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }
              )}{' '}
              {hasRead && (
                <span className="inline-flex items-center ml-3 text-sm text-teal-600 opacity-75 dark:text-teal-800">
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
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
