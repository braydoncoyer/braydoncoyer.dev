/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { processForm } from '../helpers/newsletterSubscribe';

const NewsletterSection = () => {
  const [email, setEmail] = useState();

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    processForm(email);
  };

  //   const emailForm = document.querySelector('.email-form');
  //   if (emailForm) {
  //     emailForm.addEventListener('submit', (e) => {
  //       e.preventDefault();
  //       processForm(emailForm, email);
  //     });
  //   }

  return (
    <section className="mb-24 md:mb-40">
      <div className="bg-transparent">
        <div className="w-full mx-auto ">
          <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Join my newsletter!
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                A periodic update about my life, recent blog posts, tutorials
                and discoveries.
              </p>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                Unsubscribe anytime.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form
                name="newsletter"
                method="POST"
                action="/"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="sm:flex email-form"
              >
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
                  onChange={handleInputChange}
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />

                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3  shadow text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-indigo-200">
                We care about the protection of your data. Read our
                <a href="#" className="text-white font-medium underline">
                  {' '}
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
