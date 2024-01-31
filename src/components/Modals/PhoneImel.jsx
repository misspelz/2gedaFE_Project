import {
  AiOutlineArrowLeft,
  AiOutlineRight,
  AiOutlinePlus,
} from "react-icons/ai";
import "./third.css";

const PhoneImel = ({
  handleImelClose,
  handleImelListClick,
  handleImelCreateClick,
}) => {
  return (
    <>
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          {" "}
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineArrowLeft
                className="cls-post"
                onClick={handleImelClose}
              />
              <div className="fels">
                <div className="claim">Phone IMEI/ Gadget serial no</div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="phone-container-imel ">
          <div className="imel-bx flex" onClick={handleImelListClick}>
            <div className="phone-mel-txt">
              <div className="main-txt-mel">Phone IMEI</div>
              <div className="mux-txt">3 entries</div>
            </div>
            <div className="cont-arrow">
              <AiOutlineRight />
            </div>
          </div>
          <div className="imel-bx flex">
            <div className="phone-mel-txt">
              <div className="main-txt-mel">Serial number</div>
              <div className="mux-txt">3 entries</div>
            </div>
            <div className="cont-arrow">
              <AiOutlineRight />
            </div>
          </div>
          <div className="add-imel flex" onClick={handleImelCreateClick}>
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneImel;
