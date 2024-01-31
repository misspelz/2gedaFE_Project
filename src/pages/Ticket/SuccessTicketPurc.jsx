import { useEffect } from "react";
import ActionButton from "../../components/Commons/Button";

const SuccessTicketPurc = ({ handleCloseAllClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="detail-bx-container bagw">
      <div className="searchEmpty-bbox ddwn">
        <div className="empt-box-sea">
          <img src="images/em2.png" alt="" />
          <div className="full-notin">
            Your ticket purchase is being processed You will receive a mail
            containing your ticket soon.
          </div>
          <div className="choose-act-btn" onClick={handleCloseAllClick}>
            <ActionButton label={"Back to tickets"} bg={"wid"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessTicketPurc;
