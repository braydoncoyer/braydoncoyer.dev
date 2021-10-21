import {Client} from '@notionhq/client'
import Head from 'next/head'
import Link from 'next/link'
import slugify from 'slugify';

export default function Home({ articles }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {articles &&
          articles.map((article) => (
            <p key={article.title}>
              <Link href={`/blog/${slugify(article.title).toLowerCase()}`}>
                <a>{article.title}</a>
              </Link>
            </p>
          ))}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.BLOG_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: "✅ Published",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Personal"
          }
        }
      ],
    },
  });

  const articles = data.results.map(article => ({
    title: article.properties.Name.title[0].plain_text
  }));

  console.log(data.results);

  return {
    props: {
      articles,
    },
  };
}