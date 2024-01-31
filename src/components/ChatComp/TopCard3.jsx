import { BiMessageDetail } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import "./style.css";

const TopCard3 = ({ data, handleTopCard3Click }) => {
  return (
    <div className={`top-card-container priv`} onClick={handleTopCard3Click}>
      <div className="problem"></div>
      <div className="cont-icon-add nnnn">
        <BiMessageDetail className="nnnn" />
        <div className="add-mess">
          <AiOutlinePlus />
        </div>
      </div>
      <div className="tot-chat">{data}</div>
      <div className="identifier-text">Active friends</div>
    </div>
  );
};

export default TopCard3;
