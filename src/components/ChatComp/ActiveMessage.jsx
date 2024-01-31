import { useEffect } from "react";
import ChatShortMessage from "../Commons/ChatShortMessage";
import EmptyChat from "./EmptyChat";

const ActiveMessage = ({ Data, handleGotoMessagBox }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (Data.length === 0) {
    return (
      <div className="emp-chat-bor">
        <EmptyChat />
        <div className="connenct-txt">Connect with people now </div>
      </div>
    );
  } else {
    return (
      <div className="messagess-cont">
        <div className="private-mess-container">
          <div className="total-unread-box">
            <div className="act-ve"></div>
            <div className="unread-ttst">Active Friends</div>
          </div>
          <div className="messages-container-bx">
            {Data.map((message, index) => (
              <ChatShortMessage
                key={index}
                name={message.name}
                text={message.text}
                visib={message.new === "no" ? "vic" : undefined}
                nota={message.new === "no" ? "vic" : undefined}
                handleGotoMessagBox={handleGotoMessagBox}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ActiveMessage;
