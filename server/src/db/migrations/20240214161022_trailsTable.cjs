/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("trails", table => {
        table.bigIncrements("id");
        table.bigInteger("stateId").notNullable().index().unsigned().references("states.id");
        table.string("name").notNullable();
        table.integer("length").notNullable().unsigned();
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    })
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
    return knex.schema.dropTableIfExists("trails");
};
