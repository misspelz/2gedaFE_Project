import React from "react";
import "./media-grid.css";

const PostmediaGrid = ({ media }) => {
	return (
		<>
			{media?.length === 1 && (
				<div className="post-media-container post-media-single-grid">
					<img src={media[0].media} alt="" />
				</div>
			)}

			{media?.length === 2 && (
				<div className="post-media-container post-media-double-grid">
					{media?.map((item) => (
						<img src={item.media} alt="" />
					))}
				</div>
			)}
			{media?.length === 3 && (
				<div className="post-media-container post-media-triple-grid">
					{media?.map((item) => (
						<img src={item.media} alt="" />
					))}
				</div>
			)}

			{media?.length === 4 && (
				<div className={`post-media-container post-media-grid`}>
					{media?.map((item) => (
						<img src={item.media} alt="" />
					))}
				</div>
            ) }
            
			{media?.length > 4 && (
				<div className={`post-media-container grid-with-overlay`}>
					{media?.slice(0, 3).map((item) => (
						<img src={item.media} alt="" />
					))}
					{media?.length > 4 && (
						<div className="grid-media-overlay-item">
							<img src={media[3].media} alt="" />
							<div className="grid-media-count">+ {media?.length - 3}</div>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default PostmediaGrid;
