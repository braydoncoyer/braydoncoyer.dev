import React from 'react';

const WelcomeSection = () => (
  <section className="mb-16">
    <div className=" flex justify-between items-center relative">
      <div className=" w-full space-y-8 md:flex-row-reverse md:justify-between">
        <div className="text-left">
          <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-teal-500 dark:text-teal-400 mb-3">
            Hey there,
          </h2>
          <h1 className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
            I'm Braydon.
          </h1>
          <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-6">
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
