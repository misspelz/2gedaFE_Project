import { MdOutlineFavoriteBorder, MdShare } from "react-icons/md";

const StereoMenu = () => {
  return (
    <div className="current-menu-modal str-menu-bx">
      <div className="menu-current-tst ant et-p">
        <MdOutlineFavoriteBorder />
        Like
      </div>
      <div className="menu-current-tst ant et-p">
        <MdShare />
        Share
      </div>
    </div>
  );
};

export default StereoMenu;
