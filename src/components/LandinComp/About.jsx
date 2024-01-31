import React from "react";
import support from "../../assets/support.png"
import ActionButton from "../Commons/Button";
import { Link } from "react-router-dom";


const AboutLanding = () => {
 
   
  return (
    <div className="about">
      <div className="about-container">
        <p className="colored-text">About 2geda</p>
        <h3 className="heading-tertiary">Know more about 2geda</h3>
        <div className="about-content">
          <div className="image-container">
            <div className="board">
              <img src={support} alt="support" className="img" />
            </div>
          </div>
          <div className="about-text-container">
            <p className="about-text" style={{ textAlign: "start" }}>
              At 2GEDA, we're not just a social network; we're a global
              community fostering connections and meaningful interactions.
              Serving as your all-in-one platform, we're the marketplace for
              local commerce, the stage for events, the curator of music, and
              your go-to for polls and live prizes. Join us on 2GEDA, where
              connectivity meets a world of possibilities.
            </p>
            <Link to="/Signup">
              <ActionButton bg={"pruplr"} label={"Get started"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
