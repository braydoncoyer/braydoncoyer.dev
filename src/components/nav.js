import React from 'react';
import { Link } from 'gatsby';
import Toggle from './toggle';

const Nav = () => (
  <nav className="sticky-nav flex justify-center items-center w-full py-8 px-5 my-0 md:mb-8 mx-auto bg-white dark:bg-coolGray-900">
    <div className="flex justify-between items-center max-w-4xl w-full">
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
        <a
          className="text-gray-900 dark:text-gray-100"
          href="https://blog.braydoncoyer.dev"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <Toggle />
      </div>
    </div>
  </nav>
);

export default Nav;
