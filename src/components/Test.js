import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
        <Card/> 
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
      </Grid>
    </div>
  );
}
