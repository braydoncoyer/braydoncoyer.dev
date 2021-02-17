export const getGitHubEditURL = (slug) =>
  `https://github.com/braydoncoyer/braydoncoyer.dev/edit/main/data/blog${slug.slice(
    0,
    -1
  )}.mdx`;
