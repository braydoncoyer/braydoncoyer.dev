import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import Footer from './footer';
import { ThemeProvider } from '../helpers/themeContext';
import Nav from './nav';
// import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Layout = (props) => {
  // const {
  //   title,
  //   description,
  //   image,
  //   siteUrl,
  //   siteLanguage,
  //   siteLocale,
  //   twitterUsername,
  //   authorName,
  // } = useSiteMetadata();

  const { children } = props;
  // const meta = {
  //   title: 'Braydon Coyer',
  //   titleTemplate: `Portfolio`,
  //   description,
  //   image,
  //   url: siteUrl,
  //   twitterUsername,
  //   type: 'website',
  //   ...customMeta,
  // };

  return (
    <div>
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
