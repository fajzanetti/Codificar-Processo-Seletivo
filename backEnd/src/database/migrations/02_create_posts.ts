import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('posts', table => {
    table.uuid('id').primary();
    table.string('text', 280).notNullable();
    table.integer('like');
    table.integer('unlike');
    table.timestamp('createdAt').defaultTo(Date());
    table.timestamp('updatedAt').defaultTo(Date());

    table.string('author').notNullable();
    table.string('authorId').notNullable().references('id').inTable('users');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('posts');
}
