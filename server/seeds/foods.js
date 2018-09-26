const fs = require('fs');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      const text = fs.readFileSync('./nutrition.json');
      const data = JSON.parse(text);
      // Inserts seed entries
      return knex('foods').insert(Object.values(data));
    });
};
