import { useEffect, useState } from "react";
import ActionButton from "../Commons/Button";
import toast from "react-hot-toast";
import { GetOTP, VerifyOTP } from "utils/ApICalls";
import { useNavigate } from "react-router-dom";

const VerifyForm = () => {
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [inputValues, setInputValues] = useState({
    inputValue1: "",
    inputValue2: "",
    inputValue3: "",
    inputValue4: "",
    inputValue5: "",
  });

  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(true);
  const [timerExpired, setTimerExpired] = useState(false);
  const navigate = useNavigate();

  const [inputRefs] = useState([null, null, null, null, null]);

  const storedUserInfo = JSON.parse(localStorage.getItem("2gedaUserInfo"));
  
  const EmailData = { email: storedUserInfo?.email };

  const HandleResendOTP = async () => {
    try {
      setLoading(true);
      const response = await GetOTP(EmailData);
      console.log("response", response);
      if (response.status === 200) {
        toast.success(response.data.response);

        setTimeout(() => {
          navigate("/Signin", { replace: true });
        }, 3000);
      }
    } catch (error) {
      toast.error(
        error.response.data.detail ||
          error.response.data.error ||
          "An error occurred"
      );
    } finally {
      setLoading(false);
    }
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

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  const allInputsComplete = Object.values(inputValues).every(
    (value) => value !== ""
  );

  const HandleVerify = async () => {
    try {
      setIsLoading(true);
      const otp_code = { otp_code: Object.values(inputValues).join("") };
      console.log("otp_code", otp_code);
      const response = await VerifyOTP(otp_code);
      console.log("otpres", response);
      if (response.status === 200) {
        toast.success("Verification Successful!");
        setTimeout(() => {
          navigate("/Signin", { replace: true });
        }, 2000);
      }
    } catch (error) {
      toast.error(
        error.response.data.detail ||
          error.response.data.error ||
          "An error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inputRefs[0]) {
      inputRefs[0].focus();
    }
  }, [inputRefs]);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      setTimerExpired(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  return (
    <>
      <div className="verify-form-container">
        <div className="be-condo">Please verify your email</div>
        <div className="ins-tst-dig">
          We sent a 5 digits code to your email address
        </div>

        <form action="">
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
            <div className="resend">
              {timerExpired && (
                <div>
                  Didn’t get code ?{" "}
                  <button
                    className={`act-resend `}
                    onClick={HandleResendOTP}
                    disabled={loading}
                  >
                    {loading ? "Resending..." : "Resend"}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="veri-bttn-bx">
            <ActionButton
              label={"verify"}
              onClick={HandleVerify}
              loading={isLoading}
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
