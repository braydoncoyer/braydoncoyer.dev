import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { convertToArticleList, getPublishedArticles } from '@/lib/notion';
import { useEffect, useState } from 'react';

import { ArticleCard } from '@/components/ArticleCard';
import { ArticleList } from '@/components/ArticleList';
import { Client } from '@notionhq/client';
import Head from 'next/head';
import { Container } from 'layouts/Container';

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
      <div>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Search articles"
        />
      </div>
      <h2>Tags</h2>
      <ul className="space-y-4 flex items-center justify-start flex-wrap space-x-4 list-none !important">
        {tags &&
          tags.map((tag) => (
            <button key={tag} onClick={() => setSelectedTag(tag)}>
              {tag}
            </button>
          ))}
      </ul>
      <h2>Articles</h2>
      {!filteredArticles.length && <p>No articles found.</p>}
      <ArticleList articles={filteredArticles} />
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
