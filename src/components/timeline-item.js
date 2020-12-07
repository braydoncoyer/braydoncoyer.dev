import React from 'react';
import { HiCheck } from 'react-icons/hi';

const TimelineItem = ({ timelineItems }) => (
  <div>
    {timelineItems.map((item, id) => (
      <div key={id} className="flex items-start ml-4 mb-7">
        <div className="w-5 h-5 lg:w-7 lg:h-7 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
          <HiCheck className="text-lg md:text-2xl" />
        </div>
        <div className="ml-4 md:ml-6">
          <p className="text-coolGray-900 dark:text-white font-semibold text-lg sm:text-2xl sm:leading-10">
            {item.itemTitle}
          </p>
          <p className="text-coolGray-600 dark:text-coolGray-300 font-normal text-lg sm:text-2xl sm:leading-10">
            {item.description.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default TimelineItem;
