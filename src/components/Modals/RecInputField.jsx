import { useEffect } from "react";
import { BsSoundwave } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useRef } from "react";

const RecInputField = ({
  isRecording,
  onStop,
  audioBlob,
  handleDeleteItem,
  stopRecording,
  startRecording,
}) => {
  const indicatorRef = useRef(null);
  const iconArray = new Array(70).fill(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indicatorRef.current) {
        indicatorRef.current.scrollLeft += 1; // Adjust the speed by changing the value
      }
    }, 5000000); // Adjust the interval to change the speed of scrolling

    return () => clearInterval(interval);
  }, []);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };
  return (
    <>
      {/* <div className={`chat-input-field `}> */}
      <div className="pic-cont-box">
        {/* {isRecording && <div className="np-pic-bx">Recording...</div>} */}
        <div className="np-pic-bx">
          {!audioBlob && !isRecording && (
            <div className="not-wrt">Click start to record</div>
          )}
          {audioBlob ? (
            <div className="audio-item">
              <audio
                className="aud-st"
                controls
                onPlay={handlePlay}
                ref={audioRef}
              >
                <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
                Your browser does not support the audio tag.
              </audio>
            </div>
          ) : (
            <>
              {isRecording && (
                <div
                  className="recording-indicator fnt"
                  ref={indicatorRef}
                  style={{ overflow: "hidden", width: "100%" }}
                >
                  <div className="con-sl img-box">
                    {iconArray.map((_, index) => (
                      <BsSoundwave key={index} className="nn" />
                    ))}
                  </div>

                  {/* .:::...::::..:::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::. */}
                </div>
              )}
            </>
          )}
        </div>

        <hr className="ln-hr" />
        <div className="inp-sen-send jus">
          {audioBlob ? (
            <AiFillDelete className="cur" onClick={handleDeleteItem} />
          ) : (
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`${
                isRecording ? "stop-recordcom record" : "start-recordcom record"
              } ${isRecording ? "recording" : ""}`}
            >
              {isRecording ? "Stop" : "Start"}
            </button>
          )}
          <div className="">
            <MdSend className="cur" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default RecInputField;
