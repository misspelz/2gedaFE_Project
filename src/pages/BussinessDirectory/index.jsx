import { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import BusinessSearch from "../../components/BusinessDirectoryComp/BusinessSearch";
import BusinessSnmallCard from "../../components/BusinessDirectoryComp/BusinessSmallCard";
import SearchBusinessCard from "../../components/SearchComp/SearchBusinessCard";
import "./style.css";
import ClamBuss from "./ClamBuss";
import BusinessStick from "../../components/Commons/BusinessStick";

const BusinessDirectory = () => {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [isClaimModalOpenOne, setIsClaimModalOpenOne] = useState(false);
  const [isClaimModalOpenTwo, setIsClaimModalOpenTwo] = useState(false);
  const [isClaimModalOpenThree, setIsClaimModalOpenThree] = useState(false);
  const [isClaimModalOpenDone, setIsClaimModalOpenDone] = useState(false);
  const [isBussinessOpen, setIsBussinessOpen] = useState(false);

  const handleClaimClickDone = (e) => {
    e.preventDefault();
    setIsClaimModalOpenDone(true);
  };
  const handleClaimClickCloseDone = () => {
    setIsClaimModalOpenDone(false);
    setIsClaimModalOpenThree(false);
    setIsClaimModalOpenTwo(false);
    setIsClaimModalOpenOne(false);
    setIsClaimModalOpen(false);
  };

  const handleClaimClickThree = (e) => {
    e.preventDefault();
    setIsClaimModalOpenThree(true);
  };
  const handleClaimClickCloseThree = () => {
    setIsClaimModalOpenThree(false);
  };
  const handleClaimClickTwo = (e) => {
    e.preventDefault();
    setIsClaimModalOpenTwo(true);
  };
  const handleClaimClickCloseTwo = () => {
    setIsClaimModalOpenTwo(false);
  };
  const handleClaimClickOne = (e) => {
    e.preventDefault();
    setIsClaimModalOpenOne(true);
  };
  const handleClaimClickCloseOne = () => {
    setIsClaimModalOpenOne(false);
  };
  const handleClaimClick = () => {
    setIsClaimModalOpen(true);
  };
  const handleClaimClickClose = () => {
    setIsClaimModalOpen(false);
  };
  const handleBussinessClose = () => {
    setIsBussinessOpen(false);
  };

  const handleBussinessClick = () => {
    setIsBussinessOpen(true);
  };

  return (
    <>
      <ClamBuss
        handleClaimClickDone={handleClaimClickDone}
        handleClaimClickCloseDone={handleClaimClickCloseDone}
        handleClaimClickThree={handleClaimClickThree}
        handleClaimClickCloseThree={handleClaimClickCloseThree}
        handleClaimClickTwo={handleClaimClickTwo}
        handleClaimClickCloseTwo={handleClaimClickCloseTwo}
        handleClaimClickOne={handleClaimClickOne}
        handleClaimClickCloseOne={handleClaimClickCloseOne}
        handleClaimClickClose={handleClaimClickClose}
        handleClaimClick={handleClaimClick}
        isClaimModalOpen={isClaimModalOpen}
        isClaimModalOpenOne={isClaimModalOpenOne}
        isClaimModalOpenTwo={isClaimModalOpenTwo}
        isClaimModalOpenThree={isClaimModalOpenThree}
        isClaimModalOpenDone={isClaimModalOpenDone}
      />

      <div className="home-container">
        <MainLayout>
          <div className="main-containe bus-box-con">
            <div className="left-side-container buss-all-container">
              {isBussinessOpen && (
                <BusinessStick handleBussinessClose={handleBussinessClose} />
              )}
              {!isBussinessOpen && (
                <>
                  <div className="head-line bus-dir">Business directory</div>
                  <BusinessSearch />
                  <div className="business-card-boxx">
                    <SearchBusinessCard
                      handleClaimClick={handleClaimClick}
                      handleBussinessClick={handleBussinessClick}
                    />
                    <SearchBusinessCard
                      handleClaimClick={handleClaimClick}
                      handleBussinessClick={handleBussinessClick}
                    />
                    <SearchBusinessCard
                      handleClaimClick={handleClaimClick}
                      handleBussinessClick={handleBussinessClick}
                    />
                    <SearchBusinessCard
                      handleClaimClick={handleClaimClick}
                      handleBussinessClick={handleBussinessClick}
                    />
                    <SearchBusinessCard
                      handleClaimClick={handleClaimClick}
                      handleBussinessClick={handleBussinessClick}
                    />
                    <SearchBusinessCard
                      handleClaimClick={handleClaimClick}
                      handleBussinessClick={handleBussinessClick}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="middle-side-container">
              <img src="images/ads1.png" alt="" />
              <img src="images/ads2.png" alt="" />
              <img src="images/ads3.png" alt="" />
            </div>
            <div className="right-side-container buss-dir-right">
              <div className="head-line busss ">Businesses around you</div>
              <div className="buss-small-bxx">
                <BusinessSnmallCard />
                <BusinessSnmallCard />
                <BusinessSnmallCard />
                <BusinessSnmallCard />
                <BusinessSnmallCard />
                <BusinessSnmallCard />
                <BusinessSnmallCard />
                <BusinessSnmallCard />
                <BusinessSnmallCard />
                <BusinessSnmallCard />
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default BusinessDirectory;
