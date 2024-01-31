import { BsBriefcase } from "react-icons/bs";

const SearchJobCard = () => {
  return (
    <div className="job-search-container">
      <div className="company-time-cont">
        <div className="logo-company-detail">
          <BsBriefcase className="brief" />
          <div className="office-name-position">
            <div className="position-txt">Office secretary</div>
            <div className="office-txt">2geda</div>
            <div className="office-loc">Lagos, Nigeria</div>
            <div className="salary-job">#40,000 to #46,000</div>
          </div>
        </div>
        <div className="time-posted-cur">2 days ago</div>
      </div>
      <div className="claim-visit-page-btn sift">
        <button className="claim-visit-btn viewa">View full description</button>
        <button className="claim-visit-btn visi-pae messend">
          Send a message
        </button>
      </div>
    </div>
  );
};

export default SearchJobCard;
