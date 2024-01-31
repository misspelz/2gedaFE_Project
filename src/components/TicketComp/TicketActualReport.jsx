import { AiOutlineDownload } from "react-icons/ai";
import "./second.css";
import EachReportCol from "./EachReportCol";

const TicketActualReport = () => {
  return (
    <div className="tick-actual-container">
      <div className="down-csv-cont flex">
        <div className="event-rep">Event report</div>
        <div className="act-btn-cont flex ">
          <button className={`action-btn flex cent inb`}>
            <AiOutlineDownload className="cl-upload" />
            <div className="bt-txt">Download .CSV</div>
          </button>
        </div>
      </div>
      <div className="all-rep-box">
        <EachReportCol />
        <EachReportCol />
        <EachReportCol />
        <EachReportCol />
        <EachReportCol />
        <EachReportCol />
      </div>
    </div>
  );
};

export default TicketActualReport;
