exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl
        .string("name", 128)
        .notNullable()
        .defaultTo("");
      tbl
        .string("password", 18)
        .notNullable()
        .defaultTo("");
      tbl
        .string("department", 128)
        .notNullable()
        .defaultTo("");
    })
    .createTable("restricted", tbl => {
      tbl.increments();
      tbl
        .string("secret_info", 130)
        .notNullable()
        .defaultTo("Secret!!");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user").dropTableIfExists("restricted");
};
