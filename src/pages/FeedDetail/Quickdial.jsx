import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FiEdit } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { Box } from "@mui/material";
import {
	MdOutlinePhotoSizeSelectActual,
	MdOndemandVideo,
} from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa6";
import "./feed-detail.css";

const actions = [
	{
		icon: (
			<button className="rounded-full bg-[#c25c09]">
				<FiEdit size={20} color="#fff" />
			</button>
		),
		name: "comment",
	},
	{
		icon: (
			<button className="rounded-full bg-[#e01134]">
				<MdOutlinePhotoSizeSelectActual size={20} color="#fff" />
			</button>
		),
		name: "image",
	},
	{
		icon: (
			<button className="rounded-full bg-[#037474]">
				<MdOndemandVideo size={20} color="#fff" />
			</button>
		),
		name: "video",
	},
	{
		icon: (
			<button className="rounded-full bg-[#066606]">
				<FaMicrophone size={20} color="#fff" />
			</button>
		),
		name: "record",
	},
	{
		icon: (
			<button className="rounded-full bg-[#fff]">
				<BsFileEarmarkText size={20} />
			</button>
		),
		name: "add file",
	},
];

export default function Quickdial() {
	return (
		<Box
			sx={{
				height: 320,
				width: 160,
				transform: "translateZ(0px)",
				flexGrow: 1,
			}}
		>
			<SpeedDial
				ariaLabel="SpeedDial basic example"
				sx={{ position: "absolute", bottom: 1, right: 16 }}
				icon={<SpeedDialIcon />}
				className="quick-dial-wrapper"
			>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						className="quick-dial-btn-item"
					/>
				))}
			</SpeedDial>
		</Box>
	);
}
