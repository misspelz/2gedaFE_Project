import BussManHeader from "../../components/BusinessProfile/BussManHeader";
import StoreCard from "../../components/Commerce/StoreCard";
import ActionButton from "../../components/Commons/Button";

const Data = [
  {
    name: "McDonald’s clothes",
    store: "Food and Drinks",
  },
  {
    name: "McDonald’s app",
    store: "clothe and Fuck",
  },
  {
    name: "McDonald’s ",
    store: "Mad and Drinks",
  },
  {
    name: "McDonald’s Fashion",
    store: "Food and Drinks",
  },
];
const ManageBusiness = () => {
  if (Data.length === 0) {
    return (
      <div className="manage-business-container">
        <BussManHeader />
        <div className="searchEmpty-bbox">
          <div className="empt-box-sea">
            <img src="images/em1.png" alt="" />
            <div className="notin-is">Nothing Store yet!</div>
            <div className="act-n">
              <ActionButton label={"+ Create a store now"} bg={"orann"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="manage-business-container">
      <BussManHeader />

      <div className="all-store-container">
        <StoreCard Data={Data} />
      </div>
    </div>
  );
};

export default ManageBusiness;
