import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import WelcomeSection from '../components/welcome';
import AboutSection from '../components/about';
import TimelineSection from '../components/timeline';
import MusicSection from '../components/music';
import BlogSection from '../components/blog';

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Braydon's Portfolio</title>
        <link rel="canonical" href="https://braydoncoyer.dev/" />
      </Helmet>
      <Layout>
        <WelcomeSection />
        <div className="space-y-32">
          <AboutSection />
          <BlogSection />
          <TimelineSection />
          <MusicSection />
        </div>
      </Layout>
    </div>
  );
}
