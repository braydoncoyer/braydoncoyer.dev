import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import SEO from 'react-seo-component';
import Layout from '../components/layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default function Blog({ data }) {
  const {
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = data.allMdx.nodes
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((x) => x.frontmatter.title.includes(searchValue.toLowerCase()));

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  return (
    <>
      <SEO
        title={title}
        titleTemplate="Blog"
        titleSeparator="|"
        description="A blend of tutorials, thoughts and other musings."
        image={`${siteUrl}${image}`}
        pathname={`${siteUrl}/blog`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Layout titleTemplate="Blog" description="My blog.">
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 dark:text-purple-500 mb-3">
          Blog
        </h2>
        <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-16">
          Writing is my new thing.
        </p>

        {/* <div className="mb-12">
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="bg-red-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                name="email"
                id="email"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-md pl-10 sm:text-sm border-gray-300"
                placeholder="Article name"
              />
            </div>
          </div>
        </div> */}

        {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
          <div className="mb-8">
            <Link to={`/blog${fields.slug}`} key={id}>
              <div>
                <p className="text-xl lg:text-2xl font-extrabold text-coolGray-900 dark:text-white">
                  {frontmatter.title}
                </p>
                <p className="mt-1 text-coolGray-600 dark:text-coolGray-400 prose leading-6">
                  {frontmatter.summary}
                </p>
              </div>
            </Link>
          </div>
        ))}
        {/* {filteredBlogPosts
          ? filteredBlogPosts.map((frontmatter) => (
              <div className="mb-8">{frontmatter}</div>
            ))
          : null} */}
      </Layout>
    </>
  );
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___publishedAt], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          publishedAt
          summary
        }
        fields {
          slug
        }
        timeToRead
      }
    }
  }
`;
