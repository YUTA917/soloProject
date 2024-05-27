import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CitySelect(props) {
	const { prefectureId, cityId, setCityId } = props;
	const [cityList, setCityList] = useState([]);

	useEffect(() => {
		console.log(prefectureId);
		prefectureId === ""
			? console.log("null")
			: fetch(`api/cities?preId=${prefectureId}`)
					.then((res) => res.text())
					.then((res) => JSON.parse(res))
					.then((res) => setCityList(res));
	}, [prefectureId]);

	const handleChange = (event) => {
		setCityId(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">市町村</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={cityId}
					label="市町村"
					onChange={handleChange}
				>
					{cityList.map((ele, index) => (
						<MenuItem key={index} value={ele.id}>
							{ele.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
