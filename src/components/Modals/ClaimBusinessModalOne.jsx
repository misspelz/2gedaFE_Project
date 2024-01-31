import { AiOutlineArrowLeft } from "react-icons/ai";
import ActionButton from "../Commons/Button";

const ClaimBusinessModalOne = ({
  handleClaimClickCloseOne,
  handleClaimClickTwo,
}) => {
  return (
    <div className="postFormModal-container status-modal-container">
      <div className="over-scr">
        {" "}
        <div className="busi-mod-header">
          <div className="busi-bxs">
            <AiOutlineArrowLeft
              className="cls-post"
              onClick={handleClaimClickCloseOne}
            />
            <div className="fels">
              <div className="claim">Claim business</div>
            </div>
            <img src="images/lo2.png" alt="" />
          </div>
        </div>
        <div className="claim-gen-bdy">
          <div className="letter-dear provid">Provide business information</div>
          <div className="letter-bdy">
            Enter business details for ownership claim
          </div>
          <div className="input-containe-claim">
            <div className="double-input">
              <div className="inp-label-box">
                <label htmlFor="">Business name</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Enter business name"
                />
              </div>
              <div className="inp-label-box">
                <label htmlFor="">Business address</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Enter business address"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box">
                <label htmlFor="">Business description</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="start typing"
                />
              </div>
              <div className="inp-label-box">
                <label htmlFor="">Phone number</label>
                <input
                  type="tel"
                  className="claim-inp"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="claim-inp"
                  placeholder="Enter email address"
                />
              </div>
              <div className="inp-label-box">
                <label htmlFor="">Website(optional)</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Enter website link"
                />
              </div>
            </div>
          </div>
          <div className="act-bttn-claim" onClick={handleClaimClickTwo}>
            <ActionButton label={"Continue"} />
          </div>

          <div className="step-rect-cont">
            <div className="step-rec"></div>
            <div className="step-rec ash"></div>
            <div className="step-rec ash"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimBusinessModalOne;
