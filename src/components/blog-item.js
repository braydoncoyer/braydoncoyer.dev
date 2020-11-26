import React from 'react';
import dayjs from 'dayjs';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';

const BlogItem = ({
  title,
  image,
  description,
  publishDate,
  reactions,
  slug,
  featured,
}) => {
  const date = dayjs(publishDate);

  return (
    <div className="w-full text-left md:flex md:items-center">
      <img src={image} alt="blog" className="w-full rounded-2xl md:w-1/2" />
      <div className="md:ml-8">
        <div className="space-y-2">
          {featured ? (
            <div className="mt-4 inline-flex items-center rounded bg-gradient-to-br from-purple-500 to-indigo-500 py-1 px-3 space-x-1 text-trueGray-50 text-sm md:mt-0">
              <FaStar /> <p className="uppercase font-semibold">featured</p>
            </div>
          ) : null}

          <h1 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
            {title}
          </h1>
          <div className="flex items-center space-x-2 text-coolGray-500 text-base sm:text-lg lg:text-base xl:text-lg">
            <BiCalendarEvent />
            <p>{date.format('MMM DD, YYYY')}</p>
          </div>
          <p className="text-coolGray-500 text-base sm:text-lg lg:text-base xl:text-lg">
            {description}
          </p>
        </div>
        <a
          href={`https://blog.braydoncoyer.dev/${slug}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-violet-600 hover:text-violet-800 mt-2">
            <p>Read article -></p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
