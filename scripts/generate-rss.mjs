import { convertToArticleList, getPublishedArticles } from '../lib/notion';

import RSS from 'rss';
import slugify from 'slugify';
import { writeFileSync } from 'fs';

async function generate() {
  const resp = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  const articles = await convertToArticleList(resp);

  const feed = new RSS({
    title: 'Braydon Coyer',
    site_url: 'https://braydoncoyer.dev',
    feed_url: 'https://braydoncoyer.dev/rss.xml'
  });

  articles.articles.map((post) => {
    feed.item({
      title: post.title,
      url: `https://braydoncoyer.dev/blog/${slugify(
        post.title
      ).toLocaleLowerCase()}`,
      date: post.publishedDate,
      description: post.summary
    });
  });

  writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}

generate();
