import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useState } from "react";

const PostFormPowerModal = ({setPowerpoint, powerpoint}) => {
  const [powerpointFile, setPowerpointFile] = useState(null);

  const handlePowerpointChange = (e) => {
    const selectedPowerpointFile = e.target.files[0];
    if (selectedPowerpointFile) {
      const fileName = selectedPowerpointFile.name.toLowerCase();
      if (fileName.endsWith(".ppt") || fileName.endsWith(".pptx")) {
        setPowerpointFile(selectedPowerpointFile);
        setPowerpoint([selectedPowerpointFile])
      } else {
        // Handle invalid file type
        setPowerpointFile(null);
        alert("Please select a valid PowerPoint presentation file.");
      }
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleDeleteItem = () => {
    // Clear the selected PowerPoint presentation file
    setPowerpointFile(null);
  };

  return (
    <>
      <div
        className="post-audio-cont-box"
        onDrop={preventDefault}
        onDragOver={preventDefault}
      >
        {powerpointFile ? (
          <div className="powerpoint-item">
            {/* Display the selected PowerPoint presentation */}
            <div className="dra-im">
              <PiMicrosoftPowerpointLogo className="icon-dw prese" />
              <div className="or-dr">{powerpointFile.name}</div>
            </div>
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
              accept=".ppt, .pptx"
              onChange={handlePowerpointChange}
              style={{ display: "none" }}
              id="powerpoint-input"
            />
            <label htmlFor="powerpoint-input" className="dra-im">
              <PiMicrosoftPowerpointLogo className="prese" />
              <div className="add-vid">Add PowerPoint Presentation</div>
              <div className="or-dr">or drag and drop</div>
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default PostFormPowerModal;
