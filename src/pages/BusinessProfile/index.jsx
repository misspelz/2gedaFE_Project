import MainLayout from "../../Layout/MainLayout";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import "./style.css";

import Shortcart from "../../components/Commerce/ShortCart";
import BusinessPostCard from "../../components/BusinessProfile/BusinessPostCard";
import ActionButton from "../../components/Commons/Button";
import TopBusiness from "../../components/BusinessProfile/TopBusiness";
import ProfileModalMenu from "../../components/Modals/ProfileModal";
import { useState } from "react";
// import ManageBusiness from "./ManageBusiness";

const BusinessProfile = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
  // const [isMBusOpen, setIsMBusOpen] = useState(false);

  // const handleMBusClick = () => {
  //   setIsMBusOpen(true);
  // };
  // const handleMBusClose = () => {
  //   setIsMBusOpen(false);
  // };

  const handleModalMenuClick = () => {
    setIsModalMenuOpen(true);
  };
  const handleModalMenuClose = () => {
    setIsModalMenuOpen(false);
  };
  return (
    <div className="home-container">
      <MainLayout>
        <div className="main-containe bus-box-con">
          <div className="left-side-container buss-all-container buss-prof-boxx">
            {/* <ManageBusiness /> */}
            <div className="profile-dot-bx flex">
              <div className="head-line bus-dir">Business Profile</div>
              <BiDotsVerticalRounded
                className="dot"
                onClick={handleModalMenuClick}
              />
              {isModalMenuOpen && (
                <ProfileModalMenu handleModalMenuClose={handleModalMenuClose} />
              )}
            </div>
            <div className="profile-main-container">
              <div className="profile-all-image-box">
                <div className="cover-profile-image">
                  <img
                    src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                    alt=""
                  />
                  <div className="ed-img new-ed  flex">
                    <MdEdit />
                  </div>
                </div>
                <div className="main-pro-image">
                  <div className="main-img-bxb">
                    <img
                      src="https://cdn.wallpapersafari.com/32/28/ZOgVMn.jpg"
                      alt=""
                    />
                    <div className="ed-img flex">
                      <MdEdit />
                    </div>
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
                  <div className="stick-busi flex">
                    <div className="stick-con-tot">Stickers</div>
                    <div className="counter-stick">18m</div>
                  </div>
                  <div className="stick-busi flex">
                    <div className="stick-con-tot">Sticking</div>
                    <div className="counter-stick">23k</div>
                  </div>
                </div>
              </div>
              <div className="post-busi-profile-row">
                <div className="my-busi-pos">My Posts</div>
                <div className="bus-container-row">
                  <div className="cont-poste-sh">
                    <BusinessPostCard />
                    <BusinessPostCard />
                    <BusinessPostCard />
                    <BusinessPostCard />
                    <BusinessPostCard />
                    <BusinessPostCard />
                  </div>
                </div>
              </div>
              <img src="images/jumia.png" alt="" className="ads-img" />

              <div className="busi-cont flex cent">
                <ActionButton label={"Manage store"} type={"button"} />
              </div>
            </div>
          </div>

          <div className="middle-side-container side-top-bss">
            <img src="images/ads1.png" alt="" />
          </div>
          <div className="right-side-container side-top-bss">
            <TopBusiness />
            <Shortcart />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default BusinessProfile;
