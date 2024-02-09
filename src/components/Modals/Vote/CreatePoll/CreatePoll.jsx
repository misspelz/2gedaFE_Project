import React, { useState } from "react";
import "./CreatePoll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { CreatePollApi } from "utils/ApICalls";

const CreatePoll = ({ onClose }) => {
  const [pollData, setPollData] = useState({
    question: "",
    content: ["", ""],
    duration: "22 hours",
    type: "Free",
    privacy: "Public",
    media: null,
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

    const formData = new FormData(e.target);

    // Extract options from form data
    const options = pollData.content.map((content, index) => ({
      id: index + 1,
      content: content,
      option_image: null,
      all_vote: 0,
      votee: [],
    }));

    // Set options list in form data
    formData.append("options_list", JSON.stringify(options));

    const formDetails = Object.fromEntries(formData);
    console.log("formDetails", formDetails);

    try {
      setIsLoading(true);
      const res = await CreatePollApi(formData);

      console.log("formData", formData);
      console.log("createpoll", res);
      console.log("createpoll", res?.data);
      if (res.status === 200) {
        toast.success("Poll created successfully");
        onClose();
      }
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
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>Create Poll</span>
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

      <div className="form-field">
        <label htmlFor="privacy">Poll Access</label>
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

      <div className="form-field">
        <label htmlFor="media">Add image or video</label>
        <input
          type="file"
          id="media"
          accept="image/*, video/*"
          name="media"
          className="outline-none"
          onChange={(e) => handleInputChange("media", e.target.files[0])}
        />
      </div>

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

// import React, { useState } from "react";
// import "./CreatePoll.css";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { toast } from "react-hot-toast";
// import { CreatePollApi } from "utils/ApICalls";

// const CreatePoll = ({ onClose }) => {
//   const [pollData, setPollData] = useState({
//     content: ["", ""],
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (field, value) => {
//     setPollData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   const handleAddOption = () => {
//     setPollData((prevData) => ({
//       ...prevData,
//       content: [...prevData.content, ""],
//     }));
//   };

//   const handleCreatePoll = async (e) => {
//     e.preventDefault();

//     // Create FormData
//     const form = new FormData(e.target);
//     form.append("content", pollData.content);

//     try {
//       setIsLoading(true);
//       const res = await CreatePollApi(form);

//       console.log("createpoll", res?.data);
//       if (res.status === 200) {
//         toast.success("Poll created successfully");
//         onClose();
//       }
//       // Make your API request here using formData
//       // Example: await fetch('your-api-endpoint', { method: 'POST', body: formData });
//     } catch (error) {
//       console.error("Error making API request:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form className="form-wrapper" onSubmit={handleCreatePoll}>
// <div
//   className="createTop"
//   style={{
//     display: "flex",
//     alignItems: "center",
//     gap: "40px",
//     paddingBottom: "20px",
//   }}
// >
//   <FaArrowLeftLong
//     style={{ fontSize: "20px" }}
//     onClick={() => onClose(false)}
//     className="cursor-pointer"
//   />
//   <span style={{ fontSize: "20px" }}>Create Poll</span>
// </div>
//       <div className="form-field">
//         <label htmlFor="question">Poll question</label>
//         <input
//           type="text"
//           id="question"
//           name="question"
//           placeholder="Enter your question"
//           className="outline-none"
//           onChange={(e) => handleInputChange("question", e.target.value)}
//         />
//       </div>

//       {pollData.content.map((option, index) => (
//         <div className="form-field" key={`option-${index}`}>
//           <label htmlFor={`content`}>{`Option ${index + 1}`}</label>
//           <input
//             type="text"
//             id={`content`}
//             placeholder="Type option"
//             value={option}
//             className="outline-none"
//             onChange={(e) => {
//               const updatedOptions = [...pollData.content];
//               updatedOptions[index] = e.target.value;
//               handleInputChange("content", updatedOptions);
//             }}
//           />
//         </div>
//       ))}
//       <div className="add-option" onClick={handleAddOption}>
//         <div className="option-icon">+</div>
//         <span>Add option</span>
//       </div>

//       <div className="form-field">
//         <label htmlFor="duration">Poll duration</label>
//         <select
//           id="duration"
//           name="duration"
//           className="outline-none"
//           onChange={(e) => handleInputChange("duration", e.target.value)}
//         >
//           <option value="22 hours">22 hours</option>
//           <option value="24 hours">24 hours</option>
//           <option value="3 days">3 days</option>
//         </select>
//       </div>

//       <div className="form-field">
//         <label htmlFor="type">Poll type</label>
//         <select
//           id="type"
//           name="type"
//           className="outline-none"
//           onChange={(e) => handleInputChange("type", e.target.value)}
//         >
//           <option value="Free">Free</option>
//           <option value="Paid">Paid</option>
//         </select>
//       </div>

//       <div className="form-field">
//         <label htmlFor="privacy">Poll Access</label>
//         <select
//           id="privacy"
//           name="privacy"
//           className="outline-none"
//           onChange={(e) => handleInputChange("privacy", e.target.value)}
//         >
//           <option value="Public">Public</option>
//           <option value="Private">Private</option>
//         </select>
//       </div>

//       <div className="form-field">
//         <label htmlFor="media">Add image or video</label>
//         <input
//           type="file"
//           id="media"
//           accept="image/*, video/*"
//           name="media"
//           className="outline-none"
//         />
//       </div>

//       <button
//         className="create-poll-btn outline-none"
//         type="submit"
//         disabled={isLoading}
//       >
//         {isLoading ? "Please wait..." : "Create Poll"}
//       </button>
//     </form>
//   );
// };

// export default CreatePoll;
