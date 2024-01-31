import React from "react";
import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import Follower from "../../components/Dashboard/Follower";
import Data from "../../utils/dataProfile.json";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import PostsCol from "../../components/ProfilleComp/postsCol";
import PostsColPhoto from "../../components/ProfilleComp/postsColPhoto";
import PostsColVideo from "../../components/ProfilleComp/postsColVideo";
import PostsColFile from "../../components/ProfilleComp/postsColFile";
import PostsColLoc from "../../components/ProfilleComp/postsColLoc";
import PostsColMusic from "../../components/ProfilleComp/postsColMusic";
import PostsColVoice from "../../components/ProfilleComp/postsColVoice";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import ProfileModalMenu from "../../components/Modals/ProfileModal";
import PhoneImel from "../../components/Modals/PhoneImel";
import PhoneImelList from "../../components/Modals/PhoneImelList";
import PhoneImelCreate from "../../components/Modals/PhoneImelCreate";
import ManageAdvert from "../../components/Modals/ManageAdvert";
import AllStickers from "../../components/Commons/AllStickers";
import AllSticking from "../../components/Commons/AllSticking";
import EditProfile from "../../components/Modals/EditProfile";
import ReactAvatar from "react-avatar";
import { url } from "../../utils";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("All posts");
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
  const [isImelOpen, setIsImelOpen] = useState(false);
  const [isImelListOpen, setIsImelListOpen] = useState(false);
  const [isImelCreateOpen, setIsImelCreateOpen] = useState(false);
  const [isManAdOpen, setIsManAdOpen] = useState(false);
  const [isEditProOpen, setIsEditProOpen] = useState(false);
  const [isAllStickerOpen, setIsAllStickerOpen] = useState(false);
  const [isAllStickingOpen, setIsAllStickingOpen] = useState(false);
  const [setIsRequestOpen] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    jobTitle: "",
    bio: "",
    profileImage: "",
    coverImage: "",
  });
  const [UserToken] = useState("");
  const [newProfileImage, setNewProfileImage] = useState(null);
  const [newCoverImage, setNewCoverImage] = useState(null);
  const username = localStorage.getItem("username");
  const profileImageInputRef = useRef(null);
  const coverImageInputRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${url}/users-list/`, {
          method: "GET",
          headers: new Headers({
            Authorization: `${UserToken}`,
          }),
          redirect: "follow",
        });

        const result = await response.json();
        setUserData(result);

        const storedProfileImage = localStorage.getItem("profileImage");
        const storedCoverImage = localStorage.getItem("coverImage");

        if (storedProfileImage) {
          setUserData((prevUserData) => ({
            ...prevUserData,
            profileImage: storedProfileImage,
          }));
        }

        if (storedCoverImage) {
          setUserData((prevUserData) => ({
            ...prevUserData,
            coverImage: storedCoverImage,
          }));
        }
      } catch (error) {
        console.log("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [UserToken]);

  const handleRequestClick = () => {
    setIsRequestOpen(true);
  };

  const handleEditProClick = () => {
    setIsEditProOpen(true);
  };

  const handleEditProClose = () => {
    setIsEditProOpen(false);
  };

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

  const handleManAdClick = () => {
    setIsManAdOpen(true);
    setIsModalMenuOpen(false);
  };

  const handleManAdClose = () => {
    setIsManAdOpen(false);
  };

  const handleImelCreateClick = () => {
    setIsImelCreateOpen(true);
  };

  const handleImelCreateClose = () => {
    setIsImelCreateOpen(false);
  };

  const handleImelListClick = () => {
    setIsImelListOpen(true);
  };

  const handleImelListClose = () => {
    setIsImelListOpen(false);
  };

  const handleImelClick = () => {
    setIsModalMenuOpen(false);
    setIsImelOpen(true);
  };

  const handleImelClose = () => {
    setIsImelOpen(false);
  };

  const handleModalMenuClick = () => {
    setIsModalMenuOpen(true);
  };

  const handleModalMenuClose = () => {
    setIsModalMenuOpen(false);
  };

  const handleTabClick = (text) => {
    setActiveTab(text);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];

    // Only update the profile image if a new file is selected
    if (file) {
      setNewProfileImage(file);

      const updatedUserData = {
        ...userData,
        profileImage: URL.createObjectURL(file),
      };

      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      localStorage.setItem("profileImage", URL.createObjectURL(file));

      setUserData(updatedUserData);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setNewCoverImage(file);

    const updatedUserData = {
      ...userData,
      coverImage: URL.createObjectURL(file),
    };

    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    localStorage.setItem("coverImage", URL.createObjectURL(file));
    setUserData(updatedUserData);
  };

  return (
    <>
      {isImelOpen && (
        <div className="modal-full-container">
          <PhoneImel
            handleImelClose={handleImelClose}
            handleImelListClick={handleImelListClick}
            handleImelCreateClick={handleImelCreateClick}
          />
        </div>
      )}
      {isImelListOpen && (
        <div className="modal-full-container">
          <PhoneImelList
            handleImelListClose={handleImelListClose}
            handleImelCreateClick={handleImelCreateClick}
          />
        </div>
      )}
      {isEditProOpen && (
        <div className="modal-full-container">
          <EditProfile
            handleEditProClose={handleEditProClose}
            newProfileImage={newProfileImage}
            newCoverImage={newCoverImage}
          />
        </div>
      )}
      {isImelCreateOpen && (
        <div className="modal-full-container">
          <PhoneImelCreate handleImelCreateClose={handleImelCreateClose} />
        </div>
      )}
      {isManAdOpen && (
        <div className="modal-full-container">
          <ManageAdvert handleManAdClose={handleManAdClose} />
        </div>
      )}
      <div className="home-container">
        <MainLayout>
          <div className="main-containe bus-box-con">
            <div className="left-side-container buss-all-container">
              {isAllStickerOpen && (
                <AllStickers handleAllStickerClose={handleAllStickerClose} />
              )}
              {isAllStickingOpen && (
                <AllSticking handleAllStickingClose={handleAllStickingClose} />
              )}
              {!isAllStickerOpen && !isAllStickingOpen && (
                <>
                  <div className="profile-dot-bx flex">
                    <div className="head-line bus-dir">Profile</div>
                    <BiDotsVerticalRounded
                      className="dot"
                      onClick={handleModalMenuClick}
                    />
                    {isModalMenuOpen && (
                      <ProfileModalMenu
                        handleModalMenuClose={handleModalMenuClose}
                        handleImelClick={handleImelClick}
                        handleManAdClick={handleManAdClick}
                        handleEditProClick={handleEditProClick}
                        handleRequestClick={handleRequestClick}
                      />
                    )}
                  </div>
                  <div className="profile-main-container">
                    <div className="profile-all-image-box">
                      <div
                        className="cover-profile-image"
                        style={{ background: "purple" }}
                      >
                        <img
                          src={
                            userData?.coverImage ||
                            "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                          }
                          alt=""
                        />
                        {/* <div className="ed-img new-ed  flex">
                          <MdEdit />
                        </div> */}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleCoverImageChange}
                          style={{ display: "none" }}
                          ref={coverImageInputRef}
                        />
                        {/* <div
                          className="ed-img flex"
                          onClick={() => coverImageInputRef.current.click()}
                        >
                          <MdEdit />
                        </div> */}
                      </div>
                      <div className="main-pro-image">
                        <div className="main-img-bxb">
                          <ReactAvatar
                            name={username ? username.charAt(0) : "User"}
                            round={true}
                            size="100"
                            color="purple"
                            src={userData?.profileImage}
                            style={{ border: "2px solid white" }}
                          />
                          {/* <div className="ed-img flex">
                            <MdEdit />
                          </div> */}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfileImageChange}
                            style={{ display: "none" }}
                            ref={profileImageInputRef}
                          />
                          {/* <div
                            className="ed-img flex"
                            onClick={() => profileImageInputRef.current.click()}
                          >
                            <MdEdit />
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="deatil-profile">
                      {userData && (
                        <>
                          <div className="main-user-nm">
                            {userData.username}
                          </div>
                          <div className="prof-user-txt heading-tertiary">
                            {username}
                          </div>
                          <div className="prof-user-txt">
                            {userData.jobTitle}
                          </div>
                          <div className="prof-user-txt">{userData.bio}</div>
                        </>
                      )}
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
                          <div className="dis-sel-name refd">{item.text}</div>
                          <div
                            className={`cot-bxt ${
                              item.text === activeTab ? "" : "cot-bxt-act"
                            }`}
                          >
                            2.5K
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="posts-row-cont ">
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
            </div>
            <div className="middle-side-container">
              <img src="images/ads1.png" alt="" />
            </div>
            <div className="right-side-container">
              <SelectCategory />
              <Follower />
              <div className="mess-bxx-conn">
                <DashMessage />
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Profile;
