import React, { useState } from "react";
import { Poll } from "./Poll";
import { BsEye } from "react-icons/bs";
import { FaVoteYea } from "react-icons/fa";

export const Polls = ({
  onClick,
  authorName,
  createdAt,
  question,
  options,
  daysRemaining,
  totalVotes,
  backgroundImageUrl,
  className = "border w-full max-w-[360px] p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0",
  myPolls,
  onClose,
  onView,
  optionList,
  cast,
  setContent,
}) => {
  // console.log(cast);
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleDateString("en-US", options);
  };

  const totalNumVotes = optionList?.reduce(
    (total, option) => total + option.all_vote,
    0
  );

  return (
    <div
      className={className}
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      onClick={onClick}
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div
            className=" rounded-full relative"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <span className="text-[14px] font-[500] text-[#000] capitalize">
            {authorName}
          </span>
        </div>
        <span className="text-[#403F3F]">{formatCreatedAt(createdAt)}</span>
      </div>
      <h6 className="text-[12px] lg:text-[14px] mt-4 text-[#000]">
        {question}
      </h6>

      {optionList?.map((o, index) => (
        <Poll
          key={o.id}
          title={o.content}
          allVotes={o.all_vote}
          totalVotes={totalNumVotes}
          name={"vote"}
          id={o.id}
          cast={cast}
          setContent={setContent}
        />
      ))}

      <div className="flex justify-between mt-4">
        <div className="flex gap-2 items-center">
          <img src="images/time.png" alt="time-icon" />
          <span className="text-[#000] text-[12px] font-[500]">
            {daysRemaining}
          </span>
        </div>
        <div className="text-[#000] text-[12px] font-[500]">
          {totalNumVotes} votes
        </div>
      </div>

      {myPolls && (
        <div className="w-full flex flex-row mt-4 gap-6 lg:gap-10">
          <div className=" flex flex-col w-full gap-4 justify-start">
            <div className="flex  gap-3 self-start  ">
              <BsEye className="text-black text-xl" />
              <div className="">
                <h2 className="text-black ">0K</h2>
                <span className="text-black text-[14px]">views</span>
              </div>
            </div>
            <button
              className="bg-black w-full h-[30px] lg:h-[40px] flex justify-center items-center rounded-[15px] text-lg sm:text-xl text-white !font-normal"
              onClick={onView}
            >
              View result
            </button>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex  gap-3 self-start  ">
              <FaVoteYea className="text-black text-xl" />
              <div>
                <h2 className="text-black">{totalNumVotes}</h2>
                <span className="text-black text-[14px]">votes</span>
              </div>
            </div>
            <button
              className="bg-[#F5F5F5] w-full h-[30px] lg:h-[40px] flex justify-center items-center rounded-[15px] text-lg sm:text-xl text-[#403f3f] !font-normal"
              onClick={onClose}
            >
              Close poll
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
