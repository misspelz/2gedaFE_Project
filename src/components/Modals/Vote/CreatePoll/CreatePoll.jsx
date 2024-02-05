import React, { useState } from "react";
import "./CreatePoll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";

const CreatePoll = ({ onClose }) => {
  const [pollData, setPollData] = useState({
    options: ["", ""],
  });
  const [isLoading, setIsLoading] = useState(false);

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

  const handleCreatePoll = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const opts = pollData.options.map((o) => o);
    form.append("options", opts);
    const formData = Object.fromEntries(form);
    console.log(formData);
    try {
      setIsLoading(true);
      const token = localStorage.getItem("authToken");
      console.log(token);
    } catch (error) {
      console.error("Error making API request:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Poll created successfully");
      }, 3000);
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
          onChange={(e) => handleInputChange("type", e.target.value)}
        >
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="media">Add image or video</label>
        <input type="file" id="media" accept="image/*, video/*" name="media" />
      </div>

      <button className="create-poll-btn" type="sumit" disabled={isLoading}>
        {isLoading ? "Please wait..." : "Create Poll"}
      </button>
    </form>
  );
};

export default CreatePoll;
