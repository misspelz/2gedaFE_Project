import ActionButton from "../../Commons/Button";

const SuccessPoll = () => {
  return (
    <div className="detail-bx-container bagw">
      <div className="searchEmpty-bbox ddwn">
        <div className="empt-box-sea">
          <img src="images/em2.png" alt="" />
          <div className="notin-is">Your payment has been conirmed</div>

          <div className="choose-act-btn">
            <ActionButton label={"continue to polls"} bg={"wid"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPoll;
