import ActionButton from "../../components/Commons/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { useState, useEffect } from "react";

const CreateEventTictetFormTwo = ({
  handleCreatTicketTwoCloseContainerClick,
  handleCreatTicketThreeContainerClick,
  tickets,
  setTickets,

}) => {
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(0);
  // const [tickets, setTickets] = useState([
  //   { name: "", quantity: "", price: "FREE TICKET" },
  // ]);
  const [eventCategory, setEventCategory] = useState("");
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};

    tickets.forEach((ticket, index) => {
      if (!ticket.name.trim())
        newErrors[`name_${index}`] = "Ticket name is required";
      if (!ticket.quantity.trim())
        newErrors[`quantity_${index}`] = "Quantity is required";
      if (ticket.price !== "FREE TICKET" && !ticket.price.trim())
        newErrors[`price_${index}`] = "Price is required";
    });

    if (!eventCategory.trim())
      newErrors.eventCategory = "Event category is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleCreatTicketThreeContainerClick();
    } else {
      console.log("Form is not valid. Please fill in all required fields.");
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
              <div className="step-txtx not-ac-txt">Additional info</div>
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
                  value={ticket.name}
                  onChange={(e) => {
                    const updatedTickets = [...tickets];
                    updatedTickets[index].name = e.target.value;
                    setTickets(updatedTickets);
                    setErrors({ ...errors, [`name_${index}`]: "" });
                  }}
                />
                {errors[`name_${index}`] && (
                  <div style={{ color: "red" }}>{errors[`name_${index}`]}</div>
                )}
              </div>
              <div className="event-inp-overall-cont">
                <label htmlFor="" className="adj">
                  Quantity
                </label>
                <input
                  type="text"
                  className="create-evt-inp"
                  placeholder="Eg. 100"
                  value={ticket.quantity}
                  onChange={(e) => {
                    const updatedTickets = [...tickets];
                    updatedTickets[index].quantity = e.target.value;
                    setTickets(updatedTickets);
                    setErrors({ ...errors, [`quantity_${index}`]: "" });
                  }}
                />
                {errors[`quantity_${index}`] && (
                  <div style={{ color: "red" }}>
                    {errors[`quantity_${index}`]}
                  </div>
                )}
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
                    value={ticket.price}
                    onChange={(e) => {
                      const updatedTickets = [...tickets];
                      updatedTickets[index].price = e.target.value;
                      setTickets(updatedTickets);
                      setErrors({ ...errors, [`price_${index}`]: "" });
                    }}
                  />
                  {errors[`price_${index}`] && (
                    <div style={{ color: "red" }}>
                      {errors[`price_${index}`]}
                    </div>
                  )}
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
                <></>
              ) : (
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
            <label htmlFor=""> Event category</label>
            <div className="claim-inp flex nobd">
              <MdOutlineCategory />
              <select
                name=""
                id=""
                className="claim-inp noline"
                value={eventCategory}
                onChange={(e) => {
                  setEventCategory(e.target.value);
                  setErrors({ ...errors, eventCategory: "" });
                }}
              >
                <option value="">Select category</option>
                <option value="Fashion">Fashion</option>
                <option value="Festival">Festivals</option>
                <option value="Concerts">Concerts </option>
                <option value="Others">Others </option>
              </select>
            </div>
            {errors.eventCategory && (
              <div style={{ color: "red" }}>{errors.eventCategory}</div>
            )}
          </div>
        </div>

        <div className="act-continue-btn" onClick={handleSubmit}>
          <ActionButton label={"Continue"} type={"button"} bg={"pruplr"}/>
        </div>
        <div
          className="bac-formm"
          onClick={handleCreatTicketTwoCloseContainerClick}
        >
          Go Back
        </div>
      </div>
    </>
  );
};

export default CreateEventTictetFormTwo;
