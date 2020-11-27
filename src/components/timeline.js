import React from 'react';
import { HiCheck } from 'react-icons/hi';

const TimelineSection = () => (
  <div className="mb-10 sm:mb-16 md:mb-20">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-lightBlue-500 dark:text-lightBlue-400 mb-3">
      Timeline
    </h2>
    <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-12">
      Some important things to note.
    </p>
    {/* Year */}
    <div className="flex justify-center items-center space-x-4 mb-11">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
        2020
      </h2>
      <div className="border-b-2 w-full border-coolGray-500 dark:border-coolGray-400" />
    </div>
    {/* Item */}
    <div className="flex items-start text-base sm:text-lg lg:text-base xl:text-lg ml-4 mb-7 max-w-4xl">
      <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center">
        <HiCheck />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-coolGray-900 dark:text-white font-semibold">
          Launched updated portfolio 🙌
        </p>
        <p className="text-coolGray-500 dark:text-coolGray-400 mt-1">
          Launched my new portfolio powered by Gatsby, styled with Tailwind CSS
          and deployed on Netlify.
        </p>
      </div>
    </div>
    {/* Item */}
    <div className="flex items-start text-base sm:text-lg lg:text-base xl:text-lg ml-4 mb-7 max-w-4xl">
      <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center">
        <HiCheck />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-coolGray-900 dark:text-white font-semibold">
          Started a blog ✏️
        </p>
        <p className="text-coolGray-500 dark:text-coolGray-400 mt-1">
          In October, I decided it was time to start my development blog. I had
          been putting it off for years and finally made the jump. You can read
          my most recent articles here on this site!
        </p>
      </div>
    </div>
    {/* Item */}
    <div className="flex items-start text-base sm:text-lg lg:text-base xl:text-lg ml-4 mb-7 max-w-4xl">
      <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center">
        <HiCheck />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-coolGray-900 dark:text-white font-semibold">
          Got hitched 👰
        </p>
        <p className="text-coolGray-500 dark:text-coolGray-400 mt-1">
          After dating for 4 years, I married the woman I've loved since
          middle-school.
        </p>
      </div>
    </div>
    {/* Item */}
    <div className="flex items-start text-base sm:text-lg lg:text-base xl:text-lg ml-4 mb-11 max-w-4xl">
      <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center">
        <HiCheck />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-coolGray-900 dark:text-white font-semibold">
          Started working from home 👨‍💻
        </p>
        <p className="text-coolGray-500 dark:text-coolGray-400 mt-1">
          In March we started working from home. Who knew it would last this
          long?
        </p>
      </div>
    </div>

    {/* Year */}
    <div className="flex justify-center items-center space-x-4 mb-11">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
        2019
      </h2>
      <div className="border-b-2 w-full border-coolGray-500 dark:border-coolGray-400" />
    </div>

    {/* Item */}
    <div className="flex items-start text-base sm:text-lg lg:text-base xl:text-lg ml-4 mb-7 max-w-4xl">
      <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center">
        <HiCheck />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-coolGray-900 dark:text-white font-semibold">
          Health care AI 🧰
        </p>
        <p className="text-coolGray-500 dark:text-coolGray-400 mt-1">
          I was placed in a team to architect and lead their front-end team to
          produce a component library for several health care industry leaders.
        </p>
      </div>
    </div>

    {/* Item */}
    <div className="flex items-start text-base sm:text-lg lg:text-base xl:text-lg ml-4 mb-7 max-w-4xl">
      <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center">
        <HiCheck />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-coolGray-900 dark:text-white font-semibold">
          Launched NgLimeade 🍞
        </p>
        <p className="text-coolGray-500 dark:text-coolGray-400 mt-1">
          Launched an Angular toast library to get toast notifications up and
          running in a project within 30 seconds.
        </p>
      </div>
    </div>

    {/* Item */}
    <div className="flex items-start text-base sm:text-lg lg:text-base xl:text-lg ml-4 mb-7 max-w-4xl">
      <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center">
        <HiCheck />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-coolGray-900 dark:text-white font-semibold">
          Started new job at Cognizant 🔧
        </p>
        <p className="text-coolGray-500 dark:text-coolGray-400 mt-1">
          Joined Cognizant in May to help lead their front-end practice in the
          Dallas Studios.
        </p>
      </div>
    </div>

    {/* Item */}
    <div className="flex items-start text-base sm:text-lg lg:text-base xl:text-lg ml-4 mb-11 max-w-4xl">
      <div className="w-5 h-5 lg:w-6 lg:h-6 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center">
        <HiCheck />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-coolGray-900 dark:text-white font-semibold">
          Got engaged 💍
        </p>
        <p className="text-coolGray-500 dark:text-coolGray-400 mt-1">
          I asked my favorite person to marry me. She said yes!
        </p>
      </div>
    </div>
  </div>
);

export default TimelineSection;
