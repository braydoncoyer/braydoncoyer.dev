import React from 'react';
import { HiCheck } from 'react-icons/hi';

const TimelineSection = () => (
  <div className="space-y-8 mt-32">
    <h1 className="text-4xl font-semibold text-primary md:text-4xl">
      <mark>Timeline</mark>
    </h1>
    {/* Year */}
    <div className="flex justify-center items-center space-x-4">
      <h2 className="text-2xl font-semibold text-primary">2020</h2>
      <div className="border-b w-full border-gray-600" />
    </div>
    {/* Item */}
    <div className="flex ml-4">
      <div className="w-5 h-5 bg-primary-green rounded-full flex justify-center items-center">
        <HiCheck className="text-white" />
      </div>
      <div className="ml-4">
        <p className="text-primary text-base font-semibold">
          Launched updated portfolio 🙌
        </p>
        <p className="text-secondary text-sm mt-1">
          Launched my new portfolio powered by Gatsby, styled with Tailwind CSS
          and deployed on Netlify.
        </p>
      </div>
    </div>
    {/* Item */}
    <div className="flex ml-4">
      <div className="w-5 h-5 bg-primary-green rounded-full flex justify-center items-center">
        <HiCheck className="text-white" />
      </div>
      <div className="ml-4">
        <p className="text-primary text-base font-semibold">
          Started a blog ✏️
        </p>
        <p className="text-secondary text-sm mt-1">
          In October, I decided it was time to start my development blog. I had
          been putting it off for years and finally made the jump. You can read
          my most recent articles here on this site!
        </p>
      </div>
    </div>
    {/* Item */}
    <div className="flex ml-4">
      <div className="w-5 h-5 bg-primary-green rounded-full flex justify-center items-center">
        <HiCheck className="text-white" />
      </div>
      <div className="ml-4">
        <p className="text-primary text-base font-semibold">Got hitched 👰</p>
        <p className="text-secondary text-sm mt-1">
          After dating for 4 years, I married the woman I've loved since
          middle-school.
        </p>
      </div>
    </div>
    {/* Item */}
    <div className="flex ml-4">
      <div className="w-5 h-5 bg-primary-green rounded-full flex justify-center items-center">
        <HiCheck className="text-white" />
      </div>
      <div className="ml-4">
        <p className="text-primary text-base font-semibold">
          Started working from home 👨‍💻
        </p>
        <p className="text-secondary text-sm mt-1">
          In March we started working from home. Who knew it would last this
          long?
        </p>
      </div>
    </div>
    {/* Year */}
    <div className="flex justify-center items-center space-x-4">
      <h2 className="text-2xl font-semibold text-primary">2019</h2>
      <div className="border-b w-full border-gray-600" />
    </div>

    {/* Item */}
    <div className="flex ml-4">
      <div className="w-5 h-5 bg-primary-green rounded-full flex justify-center items-center">
        <HiCheck className="text-white" />
      </div>
      <div className="ml-4">
        <p className="text-primary text-base font-semibold">
          Health care AI 🧰
        </p>
        <p className="text-secondary text-sm mt-1">
          I was placed in a team to architect and lead their front-end team to
          produce a component library for several health care industry leaders.
        </p>
      </div>
    </div>

    {/* Item */}
    <div className="flex ml-4">
      <div className="w-5 h-5 bg-primary-green rounded-full flex justify-center items-center">
        <HiCheck className="text-white" />
      </div>
      <div className="ml-4">
        <p className="text-primary text-base font-semibold">
          Launched NgLimeade 🍞
        </p>
        <p className="text-secondary text-sm mt-1">
          Launched an Angular toast library to get toast notifications up and
          running in a project within 30 seconds.
        </p>
      </div>
    </div>

    {/* Item */}
    <div className="flex ml-4">
      <div className="w-5 h-5 bg-primary-green rounded-full flex justify-center items-center">
        <HiCheck className="text-white" />
      </div>
      <div className="ml-4">
        <p className="text-primary text-base font-semibold">
          Started new job at Cognizant 🔧
        </p>
        <p className="text-secondary text-sm mt-1">
          Joined Cognizant in May to help lead their front-end practice in the
          Dallas Studios.
        </p>
      </div>
    </div>

    {/* Item */}
    <div className="flex ml-4">
      <div className="w-5 h-5 bg-primary-green rounded-full flex justify-center items-center">
        <HiCheck className="text-white" />
      </div>
      <div className="ml-4">
        <p className="text-primary text-base font-semibold">Got engaged 💍</p>
        <p className="text-secondary text-sm mt-1">
          I asked my favorite person to marry me. She said yes!
        </p>
      </div>
    </div>
  </div>
);

export default TimelineSection;
