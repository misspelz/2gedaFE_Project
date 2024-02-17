import React, { useState } from "react";
import "./CreatePoll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { url } from "utils/index";

const CreatePoll = ({ onClose }) => {
  const token = localStorage.getItem("authTOken");
  const [pollData, setPollData] = useState({
    question: "",
    content: ["", ""],
    duration: "22 hours",
    type: "Free",
    privacy: "Public",
    // media: null,
    currency: "NGN",
    amount: 0,
  });

  console.log("pollData", pollData);

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

    // Append poll currency and amount
    formData.append("currency", pollData.currency);
    formData.append("amount", pollData.amount);

    // Append media
    // formData.append("media", pollData.media);

    // Append options
    pollData.content.forEach((content, index) => {
        formData.append(`content`, content);
    });

    console.log(formData, "formData");

    const formDataRes = Object.fromEntries(formData)

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
          className="outline-none p-[9px]"
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
            className="outline-none p-[9px]"
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

      {/* {pollData.type === "Paid" && (
        <div className="form-field">
          <label htmlFor="price">Amount per vote</label>
          <input
            type="number"
            id="price"
            name="price"
            className="outline-none"
            onChange={(e) => handleInputChange("price", e.target.value)}
          />
        </div>
      )} */}

      {pollData.type === "Paid" && (
        <div className="flex gap-2 lg:gap-4 items-center justify-center">
          <div className="form-field w-[60%] lg:w-[80%]">
            <label htmlFor="amount">Amount per vote</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="outline-none p-[9px]"
              onChange={(e) => handleInputChange("amount", e.target.value)}
            />
          </div>

          <div className=" w-[40%] lg:w-[20%] mt-3">
            <select
              id="currency"
              name="currency"
              className="outline-none "
              onChange={(e) => handleInputChange("currency", e.target.value)}
            >
              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
            </select>
          </div>
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

      // <div className="form-field">
      //   <label htmlFor="media">Add image or video</label>
      //   <input
      //     type="file"
      //     id="media"
      //     accept="image/*, video/*"
      //     name="media"
      //     className="outline-none"
      //   />
      // </div>

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
