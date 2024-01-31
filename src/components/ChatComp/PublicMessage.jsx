import { PiMegaphoneBold } from "react-icons/pi";
import PublicShortMessage from "../Commons/PublicShortMessage ";
import EmptyChat from "./EmptyChat";
import { useEffect } from "react";

const PublicMessage = ({ Data, handleGotoPublicMessagBox }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (Data.length === 0) {
    return (
      <div className="emp-chat-bor">
        <EmptyChat />
        <div className="connenct-txt">Send Broadcast to everyone </div>
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

export default PublicMessage;
