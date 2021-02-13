import React, { useState } from 'react';
import dayjs from 'dayjs';
import { graphql, Link, useStaticQuery } from 'gatsby';
import NewsletterSection from './newsletter';

export default function BlogSection() {
  const data = useStaticQuery(graphql`
    {
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
  `);

  return (
    // Not changing below margin to match other sections because of svg pattern spacing
    <section className="mb-24">
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 dark:text-purple-500 mb-3">
        Blog
      </h2>
      <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-10">
        Some recent posts.
      </p>

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

      <div className="mt-12">
        <NewsletterSection />
      </div>
    </section>
  );
}
