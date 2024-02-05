import React from "react";
import Avatar from '@mui/material/Avatar';
import { GoPlusCircle } from "react-icons/go";
import "./lifestyle.css"

const LifestyleStatus = () => {
	return (
		<div className="status-container">
			<div className="add-status-btn">
				<button>
					<GoPlusCircle size={40}/>
				</button>
			</div>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
				<div key={item} className="user-status-item">
					<Avatar src="/broken-image.jpg" sx={{ border: "2px solid #4f0da3", width: "40px", height: "40px"}}/>
					<span>John doe</span>
				</div>
			))}
		</div>
	);
};

export default LifestyleStatus;
