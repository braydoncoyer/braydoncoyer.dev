import type { NextApiRequest, NextApiResponse } from 'next';

import { getPublishedArticles } from '@/lib/notion';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({ totalArticles: data.length });
}
