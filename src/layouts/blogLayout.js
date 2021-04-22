import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import dayjs from 'dayjs';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getArticlePublicURL } from '~helpers/getArticlePublicUrl';
import Dropdown from '~components/dropdown';
import Layout from '~layouts/mainLayout';
import ProfileImage from '~assets/avatar.jpg';
import NewsletterSection from '~components/newsletter';
import { useSiteMetadata } from '~hooks/useSiteMetadata';
import ArticleViews from '~helpers/articleViews';
import { getGitHubEditURL } from '~helpers/getGithubEditUrl';
import { getTwitterShareUrl } from '~helpers/getTwitterShareUrl';

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
  const { title, publishedAt, coverImage, summary, imageName } = frontmatter;
  const { slug } = fields;

  const getArticleDate = (day) => dayjs(day);

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
              : `${siteUrl}/images${slug.replace(/\/$/, '')}/${imageName}`
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

        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-6 text-coolGray-900 dark:text-white">
          {frontmatter.title}
        </h1>
        <div className="md:flex md:flex-row md:justify-between md:items-center w-full mb-4 md:mb-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                className="rounded-full"
                width={28}
                height={28}
                src={ProfileImage}
                alt="Braydon Coyer"
              />
              <p className="text-sm text-coolGray-600 dark:text-coolGray-400 ml-2">
                <a
                  className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                  href="https://twitter.com/BraydonCoyer"
                  rel="noreferrer"
                  target="_blank"
                >
                  Braydon Coyer
                </a>
                {' / '}
                {getArticleDate(frontmatter.publishedAt).format(
                  'MMMM DD, YYYY'
                )}
              </p>
            </div>
            <div className="flex items-center sm:block md:hidden">
              <Dropdown
                slug={getArticlePublicURL(slug)}
                title={title}
                summary={summary}
              />
            </div>
          </div>
          <div className="text-sm flex space-x-2 text-coolGray-600 dark:text-coolGray-400 mt-2 md:mt-0">
            <p>{`${timeToRead * 2} minute read`}</p>
            <p>•</p>
            <ArticleViews id={slug} />{' '}
            <span className="hidden md:block">
              <Dropdown
                slug={getArticlePublicURL(slug)}
                title={title}
                summary={summary}
              />
            </span>
          </div>
        </div>
        {frontmatter.coverImage ? (
          <GatsbyImage
            image={frontmatter.coverImage.childImageSharp.gatsbyImageData}
            alt="Cover"
            className="mb-8 rounded-lg"
          />
        ) : null}
        <div className="text-coolGray-600 dark:text-coolGray-400 prose-lg">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="mt-8 mb-4">
          <NewsletterSection />
        </div>
        <div className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500 italic flex justify-start md:justify-end space-x-3">
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={getTwitterShareUrl(slug)}
            >
              Discuss on Twitter
            </a>
          </span>
          <span>{` • `}</span>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${getGitHubEditURL(slug)}`}
            >
              Edit on GitHub
            </a>
          </span>
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
        imageName
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
