const data = require('../data');

function insertIngredients(knex, ingredients, recipe_id) {
  return knex('ingredients')
    .insert(ingredients.map(ingredient => ({
      ...ingredient,
      recipe_id
    })))
}

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(() => knex('recipes').del())
    .then(function () {
      // Inserts seed entries
      return knex('recipes')
        .insert(data.recipes)
        .returning('id')
        .then(ids => {
          // insert ingredients for each recipe
          // data.ingredients is an array of arrays
          const inserts = data.ingredients
            .map((ingredients, i) =>
              insertIngredients(knex, ingredients, ids[i])
            );
          return Promise.all(inserts);
        });
    });
};

