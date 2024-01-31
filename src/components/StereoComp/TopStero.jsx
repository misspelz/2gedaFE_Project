const TopStero = ({ rem }) => {
  return (
    <div className="music-das-container reduce-wi">
      <div className="mus-img">
        <img src="images/top.png" alt="" />
      </div>
      <div className="mus-title">Top 100 songs of...</div>
      <div className={`mus-autor ${rem}`}>100 songs</div>
    </div>
  );
};

export default TopStero;
