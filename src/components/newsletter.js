/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const NewsletterSection = () => (
  <section>
    <div className="bg-transparent">
      <div className="w-full mx-auto ">
        <div className="px-6 py-6 md:px-8 md:py-8 bg-coolGray-100 dark:bg-blueGray-800 rounded-lg">
          <div className="">
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-coolGray-900 dark:text-white sm:text-3xl">
              Join my newsletter!
            </h2>
            <p className="mt-3 prose leading-6 text-coolGray-500 dark:text-coolGray-400">
              A periodic update about my life, recent blog posts, tutorials and
              discoveries.
            </p>
          </div>
          <div className="mt-8 w-full">
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="block email-form"
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
                className="w-full px-5 py-3 placeholder-coolGray-500 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:border-indigo-600 border-gray-300 rounded-md"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="mt-3 px-5 py-3 shadow text-base font-medium rounded-md text-white bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-400 dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-coolGray-100 dark:focus:ring-offset-blueGray-800 focus:ring-indigo-500 dark:focus:ring-white ml-0 w-full flex-shrink-0"
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
