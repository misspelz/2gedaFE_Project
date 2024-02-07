import React, { useState } from "react";
import "./CreatePoll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { CreatePollApi } from "utils/ApICalls";

const CreatePoll = ({ onClose }) => {
  const [pollData, setPollData] = useState({
    content: ["", ""],
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setPollData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddOption = () => {
    setPollData((prevData) => ({
      ...prevData,
      content: [...prevData.content, ""],
    }));
  };

  // const handleInputChange = (field, value) => {
  //   setPollData({
  //     ...pollData,
  //     [field]: value,
  //   });
  // };

  // const handleAddOption = () => {
  //   setPollData({
  //     ...pollData,
  //     options: [...pollData.options, ""],
  //   });
  // };

  const handleCreatePoll = async (e) => {
    e.preventDefault();

    // Convert options array to a comma-separated string
    const optionsString = pollData.content.join(",");

    // Create FormData
    const form = new FormData(e.target);
    form.append("content", optionsString);
    form.append("question", pollData.question);
    form.append("privacy", pollData.privacy);
    form.append("duration", pollData.duration);
    form.append("type", pollData.type);

    const formDetails = Object.fromEntries(form)
    console.log("formDetails",formDetails);

    // Get the file input element
    const mediaInput = document.getElementById("media");

    // Check if a file is selected
    if (mediaInput.files.length > 0) {
      form.append("media", mediaInput.files[0]);
    }

    console.log(form)

    try {
      setIsLoading(true);
      const res = await CreatePollApi(form);
      console.log("createpoll", res);
      if (res.status == 200) {
        toast.success("Poll created successfully");
        onClose();
      }
      // Make your API request here using formData
      // Example: await fetch('your-api-endpoint', { method: 'POST', body: formData });
    } catch (error) {
      console.error("Error making API request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form-wrapper" onSubmit={handleCreatePoll}>
      <div
        className="createTop"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          paddingBottom: "20px",
        }}
      >
        <FaArrowLeftLong
          style={{ fontSize: "20px" }}
          onClick={() => onClose(false)}
          className="cursor-pointer"
        />
        <span style={{ fontSize: "20px" }}>Create Poll</span>
      </div>
      <div className="form-field">
        <label htmlFor="question">Poll question</label>
        <input
          type="text"
          id="question"
          name="question"
          placeholder="Enter your question"
          value={pollData.question}
          className="outline-none"
          onChange={(e) => handleInputChange("question", e.target.value)}
        />
      </div>

      {pollData.content.map((option, index) => (
        <div className="form-field" key={`option-${index}`}>
          <label htmlFor={`content`}>{`Option ${index + 1}`}</label>
          <input
            type="text"
            id={`content`}
            placeholder="Type option"
            value={option}
             className="outline-none"
            onChange={(e) => {
              const updatedOptions = [...pollData.content];
              updatedOptions[index] = e.target.value;
              handleInputChange("content", updatedOptions);
            }}
          />
        </div>
      ))}
      <div className="add-option" onClick={handleAddOption}>
        <div className="option-icon">+</div>
        <span>Add option</span>
      </div>

      <div className="form-field">
        <label htmlFor="duration">Poll duration</label>
        <select
          id="duration"
          name="duration"
          value={pollData.duration}
           className="outline-none"
          onChange={(e) => handleInputChange("duration", e.target.value)}
        >
          <option value="22 hours">22 hours</option>
          <option value="24 hours">24 hours</option>
          <option value="3 days">3 days</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="type">Poll type</label>
        <select
          id="type"
          name="type"
          value={pollData.type}
           className="outline-none"
          onChange={(e) => handleInputChange("type", e.target.value)}
        >
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="privacy">Poll Access</label>
        <select
          id="privacy"
          name="privacy"
          value={pollData.privacy}
           className="outline-none"
          onChange={(e) => handleInputChange("privacy", e.target.value)}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="media">Add image or video</label>
        <input type="file" id="media" accept="image/*, video/*" name="media"  className="outline-none" />
      </div>

      <button className="create-poll-btn outline-none" type="submit" disabled={isLoading}>
        {isLoading ? "Please wait..." : "Create Poll"}
      </button>
    </form>
  );
};

export default CreatePoll;
