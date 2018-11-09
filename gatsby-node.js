const path = require('path');
const { graphql } = require('gatsby');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { errors, data } = await graphql(`
  {
    undercovers: allFile(filter: { relativeDirectory: { eq: "undercover" }}) {
      edges {
        node {
          id
          publicURL
        }
      }
    }
  }`);

  if (errors) throw `Error on query allUndercovers in createPages`;

  data.undercovers.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve('./src/templates/cover.js'),
      context: {
        id: node.id,
      }
    })
  })
};
