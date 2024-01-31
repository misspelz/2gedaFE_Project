import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import CurrentChatMenuModal from "../Modals/CurrentChatMenuModal";
import { useState } from "react";

const ChatHeader = ({ handleCloseMessagBox }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="chat-header-container">
      <div className="left-chat-header">
        <AiOutlineArrowLeft
          className="back-chat"
          onClick={handleCloseMessagBox}
        />

        <div className="user-current">
          <img src="images/pic2.png" alt="" />
          <div className="curr-user-act">
            <div className="curr-user-nm">Hassan Mubaraq</div>
            <div className="ac-now">
              <div className="ci-acc"></div>
              <div className="act-now">Active now</div>
            </div>
          </div>
        </div>
      </div>

      <div className="back-chat ddt">
        <div className="dot-ccc" onClick={openModal}>
          <BiDotsVerticalRounded />
        </div>
        {isModalOpen && <CurrentChatMenuModal />}
      </div>
    </div>
  );
};

export default ChatHeader;
