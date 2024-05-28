const express = require("express");
const db = require("./db");

const app = express();
const port = process.env.PORT || 8080;

app.use("/", express.static("/", express.static("dist")));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.get("/api", async (req, res) => {
	let data = await db.select().from(req.query.table);
	res.status(200)
		.set({ "Access-Control-Allow-Origin": "http://localhost:5173" })
		.json(data)
		.end();
});

app.get("/api/cities", async (req, res) => {
	let data = await db
		.select()
		.from("cities")
		.where({ prefecture_id: req.query.preId });
	res.status(200)
		.set({ "Access-Control-Allow-Origin": "http://localhost:5173" })
		.json(data)
		.end();
});

app.get("/api/park", async (req, res) => {
	console.log(req.query.preId);
	let data;
	if (req.query.preId === undefined) {
		data = await db("park AS p")
			.select(
				{ park_name: "p.name" },
				{ city_name: "c.name" },
				{ prefecture_id: "c.prefecture_id" },
				{ prefecture_name: "pr.name" }
			)
			.join("cities AS c", "p.city_id", "=", "c.id")
			.join("prefectures AS pr", "c.prefecture_id", "=", "pr.id");
		console.log(data);
	} else {
		data = await db("park AS p")
			.select(
				{ park_name: "p.name" },
				{ city_name: "c.name" },
				{ prefecture_id: "c.prefecture_id" },
				{ prefecture_name: "pr.name" }
			)
			.join("cities AS c", "p.city_id", "=", "c.id")
			.join("prefectures AS pr", "c.prefecture_id", "=", "pr.id")
			.where({ prefecture_id: req.query.preId });
	}
	res.status(200)
		.set({ "Access-Control-Allow-Origin": "http://localhost:5173" })
		.json(data)
		.end();
});

app.post("/api/park", async (req, res) => {
	console.log(req.body);
	if (req.body.park === undefined || req.body.cityId === undefined) {
		res.status(406).end();
	} else {
		await db("park").insert({
			name: req.body.park,
			city_id: req.body.cityId,
		});
		res.status(200)
			.set({ "Access-Control-Allow-Origin": "http://localhost:5173" })
			.json(req.body)
			.end();
	}
});

app.listen(port, () => {
	console.log(`listen port is ${port}`);
});
