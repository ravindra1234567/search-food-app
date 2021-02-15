import './App.css';
import { FormControlLabel, Grid, CssBaseline, Button, Container, Avatar, TextField, makeStyles } from '@material-ui/core';
import { LockOutlinedIcon } from '@material-ui/lab'
import Autocomplete from "@material-ui/lab";
import axios, * as others from 'axios';
import Recipe from "./components/Recipe";
import { v4 as uuidv4 } from "uuidv4"
import Test from './components/Test'
import Card from './components/Card'

import React, { useState } from 'react';

function App() {


  

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "03c3de00";
  const APP_KEY = "3b450622e3043ebf193c1485b413ac72";


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    const result = await axios.get(url);
    if (!result)
      console.log("Data not found");
    console.log(result)
    setRecipes(result.data.hits);
    setQuery("");
    // setAlert("");

  }
  const onSubmit = eve => {
    eve.preventDefault();
    getData();
  }

  const onChange = e => setQuery(e.target.value);

  return (
    <div>


        <CssBaseline />
        <div className={classes.paper}>
        <Container component="main" maxWidth="xs">
          <h1>Food Menu</h1>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="dish"
              label="Enter Dish Name"
              name="dish"
              autoComplete="email"
              autoFocus
              value={query}
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Search
          </Button>
          </form>
          </Container>
         
          {console.log(query)}

          <div>
            {
              

              <div >
                {
                  
                  <div className={classes.root}>
                    <Grid container spacing={2}>
                     { recipes.map((recipe) => <Recipe key={uuidv4} recipe={recipe} />)}
                    </Grid>
                  </div>
                }
              </div>

            }
          </div>

        </div>
        

     
    </div>
  );
}

export default App;
