import React from 'react';

const ProjectsSection = () => (
  <div className="mb-16 sm:mb-24 md:mb-40">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange-600 dark:text-orange-500 mb-3">
      Projects
    </h2>
    <div className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight">
      <p className="mb-2">I like to bulid things.</p>
      <p className="mb-8">Check them out.</p>
    </div>

    <ul className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-3 md:grid-row-3">
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
    </ul>
  </div>
);

export default ProjectsSection;
