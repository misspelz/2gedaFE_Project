import React, { useState } from "react";
import Avatar from "react-avatar";
import "./styles.css";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const CanVote = ({
  voteOptions,
  creator,
  question,
  duration,
  castVote,
  voteId,
}) => {
  console.log("Vote Options:", voteOptions);
  console.log("Creator:", creator);
  console.log("Question:", question);
  console.log("Duration:", duration);
  const [votes, setVotes] = useState([0, 0]);
  const [haveNotVoted, setHaveNotVoted] = useState(true);

  const handleVote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index] += 1;
    setVotes(updatedVotes);
  };

  const getTotalVotes = () => {
    return votes.reduce((total, vote) => total + vote, 0);
  };

  const getPercentage = (index) => {
    const totalVotes = getTotalVotes();
    return totalVotes === 0 ? 0 : (votes[index] / totalVotes) * 100;
  };

  const getHighestIndex = () => {
    const highest = votes.indexOf(Math.max(...votes));
    return highest === -1 ? -1 : highest;
  };

  return (
    <div className="can-vote">
      <div className="info">
        <div className="use">
          <Avatar name="John Doe" size="25" round className="avatar" />
          <p>{creator  ? creator: "" }</p>
        </div>

        <p>{duration}</p>
      </div>
      {!haveNotVoted && (
        <p style={{ fontSize: "8px", textAlign: "start" }}>Already Voted</p>
      )}
      <div className="vote">
        <p className="details">{question && question}</p>
        <div className="poll">
          {voteOptions && voteOptions.length > 0 && haveNotVoted
            ? voteOptions.map((item, index) => (
                <div
                  className="lylac"
                  onClick={() => {
                    handleVote(index);
                    castVote(voteId, item.content, 0);
                    setHaveNotVoted(false);
                  }}
                >
                  <p style={{ fontSize: "12px", textAlign: "start" }}>
                    {item.content}
                  </p>
                  <div
                    className={`egg-bg ${
                      getHighestIndex() === index ? "highest" : ""
                    }`}
                  >
                    {getHighestIndex() === index && (
                      <FaCheckCircle className="verified-icon" />
                    )}
                    <div
                      className="egg-bg-before"
                      style={{ width: `${getPercentage(index)}%` }}
                    ></div>
                    <p
                      style={{
                        color: "white",
                        position: "absolute",
                        top: "50%",
                        right: "5px",
                        transform: "translateY(-50%)",
                        textAlign: "center",
                      }}
                    >
                      {getPercentage(index).toFixed(2)}%
                    </p>
                  </div>
                </div>
              ))
            : voteOptions.map((item, index) => (
                <div className="lylac">
                  <p style={{ fontSize: "12px", textAlign: "start" }}>
                    {item.content}
                  </p>
                  <div
                    className={`egg-bg ${
                      getHighestIndex() === index ? "highest" : ""
                    }`}
                  >
                    {getHighestIndex() === index && (
                      <FaCheckCircle className="verified-icon" />
                    )}
                    <div
                      className="egg-bg-before"
                      style={{ width: `${getPercentage(index)}%` }}
                    ></div>
                    <p
                      style={{
                        color: "white",
                        position: "absolute",
                        top: "50%",
                        right: "5px",
                        transform: "translateY(-50%)",
                        textAlign: "center",
                      }}
                    >
                      {getPercentage(index).toFixed(2)}%
                    </p>
                  </div>
                </div>
              ))}

          {/* <div className="lylac" onClick={() => handleVote(1)}>
            <p style={{ fontSize: "12px", textAlign: "start" }}>JavaScript</p>
            <div
              className={`egg-bg egg-bge ${
                getHighestIndex() === 1 ? "highest" : ""
              }`}
            >
              {getHighestIndex() === 1 && (
                <FaCheckCircle className="verified-icon" />
              )}
              <div
                className="egg-bg-before"
                style={{ width: `${getPercentage(1)}%` }}
              ></div>
              <p
                style={{
                  color: "white",
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                  textAlign: "center",
                }}
              >
                {getPercentage(1).toFixed(2)}%
              </p>
            </div>
          </div> */}
        </div>
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
        <p>{getTotalVotes()} votes</p>
      </div>
    </div>
  );
};

export default CanVote;
