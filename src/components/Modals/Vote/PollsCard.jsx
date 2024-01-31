import React from 'react'
import { FaVoteYea } from 'react-icons/fa';
import { FaClock, FaEye } from 'react-icons/fa6';

const PollsCard = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 10,
          background: "white",
          borderRadius: 25,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 14,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 7,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 25,
                height: 25,
                position: "relative",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 25,
                  height: 25,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#D9D9D9",
                  borderRadius: 9999,
                }}
              />
              <img
                style={{
                  width: 25,
                  height: 38,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
                src="https://via.placeholder.com/25x38"
                alt=''
              />
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
              Kayode Wills
            </div>
          </div>
          <div
            style={{
              color: "#403F3F",
              fontSize: 10,
              fontFamily: "Ubuntu",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Today @ 12:09PM
          </div>
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
          What is your preferred programming language
        </div>
        <div
          style={{
            paddingRight: 20,
            background: "#B469EF",
            borderRadius: 10,
            overflow: "hidden",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 427,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 205,
              alignSelf: "stretch",
              paddingTop: 9,
              paddingBottom: 9,
              paddingLeft: 16,
              paddingRight: 149,
              background: "#4F0DA3",
              borderRadius: 10,
              overflow: "hidden",
              justifyContent: "flex-start",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 12,
                fontFamily: "Ubuntu",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Python
            </div>
          </div>
          <div
            style={{
              color: "white",
              fontSize: 10,
              fontFamily: "Ubuntu",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            75%
          </div>
        </div>
        <div
          style={{
            paddingRight: 20,
            background: "#B469EF",
            borderRadius: 10,
            overflow: "hidden",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 570,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 62,
              alignSelf: "stretch",
              paddingTop: 9,
              paddingBottom: 9,
              paddingLeft: 16,
              background: "#4F0DA3",
              borderRadius: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 12,
                fontFamily: "Ubuntu",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Javascript
            </div>
          </div>
          <div
            style={{
              color: "white",
              fontSize: 10,
              fontFamily: "Ubuntu",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            25%
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 5,
              display: "flex",
            }}
          >
            <div >
              <div><FaClock/></div>
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
              2 days remaining
            </div>
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 5,
              display: "flex",
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
              500 votes
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 14,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              padding: 10,
              background: "white",
              borderRadius: 10,
              overflow: "hidden",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div>
                <div
                ><FaEye style={{textAlign: "center", fontSize: "20px", marginTop: "10px"}}/></div>
                <div
                  style={{
                    width: 9,
                    height: 9,
                    left: 7.5,
                    top: 7.5,
                    position: "absolute",
                    background: "#403F3F",
                  }}
                ></div>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Ubuntu",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  24.5k
                </div>
                <div
                  style={{
                    color: "#403F3F",
                    fontSize: 14,
                    fontFamily: "Ubuntu",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  views
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: "1 1 0",
              padding: 10,
              background: "white",
              borderRadius: 10,
              overflow: "hidden",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div>
                <div
                ><FaVoteYea style={{textAlign: "center", fontSize: "20px", marginTop: "10px"}}/></div>
                </div>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Ubuntu",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  2.5k
                </div>
                <div
                  style={{
                    color: "#403F3F",
                    fontSize: 14,
                    fontFamily: "Ubuntu",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  votes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              height: 54,
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 10,
              paddingBottom: 10,
              background: "#161313",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#F5F5F5",
                fontSize: 20,
                fontFamily: "Ubuntu",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              View result
            </div>
          </div>
          <div
            style={{
              flex: "1 1 0",
              height: 54,
              paddingTop: 10,
              paddingBottom: 10,
              background: "#F5F5F5",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#4F0DA3",
                fontSize: 20,
                fontFamily: "Ubuntu",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Close poll
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PollsCard
