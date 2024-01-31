import { MdSend } from "react-icons/md";

const PhotoInputField = ({ selectedImage }) => {
  return (
    <>
      {/* <div className={`chat-input-field `}> */}
      <div className="pic-cont-box">
        <div className="np-pic-bx">
          <img src={selectedImage} alt="" />
        </div>
        <hr className="ln-hr" />
        <div className="inp-sen-send">
          <input type="text" className="pic-inpt" placeholder="Start typing" />
          <MdSend className="cur" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default PhotoInputField;
