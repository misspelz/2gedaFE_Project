import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiLike } from "react-icons/bi";
import "./like-post.css";
import {
	EmojiLaughing,
	EmojiSad,
	EmojiAngry,
	EmojiSurprised,
	ThumbsUp,
	ThumbsDown,
} from "assets/custom-icons";
import { EmojiHug } from "assets/custom-icons/Emojihug";

const Likepost = () => {
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
				style={{
					background: "transparent",
					minWidth: "fit-content",
					padding: 0,
				}}
			>
				<BiLike size={24} color="#000000b9" />
			</Button>
			<Menu
				id="share-menu"
				aria-labelledby="share-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
						sx: { marginTop: -4 },
					},
				}}
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				className="like-post-dropdown"
			>
				<MenuItem onClick={handleClose}>
					<ThumbsUp />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ThumbsDown />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<EmojiHug />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<EmojiLaughing />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<EmojiSad />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<EmojiAngry />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<EmojiSurprised />
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Likepost;
