import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from './footer';
import { ThemeProvider } from '../helpers/themeContext';
import Nav from './nav';

const Layout = (props) => {
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
            siteUrl
            twitterUsername
          }
        }
      }
    `
  );

  const { children, location, ...customMeta } = props;
  const meta = {
    title: 'Braydon Coyer - Portfolio',
    description: 'Senior Full Stack Engineer, DOM Artist and TDD enthusiast.',
    image: site.siteMetadata.image,
    url: site.siteMetadata.siteUrl,
    twitterUsername: site.siteMetadata.twitterUsername,
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Helmet
        title={meta.title}
        meta={[
          {
            name: 'description',
            content: meta.description,
          },
          {
            name: 'og:title',
            content: meta.title,
          },
          {
            name: 'og:description',
            content: meta.description,
          },
          {
            name: 'og:type',
            content: meta.type,
          },
          {
            name: 'og:site_name',
            content: 'Braydon Coyer',
          },
          {
            name: 'og:image',
            content: meta.image,
          },
          {
            name: 'og:url',
            content: meta.url,
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            name: 'twitter:site',
            content: meta.twitterUsername,
          },
          {
            name: 'twitter:title',
            content: meta.title,
          },
          {
            name: 'twitter:description',
            content: meta.description,
          },
          {
            name: 'twitter:image',
            content: meta.image,
          },
        ]}
      />
      <ThemeProvider>
        <body className="bg-white dark:bg-coolGray-900">
          <div className="min-h-screen px-4 mx-auto max-w-screen-sm md:max-w-2xl flex flex-col">
            <Nav />
            <main className="flex-grow">{children}</main>
            <div className="mt-6">
              <Footer />
            </div>
          </div>
        </body>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
