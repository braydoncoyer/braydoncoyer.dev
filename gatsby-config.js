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
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.nodes.map((edge) => ({
                ...edge.frontmatter,
                description: edge.frontmatter.summary,
                date: edge.frontmatter.publishedAt,
                url: `${site.siteMetadata.siteUrl}/blog${edge.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}/blog${edge.fields.slug}`,
              })),
            query: `
            {
              allMdx(sort: { fields: [frontmatter___publishedAt], order: DESC }) {
                nodes {
                  id
                  excerpt(pruneLength: 250)
                  frontmatter {
                    title
                    publishedAt
                    summary
                  }
                  fields {
                    slug
                  }
                  timeToRead
                }
              }
            }
          `,
            output: '/rss.xml',
            title: `Braydon Coyer's Blog`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://braydoncoyer.dev/',
        sitemap: 'https://braydoncoyer.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL:
            'https://braydon-blog-views-default-rtdb.firebaseio.com/',
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
        },
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
        path: `${__dirname}/src/fonts`,
        name: `fonts`,
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
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: '#34D399',
        height: '6px',
        paths: ['/blog/**'],
        zIndex: `9999`,
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
