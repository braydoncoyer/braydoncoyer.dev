import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import dayjs from 'dayjs';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ProfileImage from '../assets/avatar.jpg';
import NewsletterSection from '../components/newsletter';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const BlogPostTemplate = ({ data }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();

  const { frontmatter, body, timeToRead, fields } = data.mdx;
  const { title, publishedAt, coverImage, summary } = frontmatter;
  const { slug } = fields;

  const getArticleDate = (day) => dayjs(day);

  const getPublicURL = () => `https://braydoncoyer.dev/blog${slug}`;

  return (
    <>
      <Layout>
        <SEO
          title={title}
          titleSeparator="|"
          titleTemplate="Blog"
          description={summary}
          image={
            coverImage === null
              ? `${siteUrl}${image}`
              : `${siteUrl}/images${slug.replace(/\/$/, '')}${
                  coverImage.publicURL
                }`
          }
          pathname={`${siteUrl}/blog${slug}`}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={twitterUsername}
          authorName={authorName}
          article
          publishedDate={publishedAt}
          modifiedDate={new Date(Date.now()).toISOString()}
        />

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
            <p className="text-sm text-coolGray-600 dark:text-coolGray-400 ml-2">
              {'Braydon Coyer / '}
              {getArticleDate(frontmatter.publishedAt).format('MMMM DD, YYYY')}
            </p>
          </div>
          <p className="text-sm text-coolGray-600 dark:text-coolGray-400 min-w-32 mt-2 md:mt-0">
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
        <div className="text-coolGray-600 dark:text-coolGray-400 prose">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/search?q=${encodeURIComponent(
              getPublicURL()
            )}`}
          >
            Discuss on Twitter
          </a>
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
        summary
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
      fields {
        slug
      }
    }
  }
`;

export default BlogPostTemplate;
