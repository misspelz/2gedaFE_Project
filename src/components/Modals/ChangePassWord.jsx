import { AiOutlineArrowLeft } from "react-icons/ai";
import InputField from "../Commons/InputField";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import ActionButton from "../Commons/Button";

const ChangePassWord = () => {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  return (
    <>
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          {" "}
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineArrowLeft
                className="cls-post"
                //   onClick={handleClaimClickClose}
              />
              <div className="fels">
                <div className="claim">Change password</div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="change-pw">
          <div className="pass-con">
            <InputField
              placeholder={"Input Confirm Password"}
              type={passwordVisible2 ? "text" : "password"}
            />
            <div className="eye-box" onClick={togglePasswordVisibility2}>
              {passwordVisible2 ? (
                <BsEyeSlashFill className="eye-icon" />
              ) : (
                <BsEyeFill className="eye-icon" />
              )}
            </div>
          </div>
          <div className="pass-con mv-dwn">
            <InputField
              placeholder={"New Password"}
              type={passwordVisible2 ? "text" : "password"}
            />
            <div className="eye-box" onClick={togglePasswordVisibility2}>
              {passwordVisible2 ? (
                <BsEyeSlashFill className="eye-icon" />
              ) : (
                <BsEyeFill className="eye-icon" />
              )}
            </div>
          </div>
          <div className="pass-con">
            <InputField
              placeholder={"Confirm Password"}
              type={passwordVisible2 ? "text" : "password"}
            />
            <div className="eye-box" onClick={togglePasswordVisibility2}>
              {passwordVisible2 ? (
                <BsEyeSlashFill className="eye-icon" />
              ) : (
                <BsEyeFill className="eye-icon" />
              )}
            </div>
          </div>
          <div className="ins-bx-txt">
            Password must contain Capital and small letters, number or symbols.
          </div>

          <div className="conntc">
            <ActionButton label={"Change Password"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassWord;
