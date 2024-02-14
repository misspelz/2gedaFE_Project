import React, { useState } from "react";
import "./CreatePoll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { url } from "utils/index";

export const token = localStorage.getItem("authTOken");
const CreatePoll = ({ onClose, fetchPolls }) => {
  const [pollData, setPollData] = useState({
    question: "",
    content: ["", ""],
    duration: "22 hours",
    type: "Free",
    privacy: "Public",
    media: null,
    price: 0,
    amount: 0,
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

  const handleCreatePoll = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append poll question
    formData.append("question", pollData.question);

    // Append poll duration
    formData.append("duration", pollData.duration);

    // Append poll type
    formData.append("type", pollData.type);

    // Append poll privacy
    formData.append("privacy", pollData.privacy);

    // Append poll price
    formData.append("price", pollData.price);

    // Append poll amount
    formData.append("amount", pollData.amount);

    // Append media
    // formData.append("media", pollData.media);

    // Append options
    pollData.content.forEach((content, index) => {
      formData.append(`content`, content);
    });

    console.log(formData, "formData");

    const formDataRes = Object.fromEntries(formData);

    console.log(formDataRes, "formDataRes");

    try {
      setIsLoading(true);
      const resp = await fetch(url + "/poll/polls/", {
        method: "POST",
        headers: {
          Authorization: "Token " + token,
        },
        body: formData,
      });
      const result = await resp.json();

      console.log(result, "REs");

      if (result?.id) {
        toast.success("Poll created successfully");
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.error || "An error occurred");
    } finally {
      fetchPolls();
      setIsLoading(false);
      onClose();
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
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          Create Poll
        </span>
      </div>
      <div className="form-field">
        <label htmlFor="question">Poll question</label>
        <input
          type="text"
          id="question"
          name="question"
          placeholder="Enter your question"
          className="outline-none"
          onChange={(e) => handleInputChange("question", e.target.value)}
        />
      </div>

      {pollData.content.map((option, index) => (
        <div className="form-field" key={`option-${index}`}>
          <label htmlFor={`content${index + 1}`}>{`Option ${index + 1}`}</label>
          <input
            type="text"
            id={`content${index + 1}`}
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
          className="outline-none"
          onChange={(e) => handleInputChange("type", e.target.value)}
        >
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      {pollData.type === "Paid" && (
        <div className="form-field">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="outline-none"
            onChange={(e) => handleInputChange("price", e.target.value)}
          />
        </div>
      )}

      {pollData.type === "Paid" && (
        <div className="form-field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="outline-none"
            onChange={(e) => handleInputChange("amount", e.target.value)}
          />
        </div>
      )}

      <div className="form-field">
        <label htmlFor="privacy">Poll access</label>
        <select
          id="privacy"
          name="privacy"
          className="outline-none"
          onChange={(e) => handleInputChange("privacy", e.target.value)}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>

      {/* <div className="form-field">
        <label htmlFor="media">Add image or video</label>
        <input
          type="file"
          id="media"
          accept="image/*, video/*"
          name="media"
          className="outline-none"
          onChange={(e) =>
            handleInputChange("media", e.target.files[0])
          }
        />
      </div> */}

      <button
        className="create-poll-btn outline-none"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Please wait..." : "Create Poll"}
      </button>
    </form>
  );
};

export default CreatePoll;
