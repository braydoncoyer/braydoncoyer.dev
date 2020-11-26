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
    <div className="mb-10 sm:mb-16 md:mb-20">
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 mb-3">
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
          <BlogItem
            title={articles[1].title}
            image={articles[1].coverImage}
            description={articles[1].brief}
            slug={articles[1].slug}
            reactions={articles[1].totalReactions}
            publishDate={articles[1].dateAdded}
            featured
          />
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
