import { MdLocationOn, MdOutlineCalendarMonth } from "react-icons/md";
import ActionButton from "../Commons/Button";

const EventDetailDetailsComp = ({ handleGetTicketClick, location, eventDate, tickets }) => {
  return (
    <div className="event-details-box-cont">
      <div className="event-txt-detaill">
        <div className="event-det-nm redd">Meta app unveil</div>
        <div className="location-box chang">
          <MdLocationOn />
          <div className="loca-txt loc-red">
            {location}
          </div>
        </div>
        <div className="location-box">
          <MdOutlineCalendarMonth />
          <div className="loca-txt loc-red">{eventDate}</div>
        </div>
      </div>
      <div className="det-action-btn" onClick={handleGetTicketClick}>
        <ActionButton label={"Get ticket"} bg={"redddd"} />
      </div>
    </div>
  );
};

export default EventDetailDetailsComp;
