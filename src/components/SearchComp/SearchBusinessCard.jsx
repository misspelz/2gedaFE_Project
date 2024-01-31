import { IoMdMail, IoIosGlobe } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import "./style.css";

const SearchBusinessCard = ({ handleClaimClick, handleBussinessClick }) => {
  return (
    <div className="business-search-card">
      <div className="business-logo-con">
        <img src="images/pic2.png" alt="" />
        <div className="business-name-loc">
          <div className="buss-nm">Happy Burger Joint</div>
          <div className="buss-loc">123 Main Street Los Angeles, CA 90001</div>
        </div>
      </div>
      <div className="buss-desc">
        Happy Burger Joint is a family-friendly restaurant specializing in
        delicious, gourmet burgers and hand-cut fries. We offer a wide range of
        burger options, from classic beef to vegetarian and vegan choices.{" "}
      </div>
      <div className="touch-with-bx">
        <button className="touch-btn">
          <IoMdMail />
          <div className="touch-btn-txt">Mail</div>
        </button>
        <button className="touch-btn">
          <IoCallSharp />
          <div className="touch-btn-txt">Call</div>
        </button>
        <button className="touch-btn">
          <IoIosGlobe />
          <div className="touch-btn-txt">View</div>
        </button>
      </div>
      <div className="claim-visit-page-btn">
        <button className="claim-visit-btn" onClick={handleClaimClick}>
          Claim business
        </button>
        <button
          className="claim-visit-btn visi-pae"
          onClick={handleBussinessClick}
        >
          Visit page
        </button>
      </div>
    </div>
  );
};

export default SearchBusinessCard;
