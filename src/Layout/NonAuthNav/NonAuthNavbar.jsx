import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import ActionButton from "../../components/Commons/Button";
import "./style.css";

const data = [
  { label: "About", to: "about" },
  { label: "Features", to: "features" },
  { label: "Contact", to: "contact" },
];

const NonAuthNavbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (toggleIcon && !e.target.closest(".navbar")) {
        setToggleIcon(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [toggleIcon]);

  return (
    <div className={`non-navbar-container ${toggleIcon ? "active" : ""}`}>
      <div className="navbar">
        <div className="logon">
          <img src="/images/lo2.png" alt="" style={{ width: "80px" }} />
        </div>
        <div className={`nav ${toggleIcon ? "active" : ""}`}>
          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
          <ul className="nav-ul">
            {data.map((item, key) => (
              <li className="nav-li" key={key}>
                <ScrollLink
                  className="navbar_links"
                  to={item.to}
                  smooth={true}
                  duration={500}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
            <li>
              <RouterLink to="/Signup">
                <ActionButton bg={"pruplr"} label={"Get started"} />
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NonAuthNavbar;
