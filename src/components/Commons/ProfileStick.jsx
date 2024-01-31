import Data from "../../utils/dataProfile.json";
import { HiOutlinePhoto } from "react-icons/hi2";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import { MdEdit } from "react-icons/md";
import { useState } from "react";
import "./style.css";
import PostsCol from "../../components/ProfilleComp/postsCol";
import PostsColPhoto from "../../components/ProfilleComp/postsColPhoto";
import PostsColVideo from "../../components/ProfilleComp/postsColVideo";
import PostsColFile from "../../components/ProfilleComp/postsColFile";
import PostsColLoc from "../../components/ProfilleComp/postsColLoc";
import PostsColMusic from "../../components/ProfilleComp/postsColMusic";
import PostsColVoice from "../../components/ProfilleComp/postsColVoice";
import { useEffect } from "react";
import AllSticking from "./AllSticking";
import AllStickers from "./AllStickers";

const ProfileStick = ({ handleProfileClose }) => {
  const [activeTab, setActiveTab] = useState("All posts");
  const [isAllStickerOpen, setIsAllStickerOpen] = useState(false);
  const [isAllStickingOpen, setIsAllStickingOpen] = useState(false);

  const handleAllStickingClick = () => {
    setIsAllStickingOpen(true);
  };
  const handleAllStickingClose = () => {
    setIsAllStickingOpen(false);
  };

  const handleAllStickerClick = () => {
    setIsAllStickerOpen(true);
  };
  const handleAllStickerClose = () => {
    setIsAllStickerOpen(false);
  };

  const handleTabClick = (text) => {
    setActiveTab(text);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isAllStickerOpen && (
        <AllStickers handleAllStickerClose={handleAllStickerClose} />
      )}
      {isAllStickingOpen && (
        <AllSticking handleAllStickingClose={handleAllStickingClose} />
      )}
      {!isAllStickerOpen && !isAllStickingOpen && (
        <>
          <div className="profile-dot-bx flex red-wid">
            <div className="prof-back flex">
              <AiOutlineArrowLeft onClick={handleProfileClose} />
              <div className="head-line bus-dir">Profile</div>
            </div>
          </div>
          <div className="profile-main-container">
            <div className="profile-all-image-box">
              <div className="cover-profile-image">
                <img
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  alt=""
                />
                {/* <div className="ed-img new-ed  flex">
              <MdEdit />
            </div> */}
              </div>
              <div className="main-pro-image">
                <div className="main-img-bxb">
                  <img
                    src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
                    alt=""
                  />
                  <div className="image-cont-bxx flex">
                    <HiOutlinePhoto />
                    <div className="num-ph">5</div>
                  </div>
                  {/* <div className="ed-img flex">
                <MdEdit />
              </div> */}
                </div>
              </div>
            </div>
            <div className="deatil-profile">
              <div className="main-user-nm">Charlotte Caria Faith</div>
              <div className="prof-user-txt">Product Designer</div>
              <div className="prof-user-txt">Lagos, Nigeria</div>
            </div>
            <div className="btn-stick-box-row flex">
              <div
                className="stick-counter flex"
                onClick={handleAllStickerClick}
              >
                <div className="stick-con-tot">Stickers</div>
                <div className="counter-stick">18m</div>
              </div>
              <div
                className="stick-counter flex"
                onClick={handleAllStickingClick}
              >
                <div className="stick-con-tot">Sticking</div>
                <div className="counter-stick">23k</div>
              </div>
            </div>
            <div className="btn-stick-box-row flex red-mar">
              <div className="stick-counter chtt flex">Chat</div>
              <div className=" chtt stick-counter sttic flex">Stick</div>
            </div>
            <img src="images/jumia.png" alt="" className="ads-img" />
            <div className="select-what-display w-dis">
              {Data.map((item, index) => (
                <div
                  key={index}
                  className={`tab-item gen-bx ${
                    item.text === activeTab
                      ? "sel-act pro-lis-act"
                      : "anot-wid add-bor pro-no-act"
                  }`}
                  onClick={() => handleTabClick(item.text)}
                >
                  {/* <div className="cont-tb-txt"> */}
                  <div className="dis-sel-name refd">{item.text}</div>
                  <div
                    className={`cot-bxt ${
                      item.text === activeTab ? "" : "cot-bxt-act"
                    }`}
                  >
                    2.5K
                  </div>
                  {/* </div> */}
                </div>
              ))}
            </div>
            <div className="posts-row-cont flex">
              {activeTab === "All posts" ? <PostsCol /> : null}
              {activeTab === "Images" ? <PostsColPhoto /> : null}
              {activeTab === "Videos" ? <PostsColVideo /> : null}
              {activeTab === "Files" ? <PostsColFile /> : null}
              {activeTab === "Location" ? <PostsColLoc /> : null}
              {activeTab === "Music" ? <PostsColMusic /> : null}
              {activeTab === "Voice note" ? <PostsColVoice /> : null}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileStick;
