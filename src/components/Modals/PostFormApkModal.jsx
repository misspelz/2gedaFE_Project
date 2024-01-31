import { BsAndroid2 } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useState } from "react";

const PostFormApkModal = ({ apk, setApk }) => {
  const [apkFile, setApkFile] = useState(null);

  const handleApkChange = (e) => {
    const selectedApkFile = e.target.files[0];
    if (selectedApkFile) {
      const fileName = selectedApkFile.name.toLowerCase();
      if (fileName.endsWith(".apk")) {
        setApkFile(selectedApkFile);
        setApk([selectedApkFile]);
      } else {
        // Handle invalid file type
        setApkFile(null);
        alert("Please select a valid APK file.");
      }
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleDeleteItem = () => {
    // Clear the selected APK file
    setApkFile(null);
  };

  return (
    <>
      <div
        className="post-audio-cont-box"
        onDrop={preventDefault}
        onDragOver={preventDefault}
      >
        {apkFile ? (
          <div className="apk-item">
            {/* Display the selected APK file */}
            <div className="dra-im">
              <BsAndroid2 className="icon-dw apk" />
              <div className="or-dr">{apkFile.name}</div>
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
              accept=".apk"
              onChange={handleApkChange}
              style={{ display: "none" }}
              id="apk-input"
            />
            <label htmlFor="apk-input" className="dra-im">
              <BsAndroid2 className="apk" />
              <div className="add-vid">Add APK File</div>
              <div className="or-dr">or drag and drop</div>
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default PostFormApkModal;
