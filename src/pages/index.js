import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Grid } from '@material-ui/core';
import RecipeCard from '../components/RecipeCard/RecipeCard';

const IndexPage = (props) => {
  // console.log(props);
  const recipes = props.data.recipes.edges;

  return (
    <Layout>
      <Grid container spacing={2}>
        {
          recipes.map(({node: recipe}) => (
            <Grid item key={recipe.drupal_id} xs={6} md={4}>
              {<RecipeCard title={ recipe.title } path={ recipe.path.alias }/>}
              {/*{ recipe.path.alias }*/}
            </Grid>
          ))
        }
      </Grid>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    recipes: allNodeRecipe(sort: {fields: [changed], order: DESC}) {
      edges {
        node {
          title
          drupal_id
          path {
            alias
          }
          relationships {
            field_tags {
              name
            }
            field_recipe_category {
              name
            }
          }
          field_summary {
            processed
          }
        }
      }
    }
  }
`;
