import React from 'react';
import TimelineYear from '~components/timeline-year';
import { timelineContent } from '~data/timeline/timeline';

const TimelineSection = () => (
  <section className="mb-16">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-lightBlue-500 dark:text-lightBlue-400 mb-3">
      Timeline
    </h2>
    <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-16">
      Some things to note.
    </p>

    {timelineContent.map((year, id) => (
      <TimelineYear key={id} timelineYear={year} />
    ))}
  </section>
);
export default TimelineSection;
