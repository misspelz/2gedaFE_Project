import React, { useState } from "react";
import "./styles.css";
import { FaPoll, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Notify = () => {
  const navigate = useNavigate();
  const [isCreatePolls, setIsCreatePolls] = useState(false);

  const handleButtonClick = () => {
    if (isCreatePolls) {
      navigate("/CreatePoll");
    } else {
      navigate("/MyPolls");
    }
    setIsCreatePolls((prev) => !prev);
  };

  return (
    <div className="notification-container">
      <h2 className="head-line bus-dir">Voting</h2>
      <div className="btn-sell-pro">
        <button className="sell-item-comm tic-sell" onClick={handleButtonClick}>
          {isCreatePolls ? "Create Polls" : "My Polls"}
        </button>
      </div>
      <div className="parPoll">
        <div className="bpoll">
          <div className="icon-circle">
            <FaPoll />
          </div>
          <div className="notification-content">
            <p>
              Your <strong>Poll</strong> has ended
            </p>
            <p style={{ textAlign: "start" }}>10 mins</p>
          </div>
        </div>
        <Link to="/PollResult" style={{ color: "#B469ef", marginLeft: "80px" }}>
          View result
        </Link>
      </div>

      <div className="bpoll">
        <div className="icon-circle">
          <FaShoppingBag />
        </div>
        <div className="notification-content">
          <p>
            <strong>Kayode Shank</strong> made payment for{" "}
            <strong>20 Votes</strong>
          </p>
          <p style={{ textAlign: "start" }}>10 mins</p>
        </div>
      </div>
    </div>
  );
};

export default Notify;
