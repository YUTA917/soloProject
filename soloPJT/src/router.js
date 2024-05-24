const express = require("express");
const db = require("./db");

const app = express();
const port = 8080;

// console.log(db);

app.get("/api/books", async (req, res) => {
	let aa = await db.select().from("picture_books");
	res.status(200)
		.set({ "Access-Control-Allow-Origin": "http://localhost:5173" })
		.json(aa)
		.end();
});

app.get("/api/park", async (req, res) => {
	let aa = await db.select().from("park");
	res.status(200)
		.set({ "Access-Control-Allow-Origin": "http://localhost:5173" })
		.json(aa)
		.end();
});

app.post("/api/park"), async (req, res) => {};

app.listen(port, () => {
	console.log(`listen port is ${port}`);
});
