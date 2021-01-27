/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://braydoncoyer.dev/',
    title: "Braydon's Portfolio",
    description:
      'Welcome to my portfolio! Check out some of my projects, blog posts and special tunes I listen to while coding!',
    author: 'Braydon Coyer',
    keywords: ['Braydon Coyer', 'Developer Portfolio', 'Blog', 'DOM Artist'],
    image: './static/images/ProfileSEOBanner.png',
    twitterUsername: '@BraydonCoyer',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'xjpkg47g93pq',
        accessToken: 'DSsjEKYByvMXWMqNnK8sbTbvsOjNqBfs9QTfkMgcA30',
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
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
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
