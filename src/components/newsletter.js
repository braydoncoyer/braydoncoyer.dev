/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const NewsletterSection = () => (
  <section className="mb-24 md:mb-40">
    <div className="bg-transparent">
      <div className="w-full mx-auto ">
        <div className="px-6 py-6 bg-coolGray-100 dark:bg-blueGray-800 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-coolGray-900 dark:text-white sm:text-3xl">
              Join my newsletter!
            </h2>
            <p className="mt-3 max-w-3xl text-lg sm:text-2xl leading-6 text-coolGray-500 dark:text-coolGray-400">
              A periodic update about my life, recent blog posts, tutorials and
              discoveries.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
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
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
