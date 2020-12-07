/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'xjpkg47g93pq',
        accessToken: 'DSsjEKYByvMXWMqNnK8sbTbvsOjNqBfs9QTfkMgcA30',
      },
    },
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
