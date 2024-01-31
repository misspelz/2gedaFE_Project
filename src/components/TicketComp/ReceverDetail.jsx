import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReceverDetail = ({
  receiverDetailRef,
  eventDetail,
  handleChooseClick,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [errors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    agreedToTerms: "",
  });

  const handleInputChange = (field, value) => {
    if (field === "firstName") setFirstName(value);
    else if (field === "lastName") setLastName(value);
    else if (field === "email") setEmail(value);
    else if (field === "address") setAddress(value);
  };

  return (
    <>
      <div ref={receiverDetailRef} className="receiver-detail-container">
        <div className="event-det-nm">Receiver details</div>
        <form>
          <div className="double-input">
            <div className="inp-label-box">
              <label htmlFor="">First name</label>
              <input
                type="text"
                className="claim-inp rec-inp"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <div className="error-message" style={{ color: "red" }}>
                {errors.firstName}
              </div>
            </div>
            <div className="inp-label-box">
              <label htmlFor="">Last name</label>
              <input
                type="text"
                className="claim-inp rec-inp"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              <div className="error-message" style={{ color: "red" }}>
                {errors.lastName}
              </div>
            </div>
          </div>
          <div className="double-input">
            <div className="inp-label-box">
              <label htmlFor="">Email address</label>
              <input
                type="email"
                className="claim-inp rec-inp"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <div className="error-message" style={{ color: "red" }}>
                {errors.email}
              </div>
            </div>
          </div>
          <div className="double-input">
            <div className="inp-label-box">
              <label htmlFor="">Address</label>
              <input
                type="text"
                className="claim-inp rec-inp"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
              <div className="error-message" style={{ color: "red" }}>
                {errors.address}
              </div>
            </div>
          </div>
          <div className="check-aree-cont">
            <input
              type="checkbox"
              className="check-bx"
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
            />
            <div className="aree-txt">
              I have read and agreed to{" "}
              <Link to={"/"} className="reci-link">
                terms of condition
              </Link>
              and
              <Link to={"/"} className="reci-link">
                privacy policy
              </Link>
            </div>
            <div
              className="error-message"
              style={{ color: "red", fontSize: "12px" }}
            >
              {errors.agreedToTerms}
            </div>
          </div>
          <div className="act-rec-btn">
            <div className="act-btn-cont">
              <button
                type="button"
                onClick={handleChooseClick}
                className={`action-btn `}
              >
                Purchase ticketsss
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReceverDetail;
