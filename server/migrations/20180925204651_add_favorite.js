
exports.up = function (knex, Promise) {
  return knex.schema.table('recipes', table => {
    table.boolean('favorite');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('recipes', table => {
    table.dropColumn('favorite');
  })
};
