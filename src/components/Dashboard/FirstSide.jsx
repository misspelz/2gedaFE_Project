import React, { useState, useRef } from "react";
import {
  BsCardImage,
  BsMic,
  BsFillFileEarmarkPdfFill,
  BsAndroid2,
  BsFiletypeExe,
} from "react-icons/bs";
import { FaVideo, FaMusic, FaFileAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import "./style.css";
import PostFeedFormCont from "../PostFeedForm";

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
              <SiMicrosoftword
                className="word"
                onClick={() => handleIconClick("word")}
              />
              <SiMicrosoftexcel
                className="excel"
                onClick={() => handleIconClick("excel")}
              />
              <PiMicrosoftPowerpointLogo
                className="prese"
                onClick={() => handleIconClick("power")}
              />
              <BsFillFileEarmarkPdfFill
                className="pdf"
                onClick={() => handleIconClick("pdf")}
              />
              <BsAndroid2
                className="apk"
                onClick={() => handleIconClick("apk")}
              />
              <BsFiletypeExe
                className="apk"
                onClick={() => handleIconClick("exe")}
              />
            </div>
            <input type="file" ref={fileInput} style={{ display: "none" }} />
            <button className="post-btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSide;
