import { AiOutlineClose } from "react-icons/ai";

const GeneralSearchStereo = () => {
  // const navigate = useNavigate();

  // const gotoSearch = () => {
  //   navigate("/search");
  // };
  return (
    <div className="general-search-container join-str">
      <div className="down-cont colorrr">
        <div className="recent-see-all">
          <div className="recent-sear">Recent searches</div>
          <div className="clear-all-searc">Clear all</div>
        </div>
        <div className="search-text-close-bx">
          <div className="search-text">Sandra</div>
          <AiOutlineClose className="sea-close" />
        </div>
        <div className="search-text-close-bx">
          <div className="search-text">Worship</div>
          <AiOutlineClose className="sea-close" />
        </div>
        <div className="search-text-close-bx">
          <div className="search-text">Ask me</div>
          <AiOutlineClose className="sea-close" />
        </div>
        <div className="search-text-close-bx">
          <div className="search-text">Sola kay</div>
          <AiOutlineClose className="sea-close" />
        </div>
      </div>
    </div>
  );
};

export default GeneralSearchStereo;
