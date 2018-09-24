const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const knex = require('knex');
const config = require('./knexfile');
const db = knex(config);

const app = express();
app.use(cors());

app.get('/recipes', (req, res) => {
  db('recipes')
    .then(data => {
      const webRecipes = data.map(dbRecipe => {
        const webRecipe = { ...dbRecipe };
        webRecipe.tags = dbRecipe.tags.split('|||');
        webRecipe.directions = dbRecipe.directions.split('|||');
        webRecipe.time = {
          active: dbRecipe.active_time,
          total: dbRecipe.total_time
        };
        webRecipe.ingredients = [];

        return webRecipe;
      });

      res.json(webRecipes);
    });
});

app.get('/', function (req, res) {
  res.send('hello world')
});

app.listen(PORT);