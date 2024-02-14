import "./style.css";
import { FaMusic } from "react-icons/fa";
import vid from "./v1.mp4";

const Data = [
  {
    id: "1",
    image:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
  {
    id: "2",
    voice: "l",
  },
  {
    id: "3",
    file: `fi`,
  },
  {
    id: "4",
    video: `${vid}`,
  },
  {
    id: "5",
    location: `2`,
  },
  {
    id: "6",
    music:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
  {
    id: "7",
    file: `bob`,
  },
  {
    id: "8",
    location: `t`,
  },
  {
    id: "9",
    voice: "l",
  },
  {
    id: "10",
    music:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
  {
    id: "11",
    voice: "l",
  },
  {
    id: "12",
    file: `fi`,
  },
  {
    id: "13",
    location: `3`,
  },
  {
    id: "1",
    image:
      "https://img.freepik.com/free-photo/white-horse-runs-beach_1340-34263.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=ais",
  },
  {
    id: "1",
    image:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
];
const PostsColMusic = () => {
  return (
    <>
      {Data.map((item, index) => (
        <div className="post-each-cont" key={index}>
          {item.music && (
            <div className="wav-rec con-gn flex mussi">
              <FaMusic />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default PostsColMusic;
