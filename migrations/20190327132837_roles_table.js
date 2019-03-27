// what new changes we need to make.
exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", function(tbl) {
    // primary key, called it and make it auto-increment.
    tbl.increments(); // defaults to a column named id - we could've done "role_id"

    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    });
};

// how to undo the changes made in the up function.
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
