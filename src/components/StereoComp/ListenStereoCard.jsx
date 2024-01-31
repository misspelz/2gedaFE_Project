import "./style.css";

const ListenStereoCard = ({ rem }) => {
  return (
    <div className="music-das-container">
      <div className="mus-img">
        <img src="/images/pic2.png" alt="" />
      </div>
      <div className="mus-title">When we fall asleep</div>
      <div className={`mus-autor ${rem}`}>Billie Eilish</div>
    </div>
  );
};

export default ListenStereoCard;
