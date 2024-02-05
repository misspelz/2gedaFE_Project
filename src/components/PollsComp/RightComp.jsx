// MyComponent.js

import React from "react";
import { Notifications } from "./Notification";
import { useNavigate } from "react-router-dom";

export const PollsNotification = ({ setNotify, showCreateModal }) => {
  const nav = useNavigate();
  return (
    <div className="hidden lg:block w-[32%] py-10 px-6 bg-[#fff] h-screen fixed top-32 right-0">
      {/* CREATE POLL ACTION */}
      <div
        className="flex items-center gap-6 mt-4 border px-4 py-2 rounded-[10px] cursor-pointer"
        onClick={showCreateModal}
      >
        <img src="images/create.png" alt="create-icon" width={25} />
        <p className="text-[13px] font-[500] mt-3">Create poll</p>
      </div>

      {/* MY POLLS ACTION */}
      <div
        className="flex items-center gap-6 mt-4 border px-4 py-2 rounded-[10px] cursor-pointer"
        onClick={() => nav("/MyPolls")}
      >
        <img src="images/create.png" alt="create-icon" width={25} />
        <p className="text-[13px] font-[500] mt-3">My polls</p>
      </div>

      {/* NOTIFICATION */}
      <Notifications setNotify={setNotify} />
    </div>
  );
};
