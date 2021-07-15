const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        '~layouts': path.resolve(__dirname, 'src/layouts'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~helpers': path.resolve(__dirname, 'src/helpers'),
        '~styles': path.resolve(__dirname, 'src/styles'),
        '~lib': path.resolve(__dirname, 'src/lib'),
        '~assets': path.resolve(__dirname, 'src/assets'),
        '~data': path.resolve(__dirname, 'data'),
      },
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/layouts/blogLayout.js');

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___publishedAt], order: DESC }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) throw result.errors;
    const posts = result.data.allMdx.nodes;

    posts.forEach((post, index) => {
      // console.table(`post is ${post}`);
      console.table(index === posts.length - 1 ? null : posts[index + 1]);
      createPage({
        path: `blog${post.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
