import React from "react";
import Stick from "../../Dashboard/Stick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const PollResult = ({ closeModal }) => {
  return (
    <div className="w-full max-w-[641px] p-3">
      <div className="flex gap-3 mt-3 mb-5">
        <FaArrowLeftLong
          style={{ fontSize: "20px" }}
          onClick={closeModal}
          className="cursor-pointer"
        />
        <h1 style={{ fontSize: "20px" }}>Poll Result</h1>
      </div>

      <div>
        <h3>What is your preferred programming language</h3>
        <p style={{ textAlign: "start" }}>252 Votes</p>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>
          <h3>Python</h3>
          <p style={{ textAlign: "start" }}>220 votes</p>
        </div>
        <FaChevronUp style={{ fontSize: "20px" }} />
      </div>
      <Stick />
      <Stick />
      <Stick />
      <Stick />
      <Stick />
    </div>
  );
};

export default PollResult;
