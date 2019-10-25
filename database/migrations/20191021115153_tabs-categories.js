
exports.up = function (knex) {
    return knex.schema
        .createTable('categories', cats => {
            cats.increments()
            cats.string('category')
                .notNullable
        })
        .createTable('tabs', tabs => {
            tabs.increments()
            tabs.string('url')
                .notNullable()
            tabs.string('name')
            tabs.string('notes')
            tabs.integer('user_id')
                .notNullable()
                .references('id')
                .inTable('users')
            tabs.integer('category_id')
                .defaultsTo(1)
                .notNullable()
                .references('id')
                .inTable('categories')
        })
};

exports.down = function (knex) {
    knex.string.dropTable('tabs')
        .dropTable('categories')
};
