import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import vid from "./v1.mp4";
// import Data from "./media.json";

const Data = [
  {
    id: "1",
    image:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
  {
    id: "2",
    image:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
  {
    id: "3",
    video: `${vid}`,
  },
  {
    id: "4",
    image:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
  {
    id: "5",
    video: `${vid}`,
  },
  {
    id: "6",
    image:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
  {
    id: "7",
    video: `${vid}`,
  },
];

const MediaCard = () => {
  console.log(Data.length);
  return (
    <>
      {Data.map((item, index) => (
        <div className="media-card-container" key={item.id}>
          {item.image && <img src={item.image} alt="" />}
          {item.video && (
            <>
              <img
                src="images/pl1.png"
                alt=""
                className="medi-img"
                playsInline
              />
              <div className="video">
                <Video autoPlay loop controls={false}>
                  <source src={item.video} type="video/mp4" />
                </Video>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default MediaCard;
