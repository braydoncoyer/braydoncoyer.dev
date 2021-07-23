import React from 'react';
import SEO from 'react-seo-component';
import dayjs from 'dayjs';
import Badge from '~components/badge';
import Layout from '~layouts/mainLayout';
import { useSiteMetadata } from '~hooks/useSiteMetadata';
import { changes } from '~data/changelog/changelog.js';

export default function Toolbox() {
  const {
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  const date = (day) => dayjs(day);

  return (
    <>
      <SEO
        title={title}
        titleTemplate="Changelog"
        titleSeparator="|"
        description="A list of features and updates to my personal corner of the internet."
        image={`${siteUrl}/images/ProfileSEOBanner.png`}
        pathname={`${siteUrl}/changelog`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Layout>
        <section className="w-full">
          <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-amber mb-3">
            Changelog
          </h2>
          <p className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
            What's new ✨
          </p>

          <p className="text-secondary prose-lg mb-6">
            Here's a list of things that have recently changed, features that
            have been added or a log of things that have been removed.
          </p>

          {changes.map((change, id) => (
            <div className="mt-12" key={id}>
              <h3 className="text-primary text-lg lg:text-2xl leading-none font-extrabold tracking-tight mb-4">
                {date(change.date).format('MMMM DD, YYYY')}
              </h3>
              {change.items.map((item, key) => (
                <div key={key} className="flex items-start mt-4 ml-4 md:ml-6">
                  <div className="flex-none flex justify-center items-center mt-1">
                    <Badge>{item.type}</Badge>
                  </div>
                  <div className="ml-4">
                    <p className="text-secondary prose-lg mb-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </Layout>
    </>
  );
}
