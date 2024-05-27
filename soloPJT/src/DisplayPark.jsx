import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DisplayPark(props) {
	const { parks } = props;

	function getImageUrl(name) {
		return new URL(`./dir/${name}.jpeg`, import.meta.url).href;
	}

	return parks.map((ele, index) => (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt={ele.park_name}
				height="140"
				// image={`./public/image/${ele.park_name}.jpeg`}
				image={getImageUrl(ele.park_name)}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
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
	));
}
