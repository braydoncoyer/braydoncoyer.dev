import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { HiMenuAlt1 } from 'react-icons/hi';

function SEO({ title, description, author, keywords, image, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            authorName
            image
            twitterUsername
          }
        }
      }
    `
  );

  // const metaTitle = title || site.siteMetadata.title;
  // const metaDescription = description || site.siteMetadata.description;
  // const metaAuthor = author || site.siteMetadata.authorName;
  // const metaTwitterCreator = site.siteMetadata.twitterUsername;
  // const metaImage = image || site.siteMetadata.image;
  // const metaUrl = url || site.siteMetadata.url;
  // const metaKeywords = keywords || site.siteMetadata.keywords;

  return <p>Hello</p>;
}

export default SEO;
