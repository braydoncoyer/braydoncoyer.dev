import React from 'react';
import { HiCheck } from 'react-icons/hi';

const TimelineItem = ({ timelineItems }) => (
  <div>
    {timelineItems.map((item, id) => (
      <div key={id} className="flex items-start ml-4">
        <div className="w-5 h-5 flex-none bg-gradient-to-br from-cyan-400 to-lightBlue-500 text-white rounded-full flex justify-center items-center mt-1">
          <HiCheck className="text-lg" />
        </div>
        <div className="ml-4">
          <p className="text-primary font-semibold  prose-lg mb-1">
            {item.itemTitle}
          </p>
          <p className="text-secondary  prose-lg mb-6">
            {item.itemDescription}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default TimelineItem;
