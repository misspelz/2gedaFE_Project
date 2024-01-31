import ActionButton from "../Commons/Button";

const RequestSucess = ({ handleRequestClose }) => {
  return (
    <div className="success-request-container flex">
      <img src="images/em2.png" alt="" />
      <div className="with-txt">
        Your withdrawal request has been recieved and is being processed
      </div>
      <div className="reques-sec" onClick={handleRequestClose}>
        <ActionButton label={"Back to Tickets"} type={"button"} />
      </div>
    </div>
  );
};

export default RequestSucess;
