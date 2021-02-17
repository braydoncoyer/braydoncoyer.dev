/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SEO from 'react-seo-component';
import { HiArrowCircleRight } from 'react-icons/hi';
import Layout from '../components/layout';
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

          <div className="text-coolGray-500 dark:text-coolGray-400 prose leading-6 mb-6">
            <p>Never miss out on my new content!</p>
            <p>
              I love to read, write, create new things and help others learn
              front-end development!
            </p>
            <h2 className="text-coolGray-900 dark:text-white text-2xl lg:text-3xl leading-none font-extrabold tracking-tight mb-8">
              What you can expect:
            </h2>

            <div className="flex items-center">
              <div className="w-5 h-5 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                <HiArrowCircleRight className="text-lg" />
              </div>
              <p className="text-coolGray-600 dark:text-coolGray-300 prose leading-6 ml-4 mb-1">
                Updates about me and my life
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                <HiArrowCircleRight className="text-lg" />
              </div>
              <p className="text-coolGray-600 dark:text-coolGray-300 prose leading-6 ml-4 mb-1">
                Sneak peeks at what I’m working on
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                <HiArrowCircleRight className="text-lg" />
              </div>
              <p className="ml-3 text-coolGray-600 dark:text-coolGray-300 prose leading-6 mb-6">
                My recent blog articles
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                <HiArrowCircleRight className="text-lg" />
              </div>
              <p className="ml-3 text-coolGray-600 dark:text-coolGray-300 prose leading-6 mb-6">
                Tutorials and snippets I’ve created
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                <HiArrowCircleRight className="text-lg" />
              </div>
              <p className="ml-3 text-coolGray-600 dark:text-coolGray-300 prose leading-6 mb-6">
                Helpful content from the community
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                <HiArrowCircleRight className="text-lg" />
              </div>
              <p className="ml-3 text-coolGray-600 dark:text-coolGray-300 prose leading-6 mb-6">
                Pre-released tutorials
              </p>
            </div>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md xl:mt-8">
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="sm:flex email-form"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <div hidden aria-hidden="true">
                <label htmlFor="bot-field">Robot input...</label>
                <input name="bot-field" />
              </div>
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-coolGray-500 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:border-indigo-600 sm:max-w-xs border-gray-300 rounded-md"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="mt-3 w-full flex items-center justify-center px-5 py-3 shadow text-base font-medium rounded-md text-white bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-400 dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-coolGray-100 dark:focus:ring-offset-blueGray-800 focus:ring-indigo-500 dark:focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Join for Free
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
}
