// import React from 'react'
// import SpeedDial from "@mui/material/SpeedDial";
// import SpeedDialAction from "@mui/material/SpeedDialAction";
// import { FiPlus } from "react-icons/fi";
// import {
// 	MdOutlinePhotoSizeSelectActual,
// 	MdOndemandVideo,
// } from "react-icons/md";
// import { BsFileEarmarkText } from "react-icons/bs";

// const Quickdial = () => {
//     	const actions = [
// 				{ icon: <BsFileEarmarkText className="pic-inptn" />, name: "File" },
// 				{ icon: <MdOndemandVideo className="pic-inptn" />, name: "video" },
// 				{
// 					icon: <MdOutlinePhotoSizeSelectActual className="pic-inptn" />,
// 					name: "Image",
// 				},
// 			];
//   return (
// 		<div>
// 			<SpeedDial
// 				// sx={{ position: "absolute", bottom: 16, right: 16 }}
// 				icon={<FiPlus />}
// 			>
// 				{actions.map((action) => (
// 					<SpeedDialAction
// 						key={action.name}
// 						icon={action.icon}
// 						tooltipTitle={action.name}
// 					/>
// 				))}
// 			</SpeedDial>
// 		</div>
// 	);
// }

// export default Quickdial

import * as React from "react";
// import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
// import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FiPlus } from "react-icons/fi";
// import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import PrintIcon from "@mui/icons-material/Print";
// import ShareIcon from "@mui/icons-material/Share";

const actions = [
	{ icon: <FiPlus />, name: "Copy" },
	{ icon: <FiPlus />, name: "Save" },
	{ icon: <FiPlus />, name: "Print" },
	{ icon: <FiPlus />, name: "Share" },
];

export default function Quickdial() {
	return (
		// <Box sx={{ height: 320, width: 200, transform: "translateZ(0px)", flexGrow: 1 }}>
		<SpeedDial
			ariaLabel="SpeedDial basic example"
			// sx={{ position: "absolute", bottom: 16, right: 16 }}
			icon={<FiPlus />}
		>
			{actions.map((action) => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
				/>
			))}
		</SpeedDial>
		// {/* </Box> */}
	);
}
