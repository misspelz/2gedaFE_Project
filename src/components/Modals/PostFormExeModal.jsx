import { BsFiletypeExe } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useState } from "react";

const PostFormExeModal = ({setExe, exe}) => {
  const [exeFile, setExeFile] = useState(null);

  const handleExeChange = (e) => {
    const selectedExeFile = e.target.files[0];
    if (selectedExeFile) {
      const fileName = selectedExeFile.name.toLowerCase();
      if (fileName.endsWith(".exe")) {
        setExeFile(selectedExeFile);
        setExe(selectedExeFile)
      } else {
        // Handle invalid file type
        setExeFile(null);
        alert("Please select a valid .exe file.");
      }
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleDeleteItem = () => {
    // Clear the selected .exe file
    setExeFile(null);
    setExe(null)
  };
  return (
    <>
      <div
        className="post-audio-cont-box"
        onDrop={preventDefault}
        onDragOver={preventDefault}
      >
        {exeFile ? (
          <div className="exe-item">
            {/* Display the selected .exe file */}
            <div className="dra-im">
              <BsFiletypeExe className="icon-dw exe" />
              <div className="or-dr">{exeFile.name}</div>
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
              accept=".exe"
              onChange={handleExeChange}
              style={{ display: "none" }}
              id="exe-input"
            />
            <label htmlFor="exe-input" className="dra-im">
              <BsFiletypeExe className="exe" />
              <div className="add-vid">Add .exe File</div>
              <div className="or-dr">or drag and drop</div>
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default PostFormExeModal;
