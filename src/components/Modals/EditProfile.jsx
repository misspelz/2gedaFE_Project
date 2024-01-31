import React, { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import axios from "axios";
import { url } from "../../utils";
import Lottie from "lottie-react";
import preloader from "../../pages/Home/Animation - 1703321875032 (1).json";

const EditProfile = ({ handleEditProClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMainFile, setSelectedMainFile] = useState(null);
  const [ isLoading,setIsloading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [religion] = useState("");
  const [work, setWork] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    work: "",
    city: "",
    dob: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleMainImageChange = (event) => {
    setSelectedMainFile(event.target.files[0]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      work: "",
      city: "",
      dob: "",
      gender: "",
      image: "",
    };

    if (!firstName) {
      newErrors.firstName = "Please enter your first name";
      valid = false;
    }

    if (!lastName) {
      newErrors.lastName = "Please enter your last name";
      valid = false;
    }

    if (!work) {
      newErrors.work = "Please enter your occupation";
      valid = false;
    }

    if (!city) {
      newErrors.city = "Please enter your current city";
      valid = false;
    }

    if (!dob) {
      newErrors.dob = "Please enter your date of birth";
      valid = false;
    }

    if (!gender) {
      newErrors.gender = "Please select your gender";
      valid = false;
    }

    if (!bio) {
      newErrors.gender = "Please add your bio";
      valid = false;
    }

    if (!selectedFile) {
      newErrors.image = "pls add a profile picture";
      valid = false;
    }

    if (!selectedFile) {
      newErrors.coverImage = "Please add a cover picture";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const token = localStorage.getItem("authToken");

  const updateProfile = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setIsloading(true);
      const FormData = require("form-data");
      let data = new FormData();

      data.append("work", work);
      data.append("date_of_birth", dob);
      data.append("gender", gender);
      data.append("custom_gender", "male");
      data.append("religion", religion);
      data.append("first_name", firstName);
      data.append("last_name", lastName);
      data.append("cover_image", selectedMainFile);
      data.append("city", city);
      data.append("media", selectedFile);

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${url}/profile/update/`,
        headers: {
          Authorization: `Token ${token}`,
        },
        data: data,
      };

      await axios.request(config);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
      navigate("/Home");
      console.log("Finally block executed");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className="postFormModal-container status-modal-container">
      <div className="over-scr">
        <div className="busi-mod-header">
          <div className="busi-bxs">
            <AiOutlineArrowLeft
              className="cls-post"
              onClick={handleEditProClose}
            />
            <div className="fels">
              <div className="claim">Edit profile</div>
            </div>
            <img src="images/lo2.png" alt="" />
          </div>
        </div>
        <div className="edit-pro-container">
          <div className="profile-all-image-box">
            <div className="post-img-cont-bo">
              {selectedFile ? (
                <div className="cover-profile-image">
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
                  <label htmlFor="image-input" className="dra-im domm">
                    <MdOutlineAddPhotoAlternate className="ddd" />
                    <div className="add-vid dad">Add Photos</div>
                  </label>
                </>
              )}
            </div>

            {selectedMainFile ? (
              <div className="main-pro-image ">
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
                <div className="error-message" style={{ color: "red" }}>
                  {errors.coverImage}
                </div>
                <div className="main-pro-image new-vb">
                  <div className="main-img-bxb">
                    <div className="pure-profile-con">
                      <div className="main-edit-bx">
                        <BsPersonFill />
                      </div>
                    </div>
                    <label htmlFor="image-main-input">
                      <div className="ed-img flex">
                        <MdEdit />
                      </div>
                      <div className="error-message" style={{ color: "red" }}>
                        {errors.image}
                      </div>
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="deatil-profile">
            <div className="prof-user-txt cennc" style={{ paddingTop: "20px" }}>
              Add profile picture (you can select up to 5)
            </div>
          </div>

          <div className="input-containe-claim">
            <div className="double-input">
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="error-message" style={{ color: "red" }}>
                  {errors.firstName}
                </div>
              </div>
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="error-message" style={{ color: "red" }}>
                  {errors.lastName}
                </div>
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Occupation"
                  onChange={(e) => setWork(e.target.value)}
                />
                <div className="error-message" style={{ color: "red" }}>
                  {errors.work}
                </div>
              </div>
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Current city"
                  onChange={(e) => setCity(e.target.value)}
                />
                <div className="error-message" style={{ color: "red" }}>
                  {errors.city}
                </div>
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box">
                <label htmlFor="">Date of Birth</label>
                <input
                  type="date"
                  className="claim-inp"
                  onChange={(e) => setDOB(formatDate(e.target.value))}
                />
                <div className="error-message" style={{ color: "red" }}>
                  {errors.dob}
                </div>
              </div>
              <div className="inp-label-box">
                <label htmlFor="">Gender</label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  name=""
                  id=""
                  className="claim-inp"
                >
                  <option value="" disabled>
                    Select a gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className="error-message" style={{ color: "red" }}>
                  {errors.gender}
                </div>
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box txt-nnx">
                <textarea
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  type="text"
                  className="txt-rea"
                  placeholder="Bio"
                />
                <div className="maxxi">Max 50 words</div>
                <div className="error-message" style={{ color: "red" }}>
                  {errors.firstName}
                </div>
              </div>
            </div>
          </div>

          {isLoading ? (
            <Lottie
              animationData={preloader}
              style={{
                width: "300px",
                height: "100px",
              }}
            />
          ) : (
            <div className="act-bttn-cl">
              <div className="act-btn-cont">
                <button
                      type="submit"
                      bg={"pruplr"}
                  onClick={updateProfile}
                  className={`action-btn`}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default EditProfile;
