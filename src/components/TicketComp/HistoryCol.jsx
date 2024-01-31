import { BiSolidUpArrow } from "react-icons/bi";

const HistoryCol = () => {
  return (
    <div className="colhistory-container flex">
      <div className="left-col-roy flex">
        <div className="with-cont flex">
          <BiSolidUpArrow />
        </div>
        <div className="wit-txt-bx">
          <div className="with-bx">Withdrawal</div>
          <div className="wit-dat">Aug 24, 1:05 PM</div>
        </div>
      </div>
      <div className="rit-side-col flex">
        <div className="neg-amt">-# 5,000.00</div>
        <div className="succ-tct">Successful</div>
      </div>
    </div>
  );
};

export default HistoryCol;
