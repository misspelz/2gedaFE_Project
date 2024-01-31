import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePoll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import SearchBox from "../../../SearchComp/searchBox";
import Notify from "../Notification/Notify";
import MainLayout from "../../../../Layout/MainLayout";
import { url } from "../../../../utils";
import axios from "axios";

const CreatePoll = () => {
  const navigate = useNavigate();

  const [pollData, setPollData] = useState({
    question: "",
    options: ["", ""],
    duration: "",
    type: "",
    media: ["", ""],
  });

  const handleInputChange = (field, value) => {
    setPollData({
      ...pollData,
      [field]: value,
    });
  };

  const handleAddOption = () => {
    setPollData({
      ...pollData,
      options: [...pollData.options, ""],
    });
  };

  // const handleMediaChange = (e) => {
  //   const file = e.target.files[0];
  //   setPollData({
  //     ...pollData,
  //     media: file,
  //   });
  // };

  const handleCreatePoll = async () => {
    let formdata = new FormData();
    // formdata.append("question", pollData.question);
    // formdata.append("duration", pollData.duration);
    // formdata.append("type", pollData.type);

    // pollData.options.forEach((item, index) => {
    //   console.log(item);
    //   formdata.append("content", item);
    // });

    // pollData.media.forEach((item, index) => {
    //   formdata.append("media", item);
    // });

    // formdata.append("media", fileInput.files[0], "Group 63.png");
    // formdata.append("media", fileInput.files[0], "Frame 24546.png");
    // formdata.append("time_duration", "");
    // formdata.append("content", "");
    console.log(formdata);
    try {
      // const response = await fetch(`http://127.0.0.1:8000/poll/polls/`, {
        //   method: "POST",
        //   headers: {
          
          //     Authorization: `Token ${token}`,
          //   },
          //   body: formdata,
          // });
          
          // const responseBody = await response.text()
          // console.log(responseBody)
      // if (response.ok) {
        //   navigate("/Voting");
        // } else {
          //   const errorData = await response.json();
          //   console.error("API request failed:", errorData);
          // }
          
          let data = new FormData();
          data.append("question", pollData.question);
          data.append("duration", pollData.duration);
          data.append("type", pollData.type);
          
          pollData.media.forEach((item, index) => {
            console.log(item);
        data.append("media", item);
      });

      pollData.options.forEach((item, index) => {
        console.log(item);
        data.append("content", `${item}`);
      });

      
      
      
      const token = localStorage.getItem("authToken");

      // data.append("content", "wale");

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${url}/poll/polls/`,
        headers: {
          Authorization: `${token}`,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          navigate("/Voting");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  return (
    <div className="home-container" style={{ background: "whiteSmoke" }}>
      <MainLayout>
        <div className="main-containe bus-box-con">
          <div className="left-side-container buss-all-container">
            <div className="create-poll-container">
              <div className="form-wrapper">
                <div
                  className="createTop"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    paddingBottom: "20px",
                  }}
                >
                  <FaArrowLeftLong style={{ fontSize: "20px" }} />
                  <span style={{ fontSize: "20px" }}>Create Poll</span>
                </div>
                <div className="form-field">
                  <label htmlFor="question">Poll question</label>
                  <input
                    type="text"
                    id="question"
                    placeholder="Enter your question"
                    value={pollData.question}
                    onChange={(e) =>
                      handleInputChange("question", e.target.value)
                    }
                  />
                </div>

                {pollData.options.map((option, index) => (
                  <div className="form-field" key={`option-${index}`}>
                    <label htmlFor={`option-${index}`}>{`Option ${
                      index + 1
                    }`}</label>
                    <input
                      type="text"
                      id={`option-${index}`}
                      placeholder="Type option"
                      value={option}
                      onChange={(e) => {
                        const updatedOptions = [...pollData.options];
                        updatedOptions[index] = e.target.value;
                        handleInputChange("options", updatedOptions);
                      }}
                    />

                    <div className="form-field">
                      <label htmlFor="media">Add image or video</label>
                      <input
                        type="file"
                        id="media"
                        accept="image/*, video/*"
                        onChange={(e) => {
                          const updatedMedia = [...pollData.media];
                          updatedMedia[index] = e.target.files[0];
                          handleInputChange("media", updatedMedia);
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div className="add-option" onClick={handleAddOption}>
                  <div className="option-icon"></div>
                  <div className="option-text">Add option</div>
                </div>

                <div className="form-field">
                  <label htmlFor="duration">Poll duration</label>
                  <select
                    id="duration"
                    value={pollData.duration}
                    onChange={(e) =>
                      handleInputChange("duration", e.target.value)
                    }
                  >
                    <option value="">Select one</option>
                    <option value="22 hours">22 hours</option>
                    <option value="24 hours">24 hours</option>
                    <option value="3 days">3 days</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="type">Poll type</label>
                  <select
                    id="type"
                    value={pollData.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>

                <div className="create-poll-btn" onClick={handleCreatePoll}>
                  Create poll
                </div>
              </div>
            </div>
          </div>

          <div
            className="left-side-container"
            style={{ maxWidth: "525px", padding: "20px", background: "#fff" }}
          >
            <SearchBox />
            <Notify />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default CreatePoll;
