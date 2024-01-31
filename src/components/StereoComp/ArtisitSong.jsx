import { BsThreeDotsVertical } from "react-icons/bs";

const ArtisitSong = () => {
  return (
    <div className="quick-pick-container-bx flex">
      <div className="numb-bx flex">
        <div className="num-txt">1.</div>
        <div className="images-details-song flex">
          <img src="images/pic2.png" alt="" />
          <div className="song-title-author">
            <div className="tit-song">Dawn</div>
          </div>
        </div>
      </div>
      <div className="menu-bx-quick">
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default ArtisitSong;
