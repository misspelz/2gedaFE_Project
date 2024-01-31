import { AiOutlineArrowLeft } from "react-icons/ai";
import "./third.css";
import ActionButton from "../Commons/Button";

const PhoneImelCreate = ({ handleImelCreateClose }) => {
  return (
    <>
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          {" "}
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineArrowLeft
                className="cls-post"
                onClick={handleImelCreateClose}
              />
              <div className="fels">
                <div className="claim">Create Phone IMEI</div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="phone-container-imel ">
          <div className="double-input">
            <div className="inp-label-box">
              <input
                type="text"
                className="claim-inp"
                placeholder="Enter Preferrred name"
              />
            </div>
          </div>
          <div className="double-input">
            <div className="inp-label-box">
              <input
                type="text"
                className="claim-inp"
                placeholder="Enter Phone IMEI"
              />
            </div>
          </div>
          <div className="double-input">
            <div className="inp-label-box">
              <select name="" id="" className="claim-inp">
                <option value="" disabled>
                  Select category
                </option>
                <option value="Driver_licence">Serial No</option>
              </select>
            </div>
          </div>

          <div className="act-bttn-claim">
            <ActionButton label={"Save"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneImelCreate;
