
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {category: 'misc'},
        {category: 'School'},
        {category: 'Work'},
        {category: 'Programming'},
        {category: 'Tech'},
        {category: 'Videos'},
        {category: 'Movies/TV'},
        {category: 'Music'},
        {category: 'Reference'},
        {category: 'Fashion'},
        {category: 'Cooking'},
        {category: 'Cars'},
        {category: 'Arts/Crafts'},
      ]);
    });
};
