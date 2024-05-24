import React from "react";

function Display(props) {
	const { books } = props;
	// console.log(book.text);
	return (
		<div>
			<ul>
				{books.map((ele, index) => (
					<li key={index}>{ele.book_name}</li>
				))}
			</ul>
		</div>
	);
}

export default Display;
