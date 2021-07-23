import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';
import SEO from 'react-seo-component';
import dayjs from 'dayjs';
import { GatsbyImage } from 'gatsby-plugin-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Infoquote from '~components/infoquote';
import { getArticlePublicURL } from '~helpers/getArticlePublicUrl';
import Dropdown from '~components/dropdown';
import Layout from '~layouts/mainLayout';
import ProfileImage from '~assets/avatar.jpg';
import NewsletterSection from '~components/newsletter';
import { useSiteMetadata } from '~hooks/useSiteMetadata';
import ArticleViews from '~helpers/articleViews';
import { getGitHubEditURL } from '~helpers/getGithubEditUrl';
import { getTwitterShareUrl } from '~helpers/getTwitterShareUrl';

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();

  const { frontmatter, body, timeToRead, fields } = data.mdx;
  const {
    title,
    publishedAt,
    coverImage,
    summary,
    imageName,
    canonicalUrl,
  } = frontmatter;
  const { slug } = fields;

  const prev = pageContext.prev
    ? {
        url: `/blog${pageContext.prev.fields.slug}`,
        title: pageContext.prev.frontmatter.title,
      }
    : null;

  const next = pageContext.next
    ? {
        url: `/blog${pageContext.next.fields.slug}`,
        title: pageContext.next.frontmatter.title,
      }
    : null;

  const getArticleDate = (day) => dayjs(day);
  const determineCanonicalUrl = () => {
    if (canonicalUrl === null) return `${siteUrl}/blog${slug}`;
    return canonicalUrl;
  };

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
          pathname={determineCanonicalUrl()}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={twitterUsername}
          authorName={authorName}
          article
          publishedDate={publishedAt}
          modifiedDate={new Date(Date.now()).toISOString()}
        />

        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-6 text-primary">
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
              <p className="text-sm text-secondary ml-2">
                <a
                  className="text-emerald hover:text-emerald-hover"
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
          <div className="text-sm flex space-x-2 text-secondary mt-2 md:mt-0">
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

        <div className="text-secondary prose-lg">
          {canonicalUrl !== null ? (
            <div>
              <Infoquote>
                This article was originally posted{' '}
                <OutboundLink
                  className="text-emerald hover:text-emerald-hover"
                  href={canonicalUrl}
                >
                  here.
                </OutboundLink>
              </Infoquote>
            </div>
          ) : null}
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="mt-8 mb-4">
          <NewsletterSection />
        </div>
        <div className="text-emerald hover:text-emerald-hover italic flex justify-start md:justify-end space-x-3">
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
        <div className="mt-8 flex justify-between text-emerald">
          {prev ? (
            <div className="hover:text-emerald-hover text-left">
              <Link to={prev.url}>
                <span className="flex items-top items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>{' '}
                  Previous Article
                </span>
                <span className="hidden md:block">{prev.title}</span>
              </Link>
            </div>
          ) : (
            <div />
          )}
          {next && (
            <div className="hover:text-emerald-hover text-right">
              <Link to={next.url}>
                <span className="flex justify-end items-center">
                  Next Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="hidden md:block">{next.title}</span>
              </Link>
            </div>
          )}
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
        canonicalUrl
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
