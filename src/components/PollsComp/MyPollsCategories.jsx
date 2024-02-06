import React from "react";
export const MyPollsCategories = ({ viewType, setViewType }) => {
  return (
    <>
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
            viewType === "active" ? "bg-purple-900 text-white" : ""
          }`}
          onClick={() => setViewType("active")}
        >
          Active
        </button>
        <button
          className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
            viewType === "ended" ? "bg-purple-900 text-white" : ""
          }`}
          onClick={() => setViewType("ended")}
        >
          Ended
        </button>
      </div>
    </>
  );
};
