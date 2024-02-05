import React from "react";
import PostImage from "assets/images/sample-post-image.png"

const Feedimages = () => {
    // className="feeds-image-grid" 
	return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem"
        }}>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div>
                    <img src={PostImage} alt="image-feeds"/>
                </div>
            ))}
        </div>
    )
};

export default Feedimages;
