/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Layout from '../components/layout';
import AboutSection from '../components/about';
import MarqueeSection from '../components/marquee';

export default function Toolbox() {
  return (
    <>
      <Layout title="About | Braydon Coyer" description="Here's my story.">
        <AboutSection />
        <MarqueeSection />
      </Layout>
    </>
  );
}
