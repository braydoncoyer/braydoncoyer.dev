import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '../helpers/themeContext';
import Toggle from '../components/toggle';
import Layout from '../components/layout';
import BrushPattern from '../components/brush-bg';
import SocialIcons from '../components/social';
import WelcomeSection from '../components/welcome';
import AboutSection from '../components/about';
import TimelineSection from '../components/timeline';
import ProjectsSection from '../components/projects';
import MarqueeSection from '../components/marquee';
import MusicSection from '../components/music';
import BlogSection from '../components/blog';
import Footer from '../components/footer';

const ToolboxItem = ({ href, title, description }) => (
  <li className="text-coolGray-500 dark:text-coolGray-400 text-base sm:text-lg lg:text-base xl:text-lg">
    <a href={href} target="_blank" rel="noreferrer" className="underline">
      {title}
    </a>
    {description ? <span> - {description}</span> : null}
  </li>
);

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Welcome to the portfolio of Braydon Coyer! Check out some projects, blog posts and special tunes Braydon listens to while coding!"
        />
        <title>Braydon's Portfolio</title>
        <link rel="canonical" href="https://braydoncoyer.dev/" />
      </Helmet>
      {/* <SocialIcons>
        <ThemeProvider>
          <body className="bg-white dark:bg-coolGray-900 transition-all">
            <main>
              <Layout>
                <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
                  <Toggle />
                </div>
                <WelcomeSection />
                <AboutSection />
              </Layout>
              <MarqueeSection />
              <Layout>
                <BlogSection />
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
      </SocialIcons> */}
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
