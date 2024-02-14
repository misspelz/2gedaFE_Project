const ManageAdCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="mana-card-ad-container" key={index}>
          <div className="ad-title">{item.adtitle}</div>
          <div className="ad-cat-txt">Ad category : {item.adcattxt}</div>
          <div className="expire-date">Expires in {item.expiredate} days</div>
        </div>
      ))}
    </>
  );
};

export default ManageAdCard;
