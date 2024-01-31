import { MdOutlineAnalytics } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { PiWarningCircleBold } from "react-icons/pi";
import ReportSummary from "./ReportSummary";
import { useState } from "react";

const UpActiveTick = ({ rmv, Data }) => {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const handleSummaryOpen = (e) => {
    setIsSummaryOpen(true);
  };
  const handleSummaryClose = (e) => {
    setIsSummaryOpen(false);
  };
  return (
    <>
      {isSummaryOpen && (
        <div className="modal-full-container">
          <ReportSummary handleSummaryClose={handleSummaryClose} />
        </div>
      )}
      {Data.map((item, index) => (
        <div key={index} className="tick-full-card-container">
          <div className="tic-image-detail-bx">
            <div className="img-tick-cont cg-bd">
              <img
                src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
                alt=""
              />
            </div>
            <div className="event-details">
              <div className="event-name nm-evn">{item.name}</div>
              <div className="event-date dt-rd">
                {item.date}, {item.time}
              </div>
              <div className="location-box">
                {/* <MdLocationOn /> */}
                <div className="loca-txt cl loc-rd">
                  Eko Hotel and suites conference hall{" "}
                </div>
              </div>
              <div className="event-intr">
                Join us as we celebrate our musical stars and enjoy their
                performances made for you only!
              </div>
            </div>
          </div>
          <div className="claim-visit-page-btn">
            <button className={`claim-visit-btn flex cent visi-pae rd ${rmv}`}>
              <FiEdit />
              <span>Edit</span>
            </button>
            <button
              className="claim-visit-btn flex cent fir-bt rd"
              onClick={handleSummaryOpen}
            >
              <PiWarningCircleBold />
              <span>Summary</span>
            </button>
            <button className="claim-visit-btn flex cent fir-bt rd">
              <MdOutlineAnalytics />
              <span>Report</span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpActiveTick;
