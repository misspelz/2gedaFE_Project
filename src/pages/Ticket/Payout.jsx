import { useEffect, useState } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import ActionButton from "../../components/Commons/Button";
import RequestSucess from "../../components/Modals/RequestSucess";
import PayoutHistory from "./PayoutHistory";
const Payout = ({ handlePayoutCloseContainerClick }) => {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const handleHistoryOpen = (e) => {
    setIsHistoryOpen(true);
  };
  const handleHistoryClose = (e) => {
    setIsHistoryOpen(false);
  };

  const handleRequestOpen = (e) => {
    setIsRequestOpen(true);
  };
  const handleRequestClose = (e) => {
    setIsRequestOpen(false);
    handlePayoutCloseContainerClick();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isRequestOpen && (
        <div className="modal-full-container">
          <RequestSucess handleRequestClose={handleRequestClose} />
        </div>
      )}
      {isHistoryOpen && (
        <PayoutHistory handleHistoryClose={handleHistoryClose} />
      )}
      {!isHistoryOpen && (
        <>
          <TicketSearchComp
            label={"Payout"}
            handleCloseContainerClick={handlePayoutCloseContainerClick}
            add={"add"}
          />

          <div className="payout-container">
            <div className="pay-top-box">
              <div className="avail-bal-cont flex">
                <div className="avail-bal">Available balance</div>
                <div className="view-roy" onClick={handleHistoryOpen}>
                  View history
                </div>
              </div>
              <div className="avail-tol-bal"># 48,500.50</div>

              <div className="ifo-tvt">
                Amount will be displayed in your local currency
              </div>
              <div className="first-cir-pay"></div>
              <div className="sec-cir-pay"></div>
            </div>
            <form action="">
              <div className="withdraw-info-box">
                <div className="heawid-line">Withdrawal information</div>
                <div className="double-input">
                  <div className="inp-label-box">
                    <select name="" id="" className="claim-inp ">
                      <option value="">Select category</option>
                      <option value="Driver_licence">Driver Licence</option>
                      <option value="NIN">NIN</option>
                      <option value="Voters_card">Voter's Card</option>
                    </select>
                  </div>
                </div>
                <div className="event-inp-overall-cont">
                  <label htmlFor="" className="adj">
                    Account name
                  </label>
                  <input type="text" className="create-evt-inp" />
                </div>
                <div className="event-inp-overall-cont">
                  <label htmlFor="" className="adj">
                    Account number
                  </label>
                  <input type="text" className="create-evt-inp" />
                </div>

                <div className="act-continue-btn">
                  <ActionButton label={"Add Info"} type={"button"} />
                </div>
              </div>
              <div className="withdraw-info-box">
                <div className="heawid-line">Withdrawal request</div>

                <div className="event-inp-overall-cont flex gad">
                  <label htmlFor="" className="adj">
                    Amount
                  </label>
                  <div className="curren">#</div>
                  <input
                    type="text"
                    className="create-evt-inp wit-inp"
                    placeholder="Enter amount to withdraw"
                  />
                </div>

                <div className="act-continue-btn" onClick={handleRequestOpen}>
                  <ActionButton label={"Request"} type={"button"} />
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Payout;
