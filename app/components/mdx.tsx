import React from "react";
import * as runtime from "react/jsx-runtime";
import { highlight } from "sugar-high";
import { HorizontalLine } from "./HorizontalLine";
import Link from "next/link";
import { BgGradient } from "./BgGradient";

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
  [key: string]: any;
}

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link className="text-underline text-indigo-500" href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a className="text-underline text-red-300" {...props} />;
  }

  return (
    <a
      className="text-underline text-emerald-300"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function RoundedImage(props) {
  return (
    <div className="relative">
      <span className="absolute top-0 inset-x-0">
        <HorizontalLine />
      </span>
      <img src={props.src} alt={props.alt} className="rounded-3xl" />
      <span className="absolute bottom-0 inset-x-0">
        <HorizontalLine />
      </span>
    </div>
  );
}

function Callout(props) {
  return (
    <div className="flex items-center p-1 px-4 py-3 mb-8 text-sm border rounded border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function ProsCard({ title, pros }) {
  return (
    <div className="w-full p-6 my-4 border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="flex items-baseline mb-2 font-medium">
            <div className="w-4 h-4 mr-2">
              <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsCard({ title, cons }) {
  return (
    <div className="w-full p-6 my-6 border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex items-baseline mb-2 font-medium">
            <div className="w-4 h-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return (
    <code
      className="mb-8"
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  // eslint-disable-next-line react/display-name
  return ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className:
          "text-2xl text-text-primary font-semibold leading-8 mb-6 text-balance",
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor ",
        }),
      ],
      children
    );
  };
}

function paragraph({ children }) {
  // Check if children contains any block-level elements
  const hasBlockElements = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      typeof child.type === "string" &&
      /^(div|p|ul|ol|h[1-6])$/i.test(child.type)
  );

  // If there are block-level elements, render without wrapping p tag
  if (hasBlockElements) {
    return <>{children}</>;
  }

  // Otherwise, wrap in a p tag as before
  return (
    <p className="text-base text-text-secondary mb-8 leading-7">{children}</p>
  );
}

function FullWidthCallout({ children }) {
  return (
    <blockquote className="full-bleed relative overflow-clip mb-8 py-8 border-y border-border-primary [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]">
      <span className="-z-10 absolute -top-1/2 left-1/2 -translate-x-1/2 opacity-50">
        <BgGradient />
      </span>
      <div className="p-6 blog-container mx-auto bg-bg-primary">{children}</div>
    </blockquote>
  );
}

function IdeaQuote({ children }) {
  return (
    <FullWidthCallout>
      <span className="inline-flex tracking-widest uppercase items-center rounded-full bg-yellow-50 px-4 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mb-3.5">
        Idea
      </span>
      {children}
    </FullWidthCallout>
  );
}

function InfoQuote({ children }) {
  return (
    <FullWidthCallout>
      <span className="inline-flex uppercase items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-3.5">
        Info
      </span>
      {children}
    </FullWidthCallout>
  );
}

function ThoughtQuote({ children }) {
  return (
    <FullWidthCallout>
      <span className="inline-flex uppercase items-center rounded-full bg-indigo-50 px-4 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-3.5">
        Thought
      </span>
      {children}
    </FullWidthCallout>
  );
}

const sharedComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  img: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  Ideaquote: IdeaQuote,
  Infoquote: InfoQuote,
  Thoughtquote: ThoughtQuote,
  //   StaticTweet: TweetComponent,
  code: Code,
  Table,
  p: paragraph,
  //   LiveCode,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

export const MDXContent = ({ code, components, ...props }: MDXProps) => {
  const Component = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
};
