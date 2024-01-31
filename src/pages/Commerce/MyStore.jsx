import { useState } from "react";

import CategoryMajorCard from "../../components/Commerce/CategoryMajorCard";
import MyStoreDetail from "../../components/Commerce/MyStoreDetail";
import MyStoreSearchComp from "../../components/Commerce/MyStoreSearchComp";

const MyStore = ({ handleStoreClose }) => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  const handleProductClick = () => {
    setIsProductOpen(true);
  };
  const handleProductClose = () => {
    setIsProductOpen(false);
  };

  return (
    <>
      {isProductOpen && (
        <MyStoreDetail handleProductClose={handleProductClose} />
      )}
      {!isProductOpen && (
        <>
          <MyStoreSearchComp
            handleStoreClose={handleStoreClose}
            label={"My Store"}
          />
          <div className="all-row-cat-select">
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
          </div>
          <div className="prod-ads">
            <img src="images/ads5.png" alt="" />
          </div>
          <div className="all-row-cat-select">
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
          </div>{" "}
        </>
      )}
    </>
  );
};

export default MyStore;
