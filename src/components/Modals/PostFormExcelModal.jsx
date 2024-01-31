import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useState } from "react";
import { SiMicrosoftexcel } from "react-icons/si";

const PostFormExcelModal = () => {
  const [excelFile, setExcelFile] = useState(null);

  const handleExcelChange = (e) => {
    const selectedExcelFile = e.target.files[0];
    if (selectedExcelFile) {
      const fileName = selectedExcelFile.name.toLowerCase();
      if (fileName.endsWith(".xls") || fileName.endsWith(".xlsx")) {
        setExcelFile(selectedExcelFile);
      } else {
        // Handle invalid file type
        setExcelFile(null);
        alert("Please select a valid Excel document file.");
      }
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleDeleteItem = () => {
    // Clear the selected Excel document file
    setExcelFile(null);
  };
  return (
    <>
      <div
        className="post-audio-cont-box"
        onDrop={preventDefault}
        onDragOver={preventDefault}
      >
        {excelFile ? (
          <div className="excel-doc-item">
            {/* Display the selected Excel document */}
            <div className="dra-im">
              <SiMicrosoftexcel className="icon-dw excel" />
              <div className="or-dr">{excelFile.name}</div>
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
              accept=".xls, .xlsx"
              onChange={handleExcelChange}
              style={{ display: "none" }}
              id="excel-input"
            />
            <label htmlFor="excel-input" className="dra-im">
              <SiMicrosoftexcel className="excel" />
              <div className="add-vid">Add Excel Document</div>
              <div className="or-dr">or drag and drop</div>
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default PostFormExcelModal;
