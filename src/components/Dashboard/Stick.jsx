import { useEffect, useState } from "react";
import PostImage from "../../assets/images/sample-avatar.png";

const Stick = (address, username, cover_image) => {
  const [isClicked, setIsClicked] = useState(false);

  // console.log(username);
  // console.log(cover_image);

  const hanleClick = () => {
    setIsClicked(!isClicked);
  };

  // useEffect(() => {

  // },[]);

  // console.log(cover_image);
  return (
    <div className="stick-cont">
      <div className="post-profile">
        <img src={PostImage} alt="dum" />

        <div className="post-profile-details">
          <div className="post-profile-name"> Salem Lawal</div>
          <div className="autor-ooby">Product designer</div>
          <div className="autor-location">Lagos, Nigeria</div>
        </div>
      </div>
      <div className="stick-btn">
        <button
          className={isClicked ? "stickin " : " stick-btnn"}
          onClick={hanleClick}
        >
          {isClicked ? "Sticking" : "Stick"}
        </button>
      </div>
    </div>
  );
};

export default Stick;
