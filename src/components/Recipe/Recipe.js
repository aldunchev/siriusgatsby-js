import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Grid, Paper } from '@material-ui/core';

import RecipeList from '../RecipeList/RecipeList';
import Knife from '../../images/svg/knife.svg';
import Timer from '../../images/svg/timer.svg';
import Serves from '../../images/svg/serves.svg';
import Difficulty from '../../images/svg/difficulty.svg';

const useStyles = makeStyles(theme => ({
  paperSpacings: {
    marginTop: '32px',
    padding: '32px'
  },
  label: {
    marginTop: '16px',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  metaData: {
    textAlign: 'center',
  },
  svg: {
    width: 56,
  }
}));

const Recipe = (props) => {
  const image = getImage(props.relationships.field_media_image.relationships.field_media_image.localFile);
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paperSpacings}>
        <Typography variant="h3" component="h1">{props.title}</Typography>
        <div><span className={classes.label}>Recipe category: </span> { props.relationships.category[0].name }</div>
        <div>
          <span className={classes.label}>Tags: </span>
          { props.relationships.tags.map( tag => ( <span key={ tag.name }>{ tag.name } </span> )) }
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.summary.processed }}></div>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            { image && <GatsbyImage image={image} alt={props.title} /> }
          </Grid>
          <Grid container item xs={6}>
            <Grid xs={6} item className={classes.metaData}>
              <Knife className={classes.svg} />
              <div className={classes.label}>Preparation time: </div>
              { props.preparation_time } minutes
            </Grid>
            <Grid xs={6} item className={classes.metaData}>
              <Timer className={classes.svg} />
              <div className={classes.label}>Cooking time: </div>
              { props.cooking_time }
            </Grid>
            <Grid xs={6} item className={classes.metaData}>
              <Serves className={classes.svg} />
              <div className={classes.label}>Servings: </div>
              { props.number_of_servings }
            </Grid>
            <Grid xs={6} item className={classes.metaData}>
              <Difficulty className={classes.svg}></Difficulty>
              <div className={classes.label}>Difficulty: </div>
              { props.difficulty }
            </Grid>
          </Grid>
        </Grid>

        <div>{ props.ingredients }</div>
        <div dangerouslySetInnerHTML={{ __html: props.instructions.processed }}></div>
      </Paper>

      <RecipeList />
    </>
  )
}

export default Recipe;
