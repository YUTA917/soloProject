const { expect, assert } = require("chai");
const config = require("../src/db/knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";
const knex = require("../src/db");

console.log("/api?table=prefectures");

describe("setup", function () {
	describe("setup", () => {
		it("should connect to database", () => {
			knex.raw("select 1 as result").catch(() => {
				assert.fail("unable to connect to database");
			});
		});

		it("has run the initial migration", () => {
			knex("users")
				.select()
				.catch(() => assert.fail("product table is not found."));
		});
	});
});

describe("getAll", () => {
	it("should return an array of prefectures", async () => {
		const prefectures = await fetch(
			"http://localhost:8080/api?table=prefectures"
		);
		const prefecturesArray = JSON.parse(await prefectures.text());

		expect(prefecturesArray).to.be.an.instanceof(Array);
	});

	it("should return 47 items", async () => {
		const prefectures = await fetch(
			"http://localhost:8080/api?table=prefectures"
		);
		const prefecturesArray = JSON.parse(await prefectures.text());
		const preArray = await knex.select().from("prefectures");
		expect(prefecturesArray).to.deep.equal(preArray);
	});
});

describe("getFilter", () => {
	it("should return an array of prefectures", async () => {
		const prefectures = await fetch(
			"http://localhost:8080/api/park?preId=1"
		);
		const prefecturesArray = JSON.parse(await prefectures.text());

		expect(prefecturesArray).to.be.an.instanceof(Array);
	});

	it("should return 47 items", async () => {
		const prefectures = await fetch(
			"http://localhost:8080/api/park?preId=1"
		);
		const prefecturesArray = JSON.parse(await prefectures.text());
		const preArray = await knex("park AS p")
			.select(
				{ park_name: "p.name" },
				{ city_name: "c.name" },
				{ prefecture_id: "c.prefecture_id" },
				{ prefecture_name: "pr.name" }
			)
			.join("cities AS c", "p.city_id", "=", "c.id")
			.join("prefectures AS pr", "c.prefecture_id", "=", "pr.id")
			.where({ prefecture_id: 1 });
		expect(prefecturesArray).to.deep.equal(preArray);
	});
});
