const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const knex = require('knex');
const config = require('./knexfile');
const db = knex(config);

const app = express();
app.use(cors());

// convert dbrecipe to the recipe is goint to display on the webpage
function dbRecipeToWebRecipe(dbRecipe) {
  const webRecipe = { ...dbRecipe };
  webRecipe.tags = dbRecipe.tags.split('|||');
  webRecipe.directions = dbRecipe.directions.split('|||');
  webRecipe.time = {
    active: dbRecipe.active_time,
    total: dbRecipe.total_time
  };

  return webRecipe;
}

// load the ingredients for the recipe from the database
function loadIngredients(recipe) {
  return db('ingredients')
    .where({
      recipe_id: recipe.id
    })
    .then(ingredients => {
      recipe.ingredients = ingredients
      return recipe;
    })
}

app.get('/recipes', (req, res) => {
  db('recipes')
    .then(data => data.map(dbRecipeToWebRecipe))
    .then(recipes => Promise.all(recipes.map(loadIngredients)))
    .then(recipes => {
      res.json(recipes);
    });
});

app.get('/', function (req, res) {
  res.send('hello world')
});

app.listen(PORT);