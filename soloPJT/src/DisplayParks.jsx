import React from "react";

function DisplayParks(props) {
	const { parks } = props;
	// console.log(book.text);
	return (
		<div>
			<ul>
				{parks.map((ele, index) => (
					<li key={index}>{ele.name}</li>
				))}
			</ul>
		</div>
	);
}

export default DisplayParks;
