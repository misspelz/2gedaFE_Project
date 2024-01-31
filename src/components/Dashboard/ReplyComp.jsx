import { BiLike } from "react-icons/bi";

const ReplyComp = () => {
  return (
    <div className="reply-container">
      {" "}
      <div className="profile-time">
        <div className="post-profile comment-pro">
          <img
            src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
            alt=""
          />
          <div className="post-profile-details">
            <div className="post-profile-name nmm">Mark Jude</div>
            <div className="autor-ooby nmm">Software Engineer</div>
          </div>
        </div>
        <div className="time-posted nmm">1hr ago</div>
      </div>
      <div className="post-body-box">
        <div className="comm-body-text btxt">
          This is the Opportunity to Join the World Leading Tech Professionals
          in 2022. All you need do is to register with the link below <br />
        </div>
      </div>
      <div className="post-likes-box">
        <div className="posted-likes-cont">
          <div className="icon-text">
            <BiLike className="like" />
            <div className="con-test">23k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyComp;
