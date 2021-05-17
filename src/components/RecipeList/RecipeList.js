import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const RecipeList = () => (
  <StaticQuery
    query={graphql`
      query {
        allNodeRecipe(limit: 3) {
          edges {
            node {
              drupal_id,
              path {
                alias
              }
              title
            }
          }
        }
      }
    `}

    render={data => <RecipeListComponent recipes={data.allNodeRecipe.edges} />}
  />
);

const RecipeListComponent = ({recipes}) => (
  <ul>
    {
      recipes.map(({ node: recipe }) => (
        <li key={recipe.drupal_id}>
          <Link to={recipe.path.alias}>
            { recipe.title }
          </Link>
        </li>
      ))
    }
  </ul>
);

export default RecipeList;


