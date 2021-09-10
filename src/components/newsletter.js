/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const NewsletterSection = () => (
  <section>
    <div className="bg-transparent">
      <div className="w-full mx-auto ">
        <div className="px-6 py-6 bg-secondary rounded-lg">
          <div className="">
            <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-primary sm:text-2xl">
              Articles delivered to your inbox!
            </h2>
            <div className="mt-2 space-y-3 text-secondary">
              <p className="text-secondary">
                A periodic update about my life, recent blog posts, how-tos, and
                discoveries.
              </p>
              <p>
                As a thank you, I'll also send you a{' '}
                <span className="font-bold text-indigo-hover">
                  FREE CSS tutorial!
                </span>
              </p>
              <p>No spam - unsubscribe at any time!</p>
            </div>
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
                className="w-full px-4 py-2 placeholder-coolGray-500 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:border-indigo-600 border-gray-300 rounded-md"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="flex items-center justify-center space-x-3 mt-3 px-4 py-2 shadow text-sm font-medium rounded-md text-white bg-button-indigo hover:bg-button-indigo-hover dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-coolGray-100 dark:focus:ring-offset-blueGray-800 focus:ring-indigo-500 dark:focus:ring-white ml-0 w-full flex-shrink-0 md:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <span>Subscribe & get my free tutorial!</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
