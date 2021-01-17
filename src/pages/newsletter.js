/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'gatsby';
import SEO from '../helpers/seo';
import SocialIcons from '../components/social';
import Toggle from '../components/toggle';
import { ThemeProvider } from '../helpers/themeContext';
import Banner from '../assets/SEOToolboxBanner.jpg';
import Footer from '../components/footer';

const toolboxBanner = {
  src: Banner,
  width: 1200,
  height: 600,
};

const ToolboxItem = ({ href, title, description }) => (
  <li className="text-coolGray-500 dark:text-coolGray-400 text-base sm:text-lg lg:text-base xl:text-lg">
    <a href={href} target="_blank" rel="noreferrer" className="underline">
      {title}
    </a>
    {description ? <span> - {description}</span> : null}
  </li>
);

export default function Toolbox() {
  return (
    <div>
      <SEO
        title="Braydon's Newsletter"
        description="Join my newsletter today!"
        pathname="/newsletter"
        image={toolboxBanner}
      />
      <SocialIcons>
        <ThemeProvider>
          <body className="bg-white dark:bg-coolGray-900 transition-all">
            <main className="px-4 mx-auto min-h-screen max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
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
                  <div className="text-coolGray-500 dark:text-coolGray-400 text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-6">
                    <p>Never miss out on my new content!</p>
                    <p>
                      I love to read, write and create new things. With each
                      newsletter, you'll get a sneak peek at what I'm working
                      on, updates from my blog, tutorials and snippets I've
                      created, and content I've found helpful from the
                      community!
                    </p>
                    <p>Join today (you can unsubscribe at any time)!</p>
                  </div>
                  <div className="mt-8 sm:w-full sm:max-w-md xl:mt-8">
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
                        Subscribe
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
              <div className="mt-28">
                <Footer />
              </div>
            </main>
          </body>
        </ThemeProvider>
      </SocialIcons>
    </div>
  );
}
