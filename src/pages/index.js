import React from 'react';
import Layout from '../components/layout';
import WelcomeSection from '../components/welcome';
import AboutSection from '../components/about';
import TimelineSection from '../components/timeline';
import MusicSection from '../components/music';

export default function Home() {
  return (
    <Layout>
      <WelcomeSection />
      <div className="space-y-32">
        <AboutSection />
        <TimelineSection />
        <MusicSection />
      </div>
    </Layout>
  );
}
