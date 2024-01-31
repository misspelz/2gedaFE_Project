import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineCloseCircle } from "react-icons/ai";
// import { IoSendSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="searc-box-container">
      <div className="ba-arr" onClick={goBack}>
        <AiOutlineArrowLeft className="ba-om" />
      </div>
      <div className="box-search">
        <div className="sear-input-box">
          <BiSearch className="se-co" />
          <input
            type="text"
            className="inp-general sea-ne"
            placeholder="Start typing"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="cle-txt" onClick={clearInput}>
          <AiOutlineCloseCircle className="send-iconn se-co" />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
