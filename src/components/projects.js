import React from 'react';
import BundleImage from '../assets/bundleappsmacbookpro.png';
// eslint-disable-next-line import/no-unresolved
import OfficeAPILogo from '../assets/officeapilogo.png';

const ProjectsSection = () => (
  <div className="mb-16 sm:mb-24 md:mb-40">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange-600 dark:text-orange-500 mb-3">
      Projects
    </h2>
    <div className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight">
      <p className="mb-2">I like to bulid things.</p>
      <p className="mb-8">Check them out.</p>
    </div>

    <ul className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 md:grid-row-2">
      <li className="bg-coolGray-100 dark:bg-blueGray-800 md:col-span-2 rounded-3xl">
        <div className="p-10 flex flex-col-reverse md:flex md:justify-around md:flex-row">
          <div className="mt-14 md:mt-0 md:max-w-lg">
            <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
              bundleapps.io
            </p>
            <p className="text-coolGray-500 dark:text-coolGray-400 text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-2">
              A startup consultant company needed a website spun up quickly in
              order to publish their first iOS application. Built with Tailwind
              UI, I was able to put something together for them by the end of
              the day.
            </p>
            <a href="https://bundleapps.io/" target="_blank" rel="noreferrer">
              <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                <p>Visit -></p>
              </div>
            </a>
          </div>
          <div>
            <img src={BundleImage} alt="bundleapps" />
          </div>
        </div>
      </li>
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl relative overflow-hidden">
        <div className="p-10">
          <div>
            <img className="w-full" src={OfficeAPILogo} alt="officeAPI" />
          </div>
          <div className="mt-14 md:mt-28">
            <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
              officeapi.dev
            </p>
            <p className="text-coolGray-500 dark:text-coolGray-400 text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-2">
              A fun side-project originally built with Spring Boot and MonogDb,
              rebuilt with with Node.js, Express, Mongoose and MongoDb. Deployed
              with Heroku.
            </p>
            <a href="https://bundleapps.io/" target="_blank" rel="noreferrer">
              <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                <p>Visit -></p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl">
        <div className="p-10">
          <div>
            <img className="w-full" src={OfficeAPILogo} alt="officeAPI" />
          </div>
          <div className="mt-14 md:mt-28">
            <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
              NgLimeade
            </p>
            <p className="text-coolGray-500 dark:text-coolGray-400 text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-2">
              NgLimeade is an Angular Toast Library that aims to get toast
              notifications up and running in less than a minute! No joke! Check
              it out for yourself!
            </p>
            <a href="https://bundleapps.io/" target="_blank" rel="noreferrer">
              <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                <p>Visit -></p>
              </div>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default ProjectsSection;
