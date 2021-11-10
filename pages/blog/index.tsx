import { convertToArticleList, getPublishedArticles } from '@/lib/notion';
import { useEffect, useState } from 'react';

import { ArticleList } from '@/components/ArticleList';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Tag } from '@/components/Tag';
import { handleArticleClicked } from '@/lib/handleArticleClick';
import slugify from 'slugify';

export default function Blog({ featuredArticle, articles, tags }) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const filteredArticles = articles
    .slice(1)
    .sort((a, b) => Number(new Date(b.publishedDate)))
    .filter((post) => {
      return (
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

  useEffect(() => {
    setSearchValue(selectedTag);
  }, [selectedTag]);

  return (
    <Container>
      <div className="relative">
        <input
          className="bg-white dark:bg-midnight py-3 px-8 shadow-sm focus:ring-midnight dark:focus:ring-gray-100 block w-full sm:text-sm md:text-lg border-gray-300 dark:border-midnight-hover rounded-full"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder={`Search ${articles.length} articles`}
        />
        <svg
          className="absolute top-[13px] md:top-3.5 right-[20px]"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
          ></path>
        </svg>
      </div>
      <div className="space-y-12 min-h-screen">
        <h3>Discover articles by topic</h3>
        <ul className="flex items-center justify-start flex-wrap list-none !important">
          {tags &&
            tags.map((tag) => (
              <Tag key={tag} tag={tag} cb={() => setSelectedTag(tag)} />
            ))}
        </ul>
        {!searchValue && (
          <button
            onClick={() =>
              handleArticleClicked(slugify(featuredArticle.title).toLowerCase())
            }
            className="rounded-xl bg-gray-100 dark:bg-midnight p-8 hover:cursor-pointer space-y-6 article-ring-state"
          >
            <div className="flex items-center md:justify-end">
              <p className="m-0 text-lg font-semibold">Featured article</p>
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.25 10C17.25 12.8995 14.8995 15.25 12 15.25C9.10051 15.25 6.75 12.8995 6.75 10C6.75 7.10051 9.10051 4.75 12 4.75C14.8995 4.75 17.25 7.10051 17.25 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.75 14.75L7.75 19.25L12 17.75L16.25 19.25L15.25 14.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="flex h-3 w-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-teal-400 opacity-75"></span>
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10">
              <div className="col-span-7">
                <Image
                  className="rounded-xl"
                  objectFit="fill"
                  src={featuredArticle.coverImage}
                  placeholder="blur"
                  blurDataURL={featuredArticle.coverImage}
                  width={1200}
                  height={684}
                  layout="intrinsic"
                  alt={'article cover'}
                />
              </div>
              <div className="col-span-5 text-left">
                <h3>{featuredArticle.title}</h3>
                <p>{featuredArticle.summary}</p>
              </div>
            </div>
          </button>
        )}
        {!filteredArticles.length && (
          <div className="w-full mx-auto rounded-lg bg-[#F8FAFC] dark:bg-midnight p-4">
            <p className="text-2xl flex items-center justify-center">
              No articles found{' '}
              <span>
                <svg className="w-7 h-7 ml-3" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75C4.75 6.54086 6.54086 4.75 8.75 4.75Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.75 15.25C7.75 15.25 9 12.75 12 12.75C15 12.75 16.25 15.25 16.25 15.25"
                  ></path>
                  <circle cx="14" cy="10" r="1" fill="currentColor"></circle>
                  <circle cx="10" cy="10" r="1" fill="currentColor"></circle>
                </svg>
              </span>
            </p>
          </div>
        )}
        <ArticleList articles={filteredArticles} />
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  const { articles, tags } = convertToArticleList(data);

  const featuredArticle = articles[0];

  return {
    props: {
      featuredArticle,
      articles: articles.slice(1),
      tags
    },
    revalidate: 30
  };
};
