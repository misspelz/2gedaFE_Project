import { useEffect } from "react";
import TickectCardFull from "../../components/TicketComp/TickectCardFull";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";

const EventThisWeekAll = ({ handleCloseContainerClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TicketSearchComp
        label={"Event This Week"}
        handleCloseContainerClick={handleCloseContainerClick}
      />
      <div className="ticket-full-box">
        <TickectCardFull />
        <TickectCardFull />
        <TickectCardFull />
        <TickectCardFull />
        <TickectCardFull />
        <TickectCardFull />
      </div>
    </>
  );
};

export default EventThisWeekAll;
