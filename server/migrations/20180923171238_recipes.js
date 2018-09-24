
exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments();
    table.string('title');
    table.string('image');
    table.string('tags');
    table.text('directions');
    table.text('notes');
    table.integer('active_time');
    table.integer('total_time');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('recipes');
};
