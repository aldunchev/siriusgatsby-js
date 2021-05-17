import React from 'react';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Navigation(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
        >
          {props.siteTitle}
        </Typography>
        <div>
            <Button
              component={Link}
              to="/"
              color="inherit"
            >
              Home
            </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
