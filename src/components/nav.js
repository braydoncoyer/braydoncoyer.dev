import React from 'react';
import { Link } from 'gatsby';
import Toggle from '~components/toggle';

const Nav = () => (
  <nav className="sticky-nav flex justify-center items-center w-full py-4 my-0 md:mb-8 mx-auto bg-white dark:bg-coolGray-900">
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
        <Link className="cursor-pointer" to="/blog">
          Blog
        </Link>
        <Toggle />
      </div>
    </div>
  </nav>
);

export default Nav;
