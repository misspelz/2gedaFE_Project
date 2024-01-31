import React from "react";

const TicketInfoCalender = ({ tickets }) => {
  if (tickets !== null) {
    console.log(tickets);
  }

  function extractTime(dateString) {
    const dateObject = new Date(dateString);

    const formattedTime = dateObject.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedTime;
  }

  return (
    <div className="ticket-info-row-cal">
      <div className="ticket-info-boxs">
        <div className="event-det-nm">Ticket Information</div>
        <div className="vip-re-cont">
          {tickets &&
            tickets.each_ticket &&
            tickets.each_ticket.length > 0 &&
            tickets.each_ticket.map((ticket, index) => (
              <div className="vip-price-bx" key={index}>
                <div className="title-lab">{ticket.category}</div>
                <div className="pric-availl">
                  <div className="price-avil-box"># {ticket.price}</div>
                  {ticket.is_sold ? (
                    <div className="out-stock">Out of stock</div>
                  ) : (
                    <div className="sellin">Selling</div>
                  )}
                </div>
              </div>
            ))}

          {/* Additional hardcoded ticket */}
        </div>
      </div>
      <div className="ticket-info-boxs">
        <div className="event-det-nm">Event calendar</div>
        <div className="vip-re-cont padr">
          <div className="date-eve">
            {tickets && tickets.formated_date ? tickets.formated_date : ""}
          </div>
          <div className="eve-tim">{extractTime(tickets.date)}</div>
          <div className="avail-ticket">
            {tickets && tickets.each_ticket && tickets.each_ticket[0]
              ? tickets.each_ticket[0].quantity
              : ""}{" "}
            tickets
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfoCalender;
