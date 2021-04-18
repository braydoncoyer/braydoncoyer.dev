import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import SEO from 'react-seo-component';
import Layout from '~layouts/mainLayout';
import { useSiteMetadata } from '~hooks/useSiteMetadata';

export default function Blog({ data }) {
  const {
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  const allPosts = data.allMdx.nodes;

  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = allPosts.filter(
    (post) =>
      post.frontmatter.summary
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      post.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <SEO
        title={title}
        titleTemplate="Blog"
        titleSeparator="|"
        description="A blend of tutorials, thoughts and other musings."
        image={`${siteUrl}/images/BlogSEOBanner.png`}
        pathname={`${siteUrl}/blog`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Layout titleTemplate="Blog" description="My blog.">
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 dark:text-purple-500 mb-3">
          Blog
        </h2>
        <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-8">
          Writing is my new thing.
        </p>

        <div className="mb-12">
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="none"
                  aria-hidden="true"
                >
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
              </div>
              <input
                aria-label="Search articles"
                type="text"
                autoComplete="off"
                onChange={(e) => setSearchValue(e.target.value)}
                name="search"
                id="search"
                className="focus:ring-purple-600 focus:border-purple-600 block w-full rounded-md pl-10 sm:text-sm text-coolGray-900 dark:text-white bg-white dark:bg-blueGray-800"
                placeholder="Article name || description"
              />
            </div>
          </div>
        </div>

        {!filteredBlogPosts.length && (
          <div className="text-coolGray-600 dark:text-coolGray-400 prose-lg mb-3">
            <p>Oops. No posts found. Try another search query...</p>
          </div>
        )}
        {filteredBlogPosts.map(({ id, frontmatter, fields }) => (
          <div className="mb-10" key={id}>
            <Link to={`/blog${fields.slug}`} key={id}>
              <div>
                <p className="text-xl lg:text-2xl font-extrabold text-coolGray-900 dark:text-white">
                  {frontmatter.title}
                </p>
                <p className="mt-2 text-coolGray-600 dark:text-coolGray-400 prose-lg">
                  {frontmatter.summary}
                </p>
              </div>
            </Link>
          </div>
        ))}
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
