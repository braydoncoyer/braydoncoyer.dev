import React from 'react';
import SEO from '../helpers/seo';
import { ThemeProvider } from '../helpers/themeContext';
import Toggle from '../components/toggle';
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
            <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:mb-8 mx-auto bg-white dark:bg-coolGray-900 bg-opacity-60">
              <div className="text-gray-900 dark:text-gray-100 font-semibold">
                braydoncoyer.dev
              </div>
              <div className="flex items-center">
                <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                  Home
                </a>
                <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                  About
                </a>
                <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                  Blog
                </a>
                <div className="ml-4">
                  <Toggle />
                </div>
              </div>
            </nav>
            <main>
              <Layout>
                {/* The top padding fixes a click detction issue with the toggle when viewed on mobile. Come back and fix */}
                <section className="pt-12">
                  <WelcomeSection />
                  <AboutSection />
                </section>
              </Layout>
              <MarqueeSection />
              <Layout>
                <BlogSection />
                <NewsletterSection />
                <ProjectsSection />
              </Layout>
              <BrushPattern>
                <Layout>
                  <TimelineSection />
                  <MusicSection />
                  <Footer />
                </Layout>
              </BrushPattern>
            </main>
          </body>
        </ThemeProvider>
      </SocialIcons>
    </>
  );
}
