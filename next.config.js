module.exports = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/blog/the-kdb-html-tag',
        destination: '/blog/the-kbd-html-tag',
        permanent: true
      },
      {
        source: '/blog/how-i-define-mvp',
        destination:
          '/blog/setting-yourself-up-for-success-how-i-define-mvp-(minimal-viable-product)',
        permanent: true
      }
    ];
  },
  images: {
    domains: [
      's3.us-west-2.amazonaws.com', // Images coming from Notion
      'via.placeholder.com', // for articles that do not have a cover image
      'images.unsplash.com', // For blog posts that use an external cover image
      'pbs.twimg.com', // Twitter Profile Picture
      'dwgyu36up6iuz.cloudfront.net',
      'cdn.hashnode.com',
      'res.craft.do',
      'res.cloudinary.com'
    ]
  }
};
