// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: 'postgres://localhost/plan_my_meal',
  migrations: {
    tableName: 'knex_migrations'
  }
};
