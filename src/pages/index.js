import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SocialIcons from '../components/social';
import WelcomeSection from '../components/welcome';
import AboutSection from '../components/about';
import TimelineSection from '../components/timeline';
import MarqueeSection from '../components/marquee';
import MusicSection from '../components/music';
import BlogSection from '../components/blog';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Braydon's Portfolio</title>
        <link rel="canonical" href="https://braydoncoyer.dev/" />
      </Helmet>
      <SocialIcons>
        <Layout>
          <WelcomeSection />
          <div className="space-y-32">
            <AboutSection />
            <BlogSection />
            <TimelineSection />
            <MusicSection />
            <Footer />
          </div>
        </Layout>
        <MarqueeSection />
      </SocialIcons>
    </div>
  );
}
