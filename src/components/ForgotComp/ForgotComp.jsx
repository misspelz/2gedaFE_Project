import { useState } from "react";
import { HiOutlineKey } from "react-icons/hi";
import "react-phone-number-input/style.css";
import InputField from "../Commons/InputField";
import ActionButton from "../Commons/Button";
import "./style.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { url } from "utils/index";
import { useNavigate } from "react-router-dom";

const ForgotComponent = () => {
  const nav = useNavigate()
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const HandleResetPassword = async (e) => {
    setLoading(true);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let formData = {};

      formData = {
        email: email,
        password: password,
      };

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(formData),
        redirect: "follow",
      };

      const response = await fetch(`${url}/forget-password/`, requestOptions);
      const result = await response.json();
      console.log("forgetpassres", result);

      if (!response.ok) {
        if (response.status === 400 || response.status === 401) {
          toast.error(result.error);
        } else {
          throw new Error(result.error || "An error occurred.");
        }
      } else {
        toast.success(result.response);
        setTimeout(() => {
          nav("/Signin");
        }, 3000);
      }
    } catch (error) {
      console.error("error:", error);
      toast.error(error.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="for-pass-comp-cont">
      <div className="key-cont ">
        <HiOutlineKey size={20} />
      </div>
      <h2 className="text-center my-8 lg:text-[18px]">Reset your Password</h2>
      <div className="ins-bx-txt text-center text-purple-800 font-bold lg:text-[30px]">
        Input your email address and your new password
      </div>
      <div className="inp-email">
        <InputField
          placeholder={"Enter email address"}
          type={"text"}
          value={email}
          onChange={handleEmailChange}
        />
        <div className="pass-con">
          <InputField
            placeholder={"Enter new password"}
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="eye-box" onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <BsEyeSlashFill className="eye-icon" />
            ) : (
              <BsEyeFill className="eye-icon" />
            )}
          </div>
        </div>
      </div>
      <div className="btn-continu upp">
        <ActionButton
          onClick={HandleResetPassword}
          label={"Submit"}
          bg={"pruplr"}
          className="mt-6 w-full"
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ForgotComponent;
