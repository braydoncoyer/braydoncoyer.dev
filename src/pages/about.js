/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SEO from '../helpers/seo';
import SocialIcons from '../components/social';
import Toggle from '../components/toggle';
import Nav from '../components/nav';
import { ThemeProvider } from '../helpers/themeContext';
import Layout from '../components/layout';
import Banner from '../../static/images/NewsletterBanner.png';
import AboutSection from '../components/about';
import MarqueeSection from '../components/marquee';

export default function Toolbox() {
  return (
    <>
      <SEO title="Braydon's Portfolio" image={Banner} />
      <SocialIcons>
        <ThemeProvider>
          <body className="bg-white dark:bg-coolGray-900 min-h-screen">
            <Nav />
            <main>
              <Layout>
                <AboutSection />
                <MarqueeSection />
              </Layout>
            </main>
          </body>
        </ThemeProvider>
      </SocialIcons>
    </>
  );
}
