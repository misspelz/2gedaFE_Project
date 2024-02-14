import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./post-menu.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PromoteIllustration from "assets/images/promote-post-illustration.png";
import { RxCross2 } from "react-icons/rx";

const PostMenu = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [isOpen, setIsOpen] = useState(false);
	const handleCloseModal = () => setIsOpen(false);

	const [isPromoteOpen, setIsPromoteOpen] = useState(false);
	const handleClosePromoteModal = () => setIsPromoteOpen(false);

	const handleBlockUser = () => {
		setIsOpen(true);
		handleClose();
	};

	const handlePromotePost = () => {
		setIsPromoteOpen(true);
		handleClose();
	};

	const [plan, setPlan] = useState("");
	const setActive = (val) => {
		return val ? "plan-checked" : "";
	};

	return (
		<div className="post-menu-container">
			<Button
				aria-controls={open ? "demo-positioned-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				style={{ background: "transparent" }}
			>
				<BiDotsHorizontalRounded />
			</Button>
			<Menu
				id="post-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
						sx: { marginLeft: -8, padding: 1 },
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
				className="post-menu-dropdown"
			>
				<MenuItem onClick={handlePromotePost}>Promote post</MenuItem>
				<MenuItem onClick={handleClose}>Report Abuse</MenuItem>
				<MenuItem onClick={handleClose}>See more of this</MenuItem>
				<MenuItem onClick={handleClose}>Save Post</MenuItem>
				<MenuItem onClick={handleBlockUser}>Block User</MenuItem>
			</Menu>

			<div>
				<Modal keepMounted open={isOpen} onClose={handleCloseModal}>
					<Box className="block-user-modal">
						<p>You'll no longer see their posts and interactions</p>
						<p>Are you sure you want to block this user ?</p>
						<Box className="block-user-modal-btns">
							<button onClick={handleCloseModal}>Cancel</button>
							<button onClick={handleCloseModal}>Block user</button>
						</Box>
					</Box>
				</Modal>
			</div>
			<div>
				<Modal
					keepMounted
					open={isPromoteOpen}
					onClose={handleClosePromoteModal}
				>
					<Box className="promote-post-modal">
						<div className="promote-post-cancel">
							<RxCross2
								size={22}
								onClick={handleClosePromoteModal}
								cursor={"pointer"}
							/>
						</div>
						<img src={PromoteIllustration} alt="promote-illustration" />
						<h3>Amplify Your Reach!</h3>
						<p>
							Promote your post and expand your reach effortlessly <br />
							with our powerful promotion tool
						</p>
						<Box className="promote-plan-options">
							<h4>Select a plan</h4>
							<Box className="promote-plan-grid">
								<label
									htmlFor="basic-plan"
									className={`plan-card ${setActive(plan === "basic")}`}
									onClick={() => setPlan("basic")}
								>
									<p>Basic</p>
									<span>N 1,000</span>
									<p>1 day</p>
									<input
										type="radio"
										id="basic-plan"
										name="plan"
										checked={plan === "basic"}
									/>
								</label>
								<label
									htmlFor="standard-plan"
									className={`plan-card ${setActive(plan === "standard")}`}
									onClick={() => setPlan("standard")}
								>
									<p>Standard</p>
									<span>N 5,000</span>
									<p>7 days</p>
									<input
										type="radio"
										id="standard-plan"
										name="plan"
										checked={plan === "standard"}
									/>
								</label>
								<label
									htmlFor="premium-plan"
									className={`plan-card ${setActive(plan === "premium")}`}
									onClick={() => setPlan("premium")}
								>
									<p>Premium</p>
									<span>N 9,000</span>
									<p>14 days</p>
									<input
										type="radio"
										id="premium-plan"
										name="plan"
										checked={plan === "premium"}
									/>
								</label>
								<label
									htmlFor="pro-plan"
									className={`plan-card ${setActive(plan === "pro")}`}
									onClick={() => setPlan("pro")}
								>
									<p>Pro</p>
									<span>N 24,000</span>
									<p>30 days</p>
									<input
										type="radio"
										id="pro-plan"
										name="plan"
										checked={plan === "pro"}
									/>
								</label>
							</Box>
						</Box>
						<Box className="promote-plan-btn">
							<button onClick={handleClosePromoteModal}>
								Proceed to checkout
							</button>
						</Box>
					</Box>
				</Modal>
			</div>
		</div>
	);
};

export default PostMenu;
