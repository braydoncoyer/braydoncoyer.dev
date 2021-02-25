import React from 'react';
import { Link } from 'gatsby';
import Layout from '~layouts/mainLayout';

export default function Home() {
  return (
    <div>
      <Layout title="404 | Braydon Coyer">
        <div>
          <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-rose-500 dark:text-rose-400 mb-3">
            not found
          </h2>
          <h1 className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
            This wasn't supposed to happen.
          </h1>
          <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-8">
            Something went wrong... The page you were trying to reach doesn't
            exist.
          </p>
          <Link
            className="cursor-pointer text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 rounded-md text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-600"
            to="/"
          >
            Go back Home ->
          </Link>
        </div>
      </Layout>
    </div>
  );
}
