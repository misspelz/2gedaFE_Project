import React from "react";
import "./styles.css";

const Card = ({ icon, heading, paragraph, circleBackgroundColor }) => {
  const circleStyle = {
    backgroundColor: circleBackgroundColor || "#f4e7ff",
  };

  return (
    <div className="temp">
      <div className="circle" style={circleStyle}>
        <span className="text-purple">{icon}</span>
      </div>
      <div className="text-left">
        <h2 className="text-xl font-bold mb-2 text-gray-700">{heading}</h2>
        <p className="text-md" style={{textAlign: "start"}}>{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
