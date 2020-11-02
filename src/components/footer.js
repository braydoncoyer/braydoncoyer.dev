import React from 'react';

import { FaTwitter, FaCodepen, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

const Footer = () => (
  <div className="my-4 text-secondary text-sm">
    <div className="my-6 w-full flex justify-evenly items-center text-xl text-secondary md:hidden">
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
    <div className="flex justify-around mb-6">
      <div className="w-1/2 md:w-1/4 flex justify-around">
        <p className="cursor-pointer">/workflow</p>
        <p className="cursor-pointer">/blog</p>
        <p className="cursor-pointer">/resume</p>
      </div>
    </div>
  </div>
);

export default Footer;
