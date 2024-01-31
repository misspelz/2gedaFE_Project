import { AiOutlineArrowLeft } from "react-icons/ai";
const BackNav = () => {
  return (
    <div className="non-navbar-container">
      <div className="navbar">
        <AiOutlineArrowLeft className="back-icon" />
      </div>

      <div className="logon">
        <img src="/images/lo2.png" alt="" />
      </div>
    </div>
  );
};

export default BackNav;
