import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { convertToArticleList, getPublishedArticles } from '@/lib/notion';
import { useEffect, useState } from 'react';

import { ArticleCard } from '@/components/ArticleCard';
import { ArticleList } from '@/components/ArticleList';
import { Client } from '@notionhq/client';
import Head from 'next/head';

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
    <div className="min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            placeholder="Search articles"
          />
        </div>
        <h2>Tags</h2>
        <ul className="space-y-4 flex space-x-4">
          {tags &&
            tags.map((tag) => (
              <li key={tag}>
                <button onClick={() => setSelectedTag(tag)}>
                  <span>{tag}</span>
                </button>
              </li>
            ))}
        </ul>
        <h2>Articles</h2>
        <ul className="space-y-12">
          {!filteredArticles.length && <p>No articles found.</p>}
          <ArticleList articles={filteredArticles} />
        </ul>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
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
