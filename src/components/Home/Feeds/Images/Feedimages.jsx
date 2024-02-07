import React from "react";
import PostImage from "assets/images/sample-post-image.png"

const Feedimages = () => {
	return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "1rem",
        }}>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item}>
                    <img src={PostImage} alt="image-feeds" style={{height: "120px", objectFit: "cover"}}/>
                </div>
            ))}
        </div>
    )
};

export default Feedimages;
