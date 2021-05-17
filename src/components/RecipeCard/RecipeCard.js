import React from 'react';
import { Link } from 'gatsby';
import { Card, CardContent } from '@material-ui/core';

const RecipeCard = (props) => {
  // console.log(props);
  // const RecipeLink = props => <Link to={ props.path } { ...props }>Read more</Link>;

  return (
    <Card>
      <CardContent>
        <div>{ props.title }</div>
        <Link to={props.path}>Read more about {props.title}</Link>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
