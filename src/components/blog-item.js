import React from 'react';
import { IoMdThumbsUp } from 'react-icons/io';

const BlogItem = ({ title, description, date, reactions, slug }) => (
  <div className="border border-primary rounded w-full text-left p-3">
    <a
      href={`https://blog.braydoncoyer.dev/${slug}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="text-primary md:flex md:justify-between">
        <h1 className="text-base font-semibold md:text-lg">{title}</h1>
        <div className="hidden md:text-sm md:space-x-1 md:flex justify-center md:items-center">
          {/* TODO: Come back and fix the date */}
          {/* <p>{date}</p> */}
          <IoMdThumbsUp />
          <p>{reactions}</p>
        </div>
      </div>
      <p className="text-secondary text-sm md:break-normal">{description}</p>
    </a>
  </div>
);

export default BlogItem;
