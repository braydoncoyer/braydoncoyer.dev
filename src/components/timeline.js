import React from 'react';
import TimelineYear from './timeline-year';

const timelineContent = [
  {
    yearTitle: '2020',
    timelineItems: [
      {
        itemTitle: 'Launched updated portfolio 🙌',
        itemDescription:
          'Launched my new portfolio powered by Gatsby and Contentful, styled with Tailwind CSS and deployed on Netlify.',
      },
      {
        itemTitle: 'Started a blog ✏️',
        itemDescription:
          'In October, I decided it was time to start my development blog. I had been putting it off but finally decided to make the jump. You can read my most recent articles here on my portfolio!',
      },
      {
        itemTitle: 'Got hitched 👰',
        itemDescription: `After dating for 4 years, I married the woman I've loved since middle- school!`,
      },
      {
        itemTitle: 'Started working from home 👨‍💻',
        itemDescription:
          'In March 2020 we started working from home. Who knew it would last this long?',
      },
    ],
  },
  {
    yearTitle: '2019',
    timelineItems: [
      {
        itemTitle: 'Health care AI 🧰',
        itemDescription:
          'I was placed in a team to architect and lead their front-end team to produce a component library for several health care industry leaders.',
      },
      {
        itemTitle: 'Launched NgLimeade 🍞',
        itemDescription:
          'Launched an Angular toast library to get toast notifications up and running in a project within 30 seconds.',
      },
      {
        itemTitle: 'Started new job at Cognizant 🔧',
        itemDescription:
          'Joined Cognizant in May to help lead their front-end practice in the Dallas Studios.',
      },
      {
        itemTitle: 'Got engaged 💍',
        itemDescription:
          'I asked my favorite person to marry me. She said yes!',
      },
    ],
  },
];

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
