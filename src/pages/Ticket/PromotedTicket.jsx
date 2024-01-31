import { useEffect } from "react";
import TickectCardFull from "../../components/TicketComp/TickectCardFull";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";

const PromotedTicket = ({ handleCloseContainerClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TicketSearchComp
        label={"Promoted events"}
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

export default PromotedTicket;
