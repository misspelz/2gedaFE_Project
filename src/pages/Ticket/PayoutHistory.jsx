import { useEffect } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import HistoryCol from "../../components/TicketComp/HistoryCol";
const PayoutHistory = ({ handleHistoryClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TicketSearchComp
        label={"Payment history"}
        handleCloseContainerClick={handleHistoryClose}
        add={"add"}
      />

      <div className="payout-container">
        <select name="" id="" className="hist-mon-sel">
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
        </select>
      </div>

      <div className="row-with-hist-card">
        <HistoryCol />
        <HistoryCol />
        <HistoryCol />
        <HistoryCol />
        <HistoryCol />
        <HistoryCol />
        <HistoryCol />
        <HistoryCol />
        <HistoryCol />
        <HistoryCol />
      </div>
    </>
  );
};

export default PayoutHistory;
