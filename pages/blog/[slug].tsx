import { Fragment, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PageType, SubscribeSize } from '@/lib/types';
import {
  getAllArticles,
  getArticlePage,
  getMoreArticlesToSuggest
} from '@/lib/notion';

import { AnchorLink } from '@/components/AnchorLink';
import { ArticleList } from '@/components/ArticleList';
import { Callout } from '@/components/Callout';
import { Client } from '@notionhq/client';
import { CodeBlock } from '@/components/Codeblock';
import { Container } from 'layouts/Container';
import Image from 'next/image';
import PageViews from '@/components/PageViews';
import Reactions from '@/components/Reactions';
import { ShareArticle } from '@/components/ShareArticle';
import { Subscribe } from '@/components/Subscribe';
import { YoutubeEmbed } from '@/components/YoutubeEmbed';
import { getTwitterProfilePicture } from '@/lib/twitter';
import siteMetadata from '@/data/siteMetadata';
import slugify from 'slugify';
import { useRouter } from 'next/router';

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value;
    return (
      <span
        key={index}
        className={[
          bold ? 'font-bold' : null,
          italic ? 'font-fancy text-black dark:text-white' : null,
          code
            ? 'bg-indigo-200 dark:bg-indigo-900 dark:bg-opacity-50 text-indigo-500 dark:text-indigo-200 py-0.5 px-2 rounded mx-1 inline-block align-middle tracking-tight text-base font-mono'
            : null,
          strikethrough ? 'line-through' : null,
          underline ? 'underline' : null
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

export function renderBlocks(block) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h3>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label
            htmlFor={id}
            className="flex items-center justify-start space-x-3"
          >
            <input
              id={id}
              aria-describedby={value.text}
              name={id}
              type="checkbox"
              className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
            />
            <Text text={value.text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption =
        value.caption.length >= 1 ? value.caption[0].plain_text : '';
      return (
        <figure
          className="mt-0 aspect-video"
          style={{
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Image
            className="rounded-xl"
            layout="fill"
            sizes="100vw"
            objectFit="cover"
            alt={
              caption
                ? caption
                : 'A visual depiction of what is being written about'
            }
            src={src}
          />
          {caption && (
            <figcaption className="text-center">{caption}</figcaption>
          )}
        </figure>
      );
    case 'code':
      return (
        <CodeBlock
          language={value.language}
          code={value.text[0].text.content}
        />
      );
    case 'callout':
      return (
        <Callout>
          {value.icon && <span>{value.icon.emoji}</span>}
          <div>
            <Text text={value.text} />
          </div>
        </Callout>
      );
    case 'embed':
      const codePenEmbedKey = value.url.slice(value.url.lastIndexOf('/') + 1);
      return (
        <div>
          <iframe
            height="600"
            className="w-full"
            scrolling="no"
            title="Postage from Bag End"
            src={`https://codepen.io/braydoncoyer/embed/preview/${codePenEmbedKey}?default-tab=result`}
            frameBorder="no"
            loading="lazy"
            allowFullScreen={true}
          >
            See the Pen <a href={value.url}>Postage from Bag End</a> by Braydon
            Coyer (<a href="https://codepen.io/braydoncoyer">@braydoncoyer</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      );
    case 'table_of_contents':
      return <div>TOC</div>;
    case 'video':
      return <YoutubeEmbed url={value.external.url} />;
    case 'quote':
      return (
        <blockquote className="p-4 rounded-r-lg">
          <Text text={value.text} />
        </blockquote>
      );
    case 'divider':
      return (
        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      );
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
}

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
  const { push } = useRouter();
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

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST'
    });
  }, [slug]);

  return (
    <Container
      title={title}
      description={summary}
      imageUrl={coverImage}
      date={new Date(publishedDate).toISOString()}
      type={PageType.ARTICLE}
      isArticle={true}
      sponsoredArticle={sponsoredArticleUrl !== null}
      sponsoredUrl={sponsoredArticleUrl}
    >
      <div className="grid justify-center grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <article className="col-span-12 mt-12">
          <div className="space-y-16">
            <div>
              <h1 className="mb-5 text-3xl text-center font-headings md:text-5xl">
                {title}
              </h1>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2 space-x-2 text-base">
                  <p className="m-0">{publishedOn}</p>
                  <p className="m-0">|</p>
                  <PageViews slug={slug} />
                </div>
                {publishedOn !== modifiedDate && (
                  <p className="mt-0 text-sm text-slate-500 md:text-base dark:text-slate-500">
                    (Updated on {modifiedDate})
                  </p>
                )}
              </div>
            </div>
            <div>
              <div
                className="aspect-video lg:aspect-[2/1]"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <Image
                  className="rounded-3xl"
                  layout="fill"
                  sizes="100vw"
                  objectFit="cover"
                  src={coverImage}
                  alt={'article cover'}
                  priority
                />
              </div>
            </div>
          </div>
        </article>
        {/* Left Sticky */}
        <div className="sticky hidden w-full h-24 bg-red-500 lg:col-start-1 lg:col-end-3 top-24 lg:block"></div>
        <div className="lg:col-start-3 lg:col-end-11">
          {content.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}

          {/* Reactions on Mobile */}
          <div className="text-center md:hidden grid-flow-auto">
            <Reactions slug={slug} />
          </div>

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
        </div>

        {/* Right Sticky -> Reactions on Desktop */}
        {/* Height must be applied to extend height to length of article container */}
        <div className="sticky hidden w-full h-1 lg:col-start-11 lg:col-end-13 top-24 lg:block">
          <Reactions slug={slug} />
        </div>
        <div className="col-span-12">
          <div className="mt-16 font-bold text-center">
            <p className="text-base">Share this article</p>
            <ShareArticle title={title} slug={slug} />
          </div>
          {/* <div className="flex items-center justify-between space-x-4">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/blog')}
            >
              Back to the blog
            </Button>
            <div className="md:hidden">
              <ShareArticle title={title} slug={slug} />
            </div>
          </div> */}
        </div>
        {/* <aside className="hidden w-full lg:inline-block md:sticky md:top-[175px] md:self-start col-span-3 space-y-8">
          <h3 className="m-0 text-sm font-semibold tracking-wider text-center uppercase">
            Article Reactions
          </h3>
          
          <h3 className="m-0 text-sm font-semibold tracking-wider text-center uppercase">
            Share Article
          </h3>
          <ShareArticle title={title} slug={slug} />
          <Ad />
        </aside> */}
      </div>
      <div>
        <div className="my-8 lg:mt-64">
          <Subscribe size={SubscribeSize.LARGE} />
        </div>
        <div>
          <h3 className="mb-8">Related articles</h3>
          <ArticleList articles={moreArticles} />
        </div>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const data: any = await getAllArticles(process.env.BLOG_DATABASE_ID);

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
    fallback: 'blocking'
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

  const data: any = await getAllArticles(process.env.BLOG_DATABASE_ID);

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
