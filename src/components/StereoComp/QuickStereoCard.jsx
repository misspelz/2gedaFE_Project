import { BsPlayFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./style.css";
import { useState } from "react";
import StereoMenu from "../Modals/StereoMenu";

const QuickStereoCard = () => {
  const [isStrCardMenuOpen, setIsStrCardMenuOpen] = useState(false);
  const handleStrCardMenuOpen = () => {
    setIsStrCardMenuOpen(!isStrCardMenuOpen);
  };
  return (
    <div className="quick-card-box">
      <div className="img-quick-bx">
        {isStrCardMenuOpen && <StereoMenu />}
        <div className="dot-bx-cn flex" onClick={handleStrCardMenuOpen}>
          <BiDotsVerticalRounded />
        </div>
        <img src="images/pic2.png" alt="" />
      </div>
      <div className="pplay-txt-bx flex">
        <div className="txt-cont-bx">
          <div className="song-title">Take me home ft...</div>
          <div className="artsit-name">Billie Eilish</div>
        </div>
        <div className="play-bcx flex">
          <BsPlayFill />
        </div>
      </div>
    </div>
  );
};

export default QuickStereoCard;
