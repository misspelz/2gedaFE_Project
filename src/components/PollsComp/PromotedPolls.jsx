// SuggestedPollsComponent.js

import React from "react";
import { Polls } from "./Polls";
import styles from "./Promoted.module.css";

export const PromotedPolls = ({ viewType, setViewType }) => {
  const options = [
    { title: "Python", percentage: "30" },
    { title: "Java", percentage: "40" },
  ];
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={` flex gap-6 min-w-[800px]`}>
          <Polls
            authorName="Moses Jones"
            createdAt="Today @ 10:09am"
            question="What is your preferred programming language?"
            options={options}
            daysRemaining="5 days remaining"
            totalVotes="500"
            backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Polls
            authorName="Tommy James"
            createdAt="Today @ 10:09am"
            question="What is your preferred programming language?"
            options={options}
            daysRemaining="5 days remaining"
            totalVotes="500"
            backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Polls
            authorName="Nike Abosede"
            createdAt="Today @ 10:09am"
            question="What is your preferred programming language?"
            options={options}
            daysRemaining="5 days remaining"
            totalVotes="500"
            backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
      <div className="flex justify-between  mt-16 lg:mt-20">
        <button
          className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
            viewType === "all" ? "bg-purple-900 text-white" : ""
          }`}
          onClick={() => setViewType("all")}
        >
          All
        </button>
        <button
          className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
            viewType === "public" ? "bg-purple-900 text-white" : ""
          }`}
          onClick={() => setViewType("public")}
        >
          Public
        </button>
        <button
          className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
            viewType === "private" ? "bg-purple-900 text-white" : ""
          }`}
          onClick={() => setViewType("private")}
        >
          Private
        </button>
      </div>
    </>
  );
};
