import React from "react";

const Feedvideos = () => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
				gap: "1rem",
			}}
		>
			{[1, 2, 3, 4, 5, 6, 7].map((item) => (
				<div>
					<video src="https://www.youtube.com/watch?v=wm5gMKuwSYk&list=PL6QREj8te1P7gixBDSU8JLvQndTEEX3c3" alt="video-feeds" />
				</div>
			))}
		</div>
	);
};

export default Feedvideos;
