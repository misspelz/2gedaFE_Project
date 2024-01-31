import { AiOutlineArrowLeft, AiOutlineCheck } from "react-icons/ai";
import ActionButton from "../Commons/Button";

const ClaimBusinessModal = ({ handleClaimClickClose, handleClaimClickOne }) => {
  return (
    <div className="postFormModal-container status-modal-container">
      <div className="over-scr">
        {" "}
        <div className="busi-mod-header">
          <div className="busi-bxs">
            <AiOutlineArrowLeft
              className="cls-post"
              onClick={handleClaimClickClose}
            />
            <div className="fels">
              <div className="claim">Claim business</div>
            </div>
            <img src="images/lo2.png" alt="" />
          </div>
        </div>
        <div className="claim-gen-bdy">
          <div className="letter-dear">Dear Business Owner,</div>
          <div className="letter-bdy">
            Thank you for your interest in claiming your business on 2geda. To
            ensure the accuracy and security of our directory, we require that
            you verify your ownership of the business before proceeding.
          </div>
          <div className="why-owner-imp-box">
            <div className="why-owner-head">
              Why Ownership Verification is Important
            </div>
            <div className="letter-bdy">
              Verifying ownership helps us maintain the integrity of our
              directory and ensures that only authorized individuals have
              control over their business listings. This process helps prevent
              unauthorized claims and keeps the information up-to-date and
              accurate for our users.
            </div>
          </div>
          <div className="letter-dear">
            To claim your business, follow the steps below
          </div>
          <div className="steps-container-box">
            <div className="step-container">
              <div className="check-cir">
                <AiOutlineCheck />
              </div>
              <div className="step-text-box">
                <div className="step-count">STEP 1</div>
                <div className="letter-dear">Provide business information</div>
              </div>
            </div>
            <div className="bord-let"></div>
            <div className="step-container">
              <div className="check-cir">
                <AiOutlineCheck />
              </div>
              <div className="step-text-box">
                <div className="step-count">STEP 2</div>
                <div className="letter-dear">Upload Ownership Documents</div>
              </div>
            </div>
            <div className="bord-let"></div>

            <div className="step-container">
              <div className="check-cir">
                <AiOutlineCheck />
              </div>
              <div className="step-text-box">
                <div className="step-count">STEP 3</div>
                <div className="letter-dear">Verify your identity</div>
              </div>
            </div>
          </div>
          <div className="letter-bdy">
            <span className="letter-dear">Important Note: </span>Falsely
            claiming a business that you do not own is a violation of our terms
            of service and may result in the removal of your listing. Please
            only proceed with claiming your business if you are the rightful
            owner or authorized representative.
          </div>
          <div className="act-bttn-claim" onClick={handleClaimClickOne}>
            <ActionButton label={"Proceed to claim"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimBusinessModal;
