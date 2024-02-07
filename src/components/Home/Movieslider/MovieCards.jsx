
import MovieImage1 from "assets/images/sample-image-1.png"
import "./movie-card.css"

const MovieDashCard = () => {
  return (
    <div className="movie-das-card-box">
      <div className="image-section">
        <img src={MovieImage1} alt="movie-card-image" />
      </div>
      <div className="movie-title">
          <p>Top Mavericks...</p>
          <span>(2023)</span>
      </div>
    </div>
  );
};

export default MovieDashCard;
