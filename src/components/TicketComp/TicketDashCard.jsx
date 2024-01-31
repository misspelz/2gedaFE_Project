const TicketDashCard = ({
  bg,
  allSellText,
  sellPerText,
  totSell,
  cardName,
  click,
}) => {
  return (
    <div className={`ticket-dash-card-cont ${bg}`} onClick={click}>
      <div className="all-sell-txt">{allSellText}</div>
      <div className="sell-per-txt">{totSell + sellPerText}</div>
      <div className="tot-evt-sold">{cardName}</div>
    </div>
  );
};

export default TicketDashCard;
