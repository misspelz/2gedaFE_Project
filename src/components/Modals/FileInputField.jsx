import { MdSend } from "react-icons/md";

const FileInputField = ({ selectedFile }) => {
  return (
    <>
      {/* <div className={`chat-input-field `}> */}
      <div className="pic-cont-box">
        <div className="np-pic-bx">
          <div className="or-dr">{selectedFile.name}</div>
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

export default FileInputField;
