import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import DisplayBooks from "./DisplayBooks";
import DisplayParks from "./DisplayParks";
import NavBar from "./NavBar";
import NewAddButton from "./NewAddButton";

import "./App.css";
import DisplayPark from "./DisplayPark";

function App() {
	// const [display, setDisplay] = useState(true);
	const [books, setBooks] = useState([]);
	const [parks, setParks] = useState([]);
	const [displayState, setDisplayState] = useState(true);

	useEffect(() => {
		fetch("/api/park")
			.then((res) => res.text())
			.then((res) => JSON.parse(res))
			.then((res) => {
				setParks(res);
				console.log(res);
			});
	}, [displayState]);

	useEffect(() => {
		fetch("/api?table=picture_books")
			.then((res) => res.text())
			.then((res) => JSON.parse(res))
			.then((res) => setBooks(res));
	}, []);

	return (
		<>
			<NavBar>{/* <PostItem></PostItem> */}</NavBar>

			<NewAddButton
				displayState={displayState}
				setDisplayState={setDisplayState}
			></NewAddButton>
			{/* <DisplayBooks books={books}></DisplayBooks> */}
			<DisplayPark parks={parks}></DisplayPark>
			{/* <DisplayParks parks={parks}></DisplayParks> */}
		</>
	);
}

export default App;
