import React from 'react';
import SEO from 'react-seo-component';
import Layout from '../components/layout';
import WelcomeSection from '../components/welcome';
import ProjectsSection from '../components/projects';
import MusicSection from '../components/music';
import BlogSection from '../components/blog';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default function Home() {
  const {
    title,
    titleTemplate,
    description,
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
        titleTemplate={titleTemplate}
        titleSeparator="|"
        description={description || 'Welcome to my’'}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Layout>
        <WelcomeSection />
        <BlogSection />
        <ProjectsSection />
        <MusicSection />
      </Layout>
    </>
  );
}
