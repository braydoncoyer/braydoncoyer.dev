import type { NextApiRequest, NextApiResponse } from 'next';

import { SupabaseAdmin } from '@/lib/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetch(
    `https://plausible.io/api/v1/stats/realtime/visitors?site_id=braydoncoyer.dev`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.PLAUSIBLE_API_TOKEN}`
      }
    }
  );

  const { data } = await SupabaseAdmin.from('reactions').select(
    'like_count, love_count, clap_count, party_count'
  );

  if (!result.ok) {
    return res
      .status(500)
      .json({ error: 'Error retrieving realtime visitors' });
  }

  let totalReactions = data.reduce(
    (acum, item) =>
      acum +
      item.like_count +
      item.love_count +
      item.clap_count +
      item.party_count,
    0
  );

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({ totalReactions });
}
