import React from 'react';
import TimelineItem from '~components/timeline-item';

const TimelineYear = ({ timelineYear }) => (
  <div>
    <div className="flex justify-center items-center space-x-4 mb-4">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-primary">
        {timelineYear.yearTitle}
      </h2>
      <div className="border-t border-primary w-full" />
    </div>
    <TimelineItem timelineItems={timelineYear.timelineItems} />
  </div>
);

export default TimelineYear;
