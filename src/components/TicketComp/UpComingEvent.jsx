import ActionButton from "../Commons/Button";
import UpActiveTick from "./UpActiveTick";
const Data = [
  {
    name: "Spring Music Festival",
    date: "Fri, 25 Mar 2023",
    time: "7:00 PM",
  },
  {
    name: "Summer Jazz Night",
    date: "Sat, 15 Jul 2023",
    time: "6:30 PM",
  },
  {
    name: "Autumn Symphony Showcase",
    date: "Wed, 5 Oct 2023",
    time: "8:00 PM",
  },
  {
    name: "Winter Opera Gala",
    date: "Sun, 24 Dec 2023",
    time: "7:30 PM",
  },
];

const UpComingEvent = ({ handleBackClick }) => {
  if (Data.length === 0) {
    return (
      <div className="searchEmpty-bbox">
        <div className="empt-box-sea">
          <img src="images/em1.png" alt="" />
          <div className="notin-is">Nothing here yet!</div>
          <div className="act-notin" onClick={handleBackClick}>
            <ActionButton label={"Create an event"} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="up-com-container">
        <UpActiveTick Data={Data} />
      </div>
    </>
  );
};

export default UpComingEvent;
