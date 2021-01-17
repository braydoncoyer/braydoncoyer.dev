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
import Banner from '../assets/SEOProfileBanner.jpg';

const homeBanner = {
  src: Banner,
  width: 1200,
  height: 600,
};

export default function Home() {
  return (
    <>
      <SEO title="Portfolio" image={homeBanner} />
      <SocialIcons>
        <ThemeProvider>
          <body className="bg-white dark:bg-coolGray-900 transition-all">
            <main>
              <Layout>
                <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
                  <Toggle />
                </div>
              </Layout>
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
