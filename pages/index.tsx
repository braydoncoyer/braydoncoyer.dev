import { convertToArticleList, getPublishedArticles } from '@/lib/notion';

import { ArticleList } from '@/components/ArticleList';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Subscribe } from '@/components/Subscribe';
import { SubscribeSize } from '@/lib/types';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

export default function Home({ recentArticles }) {
  const { push } = useRouter();
  return (
    <Container>
      <div>
        <div>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-6 items-center">
            <h1 className="leading-tight md:leading-normal col-span-5">
              I'm{' '}
              <span className="text-teal-500 dark:text-teal-400">Braydon</span>.
              I'm a developer, blogger and designer working at Cognizant.
            </h1>
            <Image
              alt="Braydon Coyer"
              height={180}
              width={180}
              src={siteMetadata.avatarImage}
              placeholder="blur"
              blurDataURL={siteMetadata.avatarImage}
              className="rounded-full col-span-1"
              layout="fixed"
            />
          </div>
          <div className="space-y-6 md:space-y-0 md:space-x-4">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-full md:w-auto md:inline-flex py-3 px-12 rounded-full bg-midnight text-white dark:bg-gray-200 dark:text-midnight items-center justify-center general-ring-state"
              onClick={() => push('/blog')}
            >
              Read the blog
            </button>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-full md:w-auto md:inline-flex py-3 px-12 rounded-full bg-gray-200 dark:bg-midnight items-center justify-center general-ring-state"
              onClick={() => push('/about')}
            >
              More about me
            </button>
          </div>
        </div>
        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
        <div>
          <h2>I love to share my knowledge by writing.</h2>
          <p>Check out a few of my most recent publishings.</p>
          <ArticleList articles={recentArticles} />
          <div className="mt-12">
            <Subscribe size={SubscribeSize.LARGE} />
          </div>
        </div>
        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  const { articles } = convertToArticleList(data);

  return {
    props: {
      recentArticles: articles.slice(0, 3)
    },
    revalidate: 120
  };
};
