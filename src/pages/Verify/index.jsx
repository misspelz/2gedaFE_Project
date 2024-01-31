import { useState } from "react";
import VerifyForm from "../../components/VerifyComp/verifyForm";
import "./style.css";
import VerifyModalSuc from "../../components/Modals/VerifyModalSuc";
import { useNavigate } from "react-router-dom";
const Verify = () => {
  const [isVerify, setIsVerify] = useState(false);
  const navigate = useNavigate();

  const handleVerifyClick = () => {
    setIsVerify(true);
    setTimeout(() => {
      navigate("/EditProfile");
    }, 1000);
  };
  // const handleCloseVerifyClick = () => {
  //   setIsVerify(false);
  // };
  console.log(isVerify);
  return (
    <>
      <div className="verify-container">
        {isVerify && (
          <div className="modal-full-container mv-to-up">
            <VerifyModalSuc />
          </div>
        )}
        <div className="verify-box">
          <VerifyForm
            setIsVerify={setIsVerify}
            handleVerifyClick={handleVerifyClick}
          />
        </div>
      </div>
    </>
  );
};

export default Verify;
