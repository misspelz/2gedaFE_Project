import { useEffect } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import "./second.css";
import { useState } from "react";
import UpComingEvent from "../../components/TicketComp/UpComingEvent";
import ActiveEvent from "../../components/TicketComp/ActiveEvent";
import PastEvent from "../../components/TicketComp/PastEvent";

const MyEvent = ({ handleMyEventCloseContainerClick, handleBackClick }) => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TicketSearchComp
        label={"My Events"}
        handleCloseContainerClick={handleMyEventCloseContainerClick}
        add={"add"}
      />
      <div className="my-event-container">
        <div className="tab-event-box flex">
          <div
            className={`eah-tab-bx flex ${
              activeTab === "Upcoming" ? "tab-activ" : ""
            }`}
            onClick={() => handleTabClick("Upcoming")}
          >
            Upcoming
          </div>
          <div
            className={`eah-tab-bx flex ${
              activeTab === "Active" ? "tab-activ" : ""
            }`}
            onClick={() => handleTabClick("Active")}
          >
            Active events
          </div>
          <div
            className={`eah-tab-bx flex ${
              activeTab === "Past" ? "tab-activ" : ""
            }`}
            onClick={() => handleTabClick("Past")}
          >
            Past events
          </div>
        </div>
      </div>

      {activeTab === "Upcoming" && (
        <UpComingEvent handleBackClick={handleBackClick} />
      )}
      {activeTab === "Active" && (
        <ActiveEvent handleBackClick={handleBackClick} />
      )}
      {activeTab === "Past" && <PastEvent handleBackClick={handleBackClick} />}
    </>
  );
};

export default MyEvent;
