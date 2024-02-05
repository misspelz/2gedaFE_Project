import ActionButton from "components/Commons/Button";
import React from "react";

const BCPaymentModal = () => {
  return (
    <div>
      {/* top of page */}
      <div className="flex h-[10vh]">
        <div>Arrow</div>
        <div className="flex justify-center items-center ">
          <p>Make payment</p>
        </div>
      </div>
      <div>
        <p>You Have Selected</p>

        <div
          className="w-[45%] border-[grey] bg-[yellow] border-2 rounded hover:border-[#4f0da3]"
          onClick={() => ""}
        >
          <div className="flex justify-between mt-2 pl-2 w-full gap-[10%]">
            <p className="ml-2 mt-2">Subscribe</p>

            <div className="mt-1 rounded-bl-lg rounded-tl-lg flex justify-center items-center w-[45%] lg:w-[30%] bg-[#4f0da3]">
              <p className="text-[1.4rem] pt-2  text-white">₦ 1000</p>
            </div>
          </div>
          <div className="flex rounded-lg w-full ">
            <p className="ml-2 w-[70%] pl-2 text-2xl text-start font-semibold">
              5000 users on 2geda
            </p>
          </div>
          <p>Select your mode of Payment</p>
          <div>
            <div>
              <p>Card Payment</p>
              <p>Bank transfer</p>
            </div>
            <label>
              CARD NUMBER
              <input className="pl-4" placeholder="1234 5678 9012 3456" />
            </label>

            <div className="flex ">
              <label>
                EXPIRY
                <input className="pl-2" placeholder="MM/YY" />
                <input placeholder="123" />
              </label>
            </div>
          </div>

          <ActionButton
            bg="bg-red-300"
            label={`Pay NGN ${"price"} `}
            type="submit"
            onClick={""}
          />
        </div>
      </div>
    </div>
  );
};

export default BCPaymentModal;
