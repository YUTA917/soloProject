import React from "react";
import { Box, ThemeProvider } from "@mui/material";

function DisplayParks(props) {
	const { parks } = props;
	return parks
		.map((ele, index) => (
			<ThemeProvider
				theme={{
					palette: {
						primary: {
							main: "#007FFF",
							dark: "#0066CC",
						},
					},
				}}
			>
				<Box
					component="section"
					key={index}
					sx={{
						width: "80%",
						height: "auto",
						margin: 5,
						borderRadius: 1,
						bgcolor: "primary.main",
						// '&:hover': {
						//   bgcolor: 'primary.dark'
					}}
					style={{ color: "black", backgroundColor: "#9acd32" }}
				>
					<p className="park" key={index + 100}>
						{ele.park_name}
					</p>
					<p className="prefecture" key={index + 200}>
						{ele.prefecture_name}
						{ele.city_name}
					</p>
				</Box>
			</ThemeProvider>
		))
		.reverse();
}

export default DisplayParks;
