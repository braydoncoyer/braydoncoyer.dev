import React from 'react';
import dayjs from 'dayjs';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { BiCalendarEvent } from 'react-icons/bi';
import { IoMdThumbsUp } from 'react-icons/io';
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
            <div className="mt-4 inline-flex items-center rounded bg-primary-green px-1 space-x-2 text-white text-sm md:mt-0">
              <FaStar /> <p className="uppercase">featured</p>
            </div>
          ) : null}

          <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
          <div className="flex items-center space-x-2 text-secondary">
            <BiCalendarEvent />
            <p>{date.format('MMM DD, YYYY')}</p>
          </div>
          <p className="text-secondary md:break-normal">{description}</p>
        </div>
        <a
          href={`https://blog.braydoncoyer.dev/${slug}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center text-secondary space-x-2 mt-2">
            <p>Read article</p>
            <BsBoxArrowUpRight />
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
