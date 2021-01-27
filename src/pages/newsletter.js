/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'gatsby';
import { HiArrowCircleRight } from 'react-icons/hi';
import SEO from '../helpers/seo';
import SocialIcons from '../components/social';
import Toggle from '../components/toggle';
import { ThemeProvider } from '../helpers/themeContext';
import Banner from '../../static/images/NewsletterBanner.png';
import Footer from '../components/footer';

export default function Toolbox() {
  return (
    <div>
      <SEO
        title="Braydon's Newsletter"
        description="Join my newsletter today!"
        image={Banner}
      />
      <SocialIcons>
        <ThemeProvider>
          <body className="bg-white dark:bg-coolGray-900 transition-all">
            <main className="flex flex-col justify-between px-4 mx-auto min-h-screen max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
              <div className="mb-auto">
                <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
                  <Toggle />
                </div>
                <section className="space-y-12 w-full py-14 md:py-28">
                  <div className="space-y-4">
                    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-indigo-500 mb-3">
                      Newsletter
                    </h2>
                    <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">
                      Join my newsletter!
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="text-coolGray-500 dark:text-coolGray-400 text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-8 md:mb-12">
                      <p>Never miss out on my new content!</p>
                      <p>
                        I love to read, write, create new things and help others
                        learn front-end development!
                      </p>
                      <h3 className="text-coolGray-900 dark:text-white text-xl sm:text-2xl lg:text-2xl leading-none font-extrabold tracking-tight mb-8">
                        Each newsletter gives you:
                      </h3>

                      <div className="flex items-start mb-7">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                          <HiArrowCircleRight className="text-lg md:text-xl" />
                        </div>
                        <p className="ml-3 text-coolGray-600 dark:text-coolGray-300 font-normal text-lg sm:text-2xl leading-0">
                          An update about me and a sneak peek at what I’m
                          working on
                        </p>
                      </div>
                      <div className="flex items-start mb-7">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                          <HiArrowCircleRight className="text-lg md:text-xl" />
                        </div>
                        <p className="ml-3 text-coolGray-600 dark:text-coolGray-300 font-normal text-lg sm:text-2xl leading-0">
                          My recent blog articles
                        </p>
                      </div>
                      <div className="flex items-start mb-7">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                          <HiArrowCircleRight className="text-lg md:text-xl" />
                        </div>
                        <p className="ml-3 text-coolGray-600 dark:text-coolGray-300 font-normal text-lg sm:text-2xl leading-0">
                          Tutorials and snippets I’ve created
                        </p>
                      </div>
                      <div className="flex items-start mb-7">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                          <HiArrowCircleRight className="text-lg md:text-xl" />
                        </div>
                        <p className="ml-3 text-coolGray-600 dark:text-coolGray-300 font-normal text-lg sm:text-2xl leading-0">
                          Helpful content from the community
                        </p>
                      </div>
                      <div className="flex items-start mb-7">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-indigo-500 dark:bg-indigo-600 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
                          <HiArrowCircleRight className="text-lg md:text-xl" />
                        </div>
                        <p className="ml-3 text-coolGray-600 dark:text-coolGray-300 font-normal text-lg sm:text-2xl leading-0">
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
                        <input
                          type="hidden"
                          name="form-name"
                          value="newsletter"
                        />
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
                  </div>
                  <div className="mt-8">
                    <Link
                      className="mt-32 cursor-pointer text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 rounded-md text-indigo-500 hover:text-indigo-600"
                      to="/"
                    >
                      Go back Home ->
                    </Link>
                  </div>
                </section>
              </div>
              <Footer />
            </main>
          </body>
        </ThemeProvider>
      </SocialIcons>
    </div>
  );
}
