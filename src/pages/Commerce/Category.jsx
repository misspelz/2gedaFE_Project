import { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import Shortcart from "../../components/Commerce/ShortCart";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import TopSeller from "../../components/Dashboard/TopSeller";
import SellItem from "../../components/Modals/SellItem";
import "./Style.css";
import SellItemStepTwo from "../../components/Modals/SellItemStepTwo";
import SellItemStepThree from "../../components/Modals/SellItemStepThree";
import ProjectDetail from "../../components/Commerce/ProjectDetail";
import CategoryMajorCard from "../../components/Commerce/CategoryMajorCard";
import CategorySearchComp from "../../components/Commerce/CategorySearchComp";

const CategoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPModalOpen, setIsPModalOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isPromoteModalOpen, setIsPromoteModalOpen] = useState(false);

  const handleProductClick = () => {
    setIsProductOpen(true);
  };
  const handleProductClose = () => {
    setIsProductOpen(false);
  };
  const handleSellPromoteClick = () => {
    setIsPromoteModalOpen(true);
  };
  const handleCloseSellPromoteClick = () => {
    setIsPromoteModalOpen(false);
  };

  const handleSellPreviewClick = () => {
    setIsPreviewModalOpen(true);
  };
  const handleCloseSellPreviewClick = () => {
    setIsPreviewModalOpen(false);
  };
  const handleSellContainerClick = () => {
    setIsPModalOpen(true);
  };
  const handleCloseSellContainerClick = () => {
    setIsPModalOpen(false);
  };
  const handleMainContainerClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseMainContainerClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="commerce-container">
      <MainLayout>
        <form action="">
          {isModalOpen && (
            <div className="modal-full-container">
              <SellItem
                handleCloseMainContainerClick={handleCloseMainContainerClick}
                handleSellContainerClick={handleSellContainerClick}
                handleSellPromoteClick={handleSellPromoteClick}
                handleCloseSellPromoteClick={handleCloseSellPromoteClick}
                isPromoteModalOpen={isPromoteModalOpen}
              />
            </div>
          )}
          {isPModalOpen && (
            <div className="modal-full-container">
              <SellItemStepTwo
                handleCloseMainContainerClick={handleCloseSellContainerClick}
                handleSellPreviewClick={handleSellPreviewClick}
              />
            </div>
          )}
          {isPreviewModalOpen && (
            <div className="modal-full-container">
              <SellItemStepThree
                handleCloseMainContainerClick={handleCloseSellPreviewClick}
              />
            </div>
          )}
        </form>
        <div className="full-commerce-box">
          <div className="left-commerce-cont back-left">
            <div className="sell-manage-cont">
              <div className="btn-sell-pro">
                <button
                  className="sell-item-comm inc"
                  onClick={handleMainContainerClick}
                >
                  Sell an item
                </button>
              </div>
              <div className="btn-sell-pro ">
                <button className="sell-item-comm mann inc">
                  Manage store
                </button>
              </div>
            </div>
            {isProductOpen && (
              <ProjectDetail handleProductClose={handleProductClose} />
            )}
            {!isProductOpen && (
              <>
                <CategorySearchComp label={"AutoMobiles"} />
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
          </div>
          <div className="rightSide-commerce">
            <div className="btn-sell-pro">
              <button
                className="sell-item-comm"
                onClick={handleMainContainerClick}
              >
                Sell an item
              </button>
            </div>
            <div className="btn-sell-pro">
              <button className="sell-item-comm mann">Manage store</button>
            </div>
            <SelectCategory />
            <TopSeller />
            <Shortcart />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default CategoryPage;
