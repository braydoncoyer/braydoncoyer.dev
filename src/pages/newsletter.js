/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SEO from 'react-seo-component';
import NewsletterSection from '~components/newsletter';
import Layout from '~layouts/mainLayout';
import { useSiteMetadata } from '~hooks/useSiteMetadata';

export default function Toolbox() {
  const {
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <>
      <SEO
        title={title}
        titleTemplate="Newsletter"
        titleSeparator="|"
        description="Sign up for my newsletter!"
        image={`${siteUrl}/images/NewsletterBanner.png`}
        pathname={`${siteUrl}/newsletter`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Layout>
        <section className="w-full">
          <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-indigo-500 mb-3">
            Newsletter
          </h2>
          <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
            Join my newsletter!
          </p>

          <div className="text-coolGray-500 dark:text-coolGray-400 prose-lg mb-6">
            <p>Never miss out on my new content!</p>
            <p>
              I love to read, write and create new things. With each newsletter,
              you'll get a sneak peek at what I'm working on, updates from my
              blog, tutorials and snippets I've created, and content I've found
              helpful from the community!
            </p>
          </div>
          <div className="mt-12 w-full xl:mt-8 space-y-3">
            <NewsletterSection />
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://buttondown.email/braydoncoyer/archive/"
                className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500 italic"
              >
                Newsletter archive - read past issues!
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
