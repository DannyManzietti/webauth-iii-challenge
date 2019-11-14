exports.seed = function(knex) {
  return knex("restricted")
    .truncate()
    .then(() => {
      return knex("restricted").insert([
        { secret_info: "Whats going on below?!" },
        { secret_info: "Not much it turns out!" }
      ]);
    });
};
