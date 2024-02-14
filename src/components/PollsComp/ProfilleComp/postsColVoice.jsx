import "./style.css";
import { BsSoundwave } from "react-icons/bs";

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
    id: "9",
    voice: "l",
  },

  {
    id: "11",
    voice: "l",
  },
];
const PostsColVoice = () => {
  return (
    <>
      {Data.map((item, index) => (
        <div className="post-each-cont" key={index}>
          {item.voice && (
            <div className="wav-rec con-gn flex">
              <BsSoundwave />
              <BsSoundwave />
              <BsSoundwave />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default PostsColVoice;
