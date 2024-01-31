import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import QuickPickCol from "../../components/StereoComp/QuickPickCol";
import ArtisitStereoSearchResult from "../../components/StereoComp/ArtisitStereoSearchResult";

const DataPlay = [
  {
    text: "All",
  },
  {
    text: "Songs",
  },
  {
    text: "Artist",
  },
];

const StereoSearchResult = ({ handleStrSearchClose }) => {
  const [activeListTab, setActiveListTab] = useState("All");

  const handleListTabClick = (text) => {
    setActiveListTab(text);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="quik-container-box">
      <div className="profile-dot-bx flex red-wid">
        <div className="prof-back flex">
          <AiOutlineArrowLeft onClick={handleStrSearchClose} />
          <div className="head-line bus-dir">Search</div>
        </div>
      </div>
      <div className="search-container-right flex">
        <BiSearch className="search-icon-right" />
        <input
          type="text"
          className="right-inp-sear"
          placeholder="Search here"
        />
      </div>
      <div className="select-what-display w-dis">
        <div className="ma-ma-wd flex">
          {DataPlay.map((item, index) => (
            <div
              key={index}
              className={`tab-item ${
                item.text === activeListTab
                  ? "sel-act inc-wid"
                  : "anot-wid add-bor  inc-wid"
              }`}
              onClick={() => handleListTabClick(item.text)}
            >
              <div className="dis-sel-name conn-t-txt">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      {activeListTab === "All" ? (
        <div className="picks-row-cont">
          <QuickPickCol />
          <QuickPickCol />
          <ArtisitStereoSearchResult />
        </div>
      ) : null}
      {activeListTab === "Songs" ? (
        <div className="picks-row-cont">
          <QuickPickCol />
          <QuickPickCol />
        </div>
      ) : null}
      {activeListTab === "Artist" ? (
        <div className="picks-row-cont">
          <QuickPickCol />
          <QuickPickCol />
        </div>
      ) : null}
    </div>
  );
};

export default StereoSearchResult;
