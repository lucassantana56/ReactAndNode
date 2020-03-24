
exports.up = function(knex) {
  return knex.schema
    .createTable('ong', function (table) {
       table.string('id').primary();
       table.string('name').notNullable();
       table.string('email').notNullable();
       table.int('whatsapp').notNullable();
       table.string('city').notNullable();
       table.string('uf', 2).notNullable();
    })
};

exports.down = function(knex) {
 return knex.schema.dropTable('ong');
};
