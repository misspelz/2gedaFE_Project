import React from "react";

const Feedvideos = () => {
	const src = "https://www.youtube.com/embed/Ki8b8ih7FMQ?si=CPIZ31tg3MfSSpI9"
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
				gap: "1rem",
			}}
		>
			{[1, 2, 3, 4, 5, 6, 7].map((item) => (
				<iframe
					width="100%"
					height="120"
					src={src}
					title="Youtube Player"
					frameborder="0"
					allowFullScreen
				/>
			))}
		</div>
	);
};

export default Feedvideos;
