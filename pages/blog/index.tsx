import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';

import { ArticleCard } from '@/components/ArticleCard';
import { Client } from '@notionhq/client';
import Head from 'next/head';

export default function Blog({ articles, tags }) {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {JSON.stringify(tags)}
        <h2>Tags</h2>
        <ul className="space-y-4">
          {tags &&
            tags.map((tag) => (
              <li key={tag}>
                <p>{tag}</p>
              </li>
            ))}
        </ul>
        <h2>Articles</h2>
        <ul className="space-y-12">
          {articles &&
            articles.map((article) => (
              <li key={article.title}>
                <ArticleCard article={article} />
              </li>
            ))}
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
  let tags: string[] = [];
  const notion = new Client({
    auth: process.env.NOTION_SECRET
  });

  const data = await notion.databases.query({
    database_id: process.env.BLOG_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: '✅ Published'
          }
        },
        {
          property: 'Type',
          select: {
            equals: 'Personal'
          }
        }
      ]
    }
  });

  const articles = data.results.map((article: any) => {
    return {
      title: article.properties.Name.title[0].plain_text,
      tags: article.properties.tags.multi_select.map((tag) => {
        if (!tags.includes(tag.name)) {
          const newList = [...tags, tag.name];
          tags = newList;
        }
        return { name: tag.name, id: tag.id };
      }),
      coverImage:
        article.properties?.coverImage?.files[0]?.file.url ||
        'https://via.placeholder.com/600x400.png'
    };
  });

  return {
    props: {
      articles,
      tags
    },
    revalidate: 30
  };
};
