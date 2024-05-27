import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PrefectureSelect(props) {
	const { prefectureId, setPrefectureId } = props;
	const [prefecture, setPrefecture] = useState([]);

	useEffect(() => {
		fetch("/api?table=prefectures")
			.then((res) => res.text())
			.then((res) => JSON.parse(res))
			.then((res) => setPrefecture(res));
	}, []);

	const handleChange = (event) => {
		setPrefectureId(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">都道府県</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={prefectureId}
					label="都道府県"
					onChange={handleChange}
				>
					{prefecture.map((ele, index) => (
						<MenuItem key={index} value={ele.id}>
							{ele.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
