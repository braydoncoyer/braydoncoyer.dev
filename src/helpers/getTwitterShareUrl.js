import { getArticlePublicURL } from '~helpers/getArticlePublicUrl';

export const getTwitterShareUrl = (slug) =>
  `https://twitter.com/search?q=${encodeURIComponent(
    getArticlePublicURL(slug)
  )}`;
