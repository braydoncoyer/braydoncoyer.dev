import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

const BlogItem = ({
  title,
  image,
  description,
  date,
  reactions,
  slug,
  featured,
}) => (
  // <div className="border-2 border-secondary rounded w-full text-left p-3">
  //   <a
  //     href={`https://blog.braydoncoyer.dev/${slug}`}
  //     target="_blank"
  //     rel="noreferrer"
  //   >
  //     <div className="text-primary md:flex md:justify-between">
  //       <h1 className="text-base font-semibold md:text-lg">{title}</h1>
  //       <div className="hidden md:text-sm md:space-x-1 md:flex justify-center md:items-center">
  //         {/* TODO: Come back and fix the date */}
  //         {/* <p>{date}</p> */}
  //         <IoMdThumbsUp />
  //         <p>{reactions}</p>
  //       </div>
  //     </div>
  //     <p className="text-secondary text-sm md:break-normal">{description}</p>
  //   </a>
  // </div>

  <div className="w-full text-left md:flex md:items-center">
    <img src={image} alt="blog" className="w-full rounded-2xl md:w-1/2" />
    <div className="md:ml-8">
      <div className="space-y-2">
        {featured ? (
          <div className="mt-4 inline-flex items-center rounded bg-primary-green px-1 space-x-2 text-white text-sm md:mt-0">
            <FaStar /> <p className="uppercase">featured</p>
          </div>
        ) : null}
        <h1 className="text-lg font-semibold my-4 md:text-2xl">{title}</h1>
        <p className="text-secondary md:break-normal">{description}</p>
      </div>
      <a
        href={`https://blog.braydoncoyer.dev/${slug}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center text-secondary space-x-2 my-4">
          <p>Read article</p>
          <BsBoxArrowUpRight />
        </div>
      </a>
    </div>
  </div>
);

export default BlogItem;
