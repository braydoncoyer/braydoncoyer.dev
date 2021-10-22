import { Client } from "@notionhq/client";
import { CodeBlock } from "../../components/Codeblock";
import { Fragment } from "react";
import Link from 'next/link';
import slugify from "slugify";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span>
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
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
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      // const caption = value.caption ? value.caption[0].plain_text : "";
      return (
        <figure>
          <img src={src} />
        </figure>
      );
      case "code":
            // return <pre>{JSON.stringify(value.text[0].text.content, null, 2)}</pre>
            return (
              <div>
                <CodeBlock code={value.text[0].text.content}>
                  {/* {JSON.stringify(value.text[0].text.content)} */}
                </CodeBlock>
              </div>
            );
            case "embed":
              console.log(value.url);
              return (
                <div>
                  <iframe
                    height="300"
                    className="w-full"
                    scrolling="no"
                    title="Postage from Bag End"
                    src="https://codepen.io/braydoncoyer/embed/preview/ExjKQMa?default-tab=result"
                    frameborder="no"
                    loading="lazy"
                    allowtransparency="true"
                    allowfullscreen="true"
                  >
                    See the Pen{" "}
                    <a href={value.url}>
                      Postage from Bag End
                    </a>{" "}
                    by Braydon Coyer (
                    <a href="https://codepen.io/braydoncoyer">@braydoncoyer</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                  </iframe>
                </div>
              );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};


const ArticlePage = ({content}) => {
  return (
    <article className="max-w-7xl mx-auto">
      <h1>
        {/* <Text text={page.properties.Name.title} /> */}
      </h1>
      <section>
        {content.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
        <Link href="/">
          <a>← Go home</a>
        </Link>
      </section>
    </article>
  );
};

export const getStaticPaths = async () => {
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
            equals: "Personal",
          },
        },
      ],
    },
  });

  const paths = [];

  data.results.forEach((result) => {
    if (result.object === "page") {
      paths.push({
        params: {
          slug: slugify(
            result.properties.Name.title[0].plain_text
          ).toLowerCase(),
        },
      });
    }
  });

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params: {slug}}) => {
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
              equals: "Personal",
            },
          },
        ],
      },
    });

    const page = data.results.find((result) => {
      if(result.object === "page") {
        const resultSlug = slugify(
          result.properties.Name.title[0].plain_text
        ).toLowerCase();
        return resultSlug === slug
      }
      return false;
    });

    const blocks = await notion.blocks.children.list({
      block_id: page.id
    })

    console.log(blocks);

  return {
    props: {
      content: blocks.results
    }
  }
};

export default ArticlePage;
