
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tabs').del()
    .then(function () {
      // Inserts seed entries
      return knex('tabs').insert([
        {name: 'google search', url: 'https://google.com/', category_id: 1, notes: "find stuff", user_id: 1},
        {name: 'git', url: 'https://github.com/', category_id: 4, notes: "code stuff", user_id: 1},     
      ]);
    });
};
