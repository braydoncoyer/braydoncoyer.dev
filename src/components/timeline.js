import React from 'react';
import TimelineYear from './timeline-year';

const timelineyearItems = [
  {
    yearTitle: '2020',
    yearItems: [
      {
        itemTitle: 'Launched updated portfolio 🙌',
        description:
          'Launched my new portfolio powered by Gatsby, styled with Tailwind CSS and deployed on Netlify.',
      },
      {
        itemTitle: 'Started a blog ✏️',
        description:
          'In October, I decided it was time to start my development blog. I had been putting it off for years and finally made the jump. You can read my most recent articles here on this site!',
      },
      {
        itemTitle: 'Got hitched 👰',
        description:
          "After dating for 4 years, I married the woman I've loved since middle-school!",
      },
      {
        itemTitle: 'Started working from home 👨‍💻',
        description:
          'In March we started working from home. Who knew it would last this long?',
      },
    ],
  },

  {
    yearTitle: '2019',
    yearItems: [
      {
        itemTitle: 'Health care AI 🧰',
        description:
          'I was placed in a team to architect and lead their front-end team to produce a component library for several health care industry leaders.',
      },
      {
        itemTitle: 'Launched NgLimeade 🍞',
        description:
          'Launched an Angular toast library to get toast notifications up and running in a project within 30 seconds.',
      },
      {
        itemTitle: 'Started new job at Cognizant 🔧',
        description:
          'Joined Cognizant in May to help lead their front-end practice in the Dallas Studios.',
      },
      {
        itemTitle: 'Got engaged 💍',
        description: 'I asked my favorite person to marry me. She said yes!',
      },
    ],
  },
];

const TimelineSection = () => (
  <div className="mb-16 sm:mb-24 md:mb-40">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-lightBlue-500 dark:text-lightBlue-400 mb-3">
      Timeline
    </h2>
    <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-12">
      Some important things to note.
    </p>

    {timelineyearItems.map((year, id) => (
      <TimelineYear key={id} timelineYear={year} />
    ))}
  </div>
);

export default TimelineSection;
