import { useEffect } from "react";
import ActionButton from "../../components/Commons/Button";
import { PiCopySimple } from "react-icons/pi";
import { useState } from "react";

const SuccessTicketCreate = ({ handleCloseAllClick, eventUrl }) => {
  const [url] = useState(eventUrl);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      console.log("URL copied to clipboard:", url);
      setIsCopied(true);
      // Reset the "Copied" text after a certain time if needed
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Set your desired timeout duration here
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="detail-bx-container bagw">
      <div className="searchEmpty-bbox ddwn">
        <div className="empt-box-sea">
          <img src="images/em2.png" alt="" />
          <div className="notin-is">Your event has been created</div>
          <div className="full-notin">
            You can now share your unique ticket links to your attendees
          </div>

          <div className="copy-url-cont">
            <div className="url-txt">{url}</div>
            <PiCopySimple className="cp-icon" onClick={handleCopyClick} />
          </div>
          {isCopied && <div className="copied">Copied</div>}

          <div className="choose-act-btn" onClick={handleCloseAllClick}>
            <ActionButton label={"Back to tickets"} bg={"wid"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessTicketCreate;
