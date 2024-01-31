import { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import AutomobileProduct from "../../components/Commerce/Automobile";
import BuySearchComp from "../../components/Commerce/BuySeacComp";
import FurnitureProduct from "../../components/Commerce/Funiture";
import Shortcart from "../../components/Commerce/ShortCart";
import SkinCareProduct from "../../components/Commerce/SkinCare";
import SuggestedBusiness from "../../components/Commerce/SuggestedBusiness";
import TrendingProduct from "../../components/Commerce/TrendingPro";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import TopSeller from "../../components/Dashboard/TopSeller";
import SellItem from "../../components/Modals/SellItem";
import "./Style.css";
import SellItemStepTwo from "../../components/Modals/SellItemStepTwo";
import SellItemStepThree from "../../components/Modals/SellItemStepThree";
import ProjectDetail from "../../components/Commerce/ProjectDetail";
import MyStore from "./MyStore";

const Commerce = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPModalOpen, setIsPModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isPromoteModalOpen, setIsPromoteModalOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);

  const handleStoreClick = () => {
    setIsStoreOpen(true);
  };
  const handleStoreClose = () => {
    setIsStoreOpen(false);
  };
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
          <div className="left-commerce-cont">
            <div className="sell-manage-cont sell-tem-pro">
              <div className="btn-sell-pro btn-ssel">
                <button
                  className="sell-item-comm inc"
                  onClick={handleMainContainerClick}
                >
                  Sell an item
                </button>
              </div>
              <div className="btn-sell-pro btn-ssel">
                <button
                  className="sell-item-comm mann inc"
                  onClick={handleStoreClick}
                >
                  Manage store
                </button>
              </div>
            </div>
            {isStoreOpen && <MyStore handleStoreClose={handleStoreClose} />}
            {isProductOpen && (
              <ProjectDetail handleProductClose={handleProductClose} />
            )}
            {!isProductOpen && !isStoreOpen && (
              <>
                <BuySearchComp />
                <TrendingProduct handleProductClick={handleProductClick} />
                <div className="prod-ads">
                  <img src="images/ads5.png" alt="" />
                </div>
                <AutomobileProduct handleProductClick={handleProductClick} />
                <SuggestedBusiness handleProductClick={handleProductClick} />
                <FurnitureProduct handleProductClick={handleProductClick} />
                <SkinCareProduct handleProductClick={handleProductClick} />
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
              <button
                className="sell-item-comm mann"
                onClick={handleStoreClick}
              >
                Manage store
              </button>
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

export default Commerce;
