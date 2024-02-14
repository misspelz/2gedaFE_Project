import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";

const Sharepost = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="share-post-container">
			<Button
				aria-controls={open ? "demo-positioned-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				style={{ background: "transparent", minWidth: "fit-content", padding: 0 }}
			>
				<FiShare2 size={22} color="#000000b9" />
			</Button>
			<Menu
				id="positioned-menu"
				aria-labelledby="positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
						sx: { marginLeft: -8 },
					},
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				className="share-post-dropdown"
			>
				<MenuItem
					onClick={handleClose}
					sx={{
						fontSize: "14px",
						display: "flex",
						alignItems: "center",
						gap: "4px",
					}}
				>
					<FiShare2 /> share post on 2geda
				</MenuItem>
				<MenuItem
					onClick={handleClose}
					sx={{
						fontSize: "14px",
						display: "flex",
						alignItems: "center",
						gap: "4px",
					}}
				>
					<MdOutlineContentCopy /> copy post url
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Sharepost;
