import React from 'react';
import Layout from '../components/layout';
import WelcomeSection from '../components/welcome';
import TimelineSection from '../components/timeline';
import ProjectsSection from '../components/projects';
import MusicSection from '../components/music';
import BlogSection from '../components/blog';

export default function Home() {
  return (
    <>
      <Layout>
        <WelcomeSection />
        <BlogSection />
        <ProjectsSection />
        <TimelineSection />
        <MusicSection />
      </Layout>
    </>
  );
}
