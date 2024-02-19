import React, { useState, useRef } from "react";
import {
  BsCardImage,
  BsMic
} from "react-icons/bs";
import { FaVideo, FaMusic, FaFileAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { GoBriefcase } from "react-icons/go";
import PostFeedFormCont from "../../components/Home/PostFeedForm/index";
import "./style.css";

const FirstSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const fileInput = useRef(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleMainContainerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseMainContainerClick = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <PostFeedFormCont
        hdClose={handleCloseMainContainerClick}
        isModalOpen={isModalOpen}
        selectedIcon={selectedIcon}
        handleIconClick={handleIconClick}
      />
      <div className="first-side-container" onClick={handleMainContainerClick}>
        <div className="post-feed-container">
          <div className="post-ead">Post on feed</div>
          <div className="down-post-feed">
            <div className="icon-post-feed">
              <BsCardImage
                className="pic-vid"
                onClick={() => handleIconClick("photo")}
              />
              <FaVideo
                className="pic-vid"
                onClick={() => handleIconClick("photo")}
              />
              <IoLocation
                className="loca"
                onClick={() => handleIconClick("location")}
              />
              <FaMusic
                className="music"
                onClick={() => handleIconClick("music")}
              />
              <BsMic className="mic" onClick={() => handleIconClick("rec")} />
              <FaFileAlt
                className="fil"
                onClick={() => handleIconClick("allfiles")}
              />
              <GoBriefcase onClick={() => handleIconClick("jobs")}/>
            </div>
            <input type="file" ref={fileInput} style={{ display: "none" }} />
            <button className="post-btn" type="button">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSide;
