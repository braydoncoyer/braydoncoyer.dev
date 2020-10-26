import React, { useEffect, useState } from 'react';
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
      <p className="text-secondary">
        Blogging is my new thing. Check out some of my most recent articles
        below.
      </p>
      <div className="space-y-4">
        {articles
          ? articles
              .slice(0, MAX_ARTICLES)
              .map((item, index) => (
                <BlogItem
                  key={index}
                  title={item.title}
                  description={item.brief}
                  date={item.dateAdded}
                  slug={item.slug}
                  reactions={item.totalReactions}
                />
              ))
          : null}
      </div>
    </div>
  );
};

export default BlogSection;
