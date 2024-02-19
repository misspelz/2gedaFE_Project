import { BsAndroid2 } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useEffect } from "react";

const PostFormLocationModal = ({ location, setLocation }) => {

	const handleGetLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;
					setLocation({ latitude, longitude });
				},
				(error) => {
					console.error("Error getting location:", error);
				}
			);
		} else {
			alert("Geolocation is not supported by your browser.");
		}
	};

	const handleDeleteLocation = () => {
		setLocation(null);
	};

	useEffect(() => {
		// Automatically get the user's location when the component mounts
		handleGetLocation();
	}, []);

	return (
		<>
			<div className="post-audio-cont-box">
				{location ? (
					<div className="location-item">
						{/* Display the user's current location */}
						<div className="dra-im">
							<BsAndroid2 className="icon-dw location" />
							<div className="or-dr">
								Latitude: {location.latitude}, Longitude: {location.longitude}
							</div>
						</div>
						<div className="de-aud">
							<div className="delete-audio" onClick={handleDeleteLocation}>
								<AiFillDelete />
								<div className="del-tss">Delete</div>
							</div>
						</div>
					</div>
				) : (
					<>
						<button onClick={handleGetLocation} className="get-location-button">
							Get Current Location
						</button>
					</>
				)}
			</div>
		</>
	);
};

export default PostFormLocationModal;
