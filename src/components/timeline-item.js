import React from 'react';
import { HiCheck } from 'react-icons/hi';

const TimelineItem = ({ timelineItems }) => (
  <div>
    {timelineItems.map((item, id) => (
      <div key={id} className="flex items-start ml-4">
        <div className="w-5 h-5 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-coolGray-50 rounded-full flex justify-center items-center mt-1">
          <HiCheck className="text-lg" />
        </div>
        <div className="ml-4">
          <p className="text-coolGray-900 dark:text-white font-semibold prose leading-6 mb-1">
            {item.itemTitle}
          </p>
          <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-6">
            {item.itemDescription}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default TimelineItem;
