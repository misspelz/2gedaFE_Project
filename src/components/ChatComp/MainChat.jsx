import { BiSolidMicrophone, BiSolidSend, BiSolidEdit } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import "./chat.css";
import { useEffect, useRef, useState } from "react";
import ChatInputField from "../Modals/chatInputField";

const MainChat = () => {
  const chatContainerRef = useRef(null);
  const [showChatInput, setShowChatInput] = useState(false);
  const [messages, setMessages] = useState([
    {
      name: "Wale Addyjum",
      text: "You should have sent the details together with the file....... You have sent the details together with the file.......",
      new: "no",
      timestamp: "11:09 PM",
      isUser: false, // This is a sample message from someone else
    },
    {
      name: "User Name",
      imageSrc: "images/pic2.png", // Replace with your image source
      new: "no",
      timestamp: "04:38 PM",
      isUser: false, // This is a sample user message with an image
    },
  ]);
  useEffect(() => {
    // Function to scroll to the bottom of the chat container
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    };

    // Scroll to the bottom when the component mounts
    scrollToBottom();
  }, [messages]);

  const handleMicEditClick = () => {
    // Toggle the display of ChatInputField
    setShowChatInput((prevShowChatInput) => !prevShowChatInput);
  };

  const handleSendMessage = (text, isUser) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedTime =
      (hours % 12 || 12) +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes +
      " " +
      amOrPm;
    // Create a new message object
    const newMessage = {
      name: "User Name", // You can replace this with the actual user's name
      text: text,
      new: "no",
      isUser: isUser,
      timestamp: formattedTime,
    };

    // Update the state to include the new message
    setMessages([...messages, newMessage]);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const message = e.target.elements.message.value.trim();
    if (message !== "") {
      handleSendMessage(message, true); // Send the message
      e.target.elements.message.value = ""; // Clear the input field
      setShowChatInput(false); // Hide the input field
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-chat-container">
      <div className="message-content">
        <div className="chat-cont" ref={chatContainerRef}>
          {messages.length === 0 && (
            <div className="chat-suggestion-container">
              <div className="sugg-head">Ice breaker? We got you!</div>
              <div className="sugg-boxx">
                <div className="suggestion-con">Hi, how are you?</div>
                <div className="suggestion-con">Do you like football?</div>
                <div className="suggestion-con">Do you have an office?</div>
                <div className="suggestion-con">I like your posts</div>
              </div>
            </div>
          )}
          <div className="time-mess-ent">Yesterday is gone</div>
          {messages.map((message, index) => (
            <div
              className={
                message.isUser ? "message-owner" : "chat-container-box"
              }
              key={index}
            >
              <div
                className={
                  message.isUser
                    ? "chat-message-connt owner"
                    : "chat-message-connt"
                }
              >
                {message.text && (
                  <div className="mess-time-bcx">{message.text}</div>
                )}
                {message.imageSrc && (
                  <div className="mess-img">
                    <img src={message.imageSrc} alt="" />
                  </div>
                )}
                <span className="lsd">
                  {message.timestamp}{" "}
                  {message.isUser ? <BsCheck2All className="seck" /> : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="field-inp-cont">
          {showChatInput && (
            <ChatInputField isUser={true} onSendMessage={handleSendMessage} />
          )}
        </div>
        <div className="mic-edit-boox">
          <div className="mic-mess">
            <BiSolidMicrophone />
          </div>
          <div className="mic-mess edt">
            {showChatInput ? (
              <button className="sed-btn" type="submit">
                <BiSolidSend />{" "}
              </button>
            ) : (
              <BiSolidEdit onClick={handleMicEditClick} />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainChat;
