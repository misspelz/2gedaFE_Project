import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useState } from "react";
import { SiMicrosoftword } from "react-icons/si";

const PostFormWordModal = ({ word, setword }) => {
  const [wordFile, setWordFile] = useState(null);

  const handleWordChange = (e) => {
    const selectedWordFile = e.target.files[0];
    if (selectedWordFile) {
      const fileName = selectedWordFile.name.toLowerCase();
      if (fileName.endsWith(".doc") || fileName.endsWith(".docx")) {
        setWordFile(selectedWordFile);
        setword([selectedWordFile, word]);
      } else {
        // Handle invalid file type
        setWordFile(null);
        alert("Please select a valid Word document file.");
      }
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleDeleteItem = () => {
    // Clear the selected Word document file
    setWordFile(null);
  };
  return (
    <>
      <div
        className="post-audio-cont-box"
        onDrop={preventDefault}
        onDragOver={preventDefault}
      >
        {wordFile ? (
          <div className="word-doc-item">
            {/* Display the selected Word document */}
            <div className="dra-im">
              <SiMicrosoftword className="icon-dw word" />
              <div className="or-dr">{wordFile.name}</div>
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
              accept=".doc, .docx"
              onChange={handleWordChange}
              style={{ display: "none" }}
              id="word-input"
            />
            <label htmlFor="word-input" className="dra-im">
              <SiMicrosoftword className="word" />
              <div className="add-vid">Add Word Document</div>
              <div className="or-dr">or drag and drop</div>
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default PostFormWordModal;
