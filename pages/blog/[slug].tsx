import { Fragment, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PageType, SubscribeSize } from '@/lib/types';
import {
  getArticlePage,
  getMoreArticlesToSuggest,
  getPublishedArticles
} from '@/lib/notion';

import { Ad } from '@/components/Ad';
import { ArticleList } from '@/components/ArticleList';
import { Callout } from '@/components/Callout';
import { Client } from '@notionhq/client';
import { Container } from 'layouts/Container';
import Image from 'next/image';
import Link from 'next/link';
import PageViews from '@/components/PageViews';
import Reactions from '@/components/Reactions';
import { ShareArticle } from '@/components/ShareArticle';
import { Subscribe } from '@/components/Subscribe';
import generateSocialImage from '@/lib/generateSocialImage';
import { getTwitterProfilePicture } from '@/lib/twitter';
import { renderBlocks } from '@/lib/renderBlocks';
import siteMetadata from '@/data/siteMetadata';
import slugify from 'slugify';

const ArticlePage = ({
  content,
  title,
  coverImage,
  slug,
  publishedDate,
  lastEditedAt,
  sponsoredArticleUrl,
  summary,
  moreArticles
}) => {
  const publishedOn = new Date(publishedDate).toLocaleDateString(
    siteMetadata.locale,
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );

  const modifiedDate = new Date(lastEditedAt).toLocaleDateString(
    siteMetadata.locale,
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );

  const socialImageConf = generateSocialImage({
    title,
    underlayImage: coverImage.slice(coverImage.lastIndexOf('/') + 1),
    cloudName: 'braydoncoyer',
    imagePublicID: 'og_social_large.png'
  });

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST'
    });
  }, [slug]);

  return (
    <Container
      title={`${title} - Braydon Coyer`}
      description={summary}
      imageUrl={socialImageConf}
      date={new Date(publishedDate).toISOString()}
      type={PageType.ARTICLE}
      sponsoredArticle={sponsoredArticleUrl !== null}
      sponsoredUrl={sponsoredArticleUrl}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <article className="col-span-9 mt-12">
          <div className="space-y-12">
            <div>
              <h1 className="text-3xl md:text-5xl text-center">{title}</h1>
              <div className="text-center">
                <div className="flex justify-center items-center space-x-2 text-lg mb-2">
                  <p className="m-0 text-lg md:text-xl">{publishedOn}</p>
                  <p className="m-0">•</p>
                  <PageViews slug={slug} />
                </div>
                {publishedOn !== modifiedDate && (
                  <p className="text-sm md:text-base mt-0 text-gray-400 dark:text-gray-600">
                    (Updated on {modifiedDate})
                  </p>
                )}
              </div>
            </div>
            <div className="my-12">
              <Image
                className="rounded-xl"
                objectFit="fill"
                src={coverImage}
                width={1200}
                height={684}
                alt={'article cover'}
                priority
              />
            </div>
            {content.map((block) => (
              <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
            ))}
            <div className="md:hidden">
              <Reactions slug={slug} />
            </div>
            <Subscribe size={SubscribeSize.LARGE} />
            {/* Link to sponsor if applicable */}
            {sponsoredArticleUrl && (
              <Callout>
                <span>📣</span>
                <div>
                  <span>
                    This article was originally published{' '}
                    <a
                      target="_blank"
                      href={sponsoredArticleUrl}
                      rel="noreferrer"
                    >
                      here
                    </a>
                    .
                  </span>
                </div>
              </Callout>
            )}
            <div className="flex justify-between items-center">
              <Link href="/blog">
                <a>← Back to the blog</a>
              </Link>
              <div className="md:hidden">
                <ShareArticle title={title} slug={slug} />
              </div>
            </div>

            <div>
              <hr />
              <h3>More articles</h3>
              <p className="mb-12">
                If you enjoyed this article, you'll find these insightful too!
              </p>
              <ul>
                <ArticleList articles={moreArticles} />
              </ul>
            </div>
          </div>
        </article>
        <aside className="hidden w-full lg:inline-block md:sticky md:top-[175px] md:self-start col-span-3 space-y-8">
          <h3 className="text-sm m-0 font-semibold tracking-wider uppercase text-center">
            Article Reactions
          </h3>
          <Reactions slug={slug} />
          <h3 className="text-sm m-0 font-semibold tracking-wider uppercase text-center">
            Share Article
          </h3>
          <ShareArticle title={title} slug={slug} />
          <Ad />
        </aside>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const data: any = await getPublishedArticles(process.env.BLOG_DATABASE_ID);

  data.forEach((result) => {
    if (result.object === 'page') {
      paths.push({
        params: {
          slug: slugify(
            result.properties.Name.title[0].plain_text
          ).toLowerCase()
        }
      });
    }
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  let content = [];
  let articleTitle = '';
  let publishedDate = null;
  let lastEditedAt = null;
  let coverImage = null;
  let sponsoredArticleUrl = null;
  let summary = null;

  const profilePicture = await getTwitterProfilePicture();

  const notion = new Client({
    auth: process.env.NOTION_SECRET
  });

  const data: any = await getPublishedArticles(process.env.BLOG_DATABASE_ID);

  const page: any = getArticlePage(data, slug);

  articleTitle = page.properties.Name.title[0].plain_text;
  publishedDate = page.properties.Published.date.start;
  lastEditedAt = page.properties.LastEdited.last_edited_time;
  sponsoredArticleUrl = page.properties.canonicalUrl?.url;
  summary = page.properties.Summary?.rich_text[0]?.plain_text;
  coverImage =
    page.properties?.coverImage?.files[0]?.file?.url ||
    page.properties.coverImage?.files[0]?.external?.url ||
    'https://via.placeholder.com/600x400.png';

  const moreArticles: any = await getMoreArticlesToSuggest(
    process.env.BLOG_DATABASE_ID,
    articleTitle
  );

  let blocks = await notion.blocks.children.list({
    block_id: page.id
  });

  content = [...blocks.results];

  while (blocks.has_more) {
    blocks = await notion.blocks.children.list({
      block_id: page.id,
      start_cursor: blocks.next_cursor
    });

    content = [...content, ...blocks.results];
  }

  return {
    props: {
      content,
      title: articleTitle,
      publishedDate,
      lastEditedAt,
      slug,
      profilePicture,
      coverImage,
      summary,
      moreArticles,
      sponsoredArticleUrl
    },
    revalidate: 30
  };
};

export default ArticlePage;
