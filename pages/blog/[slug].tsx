import { Fragment, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { LinkedinShareButton, TwitterShareButton } from 'react-share';
import {
  getArticlePage,
  getMoreArticlesToSuggest,
  getPublishedArticles
} from '@/lib/notion';

import { AnchorLink } from '@/components/AnchorLink';
import { ArticleList } from '@/components/ArticleList';
import { Callout } from '@/components/Callout';
import { Client } from '@notionhq/client';
import { CodeBlock } from '@/components/Codeblock';
import { Container } from 'layouts/Container';
import Image from 'next/image';
import Link from 'next/link';
import { PageType } from '@/lib/types';
import PageViews from '@/components/PageViews';
import Reactions from '@/components/Reactions';
import { Subscribe } from '@/components/Subscribe';
import { YoutubeEmbed } from '@/components/YoutubeEmbed';
import generateSocialImage from '@/lib/generateSocialImage';
import { getArticlePublicUrl } from '@/lib/getArticlePublicUrl';
import { getTwitterProfilePicture } from '@/lib/twitter';
import siteMetadata from '@/data/siteMetadata';
import slugify from 'slugify';
import { useCopyToClipboard } from '@/lib/hooks/useCopyToClipboard';

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
          italic ? 'italic' : null,
          code
            ? 'bg-indigo-50 dark:bg-indigo-900 dark:bg-opacity-50 text-indigo-500 dark:text-indigo-200 py-0.5 px-2 rounded mx-1 inline-block align-middle tracking-tight text-base'
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
const renderBlock = (block) => {
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
              className="focus:ring-teal-500 h-4 w-4 text-teal-500 border-gray-300 rounded"
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
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
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
        <figure className="mt-0">
          <Image
            className="rounded-xl"
            objectFit="fill"
            width={1200}
            height={684}
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
        <div>
          <CodeBlock
            language={value.language}
            code={value.text[0].text.content}
          />
        </div>
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
      const embedId = value.external.url.slice(
        value.external.url.lastIndexOf('=') + 1
      );
      return <YoutubeEmbed embedId={embedId} />;

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
};

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
  const [isCopied, handleCopy] = useCopyToClipboard(1500);
  const pubilcUrl = getArticlePublicUrl(slug);

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
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
        <Reactions slug={slug} />
        <div className="flex justify-between items-center">
          <Link href="/blog">
            <a>← Back to the blog</a>
          </Link>
          <div className="flex items-center space-x-6 md:space-x-1">
            <TwitterShareButton
              url={pubilcUrl}
              title={title}
              via={'BraydonCoyer'}
            >
              <svg
                className="w-9 h-9 md:w-8 md:h-8 hover:rotate-[-4deg]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </TwitterShareButton>
            <LinkedinShareButton title={title} url={pubilcUrl}>
              <svg
                className="w-9 h-9 md:w-8 md:h-8 hover:rotate-[-4deg]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.75 11.75V16.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.75 11.75V16.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.75 8.75V9.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </LinkedinShareButton>
            <button
              className={`group ${isCopied ? 'text-teal-500' : ''}`}
              onClick={() => handleCopy()}
            >
              <span className="sr-only">Copy code</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                fill="none"
                className="w-12 h-12 md:w-11 md:h-11 stroke-current transform group-hover:rotate-[-4deg] transition"
              >
                <path
                  d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M13.7475 16.2499L18.2475 16.2499"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M13.7475 19.2499L18.2475 19.2499"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <g
                  className={`transition-opacity ${
                    isCopied
                      ? 'opacity-100 transform rotate-[-4deg] transition'
                      : 'opacity-0'
                  }`}
                >
                  <path
                    d="M15.9975 5.99988L15.9975 3.99988"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M19.9975 5.99988L20.9975 4.99988"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.9975 5.99988L10.9975 4.99988"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        {/* Link to sponsor if applicable */}
        {sponsoredArticleUrl && (
          <Callout>
            <span>📣</span>
            <div>
              <span>
                This article was originally published{' '}
                <a target="_blank" href={sponsoredArticleUrl} rel="noreferrer">
                  here
                </a>
                .
              </span>
            </div>
          </Callout>
        )}
        <Subscribe />
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
