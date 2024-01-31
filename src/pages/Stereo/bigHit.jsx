import { AiOutlineArrowLeft } from "react-icons/ai";
// import { GiMusicSpell } from "react-icons/gi";
import QuickPickCol from "../../components/StereoComp/QuickPickCol";
import { useEffect } from "react";
import { useState } from "react";

const Data = [
  {
    text: "All",
  },
  {
    text: "Afrobeats",
  },
  {
    text: "Pop",
  },
  {
    text: "Rock",
  },
  {
    text: "RnB",
  },
  {
    text: "Jazz",
  },
];

const BigHit = ({ handleHitClose }) => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (text) => {
    setActiveTab(text);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="quik-container-box">
      <div className="profile-dot-bx flex red-wid">
        <div className="prof-back flex">
          <AiOutlineArrowLeft onClick={handleHitClose} />
          {/* <div className="head-line bus-dir">Quick picks</div> */}
        </div>
      </div>
      <div className="select-what-display w-dis">
        {Data.map((item, index) => (
          <div
            key={index}
            className={`tab-item ${
              item.text === activeTab
                ? "sel-act connect-tab incr-wd"
                : "anot-wid add-bor  connect-tab incr-wd"
            }`}
            onClick={() => handleTabClick(item.text)}
          >
            <div className="dis-sel-name conn-t-txt inliss">{item.text}</div>
          </div>
        ))}
      </div>
      {activeTab === "All" ? (
        <div className="picks-row-cont">
          <QuickPickCol />
          <QuickPickCol />
          <QuickPickCol />
          <div className="im-stereo-ads">
            <img src="images/ads8.png" alt="" />
          </div>
          <QuickPickCol />
        </div>
      ) : null}
    </div>
  );
};

export default BigHit;
