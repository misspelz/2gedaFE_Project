import { BsThreeDotsVertical } from "react-icons/bs";

const QuickPickCol = () => {
  return (
    <div className="quick-pick-container-bx flex">
      <div className="images-details-song flex">
        <img src="images/pic2.png" alt="" />
        <div className="song-title-author">
          <div className="tit-song">Take me home ft Bella Keys</div>
          <div className="aut-namm">TPrince</div>
        </div>
      </div>
      <div className="menu-bx-quick">
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default QuickPickCol;
