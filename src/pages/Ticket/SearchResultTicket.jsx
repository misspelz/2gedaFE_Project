import { useEffect } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import SearchTickectCardFull from "../../components/TicketComp/SearchTickectCardFull";

const SearchResultTicket = ({ handleCloseContainerClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TicketSearchComp
        label={"Search result"}
        handleCloseContainerClick={handleCloseContainerClick}
      />
      <div className="ticket-full-box">
        <SearchTickectCardFull />
      </div>
    </>
  );
};

export default SearchResultTicket;
