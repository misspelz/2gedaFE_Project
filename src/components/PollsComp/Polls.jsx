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
  className = "border absolut p-3 mt-4 rounded-[25px] cursor-pointer",
  myPolls,
  onClose,
  onView,
}) => {
  const [optionPercentages, setOptionPercentages] = useState(
    options?.map((option) => parseInt(option.percentage, 10))
  );

  const updatePercentage = (index, newPercentage) => {
    const updatedPercentages = [...optionPercentages];
    updatedPercentages[index] = newPercentage;

    // Calculate the remaining percentage to distribute among other options
    const remainingPercentage = 100 - newPercentage;

    // Decrease other options proportionally
    updatedPercentages.forEach((percentage, i) => {
      if (i !== index) {
        const decreasePercentage =
          (remainingPercentage / (optionPercentages.length - 1)) *
          (100 - newPercentage);
        updatedPercentages[i] = percentage - decreasePercentage;
      }
    });

    setOptionPercentages(updatedPercentages);
  };

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
        <Poll
          key={index}
          title={option.title}
          percentage={optionPercentages[index]}
          updatePercentage={(newPercentage) =>
            updatePercentage(index, newPercentage)
          }
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
          {totalVotes} votes
        </div>
      </div>
      {myPolls && (
        <div className="w-full flex flex-row mt-4">
          <div className=" flex flex-col w-full gap-4 justify-start">
            <div className="flex !items-start gap-2  !self-start ">
              <BsEye className="text-black text-xl" />
              <div>
                <h2 className="text-black">24.5K</h2>
                <span className="text-black">views</span>
              </div>
            </div>
            <button
              className="bg-black w-full h-[54px] flex justify-center items-center rounded-[60px] text-lg sm:text-xl text-white !font-normal"
              onClick={onView}
            >
              View result
            </button>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex !items-start gap-2  !self-start ">
              <FaVoteYea className="text-black text-xl" />
              <div>
                <h2 className="text-black">2.5K</h2>
                <span className="text-black">votes</span>
              </div>
            </div>
            <button
              className="bg-[#F5F5F5] w-full h-[54px] flex justify-center items-center rounded-[60px] text-lg sm:text-xl text-[#403f3f] !font-normal"
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
