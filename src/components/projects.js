import React from 'react';
import BundleImage from '../assets/bundleappsmacbookpro.png';
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

    {/* <ul className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-3 md:grid-row-3">
      <li className="bg-coolGray-100 dark:bg-blueGray-800 md:col-span-2 rounded-3xl">
        <div className="h-96 p-10">
          <p>Item 1</p>
        </div>
      </li>
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl">
        <div className="h-96 p-10">
          <p>Item 2</p>
        </div>
      </li>
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl">
        <div className="h-96 p-10">
          <p>Item 3</p>
        </div>
      </li>
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl md:col-span-2">
        <div className="h-96 p-10">
          <p>Item 4</p>
        </div>
      </li>
    </ul> */}

    <ul className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 md:grid-row-2">
      <li className="bg-coolGray-100 dark:bg-blueGray-800 md:row-span-2 rounded-3xl">
        <div className="p-10">
          <div className="mb-14 md:mb-28">
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
        <div className="h-96 p-10">
          <div>
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
          <div className="absolute bottom-0 right-0 w-4/5">
            <img src={OfficeAPILogo} alt="office API" />
          </div>
        </div>
      </li>
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl">
        <div className="h-96 p-10">
          <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
            NgLimeade
          </p>
          <p className="text-coolGray-500 dark:text-coolGray-400 text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-2">
            NgLimeade is an Angular Toast Library that aims to get toast
            notifications up and running in less than a minute! No joke!
          </p>
          <a
            href="https://www.npmjs.com/package/ng-limeade"
            target="_blank"
            rel="noreferrer"
          >
            <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
              <p>Visit -></p>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
);

export default ProjectsSection;
