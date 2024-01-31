import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";
import "./third.css";
import ActionButton from "../Commons/Button";
import { useState } from "react";
import PreviewNewAd from "./PreviewNewAd";

const NewAd = ({ handleNewAdClose }) => {
  const [isPreviewAdOpen, setIsPreviewAdOpen] = useState(false);

  const handlePreviewAdClick = (e) => {
    e.preventDefault();
    setIsPreviewAdOpen(true);
  };
  const handlePreviewAdClose = () => {
    setIsPreviewAdOpen(false);
  };
  return (
    <>
      {isPreviewAdOpen && (
        <div className="modal-full-container">
          <PreviewNewAd handlePreviewAdClose={handlePreviewAdClose} />
        </div>
      )}

      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          {" "}
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineArrowLeft
                className="cls-post"
                onClick={handleNewAdClose}
              />
              <div className="fels">
                <div className="claim">New Ad</div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
          <div className="phone-container-imel ">
            <div className="fir-info">
              <img src="images/brod.png" alt="" />
              <div className="ads-infooo">
                Reach out to World Audience in Large Numbers while you Pay Less.
              </div>
            </div>
            <form action="">
              <div className="duration-bx-container">
                <div className="double-input col-flex">
                  <div className="inp-label-box">
                    <label htmlFor="">Advert information</label>
                    <input
                      type="text"
                      className="claim-inp"
                      placeholder="Advert Titler"
                    />
                    <div className="norm-txt">
                      *This will not be visible to others
                    </div>
                  </div>
                  <div className="inp-label-box">
                    <select name="" id="" className="claim-inp">
                      <option value="" disabled>
                        Select Advert Category
                      </option>
                      <option value="Driver_licence">Serial No</option>
                    </select>
                  </div>
                </div>
                <div className="duration-cont">
                  <div className="duration-hea">Duration</div>
                  <div className="all-dura-bx">
                    <div className="dur-bx-each">24 hours</div>
                    <div className="dur-bx-each">48 hours</div>
                    <div className="dur-bx-each">72 hours</div>
                    <div className="dur-bx-each">1 week</div>
                    <div className="dur-bx-each">2 week</div>
                    <div className="dur-bx-each">1 month</div>
                    <div className="dur-bx-each">3 months</div>
                    <div className="dur-bx-each">1 year</div>
                  </div>
                </div>
              </div>
              <div className="double-input">
                <div className="inp-label-box">
                  <label htmlFor="">Start date</label>
                  <input
                    type="text"
                    className="claim-inp"
                    placeholder="Advert Titler"
                  />
                </div>
              </div>
              <div className="double-input">
                <div className="inp-label-box">
                  <label htmlFor="">Upload advert image</label>
                  <div className="selec-id-card">
                    <button className="seled-id-bn flex">
                      <AiOutlineCamera className="photo-ma" />
                      <div className="file-id-sel">Select file</div>
                    </button>
                    <div className="uploaded-nanme">filename.jpg</div>
                  </div>
                </div>
              </div>
              <div className="double-input">
                <div className="inp-label-box txt-nnx">
                  <textarea
                    type="text"
                    className="txt-rea"
                    placeholder="Add a note(optional)"
                  />
                </div>
              </div>
              <div className="act-n" onClick={handlePreviewAdClick}>
                <ActionButton label={"Continue"} bg={""} type={"submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAd;
