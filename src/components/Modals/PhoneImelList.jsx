import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import "./third.css";

const PhoneImelList = ({ handleImelListClose, handleImelCreateClick }) => {
  return (
    <>
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          {" "}
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineArrowLeft
                className="cls-post"
                onClick={handleImelListClose}
              />
              <div className="fels">
                <div className="claim">Phone IMEI</div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="phone-container-imel ">
          <div className="full-imel-container imel-bx">
            <div className="imel-bx flex">
              <div className="phone-mel-txt">
                <div className="main-txt-mel">Galaxy Fold</div>
                <div className="mell-txt">#34567345679864432345569097</div>
              </div>
            </div>
            <div className="claim-visit-page-btn">
              <button className="claim-visit-btn red-bxt">Delete</button>
              <button className="claim-visit-btn visi-pae">Edit</button>
            </div>
          </div>
          <div className="full-imel-container imel-bx">
            <div className="imel-bx flex">
              <div className="phone-mel-txt">
                <div className="main-txt-mel">Galaxy Fold</div>
                <div className="mell-txt">#34567345679864432345569097</div>
              </div>
            </div>
            <div className="claim-visit-page-btn">
              <button className="claim-visit-btn red-bxt">Delete</button>
              <button className="claim-visit-btn visi-pae">Edit</button>
            </div>
          </div>
          <div className="full-imel-container imel-bx">
            <div className="imel-bx flex">
              <div className="phone-mel-txt">
                <div className="main-txt-mel">Galaxy Fold</div>
                <div className="mell-txt">#34567345679864432345569097</div>
              </div>
            </div>
            <div className="claim-visit-page-btn">
              <button className="claim-visit-btn red-bxt">Delete</button>
              <button className="claim-visit-btn visi-pae">Edit</button>
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

export default PhoneImelList;
