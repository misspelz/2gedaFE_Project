import { AiOutlineArrowLeft } from "react-icons/ai";
import ActionButton from "../Commons/Button";

const ClaimBusinessModalDone = ({ handleClaimClickCloseDone }) => {
  return (
    <div className="postFormModal-container status-modal-container">
      <div className="over-scr">
        {" "}
        <div className="busi-mod-header">
          <div className="busi-bxs">
            <AiOutlineArrowLeft className="cls-post viss" viss />
            <div className="fels">
              <div className="claim">Claim business</div>
            </div>
            <img src="images/lo2.png" alt="" />
          </div>
        </div>
        <div className="sucess-image">
          <img src="images/em2.png" alt="" />
          <div className="succ-msg">
            Thank you for submitting your business claim. We are reviewing your
            details for accuracy and security. Watch your email for confirmation
            and further instructions.
          </div>
        </div>
        <div
          className="act-bttn-claim dw-s"
          onClick={handleClaimClickCloseDone}
        >
          <ActionButton label={"Continue to business directory"} bg={"fs"} />
        </div>
      </div>
    </div>
  );
};

export default ClaimBusinessModalDone;
