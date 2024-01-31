import React from "react";
import Avatar from "react-avatar";
import { FaClock } from "react-icons/fa";
import "./styles.css";

const Poll = () => {
  const renderLylacDivs = () => {
    const lylacDivs = [];
    for (let i = 0; i < 9; i++) {
      lylacDivs.push(
        <div className="lylac" key={i}>
          <div className="egg-bg">
            <p
              style={{
                color: "white",
                position: "absolute",
                top: "50%",
                left: "18%",
                transform: "translate(-50%, -50%)",
                width: "25%",
                textAlign: "start",
              }}
            >
              Javascript
            </p>
          </div>
        </div>
      );
    }
    return lylacDivs;
  };

  return (
    <div className="can-vote">
      <div className="info">
        <div className="use">
          <Avatar name="John Doe" size="25" round className="avatar" />
          <p>John Doe</p>
        </div>
        <p>Today @ 12:09PM</p>
      </div>

      <div className="vote">
        <p className="details">What is your preferred programming language</p>
        <div className="poll">{renderLylacDivs()}</div>
      </div>

      <div className="info">
        <span>
          <p>
            <span style={{ paddingRight: "10px" }}>
              <FaClock />
            </span>
            2 days remaining
          </p>
        </span>
        <p>500 votes</p>
      </div>
    </div>
  );
};

export default Poll;
