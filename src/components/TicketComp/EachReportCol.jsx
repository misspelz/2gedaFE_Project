import { VscDebugStepOut } from "react-icons/vsc";
import TicRepDetail from "../Modals/TicRepDetail";
import { useState } from "react";

const EachReportCol = () => {
  const [isTicOpen, setIsTicOpen] = useState(false);

  const handleTicOpen = (e) => {
    setIsTicOpen(true);
  };
  const handleTicClose = (e) => {
    setIsTicOpen(false);
  };
  return (
    <>
      {isTicOpen && (
        <div className="modal-full-container">
          <TicRepDetail handleTicClose={handleTicClose} />
        </div>
      )}
      <div className="each-col-rep-cont flex " onClick={handleTicOpen}>
        <div className="rep-col-left flex ">
          <div className="rep-icon-bx flex">
            <VscDebugStepOut className="rotate-icon" />
          </div>
          <div className="name-buyer-id">
            <div className="name-byr">Awokunle Faith</div>
            <div className="id-buyr">ID: #8728891</div>
          </div>
          <div className="tot-tic-bxb flex">1 ticket</div>
        </div>
        <div className="rep-col-right">
          <div className="name-byr">June 24, 2023</div>
          <div className="total-amt-byr"># 5,000.00</div>
        </div>
      </div>
    </>
  );
};

export default EachReportCol;
