exports.up = async function (knex) {
  await knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.string('username').notNullable().unique();
    tbl.string('email').notNullable().unique();
    tbl.string('password').notNullable();
    tbl.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users');
};
