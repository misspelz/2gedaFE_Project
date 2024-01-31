import { AiOutlineArrowLeft } from "react-icons/ai";
import { GiMusicSpell } from "react-icons/gi";
import QuickPickCol from "../../components/StereoComp/QuickPickCol";
import { useEffect } from "react";

const QuickPicks = ({ handleBigClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="quik-container-box">
      <div className="profile-dot-bx flex red-wid">
        <div className="prof-back flex">
          <AiOutlineArrowLeft onClick={handleBigClose} />
          {/* <div className="head-line bus-dir">Quick picks</div> */}
        </div>
      </div>
      <div className="header-stereo-component">
        <img src="images/back.png" alt="" />
        <div className="icon-dteail-bx flex">
          <GiMusicSpell />
          <div className="header-details-tot">
            <div className="detail-eadr">Today’s big hits </div>
            <div className="tot-songs">230 songs</div>
          </div>
        </div>
      </div>
      <div className="picks-row-cont">
        <QuickPickCol />
        <QuickPickCol />
        <QuickPickCol />
        <div className="im-stereo-ads">
          <img src="images/ads8.png" alt="" />
        </div>
        <QuickPickCol />
      </div>
    </div>
  );
};

export default QuickPicks;
