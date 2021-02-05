import React from 'react';
import ProfileImage from '../assets/avatar.jpg';

const WelcomeSection = () => (
  <section className="mb-24">
    <div className=" flex justify-between items-center relative">
      <div className=" w-full space-y-8 md:flex-row-reverse md:justify-between">
        <div className="text-left">
          <img
            className="mt-8 mb-16 ml-3 rounded-full h-36 w-36 ring-4 ring-offset-8 ring-offset-white dark:ring-offset-coolGray-900 ring-teal-500 dark:ring-teal-400 select-none"
            src={ProfileImage}
            alt="Braydon Coyer"
          />
          <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-teal-500 dark:text-teal-400 mb-3">
            Hey there,
          </h2>
          <h1 className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
            I'm Braydon.
          </h1>
          <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6">
            I'm a senior full stack engineer with a passion for everything
            front-end. Welcome to my corner of the internet. I'm glad you're
            here!
          </p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-1/2 text-5xl leading-none text-coolGray-500 dark:text-coolGray-400 " />
  </section>
);

export default WelcomeSection;
