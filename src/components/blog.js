import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

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
        brief
      }
    }
  }
}
`;

const MAX_ARTICLES = 3;

const BlogSection = () => {
  const [articles, setArticles] = useState(null);

  const getArticleDate = (day) => dayjs(day);

  useEffect(() => {
    axiosHashnodeGraphQL.post('', { query: GET_ARTICLES }).then((result) => {
      setArticles(
        result.data.data.user.publication.posts.slice(0, MAX_ARTICLES)
      );
    });
  }, []);
  return (
    // Not changing below margin to match other sections because of svg pattern spacing
    <section className="mb-16">
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 dark:text-purple-500 mb-3">
        Blog
      </h2>
      <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
        Some recent posts.
      </p>
      {articles ? (
        <div>
          <div className="grid gap-16 md:gap-10">
            {/* <div>
              <img
                className="rounded-3xl select-none"
                src={articles[0].coverImage}
                alt="article preview"
              />
            </div> */}

            <div className="-mt-10 md:mt-0">
              <p className="text-coolGray-500 dark:text-coolGray-400 prose leading-6 font-medium">
                <time
                  dateTime={getArticleDate(articles[0].dateAdded).format(
                    'MMM DD, YYYY'
                  )}
                >
                  {getArticleDate(articles[0].dateAdded).format('MMM DD, YYYY')}
                </time>
              </p>
              <a
                href={`https://blog.braydoncoyer.dev/${articles[0].slug}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block"
              >
                <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
                  {articles[0].title}
                </p>
                <p className="mt-3 text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-6">
                  {articles[0].brief}
                </p>
              </a>
              <div className="mt-3">
                <a
                  href={`https://blog.braydoncoyer.dev/${articles[0].slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-600 hover:text-purple-700 dark:text-purple-500 dark:hover:text-purple-600 prose leading-6 "
                >
                  Read full story
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mt-1 pt-6 grid gap-16">
              {articles.slice(1, 4).map((article, id) => (
                <div key={id}>
                  <p className="text-coolGray-500 dark:text-coolGray-400 prose leading-6 font-medium">
                    <time
                      dateTime={getArticleDate(article.dateAdded).format(
                        'MMM DD, YYYY'
                      )}
                    >
                      {getArticleDate(article.dateAdded).format('MMM DD, YYYY')}
                    </time>
                  </p>
                  <a
                    href={`https://blog.braydoncoyer.dev/${article.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block"
                  >
                    <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
                      {article.title}
                    </p>
                    <p className="mt-3 text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-6">
                      {article.brief}
                    </p>
                  </a>
                  <div className="mt-3">
                    <a
                      href={`https://blog.braydoncoyer.dev/${article.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-500 dark:hover:text-purple-600 prose leading-6 font-medium"
                    >
                      Read full story
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default BlogSection;
