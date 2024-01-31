import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import "./third.css";
import ManageAdCard from "../ProfilleComp/ManageAdCard";
import ActionButton from "../Commons/Button";
import AdPolicy from "./AdPolicy";
import { useState } from "react";
import NewAd from "./NewAd";

const adData = [
  {
    adtitle: "Summer Sale 2023",
    adcattxt: "Promotions",
    expiredate: "7",
  },
  {
    adtitle: "New Product Launch",
    adcattxt: "Featured Products",
    expiredate: "10",
  },
  {
    adtitle: "Holiday Specials",
    adcattxt: "Seasonal Offers",
    expiredate: "5",
  },
  {
    adtitle: "Limited Time Offer",
    adcattxt: "Flash Sales",
    expiredate: "3",
  },

  {
    adtitle: "Summer Sale 2023",
    adcattxt: "Promotions",
    expiredate: "7",
  },
];
const isDataEmpty = adData.length === 0;

const ManageAdvert = ({ handleManAdClose }) => {
  const [isPolicyAdOpen, setIsPolicyAdOpen] = useState(false);
  const [isNewAdOpen, setIsNewAdOpen] = useState(false);

  const handleNewAdClick = () => {
    setIsNewAdOpen(true);
  };
  const handleNewAdClose = () => {
    setIsNewAdOpen(false);
  };

  const handlePolicyAdClick = () => {
    setIsPolicyAdOpen(true);
  };
  const handlePolicyAdClose = () => {
    setIsPolicyAdOpen(false);
  };
  return (
    <>
      {isPolicyAdOpen && (
        <div className="modal-full-container">
          <AdPolicy
            handlePolicyAdClose={handlePolicyAdClose}
            handleNewAdClick={handleNewAdClick}
          />
        </div>
      )}
      {isNewAdOpen && (
        <div className="modal-full-container">
          <NewAd handleNewAdClose={handleNewAdClose} />
        </div>
      )}
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          {" "}
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineArrowLeft
                className="cls-post"
                onClick={handleManAdClose}
              />
              <div className="fels">
                <div className="claim">Manage Adverts</div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
          <div className="phone-container-imel ">
            {isDataEmpty ? (
              <div className="searchEmpty-bbox">
                <div className="empt-box-sea">
                  <img src="images/em1.png" alt="" />
                  <div className="notin-is">No advert yet!</div>
                  <div className="link-ad-policy" onClick={handlePolicyAdClick}>
                    Read our Ad Policy
                  </div>
                  <div className="act-n">
                    <ActionButton label={"Post an Advert"} bg={""} />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <ManageAdCard data={adData} />
                <div className="add-imel flex" onClick={handleNewAdClick}>
                  <AiOutlinePlus />
                </div>
              </div>
            )}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default ManageAdvert;
