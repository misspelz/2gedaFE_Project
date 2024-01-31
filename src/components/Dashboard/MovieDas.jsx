import { BiDotsVerticalRounded } from "react-icons/bi";

const MovieDashCard = () => {
  return (
    <div className="movie-das-card-box">
      <img src="images/pic2.png" alt="" />

      <div className="lov-icon">
        <div className="lay-box">
          <div className="movie-title">Top Flight maverick...</div>
          <div className="mov-year">(2023)</div>
        </div>
        <BiDotsVerticalRounded className="kemb" />
      </div>
    </div>
  );
};

export default MovieDashCard;
