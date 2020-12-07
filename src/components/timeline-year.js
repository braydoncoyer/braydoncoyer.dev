import React from 'react';
import TimelineItem from './timeline-item';

const TimelineYear = ({ timelineYear }) => (
  <div>
    <div className="flex justify-center items-center space-x-4 mb-11">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
        {timelineYear.yearTitle}
      </h2>
      <div className="border-b-2 w-full border-gray-200 dark:border-coolGray-600" />
    </div>
    <TimelineItem timelineItems={timelineYear.yearItems} />
  </div>
);

export default TimelineYear;
