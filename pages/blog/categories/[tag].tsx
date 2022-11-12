import { GetStaticPaths, GetStaticProps } from 'next';
import {
  convertToArticleList,
  getAllArticleTags,
  getAllArticles,
  getAllArticlesByTag
} from '@/lib/notion';

import { ArticleList } from '@/components/ArticleList';
import { Container } from 'layouts/Container';
import Image from 'next/image';
import { TagList } from '@/components/TagList';
import { handleArticleClicked } from '@/lib/handleArticleClick';
import slugify from 'slugify';

export default function Blog({ featuredArticle, articles, tags, tag }) {
  return (
    <Container title="Blog - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          My Blog
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Insightful and helpful content curated for you.
        </span>
      </h1>
      <div>
        <button
          onClick={() =>
            handleArticleClicked(slugify(featuredArticle.title).toLowerCase())
          }
          className="space-y-2 text-left hover:cursor-pointer group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div className="col-span-1">
              <div className="flex items-center mt-4 md:justify-start">
                <p className="m-0 text-lg font-extrabold">Featured article</p>
                <svg
                  className="w-7 h-7 stroke-teal-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.25 10C17.25 12.8995 14.8995 15.25 12 15.25C9.10051 15.25 6.75 12.8995 6.75 10C6.75 7.10051 9.10051 4.75 12 4.75C14.8995 4.75 17.25 7.10051 17.25 10Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.75 14.75L7.75 19.25L12 17.75L16.25 19.25L15.25 14.75"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h2 className="my-4 text-4xl">{featuredArticle.title}</h2>
              <p>{featuredArticle.summary}</p>
            </div>
            <Image
              className="rounded-lg group-hover:opacity-75"
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
        </button>
      </div>
      <TagList tag={tag} tags={tags} />
      <ArticleList articles={articles} showEndMessage fullHeight />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const data: any = await getAllArticles(process.env.BLOG_DATABASE_ID);
  let tags = [];

  data.forEach((result) => {
    if (result.object === 'page') {
      result.properties?.tags?.multi_select.forEach((tag) => {
        if (!tags.includes(tag.name)) {
          tags.push(tag.name);
        }
      });
    }
  });

  tags.forEach((tag) => {
    paths.push({
      params: {
        tag: tag,
        tags
      }
    });
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  params: { tag }
}) => {
  const data = await getAllArticlesByTag(process.env.BLOG_DATABASE_ID, tag);
  const { articles } = convertToArticleList(data);
  const tags = await getAllArticleTags(process.env.BLOG_DATABASE_ID);

  let blogArticles = articles;

  if (!preview || preview === undefined) {
    blogArticles = blogArticles.filter((article) => article.isPublic === true);
  }

  const featuredArticle = blogArticles[0];

  return {
    props: {
      featuredArticle,
      articles: blogArticles.slice(1),
      tags,
      tag
    },
    revalidate: 30
  };
};
