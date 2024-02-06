import React, { useState } from "react";
import "./CreatePoll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { CreatePollApi } from "utils/ApICalls";

const CreatePoll = ({ onClose }) => {
  const [pollData, setPollData] = useState({
    options: ["", ""],
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
      options: [...prevData.options, ""],
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
    const optionsString = pollData.options.join(",");

    // Create FormData
    const form = new FormData(e.target);
    form.set("options_list", optionsString);
    form.set("question", pollData.question);
    form.set("privacy", pollData.pollAccess);
    form.set("duration", pollData.duration);
    form.set("type", pollData.type);

    // Get the file input element
    const mediaInput = document.getElementById("media");

    // Check if a file is selected
    if (mediaInput.files.length > 0) {
      form.append("media", mediaInput.files[0]);
    }

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

      {pollData.options.map((option, index) => (
        <div className="form-field" key={`option-${index}`}>
          <label htmlFor={`option-${index}`}>{`Option ${index + 1}`}</label>
          <input
            type="text"
            id={`option-${index}`}
            placeholder="Type option"
            value={option}
             className="outline-none"
            onChange={(e) => {
              const updatedOptions = [...pollData.options];
              updatedOptions[index] = e.target.value;
              handleInputChange("options", updatedOptions);
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
          name="pollDuration"
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
          name="pollType"
          value={pollData.type}
           className="outline-none"
          onChange={(e) => handleInputChange("type", e.target.value)}
        >
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="access">Poll Access</label>
        <select
          id="access"
          name="pollAccess"
          value={pollData.access}
           className="outline-none"
          onChange={(e) => handleInputChange("access", e.target.value)}
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
