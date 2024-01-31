import React from 'react';
import wphone from "../../assets/wphone.png";
import ActionButton from "../Commons/Button";
import { Link } from 'react-router-dom';


const Download = () => {
  return (
    <div className="download">
      <div className="about-content">
        <div className="about-text-container">
          <h3 className="header">Experience 2GEDA Anywhere, Anytime</h3>
          <p className="download-text" style={{ textAlign: "start" }}>
            Connect seamlessly on 2GEDA - your social hub for local and global
            interactions. Download now to experience a world of connectivity,
            commerce, and community. Stay connected, stay informed, stay 2GEDA
          </p>
          <div className="action-btn">
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "0px 20px", alignItems: "center" }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.africa_tech_city.togeda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionButton bg={"white"} label={"Download 2geda"} />
            </a>
            <Link to="/Signup" >
              <ActionButton bg={"border"} label={"Register now"} />
              </Link>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={wphone} alt="support" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Download
