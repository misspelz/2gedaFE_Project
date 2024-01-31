import { AiOutlineArrowLeft} from "react-icons/ai";
import "./third.css";
import ActionButton from "../Commons/Button";

const PreviewNewAd = ({ handlePreviewAdClose }) => {
  return (
    <>
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          {" "}
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineArrowLeft
                className="cls-post"
                onClick={handlePreviewAdClose}
              />
              <div className="fels">
                <div className="claim">Advert Preview</div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
          <div className="phone-container-imel ">
            <div className="preview-container-bx">
              <div className="ad-title-bx">
                <div className="ad-tit-pre">Advert Title</div>
                <div className="main-a-pre-tit">2023 General election</div>
              </div>
              <div className="ad-title-bx">
                <div className="ad-tit-pre">Category</div>
                <div className="main-a-pre-tit">Homepage leaderboard</div>
              </div>
              <div className="ad-title-bx">
                <div className="ad-tit-pre">Duration</div>
                <div className="main-a-pre-tit">1 month</div>
              </div>
              <div className="ad-title-bx">
                <div className="ad-tit-pre">Advert Image</div>
                <img src="images/aduba.png" alt="" />
              </div>
              <div className="ad-title-bx">
                <div className="ad-tit-pre">Cost</div>
                <div className="main-a-pre-tit">#350,000</div>
              </div>
            </div>
            <div className="act-n">
              <ActionButton label={"Pay now"} bg={""} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewNewAd;
