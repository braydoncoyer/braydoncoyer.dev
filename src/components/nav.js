import React from 'react';
import { Link } from 'gatsby';
import Toggle from './toggle';

const Nav = () => (
  <nav className="sticky-nav flex justify-center items-center w-full p-8 my-0 md:mb-8 mx-auto bg-white dark:bg-coolGray-900 bg-opacity-60">
    <div className="flex justify-between items-center max-w-4xl w-full">
      <div className="text-gray-900 dark:text-gray-100 font-semibold">
        <Link className="cursor-pointer" to="/">
          <a className="p-1 sm:p-4">braydoncoyer.dev</a>
        </Link>
      </div>
      <div className="flex items-center">
        <Link className="cursor-pointer" to="/">
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
        </Link>
        <Link className="cursor-pointer" to="/about">
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">About</a>
        </Link>
        <a
          className="p-1 sm:p-4 text-gray-900 dark:text-gray-100"
          href="https://blog.braydoncoyer.dev"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <div className="ml-4">
          <Toggle />
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
