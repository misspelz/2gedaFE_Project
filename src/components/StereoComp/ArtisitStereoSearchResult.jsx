import { AiOutlineRight } from "react-icons/ai";

const ArtisitStereoSearchResult = () => {
  return (
    <div className="quick-pick-container-bx flex">
      <div className="numb-bx flex">
        <div className="images-details-song flex borderd-bx">
          <img src="images/pic2.png" alt="" />
          <div className="song-title-author">
            <div className="tit-song">Tankoloba</div>
          </div>
        </div>
      </div>
      <div className="menu-bx-quick">
        <AiOutlineRight />
      </div>
    </div>
  );
};

export default ArtisitStereoSearchResult;
