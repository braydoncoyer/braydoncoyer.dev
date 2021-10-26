import { Fragment, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { LinkedinShareButton, TwitterShareButton } from 'react-share';

import { AnchorLink } from '@/components/AnchorLink';
import { Client } from '@notionhq/client';
import { CodeBlock } from '@/components/Codeblock';
import Link from 'next/link';
import PageViews from '@/components/PageViews';
import Reactions from '@/components/Reactions';
import { Subscribe } from '@/components/Subscribe';
import { getArticlePublicUrl } from '@/lib/getArticlePublicUrl';
import siteMetadata from '@/data/siteMetadata';
import slugify from 'slugify';
import { useCopyUrlToClipboard } from '@/lib/hooks/useCopyToClipboard';

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
          strikethrough ? 'line-through' : null,
          underline ? 'underline' : null
        ].join(' ')}
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
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
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
        <figure className="rounded-lg">
          <img className="rounded-lg" src={src} />
          {caption && (
            <figcaption className="text-center">{caption}</figcaption>
          )}
        </figure>
      );
    case 'code':
      return (
        <div>
          <CodeBlock code={value.text[0].text.content} />
        </div>
      );
    case 'callout':
      return (
        <div className="flex flex-start space-x-4">
          {value.icon && <span>{value.icon.emoji}</span>}
          <Text text={value.text} />
        </div>
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
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
};

const ArticlePage = ({ content, title, slug, publishedDate, lastEditedAt }) => {
  const [isCopied, handleCopy] = useCopyUrlToClipboard();
  const pubilcUrl = getArticlePublicUrl(slug);

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST'
    });
  }, [slug]);

  return (
    <article className="max-w-7xl mx-auto">
      <PageViews slug={slug} />
      <Reactions slug={slug} />
      <article className="prose-lg">
        <h1>{title}</h1>
        <h4>
          Published{' '}
          {new Date(publishedDate).toLocaleDateString(siteMetadata.locale, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </h4>
        <h4>
          Last edited{' '}
          {new Date(lastEditedAt).toLocaleDateString(siteMetadata.locale, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </h4>
        {content.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
        <Subscribe />
        <TwitterShareButton
          url={getArticlePublicUrl(slug)}
          title={title}
          via={'BraydonCoyer'}
        >
          Tweet this article
        </TwitterShareButton>
        <LinkedinShareButton title={title} url={getArticlePublicUrl(slug)}>
          Share this article on LinkedIn
        </LinkedinShareButton>
        <button onClick={() => handleCopy()}>Copy Article URL</button>
        <Link href="/blog">
          <a>← Back to the blog</a>
        </Link>
      </article>
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET
  });

  const data: any = await notion.databases.query({
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

  const paths = [];

  data.results.forEach((result) => {
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

  const notion = new Client({
    auth: process.env.NOTION_SECRET
  });

  const data: any = await notion.databases.query({
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

  const page: any = data.results.find((result) => {
    if (result.object === 'page') {
      articleTitle = result.properties.Name.title[0].plain_text;
      const resultSlug = slugify(articleTitle).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });

  publishedDate = page.properties.Published.date.start;
  lastEditedAt = page.properties.LastEdited.last_edited_time;

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
      slug
    },
    revalidate: 30
  };
};

export default ArticlePage;
