import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useState } from "react";

import { BsMicFill, BsSoundwave } from "react-icons/bs";
import { IoMdMicOff } from "react-icons/io";
import { useRef } from "react";
const PostFormRecModal = ({ setAudioFile }) => {
  const [audioBlob, setAudioBlob] = useState(null);
  const [isRecording, setIsRecording] = useState(false); // Added recording state
  const mediaRecorder = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      mediaRecorder.current = new MediaRecorder(stream);

      const chunks = [];

      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        setAudioBlob(blob);
        setIsRecording(false); // Update recording status when recording stops
        setAudioFile([blob]);
      };

      mediaRecorder.current.start();
      setIsRecording(true); // Update recording status when recording starts
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.stop();
    }
  };
  const iconArray = new Array(70).fill(null);

  const handleDeleteItem = () => {
    setAudioBlob(null);
    setAudioFile(null);
  };
  return (
    <>
      <div className="post-audio-cont-box">
        {audioBlob ? (
          <div className="audio-item">
            <audio controls>
              <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
              Your browser does not support the audio tag.
            </audio>
            <div className="de-aud">
              <div className="delete-audio" onClick={handleDeleteItem}>
                <AiFillDelete />
                <div className="del-tss">Delete</div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <>
              {isRecording && (
                <div
                  className="recording-indicator fnt"
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
            {/* {isRecording && (
              <div className="recording-indicator">
                <FaCircle className="pulsating-circle" />
                Recording...
              </div>
            )} */}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`rec-bbtn ${
                isRecording ? "stop-record" : "start-record"
              } ${isRecording ? "recording" : ""}`}
            >
              {isRecording ? (
                <>
                  Stop <IoMdMicOff />
                </>
              ) : (
                <>
                  Start <BsMicFill />
                </>
              )}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default PostFormRecModal;
