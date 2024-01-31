import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import EachStatus from "../Commons/EachStatus";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "Christophe...",
    profile_image:
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
    images: [
      "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    ],
  },
  {
    id: 2,
    name: "Faith",
    profile_image: "https://example.com/your_profile_image_2.jpg",
    images: [
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
    ],
  },
  {
    id: 3,
    name: "WizCode",
    profile_image:
      "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
    images: [
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
    ],
  },
  {
    id: 4,
    name: "Silent",
    profile_image:
      "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/427117o_1cutvnri21qkbgv6keeaudspl18.jpg?w=970&ssl=1",
    images: [
      "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      "",
    ],
  },
];

const StickerStatusModal = ({
  handleCloseStickerStatusClick,
  selectedUserId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUserId, setCurrentUserId] = useState(selectedUserId);
  const user = data.find((item) => item.id === selectedUserId); // Finding the user based on selectedUserId
  const images = user?.images;
  const profileImage = user.profile_image;
  console.log(selectedUserId);
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      const currentUserIndex = data.findIndex(
        (item) => item.id === currentUserId
      );
      if (currentUserIndex !== -1 && currentUserIndex < data.length - 1) {
        const nextUser = data[currentUserIndex + 1];
        setCurrentIndex(0);
        setCurrentUserId(nextUser.id);
      }
    }
  };

  useEffect(() => {
    let interval;
    if (currentIndex < images.length - 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className="postFormModal-container status-modal-container">
      <div className="status-nav">
        <AiOutlineClose
          className="cls-post"
          onClick={handleCloseStickerStatusClick}
        />
        <div className="logo-container status-nav-logo">
          <img src="images/lo2.png" alt="" className="logo-img" />
          <div className="logo-text">2geda</div>
        </div>
      </div>
      <div className="all-status-container">
        <div className="owner-status-cont">
          <div className="add-status-m">
            <FaPlus />
          </div>
          <div className="life-style-cont">
            <div className="life-style">Your lifestyle</div>
            <div className="advi-style">Share an event or happening</div>
          </div>
        </div>
        <div className="all-the-sticker-status">
          <div className="the-sticker-status-cont">
            <div className="th-sticker-status">
              <div className="sticker-pic">
                <img src="images/pic2.png" alt="" />
              </div>
              <div className="sticker-name-s">You</div>
              <div className="new-time">
                <span>25 m</span>
              </div>
            </div>
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
          </div>
        </div>
      </div>

      <div className="connect-profile-view-box">
        <div className="cont-view-connect">
          <div
            className={`arrr-ctrl ${currentIndex === 0 ? "disable" : ""} flex`}
            onClick={handlePrevious}
          >
            <AiOutlineLeft />
          </div>
          <div className="image-bx-cont">
            <div className="ima-act-bxbbx">
              <img src={profileImage} alt="" />
            </div>
            <div className="indicator-bx">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`ind-con ${
                    index === currentIndex ? "actv-life loading-indicator" : ""
                  }`}
                ></div>
              ))}
            </div>
            <div className="flex all-ma-box">
              <img src={images[currentIndex]} alt="" />
            </div>
          </div>
          <div
            className={`arrr-ctrl flex `}
            onClick={() => {
              if (currentIndex === images.length - 1) {
                const currentUserIndex = data.findIndex(
                  (item) => item.id === currentUserId
                );
                if (
                  currentUserIndex !== -1 &&
                  currentUserIndex < data.length - 1
                ) {
                  const nextUser = data[currentUserIndex + 1];
                  setCurrentIndex(0);
                  setCurrentUserId(nextUser.id);
                }
              } else {
                handleNext();
              }
            }}
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerStatusModal;
