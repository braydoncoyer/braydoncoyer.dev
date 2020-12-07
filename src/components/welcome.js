import React from 'react';
import { FaTwitter, FaCodepen, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import Memoji from '../assets/braydon_memoji.jpeg';

const WelcomeSection = () => (
  <section className="min-h-screen flex justify-between items-center">
    <div className="flex w-full flex-col items-center space-y-8 md:flex-row-reverse md:justify-between">
      <img className="w-1/4 md:w-3/12" src={Memoji} alt="Memoji" />
      <div className="md:text-left text-center">
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-teal-500 dark:text-teal-400 mb-3">
          Hey there,
        </h2>
        <h1 className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">
          I'm Braydon.
        </h1>
        <p className="text-coolGray-500 dark:text-coolGray-400 max-w-4xl text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-6">
          I'm a senior full stack engineer <br />
          with a passion for everything front-end.
        </p>
      </div>

      <div className="w-full flex justify-evenly items-center text-xl text-coolGray-500 dark:text-coolGray-400 md:hidden">
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
  </section>
);

export default WelcomeSection;
