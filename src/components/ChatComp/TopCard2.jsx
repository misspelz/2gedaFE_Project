import { VscBroadcast } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import "./style.css";

const TopCard2 = ({ handleTopCard2Click, data }) => {
  return (
    <div className={`top-card-container frd-act`} onClick={handleTopCard2Click}>
      <div className="problem"></div>
      <div className="cont-icon-add">
        <VscBroadcast />
        <div className="add-mess">
          <AiOutlinePlus />
        </div>
      </div>
      <div className="tot-chat">{data}</div>
      <div className="identifier-text">Public messages</div>
    </div>
  );
};

export default TopCard2;
