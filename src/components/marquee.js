import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Marquee from 'react-marquee-slider';
import heart from '../assets/heart.svg';

const HeartIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center from-pink-500 to-rose-500 mb-1">
    <img src={heart} alt="heart icon" className="h-8 w-8 animate-pulse" />
  </div>
);

const MarqueeSection = () => {
  const speed = 15;
  const contentfulQuery = useStaticQuery(graphql`
    {
      allContentfulInterests {
        edges {
          node {
            title
          }
        }
      }
    }
  `);
  return (
    <section className="mb-24 md:mb-40">
      <div className="flex justify-between items-center">
        <div className="w-2/5 border-t-2 mb-1 border-coolGray-500 dark:border-coolGray-400" />
        <HeartIcon />
        <div className="w-2/5 border-t-2 mb-1 border-coolGray-500 dark:border-coolGray-400" />
      </div>

      <Marquee velocity={speed}>
        {contentfulQuery.allContentfulInterests.edges[0].node.title.map(
          (item, id) => (
            <p
              key={id}
              className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white ml-16"
            >
              {item}
            </p>
          )
        )}
      </Marquee>
      <div className="w-full border-b-2 mt-7 border-coolGray-500 dark:border-coolGray-400" />
    </section>
  );
};

export default MarqueeSection;
