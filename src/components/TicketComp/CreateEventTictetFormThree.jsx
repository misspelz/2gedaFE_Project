import React, {  useEffect, useState } from "react";
// import EventContextOne from "../../Context/EventContext/EventContextOne";
// import EventContextTwo from "../../Context/EventContext/EventContextTwo";
// import EventContextThree from "../../Context/EventContext/EventContextThree";

const CreateEventTictetFormThree = ({
  handleCreatTicketThreeCloseContainerClick,
  handleCreatTicketSucessClick,
  setIsPublic,
  setAddSales,
  handleBuyTicket,
}) => {
  // const contextOne = useContext(EventContextOne);
  // const contextTwo = useContext(EventContextTwo);
  // const contextThree = useContext(EventContextThree);
  const [isToggled, setToggled] = useState(false);
  const [isPublicToggled, setPublicToggled] = useState(true);
  const [feesOption, setFeesOption] = useState("");
  const [feesOptionError, setFeesOptionError] = useState("");

  const handlePublicToggle = () => {
    setPublicToggled(!isPublicToggled);
    setIsPublic(true);
  };

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const handleFeesOptionChange = (e) => {
    setFeesOption(e.target.value);
    setFeesOptionError("");
    if (e.target.value === "add") {
      setAddSales(true);
    } else {
      setAddSales(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContinueClick = async () => {
    // const requestData = { ...contextOne, ...contextTwo, ...contextThree };
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
              <div className="ci-eac "></div>
              <div className="step-txtx ">Additional info</div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-ead">Additional information</div>
      <div className="event-txt">Tell us a bit more about your event</div>
      <div className="main-event-container">
        <div className="add-info-cont flex">
          <div className="add-inf-txtx">
            <div className="main-add-info">Show remaining tickets</div>
            <div className="body-add-info">
              Show the number of remaining tickets on your events
            </div>
          </div>
          <div className="toggle-container">
            <label className="switch">
              <input type="checkbox" onChange={handleToggle} />
              <span className={`slider ${isToggled ? "on" : "off"}`} />
            </label>
          </div>
        </div>

        <hr className="add-info-line" />

        <div className="event-ead bw-bit">Event Listing Privacy</div>
        <div className="add-info-cont flex">
          <div className="add-inf-txtx">
            {isPublicToggled ? (
              <>
                <div className="main-add-info">Private</div>
                <div className="body-add-info">
                  Only people you share invite link can find your event
                </div>
              </>
            ) : (
              <>
                <div className="main-add-info">Public</div>
                <div className="body-add-info">
                  Your event can be found by anyone on our app, our promotion
                  partners, and search engines
                </div>
              </>
            )}
          </div>
          <div className="toggle-container">
            <label className="switch">
              <input type="checkbox" onChange={handlePublicToggle} />
              <span className={`slider ${isPublicToggled ? "on" : "off"}`} />
            </label>
          </div>
        </div>

        <div className={`${isToggled ? "on" : "off"}`}>
          {isPublicToggled ? "on" : "off"}
        </div>

        <div className="event-ead">Fees settings</div>
        <div className="event-txt bw-bit">
          Please specify if transaction fees would be passed on to buyers or
          charged from your account. We charge 5% + N200.
        </div>
        <div className="double-input">
          <div className="inp-label-box">
            <select
              name="feesOption"
              id="feesOption"
              className="claim-inp"
              value={feesOption}
              onChange={handleFeesOptionChange}
            >
              <option value="">Select an option</option>
              <option value="remove">Remove from ticket sales</option>
              <option value="add">Add to ticket price</option>
            </select>
          </div>
          {feesOptionError && (
            <div className="error-message" style={{ color: "red" }}>
              {feesOptionError}
            </div>
          )}
        </div>

        <div
          className="act-continue-btn"
          onClick={handleCreatTicketSucessClick}
        >
          <div className="act-btn-cont">
            <button
              type="submit"
              bg={"pruplr"}
              onClick={handleBuyTicket}
              className={`action-btn`}
            >
              Createeee
            </button>
          </div>
        </div>
        <div className="bac-formm" onClick={handleContinueClick}>
          Go Back
        </div>
      </div>
    </>
  );
};

export default CreateEventTictetFormThree;
