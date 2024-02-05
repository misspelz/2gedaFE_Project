import React, { useState } from "react";
import {
  BsCardImage,
  BsMic
} from "react-icons/bs";
import { FaVideo, FaMusic, FaFileAlt } from "react-icons/fa";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { IoLocation, IoCloseSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "./style.css";
import PostFormPhotoModal from "./PostFormPhotoModal";
import PostFormMusicModal from "./PostFormMusicModal";
import PostFormRecModal from "./PostFormRecModal";
import PostFormWordModal from "./PostFormWordModal";
import PostFormExcelModal from "./PostFormExcelModal";
import PostFormExeModal from "./PostFormExeModal";
import PostFormLocationModal from "./PostFormLocModal";
import PostFormFilesModal from "./PostFormFilesModal";
import HashtagModal from "./HashTagModal";
import TagFriends from "./TagFriends";   
import data from "../../utils/tag.json";
import { url } from "../../utils";
import axios from "axios";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

const topFriends = [
  { name: 'Alice Oghene', id: 1 },
  { name: 'John doe', id: 2 },
  { name: 'Simeon Harry', id: 3 },
  { name: 'Theresa Oliver', id: 4 },
  { name: 'Idris Haruna', id: 5 },
]


const icon = <MdCheckBoxOutlineBlank size={18} />;
const checkedIcon = <MdOutlineCheckBox size={18} />;


const PostFormModal = ({
  handleCloseMainContainerClick,
  selectedIcon,
  handleIconClick,
}) => {
  const [userInput, setUserInput] = useState("");
  const [suggestedHashtags, setSuggestedHashtags] = useState([]);
  const [addedTags, setAddedTags] = useState([]);
  const [isTagsFrd, setIsTagsFrd] = useState(false);
  const [selectedSuggestion] = useState("");
  const hashtags = ["#programming", "#technology", "#art", "#travel"];
  const [checkedFriends, setCheckedFriends] = useState([]);
  const [images, setImages] = useState([]);
  const [audioFile, setAudioFile] = useState([]);
  const [pdf, setPDF] = useState([]);
  const [word, setWord] = useState([]);
  const [powerpoint, setPowerpoint] = useState([]);
  const [excel, setExcel] = useState([]);
  const [apk, setApk] = useState([]);
  const [exe, setExe] = useState([]);
  const [music, setMusic] = useState([]);
  const [contentText, setContentText] = useState(null);

  const handleFriendCheck = (img) => {
    if (checkedFriends.includes(img)) {
      setCheckedFriends(checkedFriends.filter((friend) => friend !== img));
    } else {
      setCheckedFriends([...checkedFriends, img]);
    }
  };

  const handleRemoveTagFrd = (index) => {
    const updatedFriends = [...checkedFriends];
    updatedFriends.splice(index, 1);
    setCheckedFriends(updatedFriends);
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);

    const filteredHashtags = hashtags.filter((tag) =>
      tag.toLowerCase().includes(inputText.toLowerCase())
    );
    setSuggestedHashtags(filteredHashtags);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && userInput.length > 0) {
      setAddedTags([...addedTags, userInput]);
      setUserInput("");
    }
  };

  const handleRemoveTag = (index) => {
    const updatedTags = [...addedTags];
    updatedTags.splice(index, 1);
    setAddedTags(updatedTags);
  };

  const handleSuggestionClick = (suggestion) => {
    setAddedTags([...addedTags, suggestion]);
  };

  const handleTagFrdClick = () => {
    setIsTagsFrd(true);
  };

  const handleCloseTagFrdClick = () => {
    setIsTagsFrd(false);
  };

  const handlePost = async () => {
    try {
      const token = localStorage.getItem("authTOken");
      const FormData = require("form-data");
      let data = new FormData();

      if (selectedIcon === "word") {
        data.append("media", word[0]);
      } else if (selectedIcon === "photo") {
        data.append("media", images[0]);
      } else if (selectedIcon === "pdf") {
        data.append("media", pdf[0]);
      } else if (selectedIcon === "powerpoint") {
        data.append("media", powerpoint[0]);
      } else if (selectedIcon === "apk") {
        data.append("media", apk[0]);
      } else if (selectedIcon === "exe") {
        data.append("media", exe[0]);
      } else if (selectedIcon === "excel") {
        data.append("media", excel[0]);
      } else if (selectedIcon === "rec") {
        data.append("media", audioFile[0]);
      } else if (selectedIcon === "music") {
        data.append("media", music[0]);
      }

      data.append("media", images[0]);
      data.append("content", contentText);
      data.append("url", "https://example.com");
      data.append("hashtags", hashtags);
      data.append("is_business_post", "True");
      data.append("tagged_users", TagFriends);
      data.append("media", images[2]);
      data.append("hashtags", hashtags);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${url}/feed/create_post/`,
        headers: {
          Authorization: `Token ${token}`,
        },
        data: data,
      };

      await axios.request(config);

      Swal.fire({
        icon: "success",
        title: "Post Successful!",
        text: "Your post has been successfully posted.",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      handleCloseMainContainerClick();
    }
  };

  return (
    <>
      <div className="postFormModal-container">
        <div className="post-clos-box">
          <div className="post-ead">Post on feed</div>
          <AiOutlineClose
            className="cls-post"
            onClick={handleCloseMainContainerClick}
          />
        </div>
        <textarea
          name=""
          id=""
          placeholder="Write up to 1,000 words"
          className="text-area"
          onChange={(event) => setContentText(event.target.value)}
        ></textarea>
        <div className="viwdt">
          {selectedIcon === "photo" && (
            <PostFormPhotoModal images={images} setImages={setImages} />
          )}
          {selectedIcon === "music" && (
            <PostFormMusicModal music={music} setMusic={setMusic} />
          )}
          {selectedIcon === "rec" && (
            <PostFormRecModal setAudioFile={setAudioFile} />
          )}
          {selectedIcon === "word" && (
            <PostFormWordModal setword={setWord} word={word} />
          )}
          {selectedIcon === "excel" && (
            <PostFormExcelModal setExcel={setExcel} excel={excel} />
          )}
          {selectedIcon === "exe" && (
            <PostFormExeModal setExe={setExe} exe={exe} />
          )}
          {selectedIcon === "location" && <PostFormLocationModal />}
          {selectedIcon === "allfiles" && <PostFormFilesModal />}
        </div>
        <div className="hashtags-container">
          <div className="add-tags-btn">Add hashtag</div>
          {addedTags.map((tag, index) => (
            <div className="add-tags-btn added-tag-cont" key={index}>
              <div className="added-tag-tst">{tag}</div>
              <AiOutlineClose
                className="cls-tag"
                onClick={() => handleRemoveTag(index)}
              />
            </div>
          ))}
          <div className="add-tags-btn added-tag-cont">
            <div className="added-tag-tst">
              <input
                type="text"
                className="let-inp"
                value={selectedSuggestion || userInput}
                onChange={handleInputChange}
                onKeyDown={handleEnterPress}
                placeholder="Type here"
              />
            </div>
            <AiOutlineClose className="cls-tag" />
            {userInput.length > 0 && (
              <HashtagModal
                hashtags={suggestedHashtags}
                onHashtagClick={handleSuggestionClick}
              />
            )}
          </div>
        </div>
        {isTagsFrd && (
          <div className="modal-full-container">
            <TagFriends
              handleCloseTagFrdClick={handleCloseTagFrdClick}
              data={data}
              onFriendCheck={handleFriendCheck}
            />
          </div>
        )}
        <div className="hashtags-container" onClick={handleTagFrdClick}>
          <div className="add-tags-frd">Tag Friends</div>
        </div>
        <div className="taged-frd-box">
          {checkedFriends.map((img, index) => (
            <div className="tag-frd-cont" key={index}>
              <img src={img} alt="" />
              <IoCloseSharp
                className="cls-tag-fr"
                onClick={() => handleRemoveTagFrd(index)}
              />
            </div>
          ))}
        </div>
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
            {/* <PiMicrosoftPowerpointLogo
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
            /> */}
            {/* <BsFiletypeExe
              className="apk"
              onClick={() => handleIconClick("exe")}
            /> */}
          </div>
          <button className="post-btn" type="submit" onClick={handlePost}>
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default PostFormModal;
