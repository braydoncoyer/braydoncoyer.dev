import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title, description, author, keywords, image, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            keywords
            twitterUsername
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaAuthor = author || site.siteMetadata.author;
  const metaTwitterCreator = site.siteMetadata.twitterUsername;
  const metaImage = image || site.siteMetadata.image;
  const metaUrl = url || site.siteMetadata.url;
  const metaKeywords = keywords || site.siteMetadata.keywords;

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'og:title',
          content: metaTitle,
        },
        {
          name: 'og:description',
          content: metaDescription,
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:image',
          content: metaImage,
        },
        {
          name: 'og:url',
          content: metaUrl,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: metaTwitterCreator,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: metaImage,
        },
      ].concat(
        metaKeywords && metaKeywords.lenth > 0
          ? {
              name: 'keywords',
              content: metaKeywords.join(', '),
            }
          : []
      )}
    />
  );
}

export default SEO;
