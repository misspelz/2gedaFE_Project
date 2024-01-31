import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useState } from "react";
const PostFormPdfModal = ({ pdf, setPDF }) => {
  const [pdfFile, setPdfFile] = useState(null);

  const handlePdfChange = (e) => {
    const selectedPdfFile = e.target.files[0];
    if (selectedPdfFile) {
      const fileName = selectedPdfFile.name.toLowerCase();
      if (fileName.endsWith(".pdf")) {
        setPdfFile(selectedPdfFile);
        setPDF([selectedPdfFile]);
      } else {
        // Handle invalid file type
        setPdfFile(null);
        alert("Please select a valid PDF document file.");
      }
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleDeleteItem = () => {
    // Clear the selected PDF document file
    setPdfFile(null);
  };
  return (
    <>
      <div
        className="post-audio-cont-box"
        onDrop={preventDefault}
        onDragOver={preventDefault}
      >
        {pdfFile ? (
          <div className="pdf-item">
            {/* Display the selected PDF document */}
            <div className="dra-im">
              <BsFillFileEarmarkPdfFill className="icon-dw pdf" />
              <div className="or-dr">{pdfFile.name}</div>
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
              accept=".pdf"
              onChange={handlePdfChange}
              style={{ display: "none" }}
              id="pdf-input"
            />
            <label htmlFor="pdf-input" className="dra-im">
              <BsFillFileEarmarkPdfFill className="pdf" />
              <div className="add-vid">Add PDF Document</div>
              <div className="or-dr">or drag and drop</div>
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default PostFormPdfModal;
