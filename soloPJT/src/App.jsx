import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import DisplayBooks from "./DisplayBooks";
import DisplayParks from "./DisplayParks";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [books, setBooks] = useState([]);
	const [parks, setParks] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/api/books")
			.then((res) => res.text())
			.then((res) => JSON.parse(res))
			.then((res) => setBooks(res));

		fetch("http://localhost:8080/api/park")
			.then((res) => res.text())
			.then((res) => JSON.parse(res))
			.then((res) => setParks(res));
	}, []);

	return (
		<>
			<p>aaa</p>
			{/* <NavBar>
				<PostItem></PostItem>
			</NavBar> */}
			<DisplayBooks books={books}></DisplayBooks>
			<DisplayParks parks={parks}></DisplayParks>
		</>
	);
}

export default App;
