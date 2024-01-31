import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaCross } from 'react-icons/fa6';

const Payable = () => {
  return (
      <div style={{
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        width: "300px",
        margin: "20px",
        
    }}>
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
          gap: 16,
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
          <div><FaTimes/></div>
        </div>
        <div
          style={{
            color: "black",
            fontSize: 12,
            fontFamily: "Ubuntu",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          How many votes do you want to cast for this selection?
        </div>
        <div
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 12,
            paddingRight: 9,
            borderRadius: 5,
            overflow: "hidden",
            border: "1px #D0D5DD solid",
            justifyContent: "center",
            alignItems: "center",
            gap: 153,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "#403F3F",
              fontSize: 12,
              fontFamily: "Ubuntu",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Enter amount
          </div>
          <div
            style={{
              alignSelf: "stretch",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 5,
              paddingBottom: 5,
              background: "#D0D5DD",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: 12,
                fontFamily: "Ubuntu",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              All
            </div>
          </div>
        </div>
        <div
          style={{
            width: 165,
            height: 40,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 6,
            paddingBottom: 6,
            background: "#4F0DA3",
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
            Vote
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payable
