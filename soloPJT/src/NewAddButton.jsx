import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PrefectureSelect from "./PrefectureSelect";
import CitySelect from "./CitySelect";

export default function NewAddButton(props) {
	const { displayState, setDisplayState } = props;
	const [open, setOpen] = React.useState(false);

	const [prefectureId, setPrefectureId] = useState("");
	const [cityId, setCityId] = useState("");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Fab
				color="primary"
				aria-label="add"
				sx={{ margin: 3 }}
				onClick={handleClickOpen}
				style={{ color: "black", backgroundColor: "#9acd32" }}
			>
				<AddIcon />
			</Fab>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					component: "form",
					onSubmit: (event) => {
						event.preventDefault();
						const formData = new FormData(event.currentTarget);
						const formJson = Object.fromEntries(formData.entries());
						const parkName = formJson.park;
						fetch("/api/park", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								park: parkName,
								cityId,
							}),
						});
						handleClose();
						setDisplayState(!displayState);
					},
				}}
			>
				<DialogTitle>投稿</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						required
						margin="dense"
						id="name"
						name="park"
						label="公園名"
						type="text"
						fullWidth
						variant="standard"
					/>
				</DialogContent>

				<DialogContent>
					<PrefectureSelect
						prefectureId={prefectureId}
						setPrefectureId={setPrefectureId}
					></PrefectureSelect>
				</DialogContent>
				<DialogContent>
					<CitySelect
						prefectureId={prefectureId}
						cityId={cityId}
						setCityId={setCityId}
					></CitySelect>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>取消</Button>
					<Button type="submit">投稿</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
