import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <>
      <Layout>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.publishedAt}</p>
        <MDXRenderer>{body}</MDXRenderer>
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
      }
      body
    }
  }
`;

export default BlogPostTemplate;
