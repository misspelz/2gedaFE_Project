import React from 'react'
import Stick from '../../Dashboard/Stick'
import { FaArrowLeftLong, FaChevronDown } from 'react-icons/fa6';
import MainLayout from '../../../Layout/MainLayout';
import SearchBox from '../../SearchComp/searchBox';
import Notify from './Notification/Notify';

const PollResult = () => {
  return (
    <div className="home-container" style={{ background: "whiteSmoke" }}>
      <MainLayout>
        <div className="main-containe bus-box-con">
          <div className="left-side-container buss-all-container">
             <div style={{ maxWidth: "500px"  }}>
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
        <span style={{ fontSize: "20px" }}>Poll Result</span>
      </div>

      <div>
        <h3>What is your preferred programming language</h3>
        <p style={{ textAlign: "start" }}>252 Votes</p>
      </div>

      <div
            style={{
                border: "1px solid #ccc",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 30px"
        }}
      >
        <div>
          <h3>Python</h3>
          <p style={{ textAlign: "start" }}>220 votes</p>
        </div>
        <FaChevronDown style={{fontSize: "20px"}} />
      </div>
      <Stick />
      <Stick />
      <Stick />
      <Stick />
      <Stick />
    </div>
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

export default PollResult
