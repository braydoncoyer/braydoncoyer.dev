/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SEO from 'react-seo-component';
import Layout from '../components/layout';
import AboutSection from '../components/about';
import TimelineSection from '../components/timeline';
import MarqueeSection from '../components/marquee';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default function Toolbox() {
  const {
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <>
      <SEO
        title={title}
        titleTemplate="About"
        titleSeparator="|"
        description={`Here's my story.`}
        image={`${siteUrl}${image}`}
        pathname={`${siteUrl}/about`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Layout>
        <AboutSection />
        <MarqueeSection />
        <TimelineSection />
      </Layout>
    </>
  );
}
