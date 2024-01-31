import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { FaArrowLeftLong } from 'react-icons/fa6';
import PollsSearch from '../../PollsComp/PollsSearch';
import PollsCard from './PollsCard';
import SearchBox from '../../SearchComp/searchBox';
import Notify from './Notification/Notify';

const MyPolls = () => {
  return (
    <div className="home-container" style={{ background: "whiteSmoke" }}>
      <MainLayout>
        <div className="main-containe bus-box-con">
          <div className="left-side-container buss-all-container">
            <div
              className="createTop"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                paddingBottom: "20px",
              }}
            >
              <FaArrowLeftLong style={{ fontSize: "20px" }} />
              <span style={{ fontSize: "20px" }}>My Polls</span>
            </div>

            <PollsSearch />
            <img src="images/jumia.png" alt="" className="ads-img" />

            <div className="tabs">
              <div className="oval purple">All</div>
              <div className="oval">Public</div>
              <div className="oval">Private</div>
            </div>

            <PollsCard />
            <PollsCard />
            <img src="images/jumia.png" alt="" className="ads-img" />
            <PollsCard />
            <PollsCard />
            <PollsCard />
          </div>

          <div
            className="left-side-container"
            style={{
              maxWidth: "525px",
              padding: "20px",
              background: "#fff",
            }}
          >
            <SearchBox />
            <Notify />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default MyPolls
