const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const knex = require('knex');
const config = require('./knexfile');
const db = knex(config);

const app = express();
app.use(cors());
app.use(bodyParser.json())

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

// write all the ingredients to the database with the recipe_id
// the recipe_id was returned after the recipe was inserted into the database
function saveIngredients(ingredients, recipeId) {
  const rows = ingredients.map(ingredient => ({
    ...ingredient,
    recipe_id: recipeId
  }));

  return db.batchInsert('ingredients', rows)
    .then(() => recipeId);
}

app.get('/recipes', (req, res) => {
  db('recipes')
    .then(data => data.map(dbRecipeToWebRecipe))
    .then(recipes => Promise.all(recipes.map(loadIngredients)))
    .then(recipes => {
      res.json(recipes);
    });
});

app.post('/recipes', (req, res) => {
  // tags and directions are strings in the database, but they are arrays outside.
  // use .join to turn an array to a string and .split to turn a string to an array

  db('recipes').insert({
    title: req.body.title,
    image: req.body.image,
    tags: req.body.tags.join('|||'),
    directions: req.body.directions.join('|||'),
    notes: req.body.notes,
    favorite: Boolean(req.body.favorite),
    active_time: req.body.time.active[0] * 60 + req.body.time.active[1],
    total_time: req.body.time.total[0] * 60 + req.body.time.total[1],
  })
    .returning('id')
    .then(id => saveIngredients(req.body.ingredients, id[0]))
    .then(id =>
      res.json({
        id: id,
        ...req.body
      })
    );
});

app.get('/', function (req, res) {
  res.send('hello world')
});

app.listen(PORT);