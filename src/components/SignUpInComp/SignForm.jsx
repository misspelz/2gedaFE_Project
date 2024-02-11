import { useState } from "react";
import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { NavLink, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../../utils";
import Lottie from "lottie-react";
import preloader from "../../pages/Home/Animation - 1703321875032 (1).json";
import toast from "react-hot-toast";

const SignForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsingPhone, setIsUsingPhone] = useState(false);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // const handleUsePhoneClick = () => {
  //   setIsUsingPhone(!isUsingPhone);
  // };

  localStorage.setItem("email", email);

  const signupUser = async (event) => {
    event.preventDefault();
    let userData;
    setIsLoading(true);
    if (isUsingPhone) {
      // User is using phone
      userData = {
        username: username,
        phone_number: phone,
        password: password,
      };
    } else {
      // User is using email
      userData = {
        username: username,
        email: email,
        password: password,
      };
    }

    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(userData);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(`${url}/register/`, requestOptions);
      const responseBody = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          if (responseBody.error === undefined) {
            toast.error(responseBody.username[0]);
          } else {
            toast.error(responseBody.error);
          }
        }
      } else {
        const token = responseBody.token;

        localStorage.setItem("authTOken", token);

        navigate("/verify");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sign-form">
      <div className="create-ead-txt text-red-500">Create an Account</div>
      <div className="greet-txt">
        Welcome to 2geda! <br /> To continue, please provide your details
      </div>

      <form action="" onSubmit={signupUser}>
        {isUsingPhone ? (
          <div className="inp-phone">
            <PhoneInput
              defaultCountry="NG"
              className="custom-phone-input"
              name="phone"
              style={{ height: "40px" }}
              onChange={(phone) => setPhone(phone)}
              placeholder="+234 80 2015 5501"
              required
            />
            {/* <InputField placeholder={"Input Phone Number"} type={"tel"} /> */}
            <div className="ins-bx-txt">
              We’ll verify the phone provided to be sure it belongs to you
            </div>
          </div>
        ) : (
          <div className="inp-email">
            <InputField
              placeholder={"Input email address"}
              type={"text"}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="ins-bx-txt">
              We’ll verify the email provided to be sure it belongs to you
            </div>
          </div>
        )}

        {/* <div className="use-phone" onClick={handleUsePhoneClick}>
          {isUsingPhone
            ? "Use Email address instead"
            : "Use Phone number instead"}
        </div> */}

        <InputField
          placeholder={"Username"}
          type={"text"}
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <div className="pass-con">
          <InputField
            placeholder={"Create Password"}
            type={passwordVisible ? "text" : "password"}
            name="password"
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
        <div className="btn-continu">
          {isLoading ? (
            <Lottie
              animationData={preloader}
              style={{
                width: "300px",
                height: "100px",
              }}
            />
          ) : (
            <ActionButton
              onClick={signupUser}
              label={"Continue"}
              bg={"pruplr"}
              type={"submit"}
            />
          )}
          {/* <button type="submit">Submit</button> */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink
            to="/Signin"
            className="alr-ave"
            style={{ color: "#4f0da3" }}
          >
            Already have an account? &nbsp;
            <span style={{ fontSize: "14px" }}>Sign In</span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
