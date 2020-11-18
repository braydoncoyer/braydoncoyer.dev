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
    <div className="space-y-4">
      <h1 className="text-4xl font-semibold text-primary md:text-4xl">
        <mark>Blog</mark>
      </h1>
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
            title={articles[0].title}
            image={articles[0].coverImage}
            description={articles[0].brief}
            slug={articles[0].slug}
            reactions={articles[0].totalReactions}
            featured
          />
        ) : null}
      </div>
      <div className="w-full flex justify-center items-center">
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
      </div>
    </div>
  );
};

export default BlogSection;
