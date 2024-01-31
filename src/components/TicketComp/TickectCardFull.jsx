import { MdLocationOn } from "react-icons/md";

const TickectCardFull = () => {
  return (
    <div className="tick-full-card-container">
      <div className="tic-image-detail-bx">
        <div className="img-tick-cont">
          <div className="ver-lay">
            <img src="images/lo5.png" alt="" />
          </div>
          <img
            src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
            alt=""
          />
        </div>
        <div className="event-details">
          <div className="event-date">Thur, 17 Aug 2023 , 9:30 PM </div>
          <div className="event-name">Music seasonal festival II</div>
          <div className="location-box">
            <MdLocationOn />
            <div className="loca-txt">
              Eko Hotel and suites conference hall{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="claim-visit-page-btn">
        <button className="claim-visit-btn fir-bt">Promote event</button>
        <button className="claim-visit-btn visi-pae">Get ticket</button>
      </div>
    </div>
  );
};

export default TickectCardFull;
