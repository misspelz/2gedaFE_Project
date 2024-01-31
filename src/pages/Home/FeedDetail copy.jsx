import CommentPerPost from "../../components/Dashboard/CommentPerPost";
import PostComp from "../../components/Dashboard/PostComp";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import {
  MdOutlinePhotoSizeSelectActual,
  MdOndemandVideo,
  MdKeyboardVoice,
} from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsFileEarmarkText } from "react-icons/bs";
import { useState } from "react";
import CommentInputField from "../../components/Modals/CommentInputField";
import PhotoInputField from "../../components/Modals/PhotoInputField";
import RecInputField from "../../components/Modals/RecInputField";
import { useRef } from "react";

const FeedDetail = () => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showPhotoInput, setShowPhotoInput] = useState(false);
  const [showRecInput, setShowRecInput] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const mediaRecorder = useRef(null);
  const mediaChunks = useRef([]);

  const handleRecordClick = () => {
    if (isRecording) {
      mediaRecorder.current.stop();
    } else {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = (e) => {
          mediaChunks.current.push(e.data);
        };

        mediaRecorder.current.onstop = () => {
          const blob = new Blob(mediaChunks.current, { type: "audio/wav" });
          setRecordedAudio(blob);
        };

        mediaRecorder.current.start();
      });
    }
    setIsRecording(!isRecording);
  };

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
    setSelectedImage(false);
  };

  const togglePhotoInput = () => {
    setShowPhotoInput(!showPhotoInput);
  };
  const toggleRecInput = () => {
    setShowRecInput(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDeleteItem = () => {
    setRecordedAudio(null);
  };

  return (
    <div className="feed-detail-container">
      <div className="feed-top">
        <TicketSearchComp
          label={"Feed"}
          // handleCloseContainerClick={handleCloseChooseClick}
          add={"add"}
        />
      </div>
      <hr className="feed_hr" />
      <PostComp disnone={"disnone"} redmar={"redmar"} />
      <div className="comm-bx-pos">
        <hr className="feed_hr" />
        <div className="commen-slect flex">
          <div className="comm-txt">Comments</div>
          <select name="" id="" className="sort-comm-sel">
            <option value="">most relevant</option>
            <option value="">Popular</option>
          </select>
        </div>
        <CommentPerPost />
      </div>

      {isRecording && (
        <div className="inpu-com-box pic-bx-cont">
          <RecInputField
            isRecording={isRecording}
            onStop={handleRecordClick}
            recordedAudio={recordedAudio}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
      )}

      {/* {!showCommentInput && selectedImage && (
        <div className="inpu-com-box pic-bx-cont">
          <PhotoInputField selectedImage={selectedImage} />
        </div>
      )} */}

      {/* <div className="inpu-com-box">
        {!selectedImage && showCommentInput && <CommentInputField />}
      </div> */}
      <div className="edit-comment-to-post">
        <div className="to-edi-con">
          <div className="edi-con-post fl">
            <BsFileEarmarkText />
          </div>{" "}
          <div className="edi-con-post nt" onClick={handleRecordClick}>
            {isRecording ? <AiOutlineStop /> : <MdKeyboardVoice />}
          </div>
          <div className="edi-con-post vd">
            <MdOndemandVideo />
          </div>
          <div className="edi-con-post pc">
            <input
              type="file"
              accept="images/"
              className="pic-inptn"
              style={{ display: "none" }}
              id="pic-inp"
              onChange={handleImageChange}
            />
            <label htmlFor="pic-inp">
              <MdOutlinePhotoSizeSelectActual className="pic-inptn" />
            </label>
          </div>
          <div className="edi-con-post" onClick={toggleCommentInput}>
            <FiEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedDetail;
