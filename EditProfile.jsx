import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ActionButton from "../Commons/Button";
import { MdEdit } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { useState } from "react";

const EditProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMainFile, setSelectedMainFile] = useState(null);

  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleMainImageChange = (event) => {
    setSelectedMainFile(event.target.files[0]);
  };
  const handleCoverImageClick = () => {
    document.getElementById("image-input").click();
  };
  return (
    <div className="postFormModal-container status-modal-container">
      <div className="over-scr">
        {" "}
        <div className="busi-mod-header">
          <div className="busi-bxs">
            <AiOutlineArrowLeft
              className="cls-post"
              //   onClick={handleClaimClickClose}
            />
            <div className="fels">
              <div className="claim">Edit profile</div>
            </div>
            <img src="images/lo2.png" alt="" />
          </div>
        </div>
        <div className="edit-pro-container">
          <div className="profile-all-image-box">
            <div
              className="post-img-cont-bo"
              //   onDrop={handleImageDrop}
              //   onDragOver={preventDefault}
            >
              {selectedFile ? (
                <div
                  className="cover-profile-image"
                  onClick={handleCoverImageClick}
                >
                  <img src={URL.createObjectURL(selectedFile)} alt="" />
                </div>
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    id="image-input"
                  />
                  <label htmlFor="image-input" className="dra-im">
                    <MdOutlineAddPhotoAlternate />
                    <div className="add-vid">Add Photos</div>
                  </label>
                </>
              )}
            </div>

            {selectedMainFile ? (
              <div className="main-pro-image">
                <div className="main-img-bxb">
                  <img src={URL.createObjectURL(selectedMainFile)} alt="" />
                  <div className="ed-img flex">
                    <MdEdit />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageChange}
                  style={{ display: "none" }}
                  id="image-main-input"
                />
                <div className="main-pro-image">
                  <div className="main-img-bxb">
                    <div className="pure-profile-con">
                      <div className="main-edit-bx">
                        <BsPersonFill />
                      </div>
                    </div>
                    <label htmlFor="image-main-input" className="">
                      <div className="ed-img flex">
                        <MdEdit />
                      </div>
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="act-bttn-claim">
            <ActionButton label={"Proceed to claim"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
