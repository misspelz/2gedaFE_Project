import React from "react";
import { Link } from "react-router-dom";
import ActionButton from "../Commons/Button";
import "./style.css";

const HeroSection = () => {
  
    
  return (
    <div>
      <div className="top">
        <div className="top-content">
          <h1 style={{ color: "#f4f4f4", fontSize: "20px" }}>The Platform We Build Together</h1>
          <h3 className="heading-primary">
            Connect, Share, Discover, and Empower
          </h3>
          <p className="paragraph" style={{ color: "#f4f4f4" }}>
            Unleash connections. Explore entertainment and empower knowledge on
            2geda
          </p>
          <div className="action-btn">
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "0px 50px", alignItems: "center" }}>
              <Link to="/Signup">
                <ActionButton bg={"pruplr"} label={"Create account"} />
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.africa_tech_city.togeda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionButton bg={"white"} label={"Get the app"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
