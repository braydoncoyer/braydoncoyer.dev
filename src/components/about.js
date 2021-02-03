import React from 'react';

const AboutSection = () => (
  <section className="mb-16">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-amber-500 dark:text-amber-400 mb-3">
      About Me
    </h2>
    <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
      Here's my story.
    </p>
    <div className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-6">
      <p>
        I’m Braydon, a senior full-stack engineer, creative coder and
        self-proclaimed designer who has a passion for the front-end spectrum.
      </p>
      <p>
        I love creating, whether those things are web applications,{' '}
        <a
          className="underline text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
          href="https://codepen.io/braydoncoyer"
          target="_blank"
          rel="noreferrer"
        >
          CodePen creations,
        </a>{' '}
        mobile apps,{' '}
        <a
          className="underline  text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
          href="https://anchor.fm/florida-man"
          target="_blank"
          rel="noreferrer"
        >
          podcasts,
        </a>{' '}
        or tinkering around in Photoshop or Illustrator.
      </p>
      <p>
        I specialize in front-end development and make it my mission to
        translate user-focussed designs into pixel-perfect websites or
        applications that run blazing fast.
      </p>
      <p>
        I’m currently part of the team at{' '}
        <a
          className="underline  text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
          href="https://www.cognizant.com/"
          target="_blank"
          rel="noreferrer"
        >
          Cognizant
        </a>{' '}
        where I help architect and develop full-stack RESTful microservices,
        train and prepare developers for delivery, and assist in leading the
        front-end practice in a lab-based working environment.
      </p>
      <p>
        I always like learning new things. I often write about my findings on my{' '}
        <a
          className="underline  text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
          href="https://blog.braydoncoyer.dev/"
          target="_blank"
          rel="noreferrer"
        >
          blog,
        </a>{' '}
        and post helpful tech-related tidbits on{' '}
        <a
          className="underline  text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
          href="https://twitter.com/BraydonCoyer"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        .
      </p>
    </div>
  </section>
);

export default AboutSection;
