import React from "react";
import { Poll } from "./Poll";

export const Polls = ({
  onClick,
  authorName,
  createdAt,
  question,
  options,
  daysRemaining,
  totalVotes,
  backgroundImageUrl,
  className="border absolut p-3 mt-4 rounded-[25px] cursor-pointer"
}) => {
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
          <span className="text-[14px] font-[500] text-[#000]">
            {authorName}
          </span>
        </div>
        <span className="text-[#403F3F]">{createdAt}</span>
      </div>
      <h6 className="text-[12px] mt-4 text-[#000]">{question}</h6>

      {options?.map((option, index) => (
        <Poll key={index} title={option.title} percentage={option.percentage} />
      ))}

      <div className="flex justify-between mt-4">
        <div className="flex gap-2 items-center">
          <img src="images/time.png" alt="time-icon" />
          <span className="text-[#000] text-[12px] font-[500]">
            {daysRemaining}
          </span>
        </div>
        <div className="text-[#000] text-[12px] font-[500]">
          {totalVotes} votes
        </div>
      </div>
    </div>
  );
};
