import { SocialFollowers } from './types';

export async function getGitHubFollowers(): Promise<SocialFollowers> {
  const userResponse = await fetch('https://api.github.com/users/braydoncoyer');

  const user = await userResponse.json();

  return { followers: user.followers };
}
