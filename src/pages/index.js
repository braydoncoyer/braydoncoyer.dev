import React from 'react';
import SEO from '../helpers/seo';
import { ThemeProvider } from '../helpers/themeContext';
import Nav from '../components/nav';
import Layout from '../components/layout';
import BrushPattern from '../components/brush-bg';
import SocialIcons from '../components/social';
import WelcomeSection from '../components/welcome';
import AboutSection from '../components/about';
import NewsletterSection from '../components/newsletter';
import TimelineSection from '../components/timeline';
import ProjectsSection from '../components/projects';
import MarqueeSection from '../components/marquee';
import MusicSection from '../components/music';
import BlogSection from '../components/blog';
import Footer from '../components/footer';
import Banner from '../../static/images/ProfileSEOBanner.png';

export default function Home() {
  return (
    <>
      <SEO title="Braydon's Portfolio" image={Banner} />
      <SocialIcons>
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
      </SocialIcons>
    </>
  );
}
