import { convertToArticleList, getPublishedArticles } from '@/lib/notion';
import { useEffect, useState } from 'react';

import { ArticleList } from '@/components/ArticleList';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import { Tag } from '@/components/Tag';

export default function Blog({ articles, tags }) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const filteredArticles = articles
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
        {!filteredArticles.length && <p>No articles found.</p>}
        <ArticleList articles={filteredArticles} />
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  const { articles, tags } = convertToArticleList(data);

  return {
    props: {
      articles,
      tags
    },
    revalidate: 30
  };
};
