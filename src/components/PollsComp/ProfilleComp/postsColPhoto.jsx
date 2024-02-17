import "./style.css";

const Data = [
  {
    id: "1",
    image:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
  {
    id: "13",
    image:
      "https://img.freepik.com/free-photo/white-horse-runs-beach_1340-34263.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=ais",
  },
  {
    id: "14",
    image:
      "https://img.freepik.com/free-photo/white-horse-runs-beach_1340-34263.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=ais",
  },
  {
    id: "15",
    image:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
  },
];
const PostsColPhoto = () => {
  return (
    <>
      {Data.map((item, index) => (
        <div className="post-each-cont" key={index}>
          {item.image && (
            <div className="image-show">
              <img src={item.image} alt="" />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default PostsColPhoto;
