import { AiFillDelete } from "react-icons/ai";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import "./style.css";
import { useState } from "react";
const PostFormMusicModal = ({ setMusic, music }) => {
  const [audioFile, setAudioFile] = useState(null);

  const handleAudioChange = (e) => {
    const selectedAudioFile = e.target.files[0];
    if (selectedAudioFile && selectedAudioFile.type.startsWith("audio/")) {
      setAudioFile([selectedAudioFile]);
      setMusic([selectedAudioFile]);
    } else {
      // Handle invalid file type or no file selected
      setMusic(null);
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleDeleteItem = () => {
    // Clear the selected audio file
    setAudioFile(null);
  };
  return (
    <>
      <div
        className="post-audio-cont-box"
        onDrop={preventDefault}
        onDragOver={preventDefault}
      >
        {audioFile ? (
          <div className="audio-item">
            <audio controls>
              <source
                src={URL.createObjectURL(
                  new Blob(audioFile, { type: "audio/wav" })
                )}
                // src={URL.createObjectURL(audioFile)}
                // src=""
                type={audioFile.type}
              />
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
            <input
              type="file"
              accept="audio/*"
              onChange={handleAudioChange}
              style={{ display: "none" }}
              id="audio-input"
            />
            <label htmlFor="audio-input" className="dra-im">
              <MdOutlineAddPhotoAlternate />
              <div className="add-vid">Add Music</div>
              <div className="or-dr">or drag and drop</div>
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default PostFormMusicModal;
