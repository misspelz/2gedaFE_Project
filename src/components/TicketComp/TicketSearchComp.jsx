import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const TicketSearchComp = ({ label, handleCloseContainerClick, add }) => {
  return (
    <div className="buy-sell-comp-cont tic-sea">
      <div className="back-title">
        <div className="bc-ico" onClick={handleCloseContainerClick}>
          <AiOutlineArrowLeft className="ti-bc" />
        </div>
        <div className="head-line">{label}</div>
      </div>
      <div className={`search-product ticccc ${add} `}>
        <div className="sear-input-pro">
          <input type="text" className="inp-pro" placeholder="Search Events" />
        </div>
        <BiSearch className="seah-con" />
      </div>
    </div>
  );
};

export default TicketSearchComp;
