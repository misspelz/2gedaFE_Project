import { MdLocationOn } from "react-icons/md";

const SearchTickectCardFull = () => {
  const data = [
    {
      img: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",
      eventDate: "Thur, 17 Aug 2023",
      eventTime: "9:30 PM",
      eventName: "Music seasonal festival II",
      locationText: "Eko Hotel and suites conference hall",
    },
    {
      img: "https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M=",
      eventDate: "Fri, 18 Aug 2023",
      eventTime: "8:00 PM",
      eventName: "Art Exhibition Opening",
      locationText: "Metropolitan Museum of Art",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_1280.jpg",
      eventDate: "Sat, 19 Aug 2023",
      eventTime: "6:00 PM",
      eventName: "Comedy Night Live",
      locationText: "Laugh Factory Comedy Club",
    },
    {
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      eventDate: "Sun, 20 Aug 2023",
      eventTime: "7:30 PM",
      eventName: "Dance Showcase",
      locationText: "City Theatre",
    },
  ];
  if (data.length === 0) {
    return (
      <div className="searchEmpty-bbox">
        <div className="empt-box-sea">
          <img src="images/em1.png" alt="" />
          <div className="notin-is">Nothing is found</div>
          <div className="full-notin">
            Looks like there is no available event for your search input
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="tick-full-card-container ">
        {data.map((event, index) => (
          <div className="tic-image-detail-bx res-dw" key={index}>
            <div className="img-tick-cont">
              <div className="ver-lay">
                <img src="images/lo5.png" alt="" />
              </div>
              <img src={event.img} alt="" />
            </div>
            <div className="event-details">
              <div className="event-date">
                {event.eventDate}, {event.eventTime}
              </div>
              <div className="event-name">{event.eventName}</div>
              <div className="location-box">
                <MdLocationOn />
                <div className="loca-txt">{event.locationText}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default SearchTickectCardFull;
