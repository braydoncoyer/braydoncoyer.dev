import React from 'react';
import { Link } from 'gatsby';
import Toggle from '~components/toggle';

const Nav = () => (
  <nav className="sticky top-0 z-30 flex justify-center items-center w-full px-4 py-4 my-0 mb-8 bg-white dark:bg-coolGray-900 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 dark:firefox:bg-opacity-90 dark:bg-opacity-20 border-b border-coolGray-200 dark:border-coolGray-700">
    <div className="flex justify-between items-center max-w-2xl w-full">
      <div className="text-gray-900 dark:text-gray-100 font-semibold">
        <Link className="cursor-pointer" to="/">
          Braydon Coyer
        </Link>
      </div>
      <div className="flex items-center space-x-4 justify-evenly text-gray-900 dark:text-gray-100">
        <Link className="cursor-pointer" to="/">
          Home
        </Link>
        <Link className="cursor-pointer" to="/about">
          About
        </Link>
        <Link className="cursor-pointer" to="/blog">
          Blog
        </Link>
        <Toggle />
      </div>
    </div>
  </nav>
);

export default Nav;
