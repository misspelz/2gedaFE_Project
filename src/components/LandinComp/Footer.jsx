import React from "react";
import Io2 from "../../assets/lo2.png"
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ActionButton from "../Commons/Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fdiv">
        <div className="hide">
          <img src={Io2} alt="logo" className="logo"  style={{width: "80px"}}/>
          <h2
            style={{
              textAlign: "center",
              padding: "10px",
              marginLeft: "-25px",
            }}
          >
            www.2geda.net
          </h2>
        </div>
        <div>
          <div style={{ marginLeft: "-60px", marginRight: "20px" }}>
            <p className="heading-secondary" style={{ marginLeft: "45px" }}>
              Quick Links
            </p>
            <div className="link">
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                style={{ marginLeft: "80px", cursor: "pointer" }}
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                style={{ marginLeft: "80px", cursor: "pointer" }}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                style={{ marginLeft: "80px", cursor: "pointer" }}
              >
                Contact
              </ScrollLink>
          <Link
            to="/PrivacyPolicy"
            style={{ color: "black", marginLeft: "64px", textDecoration: "underline" }}
          >
            Privacy Policy
          </Link>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <h2>Subscribe</h2>
          <div className="subscribe-form" style={{ marginBottom: "20px" }}>
            <input type="email" placeholder="Enter your email" style={{height: "50px"}}/> 
            {/* <span className="arrow">➡</span> */}
            <ActionButton bg={"pruplr"} label={"➡"} type={"submit"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
