import ActionButton from "../../components/Commons/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";

import { useState } from "react";
const klb = () => {
  const [isPlatforn, setIsPlatforn] = useState(false);
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(0);
  const [tickets, setTickets] = useState([
    {
      name: "",
      quantity: "",
      price: "FREE TICKET",
    },
  ]);

  const handlePaidClick = (index) => {
    setSelectedTicketIndex(index);
    const updatedTickets = tickets.map((ticket, i) => {
      if (i === index) {
        return {
          ...ticket,
          price: ticket.price === "FREE TICKET" ? "" : "FREE TICKET",
        };
      }
      return ticket;
    });
    setTickets(updatedTickets);
  };
  const handlePlatfornClick = () => {
    setIsPlatforn(!isPlatforn);
  };
  const handleAddTicket = () => {
    const newTicket = {
      name: "",
      quantity: "",
      price: selectedTicketIndex !== 0 ? "" : "FREE TICKET",
    };
    setTickets([...tickets, newTicket]);
  };

  const handleDeleteTicket = (index) => {
    if (index !== 0) {
      const updatedTickets = [...tickets];
      updatedTickets.splice(index, 1);
      setTickets(updatedTickets);
    }
  };
  return (
    <>
      <div className="stepper-cont-bx">
        <div className="lin-btw"></div>

        <div className="pos-cir">
          <div className="cir-stepper-container flex">
            <div className="each-step-bx flex">
              <div className="ci-eac"></div>
              <div className="step-txtx">Event info</div>
            </div>
            <div className="each-step-bx flex">
              <div className="ci-eac "></div>
              <div className="step-txtx ">Create ticket</div>
            </div>

            <div className="each-step-bx flex">
              <div className="ci-eac not-ac"></div>
              <div className="step-txtx not-ac-txt">Additonal info</div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-ead">Create ticket</div>
      <div className="event-txt">
        Create ticket type(s) you want for this event
      </div>
      <div className="main-event-container">
        {tickets.map((ticket, index) => (
          <div className="main-event-container" key={index}>
            <div className="free-paid-container flex">
              <div
                className={`freepaid-bx flex ${
                  selectedTicketIndex === index &&
                  ticket.price === "FREE TICKET"
                    ? "act-tick"
                    : ""
                }`}
                onClick={() => handlePaidClick(index)}
              >
                <AiOutlinePlus />
                <div className="tick-fre">Free ticket</div>
              </div>
              <div
                className={`freepaid-bx flex ${
                  selectedTicketIndex === index &&
                  ticket.price !== "FREE TICKET"
                    ? "act-tick"
                    : ""
                }`}
                onClick={() => handlePaidClick(index)}
              >
                <AiOutlinePlus />
                <div className="tick-fre">Paid ticket</div>
              </div>
            </div>
            <div className="tick-cont-bxx">
              <div className="event-inp-overall-cont">
                <label htmlFor="" className="adj">
                  Ticket name
                </label>
                <input
                  type="text"
                  className="create-evt-inp"
                  placeholder="Enter ticket name"
                />
              </div>
              <div className="event-inp-overall-cont">
                <label htmlFor="" className="adj">
                  Quantity
                </label>
                <input
                  type="text"
                  className="create-evt-inp"
                  placeholder="Eg. 100"
                />
              </div>
              {ticket.price !== "FREE TICKET" ? (
                <div className="event-inp-overall-cont">
                  <label htmlFor="" className="adj">
                    Price
                  </label>
                  <input
                    type="text"
                    className="create-evt-inp"
                    placeholder="Eg. #12,000"
                  />
                </div>
              ) : (
                <div className="event-inp-overall-cont b-cr">
                  <label htmlFor="" className="adj">
                    Price
                  </label>
                  <div className="create-evt-inp free-tc">FREE TICKET</div>
                </div>
              )}

              {index === 0 ? (
                // Conditionally render the delete button for the first ticket
                <></>
              ) : (
                // Render other tickets with the delete button
                <div
                  className="act-continue-btn"
                  onClick={() => handleDeleteTicket(index)}
                >
                  <ActionButton
                    label={"Delete"}
                    bg={"red-bg"}
                    type={"button"}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="add-new-tck-bx" onClick={handleAddTicket}>
          Add Another Ticket
        </div>
        <div className="double-input">
          <div className="inp-label-box">
            <label htmlFor="">Event category</label>
            <div className="claim-inp flex nobd">
              <MdOutlineCategory />
              <select name="" id="" className="claim-inp noline">
                <option value="">Select category</option>
                <option value="Driver_licence">Driver Licence</option>
                <option value="NIN">NIN</option>
                <option value="Voters_card">Voter's Card</option>
              </select>
            </div>
          </div>
        </div>

        <div className="act-continue-btn">
          <ActionButton label={"Continue"} />
        </div>
      </div>
    </>
  );
};

export default klb;
