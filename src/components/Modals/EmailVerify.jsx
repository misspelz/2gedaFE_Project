import { useNavigate } from "react-router-dom";
import ActionButton from "../Commons/Button";
import toast from "react-hot-toast";

export const EmailVerify = ({ setIsEmailVerify }) => {
  const navigate = useNavigate();
  const HandleOTP = () => {
    toast.success("OTP Sent");
    setIsEmailVerify(false);
    
    navigate("/verify", { replace: true });
  };

  return (
    <div className="bg-white p-10 rounded-[10px] mx-10">
      <h1 className="text-center mb-4 text-red-500 font-bold">Ooopsss!!</h1>
      <h2 className="text-[14px] md:text-[16px] mb-14 text-center">
        You need to verify your Email Address
      </h2>

      <ActionButton
        bg={"pruplr"}
        label={"Click here to re-send OTP"}
        onClick={HandleOTP}
      />
      <h3 className="mt-4 text-[12px] text-center">
        An OTP will be sent to your email address
      </h3>
    </div>
  );
};
