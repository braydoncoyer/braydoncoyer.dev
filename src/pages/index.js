import React from 'react';
import SEO from '../helpers/seo';
import { ThemeProvider } from '../helpers/themeContext';
import Layout from '../components/layout';
import WelcomeSection from '../components/welcome';
import NewsletterSection from '../components/newsletter';
import TimelineSection from '../components/timeline';
import ProjectsSection from '../components/projects';
import MusicSection from '../components/music';
import BlogSection from '../components/blog';
import Banner from '../../static/images/ProfileSEOBanner.png';

export default function Home() {
  return (
    <>
      <SEO title="Braydon's Portfolio" image={Banner} />
      <ThemeProvider>
        <body className="bg-white dark:bg-coolGray-900">
          <main>
            <Layout>
              <WelcomeSection />
              <BlogSection />
              <NewsletterSection />
              <ProjectsSection />
              <TimelineSection />
              <MusicSection />
            </Layout>
          </main>
        </body>
      </ThemeProvider>
    </>
  );
}
