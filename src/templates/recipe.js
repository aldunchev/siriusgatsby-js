import React from 'react';
import { graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout';
import Recipe from '../components/Recipe/Recipe';

const recipeTemplate = (props) => {
  const { nodeRecipe: recipe } = props.data;

  return (
    <Layout>
      <Recipe { ...recipe } />
    </Layout>
  )
}

export default recipeTemplate;

export const query = graphql`
  query recipeTemplate($drupal_id: String!) {
    nodeRecipe(drupal_id: {eq: $drupal_id}) {
      drupal_id,
      title,
      cooking_time: field_cooking_time,
      difficulty: field_difficulty,
      ingredients: field_ingredients,
      preparation_time: field_preparation_time,
      number_of_servings: field_number_of_servings,
      instructions: field_recipe_instruction {
        processed,
      },
      summary: field_summary {
        processed,
      },
      relationships {
        category: field_recipe_category {
          name,
        }
        tags: field_tags {
          name,
        }
        field_media_image {
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 500)
                }
              }
            }
          }
        }
      }
    }
  }
`;
