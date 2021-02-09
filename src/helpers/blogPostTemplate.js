import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ProfileImage from '../assets/avatar.jpg';
import NewsletterSection from '../components/newsletter';

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, body, timeToRead } = data.mdx;

  const getArticleDate = (day) => dayjs(day);

  return (
    <>
      <Layout title={frontmatter.title}>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-coolGray-900 dark:text-white">
          {frontmatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <img
              className="rounded-full"
              width={24}
              height={24}
              src={ProfileImage}
              alt="Braydon Coyer"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {'Braydon Coyer / '}
              {getArticleDate(frontmatter.publishedAt).format('MMMM DD, YYYY')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {timeToRead * 2}
            {` min read`}
            {` • `}
            1,500 views
          </p>
        </div>
        {frontmatter.coverImage ? (
          <Img
            className="mb-8"
            fluid={frontmatter.coverImage.childImageSharp.fluid}
          />
        ) : null}
        <div className="text-coolGray-600 dark:text-coolGray-400 prose">
          <MDXRenderer className="prose">{body}</MDXRenderer>
        </div>
        <div className="mt-8">
          <NewsletterSection />
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        publishedAt
        coverImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
      timeToRead
    }
  }
`;

export default BlogPostTemplate;
