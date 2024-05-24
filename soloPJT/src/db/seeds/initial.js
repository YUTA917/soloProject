/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("users").insert([
		{ id: 1, name: "cat" },
		{ id: 2, name: "dog" },
		{ id: 3, name: "bird" },
	]);
	await knex("age_of_children").del();
	await knex("age_of_children").insert([
		{ id: 1, age: "0歳~" },
		{ id: 2, age: "2歳~" },
		{ id: 3, age: "3歳~" },
		{ id: 4, age: "4歳~" },
		{ id: 5, age: "5.6歳~" },
		{ id: 6, age: "小学校低学年~" },
		{ id: 7, age: "小学校中学年~" },
		{ id: 8, age: "小学校高学年~" },
		{ id: 9, age: "大人向け" },
	]);
	await knex("cities").del();
	await knex("cities").insert([
		{ id: 1, name: "名古屋", prefecture_id: 1 },
		{ id: 2, name: "碧南", prefecture_id: 1 },
		{ id: 3, name: "高槻", prefecture_id: 2 },
	]);
	await knex("park").del();
	await knex("park").insert([
		{ id: 1, user_id: 1, city_id: 1, name: "舞鶴公園" },
		{ id: 2, user_id: 3, city_id: 2, name: "臨海公園" },
		{ id: 3, user_id: 3, city_id: 2, name: "明石公園" },
	]);
	await knex("picture_books").del();
	await knex("picture_books").insert([
		{
			id: 1,
			book_name: "ねないこだれだ",
			age_of_children_id: 2,
			user_id: 1,
		},
		{
			id: 2,
			book_name: "ももたろう",
			age_of_children_id: 5,
			user_id: 1,
		},
		{
			id: 3,
			book_name: "くまのバディントン",
			age_of_children_id: 7,
			user_id: 2,
		},
	]);
	await knex("prefectures").del();
	await knex("prefectures").insert([
		{ id: 1, name: "愛知" },
		{ id: 2, name: "大阪" },
		{ id: 3, name: "東京" },
	]);
};
