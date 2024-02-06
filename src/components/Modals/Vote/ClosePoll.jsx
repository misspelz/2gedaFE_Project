import React from "react";
import { FaTimes } from "react-icons/fa";

const ClosePoll = ({ closeModal }) => {
  return (
    <div
      style={{
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        width: "300px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 20,
          background: "white",
          borderRadius: 10,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 20,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            padding: 5,
            justifyContent: "flex-end",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div style={{ marginRight: "70px", fontSize: "16px" }}>
            Close Poll?
          </div>
          <div onClick={closeModal} className="cursor-pointer">
            <FaTimes className="text-black text-xl" />
          </div>
        </div>
        <div
          style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Ubuntu",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          This poll will not be made available anymore and would be marked as
          ended. Are you sure you want to close this poll?
        </div>
        <button
          className="w-[165px] h-[40px] flex items-center justify-center text-white bg-[#ff0000] rounded-[64px] text-lg"
          onClick={closeModal}
        >
          Close poll
        </button>
      </div>
    </div>
  );
};

export default ClosePoll;
