import { SocialFollowers } from './types';

export async function getTwitterFollowers(): Promise<SocialFollowers> {
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
  followerCount += data.meta?.result_count;

  while (data.meta?.next_token) {
    response = await fetch(
      `https://api.twitter.com/2/users/2568921814/followers?max_results=1000&pagination_token=${data.meta.next_token}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
        }
      }
    );
    data = await response.json();
    followerCount += data.meta?.result_count;
  }

  return { followers: followerCount };
}
