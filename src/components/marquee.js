import React from 'react';
import Marquee from 'react-marquee-slider';
import heart from '~assets/heart.svg';
import { interests } from '~data/marquee/marquee';

const HeartIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center from-pink-500 to-rose-500 mb-1">
    <img src={heart} alt="heart icon" className="h-8 w-8 animate-pulse" />
  </div>
);

const MarqueeSection = () => {
  const speed = 7;

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center">
        <div className="w-2/5 border-t border-gray-200 mb-1" />
        <HeartIcon />
        <div className="w-2/5 border-t border-gray-200 mb-1" />
      </div>

      <Marquee velocity={speed}>
        {interests.map((item, id) => (
          <p
            key={id}
            className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white ml-16"
          >
            {item}
          </p>
        ))}
      </Marquee>
      <div className="w-full border-t border-gray-200 mb-1 mt-7" />
    </section>
  );
};

export default MarqueeSection;
