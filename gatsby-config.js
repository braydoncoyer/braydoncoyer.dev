/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env${process.env.NODE_ENV}`,
});

const siteMetadata = {
  title: 'Braydon Coyer',
  titleTemplate: 'Portfolio',
  description: 'Senior Full Stack Engineer, DOM Artist and TDD enthusiast.',
  image: '/images/ProfileSEOBanner.png',
  siteUrl: 'https://braydoncoyer.dev',
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  twitterUsername: '@BraydonCoyer',
  authorName: 'Braydon Coyer',
};

module.exports = {
  /* Your site config here */
  siteMetadata,
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/blog`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // google analytics measurement od
        trackingId: process.env.GA_MEASUREMENT_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Inter',
            weights: [
              '100',
              '200',
              '300',
              '400',
              '500',
              '600',
              '700',
              '800',
              '900',
            ],
          },
        ],
      },
    },
  ],
};
