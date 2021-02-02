import React from 'react';
import BundleImage from '../assets/bundleappsmacbookpro.png';
// eslint-disable-next-line import/no-unresolved
import OfficeAPILogo from '../assets/officeapilogo.png';
import ToastItem from '../helpers/toast';

const ProjectsSection = () => (
  <section className="mb-16 md:mb-12">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange-600 dark:text-orange-500 mb-3">
      Projects
    </h2>
    <div className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
      <p className="mb-2">I like to build things.</p>
      <p className="mb-8">Here's a few.</p>
    </div>

    <ul className="grid grid-cols-1 gap-8  mt-12">
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl">
        <div className="p-6 md:p-10 flex flex-col-reverse ">
          <div className="mt-8 md:max-w-lg">
            <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
              bundleapps.io
            </p>
            <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-3">
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
            <img className="select-none" src={BundleImage} alt="bundleapps" />
          </div>
        </div>
      </li>
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl relative overflow-hidden">
        <div className="p-6 md:p-10">
          <div>
            <img
              className="w-full select-none"
              src={OfficeAPILogo}
              alt="officeAPI"
            />
          </div>
          <div className="mt-9">
            <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
              officeapi.dev
            </p>
            <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-3">
              A fun side-project originally built with Spring Boot and MonogDb,
              rebuilt with with Node.js, Express, Mongoose and MongoDb. Deployed
              with Heroku.
            </p>
            <a
              href="https://www.officeapi.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                <p>Visit -></p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl overflow-hidden p-6 md:p-10 flex flex-col items-center">
        <div className="flex-grow w-full space-y-2">
          <ToastItem
            title="Hi there!"
            description="Try dismissing me and see what
              happens..."
            icon="question"
            type="success"
          />
          <ToastItem
            title="Guess what?!"
            description="NgLimeade makes notifications super easy!"
            icon="exclamation"
            type="info"
          />
        </div>
        <div className="mt-8">
          <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
            NgLimeade
          </p>
          <p className="text-coolGray-500 dark:text-coolGray-400 rose leading-6 mb-3">
            NgLimeade is an Angular Toast Library that aims to get toast
            notifications up and running in less than a minute! No joke! Check
            it out for yourself!
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
  </section>
);

export default ProjectsSection;
