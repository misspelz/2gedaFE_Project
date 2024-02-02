// NotificationsComponent.js

import React from 'react';
import PropTypes from 'prop-types';

export const Notifications = ({ setNotify }) => {
  return (
    <div className="mt-2 px-4 py-2 rounded-[10px] h-screen z-50">
      <div className="cursor-pointer lg:hidden" onClick={() => setNotify(false)}>
        <img src="images/backarrow.png" alt="result-icon" width={20} />
      </div>

      <h2 className="text-[#000] mt-4">Notifications</h2>

      <div className="mt-8 flex gap-4">
        <div className="bg-[#D0D5DD] rounded-full flex items-center justify-center">
          <img src="images/result.png" alt="result-icon" width={20} />{" "}
        </div>
        <div className="">
          <div className="text-[#000] text-[12px]">
            Your <span className="font-bold">poll</span> has ended
          </div>
          <div className="text-[#000] text-[10px]">10 mins ago</div>
        </div>
      </div>
      <div className="text-[#4F0DA3] text-[11px] mt-3 ml-[58px] font-[500] cursor-pointer">
        View result
      </div>
      <div className="h-[1px] bg-[#D0D5DD] mt-4"></div>
      <div className="mt-8 flex gap-4">
        <div className="bg-[#D0D5DD] rounded-full flex items-center justify-center">
          <img src="images/payment.png" alt="result-icon" width={20} />{" "}
        </div>
        <div className="">
          <div className="text-[#000] text-[12px]">
            <span className="font-bold">Kayode Shank</span> made payment for{' '}
            <span className="font-bold">20 votes</span>
          </div>
          <div className="text-[#000] text-[10px]">10 mins ago</div>
        </div>
      </div>
    </div>
  );
};

Notifications.propTypes = {
  setNotify: PropTypes.func.isRequired,
};


