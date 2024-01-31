import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import CurrentChatMenuModal from "../Modals/CurrentChatMenuModal";
import { useState } from "react";

const ChatHeaderPublic = ({ handleClosePublicMessagBox }) => {
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
          onClick={handleClosePublicMessagBox}
        />

        <div className="user-current">
          <div className="curr-user-act">
            <div className="curr-user-nm">Twins arcade</div>
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

export default ChatHeaderPublic;
