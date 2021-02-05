import React from 'react';
import { Link } from 'gatsby';
import { FaTwitter, FaCodepen, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer
    className="bg-white dark:bg-coolGray-900"
    aria-labelledby="footerHeading"
  >
    <h2 id="footerHeading" className="sr-only">
      Footer
    </h2>
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8 border-t border-gray-200">
      <div className="xl:grid xl:grid-cols-2 xl:gap-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-coolGray-900 dark:text-white tracking-wider uppercase">
                Pages
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
                    to="/about"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <a
                    href="https://blog.braydoncoyer.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-coolGray-900 dark:text-white tracking-wider uppercase">
                Extra
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
                    to="/toolbox"
                  >
                    Toolbox
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
                    to="/newsletter"
                  >
                    Newsletter
                  </Link>
                </li>

                <li>
                  <a
                    href="https://www.notion.so/9f35162787e0448094188b66304cf9f6?v=1b9c4e146edf46148fe7b1c5346cbea4"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
                  >
                    Snippets
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.notion.so/Resume-395af92748204ac6a7078cce24132331"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8" />
        </div>
      </div>
    </div>

    <div className="mt-2 py-8 px-4 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between">
      <div className="flex space-x-6 md:order-2">
        <a
          href="https://twitter.com/BraydonCoyer"
          className="text-gray-400 hover:text-gray-500"
        >
          <FaTwitter className="h-5 w-5" />
        </a>

        <a
          href="https://github.com/braydoncoyer"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">GitHub</span>
          <FaGithub className="h-5 w-5" />
        </a>

        <a
          href="https://codepen.io/braydoncoyer"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">CodePen</span>
          <FaCodepen className="h-5 w-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/braydon-coyer/"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin className="h-5 w-5" />
        </a>
      </div>
      <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
        &copy; {new Date().getFullYear()} Braydon Coyer. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
