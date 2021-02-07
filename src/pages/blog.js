import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Dump from '../components/dump';

export default function Blog({ data }) {
  return (
    <>
      <Layout title="Blog | Braydon Coyer" description="My blog.">
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 dark:text-purple-500 mb-3">
          Blog
        </h2>
        <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
          Writing is my new thing.
        </p>

        <div className="mb-12">
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-md pl-10 sm:text-sm border-gray-300"
                placeholder="Article name"
              />
            </div>
          </div>
        </div>

        {/* <Dump data={data} /> */}
        {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
          <div>
            <Link to={fields.slug} key={id}>
              <div>
                <p className="text-coolGray-500 dark:text-coolGray-400 prose leading-6 font-medium">
                  <time>{frontmatter.publishedAt}</time>
                </p>
                <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
                  {frontmatter.title}
                </p>
                <p className="mt-3 text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-6">
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
