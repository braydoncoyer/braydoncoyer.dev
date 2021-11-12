import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParams = `followers`;
  let followerCount = 0;
  let response = await fetch(
    `https://api.twitter.com/2/users/2568921814/followers?max_results=1000`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
      }
    }
  );

  let data = await response.json();

  while (data.meta?.next_token) {
    console.log('INSIDE LOOP');
    followerCount += data.meta?.result_count;
    response = await fetch(
      `https://api.twitter.com/2/users/2568921814/followers?max_results=1000&pagination_token=${data.meta.next_token}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
        }
      }
    );
    data = await response.json();
  }

  console.log(followerCount);

  return res.status(200).json({ followerCount });
}
