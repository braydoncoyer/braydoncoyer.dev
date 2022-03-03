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
      // portfolio archives
      {
        source: '/archives/v1',
        destination: 'https://wizardly-payne-b3707b.netlify.app/',
        permanent: true
      }
    ];
  },
  images: {
    domains: [
      's3.us-west-2.amazonaws.com', // Images coming from Notion
      'via.placeholder.com', // for articles that do not have a cover image
      'images.unsplash.com', // For blog posts that use an external cover ima ge
      'pbs.twimg.com', // Twitter Profile Picture
      'dwgyu36up6iuz.cloudfront.net',
      'cdn.hashnode.com',
      'res.craft.do',
      'res.cloudinary.com'
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build.
    // With this you ship way less javascript to the client I mean almost half.
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
        'react/jsx-runtime': 'preact/jsx-runtime'
      });
    }

    return config;
  }
};
