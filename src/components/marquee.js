import React from 'react';
import Marquee from 'react-marquee-slider';

const interests = [
  'Angular',
  'React',
  'Valorant',
  'Apex Legends',
  'Running',
  'Gatsby',
  'Panda Express',
  'Dr. Pepper',
  'Street Tacos',
  'Apple Products',
  'Basketball',
  'CodePen',
  'Test Driven Development',
  'Public Speaking',
  'Christmas Time',
  'Lord of the Rings',
  'Movie Music Scores',
];

const MarqueeSection = () => {
  const speed = 30;
  return (
    <div>
      <div className="border-t-2 border-b-2 py-6 border-coolGray-500 dark:border-coolGray-400">
        <Marquee velocity={speed}>
          {interests.map((item) => (
            <h1 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white ml-16">
              {item}
            </h1>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSection;
