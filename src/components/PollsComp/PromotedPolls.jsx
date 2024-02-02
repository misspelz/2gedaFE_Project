// SuggestedPollsComponent.js

import React from "react";
import { Polls } from "./Polls";
import styles from "./Promoted.module.css";

export const PromotedPolls = ({ viewType, setViewType }) => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={` flex gap-6 min-w-[800px]`}>
          <Polls />
          <Polls />
          <Polls />
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
