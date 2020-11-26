import React from 'react';

import { FaTwitter, FaCodepen, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { Link } from 'gatsby';

const Footer = () => (
  <div className="my-4 text-secondary text-sm">
    <div className="my-6 w-full flex justify-evenly items-center text-xl text-coolGray-500 md:hidden">
      <a
        href="https://twitter.com/BraydonCoyer"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>

      <a
        href="https://codepen.io/braydoncoyer"
        target="_blank"
        rel="noreferrer"
      >
        <FaCodepen />
      </a>
      <a href="https://blog.braydoncoyer.dev/" target="_blank" rel="noreferrer">
        <SiHashnode />
      </a>
      <a
        href="https://www.linkedin.com/in/braydon-coyer/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
    <div className="flex justify-around mb-6 text-coolGray-500">
      <div className="w-1/2 md:w-1/4 flex justify-around">
        <Link className="cursor-pointer" to="/toolbox/">
          /toolbox
        </Link>
        <a
          href="https://www.notion.so/9f35162787e0448094188b66304cf9f6?v=1b9c4e146edf46148fe7b1c5346cbea4"
          target="_blank"
          rel="noreferrer"
        >
          /snippets
        </a>
        <a
          href="https://www.notion.so/Resume-395af92748204ac6a7078cce24132331"
          target="_blank"
          rel="noreferrer"
        >
          /resume
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
