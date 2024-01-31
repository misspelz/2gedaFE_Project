import { BiSearch } from "react-icons/bi";
import { GoFilter } from "react-icons/go";
import { useState } from "react";
import SortByModal from "../Modals/SortByModal";

const PollsSearch = ({ handleSearchResultContainerClick }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleFilterClose = () => {
    setIsFilterOpen(false);
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
          placeholder="Find polls"
          value={inputValue}
          onChange={handleInputChange}
        />
          </div>
      {isFilterOpen && (
        <div className="modal-full-container">
          <SortByModal handleFilterClose={handleFilterClose} />
        </div>
      )}
      <div className="filter-search-bus" onClick={handleFilterClick}>
        <GoFilter />
      </div>
    </div>
  
  );
}

export default PollsSearch;
