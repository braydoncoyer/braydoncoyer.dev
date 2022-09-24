import { convertToArticleList, getPublishedArticles } from '@/lib/notion';

import slugify from 'slugify';

export default async function handler(req, res) {
  // const resp = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  // const articles = await convertToArticleList(resp);

  // const routes = articles.articles.map(
  //   (post) => `/blog/${slugify(post.title).toLocaleLowerCase()}`
  // );
  const localRoutes = [
    '/index',
    // '/blog',
    '/newsletter',
    '/about',
    '/projects',
    '/toolbox'
  ];

  //   const pages = routes.concat(localRoutes);
  const pages = [...localRoutes];

  const urlSet = pages
    .map((page) => {
      const route = page === '/index' ? '' : page;
      // Build url portion of sitemap.xml
      return `<url><loc>https://braydoncoyer.dev${route}</loc><changefreq>daily</changefreq>
<priority>0.7</priority></url>`;
    })
    .join('');

  // Add urlSet to entire sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${urlSet}</urlset>`;

  // set response content header to xml
  res.setHeader('Content-Type', 'text/xml');
  // write the sitemap
  res.write(sitemap);
  res.end();
}
