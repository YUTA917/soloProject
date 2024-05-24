/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable("users", function (table) {
			table.increments("id").primary();
			table.text("name");
			table.timestamps();
		})
		.createTable("age_of_children", function (table) {
			table.increments("id").primary();
			table.text("age");
			table.timestamps();
		})
		.createTable("cities", function (table) {
			table.increments("id").primary();
			table.text("name");
			table.integer("prefecture_id");
			table.foreign("prefecture_id").references("prefectures");
			table.timestamps();
		})
		.createTable("prefectures", function (table) {
			table.increments("id").primary();
			table.text("name");
			table.timestamps();
		})
		.createTable("picture_books", function (table) {
			table.increments("id").primary();
			table.text("book_name");
			table.integer("age_of_children_id");
			table.foreign("age_of_children_id").references("age_of_children");
			table.integer("user_id");
			table.foreign("user_id").references("users");
			table.timestamps();
		})
		.createTable("park", function (table) {
			table.increments("id").primary();
			table.text("name");
			table.integer("city_id");
			table.foreign("city_id").references("cities");
			table.integer("user_id");
			table.foreign("user_id").references("users");
			table.timestamps();
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTable("users")
		.dropTable("age_of_children")
		.dropTable("cities")
		.dropTable("prefectures")
		.dropTable("picture_books")
		.dropTable("park");
};
