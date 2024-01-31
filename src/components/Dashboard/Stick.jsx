import { useEffect, useState } from "react";

const Stick = (address, username, cover_image) => {
  const [isClicked, setIsClicked] = useState(false);

  console.log(username);
  console.log(cover_image);

  const hanleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    
  },[]);

  console.log(cover_image);
  return (
    <div className="stick-cont">
      <div className="post-profile">
        {/* {cover_image && cover_image.cover_image ? (
          <img src={cover_image.cover_image} />
        ) : (
          <img src="https://dummyimage.com/300.png/09f/fff&text=Ash+Allen" />
        )} */}
        <img src="https://dummyimage.com/300.png/09f/fff&text=Ash+Allen" alt="dum"/>

        <div className="post-profile-details">
          <div className="post-profile-name"> {username}</div>
          <div className="autor-ooby">Pharmacist</div>
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
