import { PiMegaphoneBold } from "react-icons/pi";
import PublicShortMessage from "../Commons/PublicShortMessage ";
import EmptyChat from "./EmptyChat";
import { useState, useEffect } from "react";
// import ChatModal from "./Modal";
import { GiConsoleController } from "react-icons/gi";
import Modal from "components/Modals/Modal";
import { IoMdClose } from "react-icons/io";
import connectIMG from "../../assets/payment connect.png";
import ActionButton from "components/Commons/Button";

// import BCPaymentModal from "./BCPaymentModal";

const PublicMessage = ({ Data, handleGotoPublicMessagBox }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [bcPaymentModalOpen, setBCPayModalOpen] = useState(false);

  const switchOffModal = () => {
    setBCPayModalOpen(false);
  };
  const switchOnModal = () => {
    setBCPayModalOpen(true);
  };

  if (Data.length === 0) {
    return (
      <div className="emp-chat-bor">
        <EmptyChat />
        <div className="connenct-txt" onClick={switchOnModal}>
          Send a Broadcast to everyone{" "}
        </div>

        {bcPaymentModalOpen && (
          <BCPaymentModal switchOffModal={switchOffModal} />
        )}
      </div>
    );
  } else {
    return (
      <div className="messagess-cont no-borrd">
        <div className="private-mess-container">
          <div className="total-unread-box bor-vc">
            <div className="pub-icon">
              <PiMegaphoneBold />
            </div>
            <div className="pub-eadl">
              <div className="unread-ttst">Create public message</div>
              <div className="send-mess-evr">
                Send a message to everyone on 2GEDA
              </div>
            </div>
          </div>
          <div className="messages-container-bx">
            {Data.map((message, index) => (
              <PublicShortMessage
                key={index}
                name={message.name}
                text={message.text}
                visib={message.new === "no" ? "vic" : undefined}
                handleGotoPublicMessagBox={handleGotoPublicMessagBox}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

// payment Modal

const BCPaymentModal = ({ switchOffModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const BCpricing = [
    {
      subscription: "Basic",
      price: 1000,
      noOfReceivers: "1000 users",
    },
    {
      subscription: "Standard",
      price: 5000,
      noOfReceivers: "5000 users",
    },
    {
      subscription: "Premium",
      price: 10000,
      noOfReceivers: "10,000 users",
    },
    {
      subscription: "Basic",
      price: 50000,
      noOfReceivers: "50,000 users",
    },
  ];

  const handleClick = (price) => {
    setSelectedOption(price);
  };

  return (
    <div>
      <Modal>
        <div className="bg-white h-[85%] lg:h-[80%] mt-[15vh] lg:mb-[5vh]  rounded-lg md:mr-[10%]  lg:mr-[20%]">
          <div className="flex justify-end">
            <button
              onClick={switchOffModal}
              className="text-gray-600 hover:text-gray-800"
            >
              <IoMdClose className="size-12" />
            </button>
          </div>
          <div className="mt-0 h-full">
            <div className="h-[25%] lg:h-[28%] mt-2">
              <img className="h-full mx-auto" src={connectIMG} alt="connect" />
            </div>
            <div className="w-full px-2 md:px-[4rem] lg:p-6 md:w-[45vw] lg:w-[40vw] ">
              <div className=" ">
                <h2 className="text-center font-semibold text-[2rem] text-black">
                  Send messages to everyone on 2geda
                </h2>
                <p className="text-center mt-8 lg:px-8">
                  want to continue to reach all app users instantly with a
                  broadcast message?
                </p>
              </div>
              <div>
                <span className="text-[2rem] mt-8 font-semibold lg:px-8 text-start text-black">
                  Select a plan
                </span>

                <div className="w-full">
                  <div className="mt-8 flex w-[100%] flex-wrap gap-8 justify-center items-center">
                    {BCpricing.map((item, index) => (
                      <div
                        key={index}
                        className="w-[45%] border-[grey] border-2 rounded hover:border-[#4f0da3]"
                        onClick={() => handleClick(item.price)}
                      >
                        <div className="flex justify-between mt-2 pl-2 w-full gap-[10%]">
                          <p className="ml-2 mt-2">{item.subscription}</p>

                          <div className="mt-1 rounded-bl-lg rounded-tl-lg flex justify-center items-center w-[45%] lg:w-[30%] bg-[#4f0da3]">
                            <p className="text-[1.4rem] pt-2  text-white">
                              ₦{item.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex w-full ">
                          <p className="ml-2 w-[70%] pl-2 text-2xl text-start font-semibold">
                            {item.noOfReceivers}
                          </p>
                          <input
                            className="accent-[#4f0da3] w-[20%]"
                            type="radio"
                            value={item.price}
                            name="radio"
                            onChange={() => {}}
                            checked={selectedOption === item.price}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <ActionButton
                    bg="bg-[#4f0da3] mt-8 lg:mt-16 lg:px-8 text-white"
                    label="Proceed to Checkout"
                    type="submit"
                    onClick={""}
                  />
                </div>
                {/* this is just to show that the price selection works */}
                <h1>{selectedOption}</h1>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PublicMessage;
