import React, { useState } from "react";
import { red } from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import Card from './Card'

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients, calories } = recipe.recipe;

  return (
    <>
       <Grid item xs={3}>
        <Card label={label} image={image} url={url} ingredients={ingredients} calories={calories} /> 
        </Grid>
    </>
  );
};

export default Recipe;