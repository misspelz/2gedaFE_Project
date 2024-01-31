import React from 'react'
import { FaTimes } from 'react-icons/fa';

const ClosePoll = () => {
  return (
    <div
      style={{
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        width: "300px",
        margin: "20px",
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
          <div style={{marginRight: "70px", fontSize: "16px"}}>Close Poll?</div>
          <div>
            <FaTimes />
          </div>
        </div>
        <div
          style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Ubuntu",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          This poll will not be made available anymore and would be marked as
          ended. Are you sure you want to close this poll?
        </div>
        <div
          style={{
            width: 165,
            height: 40,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 6,
            paddingBottom: 6,
            background: "red",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 14,
              fontFamily: "Ubuntu",
              fontWeight: "400",
              lineHeight: 29,
              wordWrap: "break-word",
            }}
          >
            Close
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosePoll
