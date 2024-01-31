import { AiOutlineArrowLeft } from "react-icons/ai";
import "./third.css";
import ActionButton from "../Commons/Button";

const AdPolicy = ({ handlePolicyAdClose, handleNewAdClick }) => {
  return (
    <>
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          {" "}
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineArrowLeft
                className="cls-post"
                onClick={handlePolicyAdClose}
              />
              <div className="fels">
                <div className="claim">Advert Policy</div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
          <div className="phone-container-imel ">
            <div className="letter-dear provid">
              Our Adverts Policy are the rules guiding posting of Ads on 2geda
              as a Platform to reach out to Potential Clients and Investors.
            </div>
            <div className="body-policy">
              (1) Our Audience <br />
              <br />
              Our Community of users are Elites and they have right to tailor
              the content they prefer to see per time and how it is being shown.
              <br />
              <br />
              (2) Content <br />
              <br />
              Being a curated platform : we are concerned abo content ofut the
              the Adverts that’ll be shown to users. This assure the users that
              we have them in mind always. <br />
              <br />
              (3) Ad sizes <br />
              <br /> Our Community of users are Elites an dy have right to
              tailor the content they prefer to see per time and how it is being
              shown. <br />
              <br />
              (4) Prices <br />
              <br /> Our Community of users are Elites and they have right to
              tailor the content they prefer to see per time and how it is being
              shown.
            </div>
            <div className="act-n" onClick={handleNewAdClick}>
              <ActionButton label={"Continue"} bg={""} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdPolicy;
