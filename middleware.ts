import { convertToArticleList, getPublishedArticles } from './lib/notion';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import siteMetadata from './data/siteMetadata';
import slugify from 'slugify';

export async function middleware(request: NextRequest) {
  const resp = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  const articles = convertToArticleList(resp);

  const redirectUrl = `${siteMetadata.siteUrl}/blog/${slugify(
    articles.articles[0].title
  ).toLocaleLowerCase()}`;

  return NextResponse.redirect(new URL(redirectUrl, request.url));
}

export const config = {
  matcher: '/blog/latest'
};
