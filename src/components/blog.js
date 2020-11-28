import React, { useEffect, useState } from 'react';
import { GiBookCover } from 'react-icons/gi';
import axios from 'axios';
import BlogItem from './blog-item';

const axiosHashnodeGraphQL = axios.create({
  baseURL: 'https://api.hashnode.com',
});

const GET_ARTICLES = `
{
  user(username: "braydoncoyer") {
    name
    publication {
      posts(page: 0) {
        title
        coverImage
        slug
        dateAdded
        totalReactions
        brief
      }
    }
  }
}
`;

const MAX_ARTICLES = 4;

const BlogSection = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    axiosHashnodeGraphQL.post('', { query: GET_ARTICLES }).then((result) => {
      setArticles(result.data.data.user.publication.posts);
      console.log(articles);
    });
  }, []);
  return (
    <div className="mb-10 sm:mb-16 md:mb-40">
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 dark:text-purple-500 mb-3">
        Blog
      </h2>
      <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">
        Writing is my new thing.
      </p>
      {/* <p className="text-secondary">
        Blogging has become my recent obsession - I love sharing what I know
        with people. Feel free to take a look at a few of my recent articles.
      </p> */}
      <div className="space-y-4">
        {/* {articles
          ? articles
              .slice(0, MAX_ARTICLES)
              .map((item, index) => (
                <BlogItem
                  key={index}
                  title={item.title}
                  image={item.coverImage}
                  description={item.brief}
                  date={item.dateAdded}
                  slug={item.slug}
                  reactions={item.totalReactions}
                />
              ))
          : null} */}
        {articles ? (
          <div className="space-y-8">
            <BlogItem
              title={articles[0].title}
              image={articles[0].coverImage}
              description={articles[0].brief}
              slug={articles[0].slug}
              reactions={articles[0].totalReactions}
              publishDate={articles[0].dateAdded}
              featured
            />

            <div className="md:flex md:justify-between md:space-x-8">
              {/* ITEM */}
              <div className="text-left">
                <img
                  src={articles[1].coverImage}
                  alt="blog"
                  className="w-full rounded-2xl"
                />
                <div className="mt-4 md:mt-8 space-y-2">
                  <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
                    {articles[1].title}
                  </p>
                  <p className="text-coolGray-500 dark:text-coolGray-400 text-base sm:text-lg lg:text-base xl:text-lg">
                    {articles[1].brief}
                  </p>
                </div>
                <a
                  href={`https://blog.braydoncoyer.dev/${articles[1].slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-violet-600 hover:text-violet-800 dark:text-violet-500 dark:hover:text-violet-700 mt-2">
                    <p>Read article -></p>
                  </div>
                </a>
              </div>

              {/* ITEM */}
              <div className="mt-8 md:mt-0 text-left">
                <img
                  src={articles[2].coverImage}
                  alt="blog"
                  className="w-full rounded-2xl"
                />
                <div className="mt-4 md:mt-8 space-y-2">
                  <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
                    {articles[2].title}
                  </p>
                  <p className="text-coolGray-500 dark:text-coolGray-400 text-base sm:text-lg lg:text-base xl:text-lg">
                    {articles[2].brief}
                  </p>
                </div>
                <a
                  href={`https://blog.braydoncoyer.dev/${articles[2].slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-violet-600 hover:text-violet-800 dark:text-violet-500 dark:hover:text-violet-700 mt-2">
                    <p>Read article -></p>
                  </div>
                </a>
              </div>

              {/* ITEM */}
              {/* <div className="text-left">
                <img
                  src={articles[3].coverImage}
                  alt="blog"
                  className="w-full rounded-2xl"
                />
                <div className="space-y-2">
                  <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
                    {articles[3].title}
                  </p>
                  <p className="text-coolGray-500 dark:text-coolGray-400 text-base sm:text-lg lg:text-base xl:text-lg">
                    {articles[3].brief}
                  </p>
                </div>
                <a
                  href={`https://blog.braydoncoyer.dev/${articles[3].slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-violet-600 hover:text-violet-800 dark:text-violet-500 dark:hover:text-violet-700 mt-2">
                    <p>Read article -></p>
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        ) : null}
      </div>
      {/* <div className="w-full flex justify-center items-center">
        <div className="cursor-pointer px-4 py-2 rounded text-secondary transition duration-500 ease-in-out md:hover:bg-secondary">
          <a
            href="https://blog.braydoncoyer.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex justify-around items-center space-x-4 font-medium">
              <p>Read More Articles</p>
              <GiBookCover className="text-lg" />
            </div>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default BlogSection;
