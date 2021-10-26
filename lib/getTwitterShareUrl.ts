import { getArticlePublicUrl } from './getArticlePublicUrl';

export function getTwitterShareUrl(slug: string) {
  return `https://twitter.com/search?q=${encodeURIComponent(
    getArticlePublicUrl(slug)
  )}`;
}
