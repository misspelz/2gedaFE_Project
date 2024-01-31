import { useState } from "react";
import { HiOutlineKey } from "react-icons/hi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import InputField from "../Commons/InputField";
import ActionButton from "../Commons/Button";
import "./style.css";
import NewPassword from "./NewPassword";

const ForgotComponent = () => {
  const [phone, setPhone] = useState("");
  const [isUsingPhone, setIsUsingPhone] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleUsePhoneClick = () => {
    setIsUsingPhone(!isUsingPhone);
  };
  const handleSendCodeClick = () => {
    setShowNewPassword(true);
    console.log("oky");
  };
  return (
    <div className="for-pass-comp-cont">
      <div className="key-cont">
        <HiOutlineKey />
      </div>
      <div className="for-head-mai">Reset your password</div>
      {showNewPassword ? (
        <NewPassword />
      ) : (
        <>
          {isUsingPhone ? (
            <div className="inp-phone">
              <PhoneInput
                defaultCountry="NG"
                className="custom-phone-input"
                value={phone}
                style={{ height: "40px" }}
                onChange={(phone) => setPhone(phone)}
                placeholder="+234 80 2015 5501"
                required
              />
              {/* <InputField placeholder={"Input Phone Number"} type={"tel"} /> */}
              <div className="ins-bx-txt">
                We’ll send a verification code to your Phone number or email
                address to verify that you are 2geda with us.
              </div>
            </div>
          ) : (
            <div className="inp-email">
              <InputField placeholder={"Input email address"} type={"text"} />
              <div className="ins-bx-txt">
                We’ll send a verification code to your Phone number or email
                address to verify that you are 2geda with us.
              </div>
            </div>
          )}

          <div className="use-phone left" onClick={handleUsePhoneClick}>
            {isUsingPhone
              ? "Use Email address instead"
              : "Use Phone number instead"}
          </div>
          <div className="btn-continu" onClick={handleSendCodeClick}>
            <ActionButton label={"Send code"} bg={"ma-d"} />
          </div>
          <div className="btn-continu upp">
            <ActionButton label={"Back to Login"} bg={"ash"} />
          </div>
        </>
      )}
    </div>
  );
};

export default ForgotComponent;
