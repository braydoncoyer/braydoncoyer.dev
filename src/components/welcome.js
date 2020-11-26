import React from 'react';
import { FaTwitter, FaCodepen, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import Memoji from '../assets/braydon_memoji.jpeg';

const WelcomeSection = () => (
  <div className="min-h-screen flex justify-center items-center">
    <div className="flex flex-col items-center space-y-8 md:flex-row-reverse md:justify-between">
      <img className="w-1/3 md:w-1/4" src={Memoji} alt="Memoji" />
      <div className="space-y-2 text-left">
        <h1 className="text-4xl font-semibold text-coolGray-900 md:text-6xl">
          Hi, I'm <mark>Braydon</mark> 👋
        </h1>
        <p className="text-base font-light text-coolGray-500 md:text-2xl">
          I'm a senior full stack engineer <br />
          with a passion for everything front-end
        </p>
      </div>

      <div className="w-full flex justify-evenly items-center text-xl text-coolGray-500 md:hidden">
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
        <a
          href="https://blog.braydoncoyer.dev/"
          target="_blank"
          rel="noreferrer"
        >
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
    </div>
  </div>
);

export default WelcomeSection;
