import { parse } from 'node-html-parser';

export const getLinksMeta = async (urls) => {
  if (urls.length === 0) return [];

  let linksMeta = [];

  for (const url of urls) {
    const response = await fetch(url);
    const body = await response.text();

    const rootElement = parse(body);
    const metaTags = rootElement.getElementsByTagName('meta');

    const imgUrl = metaTags
      .filter(
        (meta) =>
          meta.attributes?.name?.toLowerCase() === 'twitter:image' ||
          meta.attributes?.property?.toLowerCase() === 'og:image'
      )
      .map((meta) => meta.attributes.content)[0];

    const title = metaTags
      .filter(
        (meta) =>
          meta.attributes?.name?.toLowerCase() === 'twitter:title' ||
          meta.attributes?.property?.toLowerCase() === 'og:title'
      )
      .map((meta) => meta.attributes.content)[0];

    linksMeta.push({ href: url, title, imgUrl });
  }

  return linksMeta;
};
