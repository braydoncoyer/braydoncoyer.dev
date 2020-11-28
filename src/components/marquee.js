import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import Marquee from 'react-marquee-slider';

const HeartIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center from-pink-500 to-rose-500 mb-1">
    <FaRegHeart className="text-lg" />
  </div>
);

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
    <div className="hidden md:block">
      <div className="flex justify-between items-center">
        <div className="w-2/5 border-t-2 mb-1 border-coolGray-500 dark:border-coolGray-400" />
        <HeartIcon />
        <div className="w-2/5 border-t-2 mb-1 border-coolGray-500 dark:border-coolGray-400" />
      </div>

      <Marquee velocity={speed}>
        {interests.map((item) => (
          <h1 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white ml-16">
            {item}
          </h1>
        ))}
      </Marquee>
      <div className="w-full border-b-2 mt-6 border-coolGray-500 dark:border-coolGray-400" />
    </div>
  );
};

export default MarqueeSection;
