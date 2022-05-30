import React, { Fragment } from 'react';

import { AnchorLink } from '@/components/AnchorLink';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/Codeblock';
import Image from 'next/image';
import { YoutubeEmbed } from '../components/YoutubeEmbed';

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
            ? 'bg-indigo-200 dark:bg-indigo-900 dark:bg-opacity-50 text-indigo-500 dark:text-indigo-200 py-0.5 px-2 rounded mx-1 inline-block align-middle tracking-tight text-base'
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
              checked={value?.checked}
              readOnly
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
