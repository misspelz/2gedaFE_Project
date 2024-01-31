import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Stick from "../Dashboard/Stick";
import { useEffect } from "react";

const AllSticking = ({ handleAllStickingClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="profile-dot-bx flex red-wid">
        <div className="prof-back flex">
          <AiOutlineArrowLeft onClick={handleAllStickingClose} />
          <div className="head-line bus-dir">Stickings</div>
        </div>
      </div>
      <div className="sear-bx-sticker flex">
        <BiSearch className="seah-con" />
        <input
          type="text"
          className="stic-inp"
          placeholder="Search keywords & name"
        />
      </div>

      <div className="profile-main-container">
        <Stick />
        <Stick />
        <Stick />
      </div>
    </>
  );
};

export default AllSticking;
