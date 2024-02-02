import React from "react";
import { Poll } from "./Poll";

export const Polls2 = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    // <div  className="border relative rounded-l-[25px] rounded-r-[25px] mt-4 w-[95%] h-[180px]"
    // style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
    <div
      className="border absolut p-3 mt-4 rounded-[25px] "
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div
            className="bg-red-500 rounded-full relative"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <span className="text-[14px] font-[500] text-[#000]">
            Kayode Wills
          </span>
        </div>
        <span className="text-[#403F3F]">Today @ 12:09PM</span>
      </div>
      <h6 className="text-[12px] mt-4 text-[#000]">
        What is your preferred programming language?
      </h6>

      {/* First Poll Component */}
      <Poll title={"Python"} percentage={"50"} />
      {/* Second Poll Component */}
      <Poll title={"JavaScript"} percentage={"40"} />
      {/* Third Poll Component */}
      <Poll title={"Java"} percentage={"30"} />
      {/* Fourth Poll Component */}
      <Poll title={"C#"} percentage={"60"} />
      {/* Fifth Poll Component */}
      <Poll title={"Kotlin"} percentage={"80"} />
      {/* Sixth Poll Component */}
      <Poll title={"Python"} percentage={"50"} />
      {/* Seventh Poll Component */}
      <Poll title={"JavaScript"} percentage={"40"} />
      {/* Eight Poll Component */}
      <Poll title={"Java"} percentage={"30"} />
      {/* Ninth Poll Component */}
      <Poll title={"C#"} percentage={"60"} />
      {/* Tenth Poll Component */}
      <Poll title={"Kotlin"} percentage={"80"} />

      <div className="flex justify-between mt-4">
        <div className="flex gap-2 items-center">
          <img src="images/time.png" alt="fifa-image" />
          <span className="text-[#000] text-[12px] font-[500]">
            2 days remaining
          </span>
        </div>
        <div className="text-[#000] text-[12px] font-[500]">500 votes</div>
      </div>
    </div>
    // {/* </div> */}
  );
};
