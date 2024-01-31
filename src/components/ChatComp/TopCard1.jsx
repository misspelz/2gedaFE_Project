import { BiMessageDetail } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import "./style.css";

const TopCard1 = ({ bg, handleTopCard1Click, data }) => {
  return (
    <div className={`top-card-container ${bg}`} onClick={handleTopCard1Click}>
      <div className="problem"></div>
      <div className="cont-icon-add">
        <BiMessageDetail />
        <div className="add-mess">
          <AiOutlinePlus />
        </div>
      </div>
      <div className="tot-chat">{data}</div>
      <div className="identifier-text">Private messages</div>
    </div>
  );
};

export default TopCard1;
