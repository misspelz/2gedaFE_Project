import { BiSearch } from "react-icons/bi";
import { GoFilter } from "react-icons/go";
import { useState } from "react";
import BussinessFilterModal from "../Modals/BussinessFilterModal";

const TicketSearh = ({ handleSearchResultContainerClick }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.length >= 1) {
      handleSearchResultContainerClick();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="business-search-container">
      <div className="search-container-busi">
        <BiSearch />
        <input
          type="text"
          className="search-inp-bus"
          placeholder="Find event"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {isFilterOpen && <BussinessFilterModal />}
      <div className="filter-search-bus" onClick={handleFilterClick}>
        <GoFilter />
      </div>
    </div>
  );
};

export default TicketSearh;
