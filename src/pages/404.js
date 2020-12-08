import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import SocialIcons from '../components/social';
import Toggle from '../components/toggle';
import { ThemeProvider } from '../helpers/themeContext';

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="Description" content="Page not found." />
        <title>404 - Not Found</title>
        <link rel="canonical" href="https://braydoncoyer.dev/404/" />
      </Helmet>
      <SocialIcons>
        <ThemeProvider>
          <body className="bg-white dark:bg-coolGray-900 transition-all">
            <main className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
              <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
                <Toggle />
              </div>
              <div className="min-h-screen flex justify-between items-center">
                <div>
                  <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-rose-500 dark:text-rose-400 mb-3">
                    not found
                  </h2>
                  <h1 className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">
                    This wasn't supposed to happen.
                  </h1>
                  <p className="text-coolGray-500 dark:text-coolGray-400 max-w-4xl text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-6">
                    Something went wrong... The page you were trying to reach
                    doesn't exist.
                  </p>
                  <Link
                    className="cursor-pointer text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 rounded-md text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-600 mt-2"
                    to="/"
                  >
                    Go back Home ->
                  </Link>
                </div>
              </div>
            </main>
          </body>
        </ThemeProvider>
      </SocialIcons>
    </div>
  );
}
