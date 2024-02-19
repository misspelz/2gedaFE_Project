import React from "react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Custombutton = ({
	name,
	disabled,
	type,
	className,
	onClick,
	variant,
}) => {
	return (
		<>
			<Button
				disabled={disabled ?? false}
				type={type}
				className={className}
				onClick={onClick}
				variant={variant}
				startIcon={disabled && <CircularProgress size={20}/>}
			>
				{name}
			</Button>
		</>
	);
};

export default Custombutton;
