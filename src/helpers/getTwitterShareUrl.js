import { getArticlePublicURL } from './getArticlePublicUrl';

export const getTwitterShareUrl = (slug) =>
  `https://twitter.com/search?q=${encodeURIComponent(
    getArticlePublicURL(slug)
  )}`;
