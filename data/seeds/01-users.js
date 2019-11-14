const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(() => {
      return knex("users").insert([
        {
          username: "Danny",
          name: "The Dude",
          password: bcrypt.hashSync("password"),
          department: "IT"
        },
        {
          username: "Ernie",
          name: "CatDude",
          password: bcrypt.hashSync("password"),
          department: "Patrol"
        }
      ]);
    });
};
