import { useEffect } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import { MdCloudDone } from "react-icons/md";
import "./second.css";
import TicketActualReport from "../../components/TicketComp/TicketActualReport";
import { useState } from "react";

const TicketReport = ({ handleTicketReportCloseContainerClick }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);

  const handleReportGet = (e) => {
    e.preventDefault();
    setIsReportOpen(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TicketSearchComp
        label={"Ticket reports"}
        handleCloseContainerClick={handleTicketReportCloseContainerClick}
        add={"add"}
      />
      <form action="">
        <div className="double-input mv-dwn">
          <div className="inp-label-box">
            <select name="" id="" className="claim-inp ">
              <option value="">Select event</option>
              <option value="Driver_licence">Remove from ticket sales</option>
              <option value="NIN">Add to ticket price</option>
            </select>
          </div>
        </div>
        <div className="act-btn-cont flex cent mv-bit">
          <button className={`action-btn flex cent`} onClick={handleReportGet}>
            <MdCloudDone className="cl-done" />
            <div className="bt-txt">Get report</div>
          </button>
        </div>
      </form>

      {isReportOpen && <TicketActualReport />}
    </>
  );
};

export default TicketReport;
