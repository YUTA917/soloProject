import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import image1 from "./image/鶴舞公園.jpeg";
import image2 from "./image/明石公園.jpeg";
import image3 from "./image/安満遺跡公園.jpeg";
import { reverse } from "lodash";

export default function DisplayPark(props) {
	const { parks } = props;
	console.log(parks);

	function getImageUrl(name) {
		return new URL(`./dir/${name}.jpeg`, import.meta.url).href;
	}

	// function getImage(name) {
	// 	importsrc = require(`./asset/${name}.jpeg`);

	// 	return (
	// 		<CardMedia
	// 			component="img"
	// 			src={src.default}
	// 			alt={`${name}`}
	// 			height="140"
	// 		/>
	// 	);
	// }

	return parks
		.map((ele, index) => (
			<Grid container alignItems="center" justify="center">
				<Grid item xs={15}>
					<Card
						sx={{
							maxWidth: 345,
							width: "80%",
							height: "auto",
							margin: 5,
							borderRadius: 5,
						}}
						style={{
							margin: "auto",
						}}
					>
						<CardMedia
							component="img"
							alt={ele.park_name}
							height="140"
							// src={dummy}
							// image={`./public/image/${ele.park_name}.jpeg`}
							image={image1}
						/>
						{/* {getImage(ele.park_name)} */}

						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
								{ele.park_name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{ele.prefecture_name}
								{ele.city_name}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		))
		.reverse();
}
