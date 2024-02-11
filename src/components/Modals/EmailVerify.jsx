import { useNavigate } from "react-router-dom";
import ActionButton from "../Commons/Button";
import toast from "react-hot-toast";
import { GetOTP } from "utils/ApICalls";
import { useState } from "react";

export const EmailVerify = ({ setIsEmailVerify }) => {
  const storedUserInfo = JSON.parse(localStorage.getItem("2gedaUserInfo"));
  // console.log("storedUserInfo", storedUserInfo)
  const EmailData = { email: storedUserInfo.email };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const HandleOTP = async () => {
    try {
      setLoading(true);
      const response = await GetOTP(EmailData);
      console.log("response", response);
      if (response.status === 200) {
        toast.success(response.data.response);

        setTimeout(() => {
          setIsEmailVerify(false);

          navigate("/verify", { replace: true });
        }, 3000);
      }
    } catch (error) {
      console.log("eeeerror", error);
      toast.error(error.response.data.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 rounded-[10px] mx-10">
      <h1 className="text-center mb-4 text-red-500 font-bold">Ooopsss!!</h1>
      <h2 className="text-[14px] md:text-[16px] mb-6 text-center">
        You need to verify your Email Address
      </h2>

      <ActionButton
        bg={"pruplr"}
        label={"Click here to get OTP"}
        onClick={HandleOTP}
        loading={loading}
      />
      <h3 className="mt-4 text-[12px] text-center">
        An OTP will be sent to your email address
      </h3>
    </div>
  );
};
