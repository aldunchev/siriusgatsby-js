/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise( (resolve, reject) => {
    graphql(`
      {
        allNodeRecipe {
          edges {
            node {
              drupal_id,
              title,
              path {
                alias
              }
            }
          }
        }
      }
    `).then( result => {
      result.data.allNodeRecipe.edges.forEach( ({ node }) => {
        let path_alias;

        if (node.path.alias == null) {
          path_alias = `recipe/${node.drupal_id}`;
        }
        else {
          path_alias = node.path.alias;
        }

        createPage({
          path: path_alias,
          component: path.resolve('./src/templates/recipe.js'),
          context: {
            drupal_id: node.drupal_id
          }
        });
      });
      resolve();
    });
  });
}
