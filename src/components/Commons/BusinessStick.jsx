import Data from "../../utils/dataProfile.json";
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
import AllStickers from "./AllStickers";
import AllSticking from "./AllSticking";

const BusinessStick = ({ handleBussinessClose }) => {
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
              <AiOutlineArrowLeft onClick={handleBussinessClose} />
              <div className="head-line bus-dir">Business Profile</div>
            </div>
          </div>
          <div className="profile-main-container">
            <div className="profile-all-image-box">
              <div className="cover-profile-image">
                <img
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  alt=""
                />
              </div>
              <div className="main-pro-image">
                <div className="main-img-bxb">
                  <img
                    src="https://cdn.wallpapersafari.com/32/28/ZOgVMn.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="deatil-profile">
              <div className="main-user-nm">McDonald’s</div>
              <div className="prof-user-txt">Snacks & Drink</div>
              <div className="prof-user-txt">Lagos, Nigeria</div>
            </div>
            <div className="btn-stick-box-row flex">
              <div className="all-stic-bx">
                <div className="stick-busi flex">
                  <div className="stick-con-tot">Posts</div>
                  <div className="counter-stick">570</div>
                </div>
                <div
                  className="stick-busi flex"
                  onClick={handleAllStickerClick}
                >
                  <div className="stick-con-tot">Stickers</div>
                  <div className="counter-stick">18m</div>
                </div>
                <div
                  className="stick-busi flex"
                  onClick={handleAllStickingClick}
                >
                  <div className="stick-con-tot">Sticking</div>
                  <div className="counter-stick">23k</div>
                </div>
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

export default BusinessStick;
