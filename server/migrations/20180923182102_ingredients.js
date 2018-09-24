
exports.up = function (knex, Promise) {
  return knex.schema.createTable('ingredients', function (table) {
    table.increments();
    table.integer('recipe_id').unsigned();
    table.foreign('recipe_id').references('id').inTable('recipes');
    table.string('name');
    table.string('qty');
    table.string('note');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
