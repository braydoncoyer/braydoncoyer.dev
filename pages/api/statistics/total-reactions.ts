import type { NextApiRequest, NextApiResponse } from 'next';

import { SupabaseAdmin } from '@/lib/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let likeCount = 0,
    loveCount = 0,
    clapCount = 0,
    partyCount = 0,
    totalReactions = 0;

  const { data } = await SupabaseAdmin.from('reactions').select(
    'like_count, love_count, clap_count, party_count'
  );

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  data.forEach((item) => {
    likeCount += item.like_count;
    loveCount += item.love_count;
    clapCount += item.clap_count;
    partyCount += item.party_count;
    totalReactions +=
      item.like_count + item.love_count + item.clap_count + item.party_count;
  });

  return res.status(200).json({
    likeCount,
    loveCount,
    clapCount,
    partyCount,
    totalReactions
  });
}
