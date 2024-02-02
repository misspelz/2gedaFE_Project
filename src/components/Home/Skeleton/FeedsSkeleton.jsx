import React from "react";
import { Skeleton } from "@mui/material";

const FeedsSkeleton = () => {
	return (
		<div
			style={{
				height: 200,
				width: "100%",
				marginRight: 20,
			}}
		>
			<Skeleton
				variant="rectangular"
				width={"100%"}
				height={120}
				style={{ borderRadius: 5 }}
				animation="wave"
			/>
			<Skeleton
				variant="text"
				sx={{ fontSize: "2rem" }}
				style={{ borderRadius: 5 }}
				animation="wave"
			/>
			<Skeleton
				variant="text"
				sx={{ fontSize: "2rem" }}
				width={"50%"}
				style={{ borderRadius: 5 }}
				animation="wave"
			/>
		</div>
	);
};

export default FeedsSkeleton;
