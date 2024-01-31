import { MdSend } from "react-icons/md";

const VideoInputField = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>No video selected.</div>;
  }

  const videoURL = URL.createObjectURL(selectedVideo);
  return (
    <>
      {/* <div className={`chat-input-field `}> */}
      <div className="pic-cont-box">
        <div className="np-pic-bx">
          <video autoPlay={false}>
            <source src={videoURL} type={videoURL.type} />
            Your browser does not support the video tag.
          </video>
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

export default VideoInputField;
