import { useEffect, useState } from "react";
import ActionButton from "../Commons/Button";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { url } from "../../utils";

const VerifyForm = ({ setIsVerify, handleVerifyClick }) => {
  const [inputValues, setInputValues] = useState({
    inputValue1: "",
    inputValue2: "",
    inputValue3: "",
    inputValue4: "",
    inputValue5: "",
  });
  const [seconds, setSeconds] = useState(42);
  const [isActive, setIsActive] = useState(true);
  const [timerExpired, setTimerExpired] = useState(false);
  // const navigate = useNavigate();

  const authToken = localStorage.getItem("authTOken");
  // console.log(authToken);

  const [inputRefs] = useState([null, null, null, null, null]);
  // console.log(setInputRefs);
  useEffect(() => {
    if (inputRefs[0]) {
      inputRefs[0].focus();
    }
  }, [inputRefs]);
  // console.log(authToken);
  const handleVerify = (e) => {
    e.preventDefault();
    const otp = Object.values(inputValues).join(""); // Combine all input values to form the OTP
    console.log(otp);
    axios
      .post(
        `${url}/verify-otp/`,
        {
          otp_code: `${otp}`,
        },
        {
          headers: {
            // Authorization: `Bearer ${authToken}`,
            Authorization: `Token ${authToken}`,
          },
        }
      )
      .then((response) => response.data)
      .then((data) => {
        handleVerifyClick();
        console.log(data);
        // navigate("/");
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error sending OTP:", error);
      });
  };
  const handleResend = () => {
    axios
      .post(
        `${url}/verify-otp/`,
        {
          // Include any necessary data for the resend request
        },
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      )
      .then((response) => {
        // Handle the response from the server if needed
        console.log(response);
        console.log("Resend successful");
        // Optionally, you can reset the timer here
        setSeconds(42);
        setIsActive(true);
        setTimerExpired(false);
      })
      .catch((error) => {
        // Handle any errors that occur during the resend request
        console.error("Error resending OTP:", error);
      });
  };
  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value;
    if (value.length <= 1) {
      setInputValues((prevState) => ({
        ...prevState,
        [`inputValue${inputNumber}`]: value,
      }));

      if (value.length === 1 && inputNumber < 5) {
        inputRefs[inputNumber].focus();
      }
    }
  };

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      setTimerExpired(true);
      // Timer has reached 00:00, you can add your logic here
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  const allInputsComplete = Object.values(inputValues).every(
    (value) => value !== ""
  );

  // console.log("inputValues:", inputValues);
  // console.log("allInputsComplete:", allInputsComplete);
  return (
    <>
      <div className="verify-form-container">
        <div className="be-condo">Please verify your email</div>
        <div className="ins-tst-dig">
          We sent a 5 digits code to the email you provided
        </div>
        <div className="change-email">
          faithincrease23@gmail.com <span>change</span>
        </div>
        <form action="" onSubmit={handleVerify}>
          <div className="verify-inputs">
            {[1, 2, 3, 4, 5].map((inputNumber) => (
              <input
                key={inputNumber}
                type="number"
                value={inputValues[`inputValue${inputNumber}`]}
                onChange={(e) => handleInputChange(e, inputNumber)}
                className={`ver-inp ${
                  inputValues[`inputValue${inputNumber}`].length === 1
                    ? "input-background-fill"
                    : ""
                }`}
                ref={(input) => (inputRefs[inputNumber - 1] = input)}
              />
            ))}
          </div>

          <div className="counter-resend">
            <div className="count">{formattedTime}</div>
            <div className="resend" onClick={handleVerifyClick}>
              Didn’t get code?
              {timerExpired ? (
                <span className={`act-resend `} onClick={handleResend}>
                  {" "}
                  Resend
                </span>
              ) : (
                <span className={`resend `} onClick={handleVerifyClick}>
                  {" "}
                  Resend
                </span>
              )}
            </div>
          </div>
          <div className="veri-bttn-bx">
            <ActionButton
              label={"verify"}
              bg={allInputsComplete ? "complete-button ver-uncop" : "ver-uncop"}
              type={allInputsComplete ? "submit" : "button"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default VerifyForm;
