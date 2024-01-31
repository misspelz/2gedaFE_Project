import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import FirstSide from "../../components/Dashboard/FirstSide";
import Follower from "../../components/Dashboard/Follower";
import PostComp from "../../components/Dashboard/PostComp";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import "./style.css";
import MusicDash from "../../components/Dashboard/MusicDas";
// import SmallTicketCard from "../../components/Dashboard/smallTicket";
import ProductDash from "../../components/Dashboard/ProductDAs";
import MovieDashCard from "../../components/Dashboard/MovieDas";
// import Stick from "../../components/Dashboard/Stick";
// import MovieSlider from "../../components/Dashboard/Slider";
import Data from "../../utils/datahome.json";
// import { NavLink } from "react-router-dom";
// import StatusContainer from "../../components/Dashboard/StatusContainer";
import FeedDetail from "./FeedDetail";
import { useState } from "react";
import { useEffect } from "react";
import { url } from "../../utils";
// import Lottie from "lottie-react";
// import preloader from "./Animation - 1703321875032 (1).json";
import { Skeleton } from "@mui/material";
import SmallTicketPromoteCard from "../../components/Dashboard/smallTicketsPromoted";

const Home = () => {
  const [isFeedOpen, setIsFeedOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All Posts");

  const [responseData, setResponseData] = useState(null);
  const [ setIsloading] = useState(false);

  const feeds = localStorage.getItem("Feeds");
  const feedsArray = JSON.parse(feeds);

  const PromoteTicket = localStorage.getItem("PromotedTicket");
  const PromoteTicketArray = JSON.parse(PromoteTicket);
  const [ setEventDetail] = useState(null);
  const [ setIsEventDetailOpen] = useState(false);
  // const [connect, setConnect] = useState(false);
  // const [connectUsers, setConnectUsers] = useState(null);

  const handleFeedOpen = () => {
    setIsFeedOpen(true);
  };
  const handleFeedClose = () => {
    setIsFeedOpen(false);
  };
  const handleTabClick = (text) => {
    setActiveTab(text);
  };

  const handleEventDetailContainerClick = async (eventId) => {
    console.log("hello done");
    setIsEventDetailOpen(true);
    console.log(eventId);
    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    try {
      const response = await fetch(`${url}/ticket/event/${eventId}/`, {
        method: "GET",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        console.log("Response not ok");
      }

      const responseBody = await response.json();
      setEventDetail(responseBody);
      console.log("the detail", responseBody);
    } catch (error) {
      console.log(error);
      // Handle errors as needed
    } finally {
      console.log("Finally block executed");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      try {
        const response = await fetch(`${url}/feed/create_post/`, {
          method: "GET",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        });
        if (!response.ok) {
          console.log("Response not ok");
        }

        const responseBody = await response.json();
        setResponseData(responseBody);

        setIsloading(true);
        localStorage.setItem("Feeds", JSON.stringify(responseBody));
        // Check if responseData is not null before mapping
        if (responseBody !== null) {
          responseBody.map((item, index) => console.log(item.user.username));
        }
      } catch (error) {
        console.log(error);
        // Handle errors as needed
      } finally {
        // setIsLoading(true); // Move this line if needed based on your requirement
        console.log("Finally block executed");
      }
    };
    makeRequest();
  }, [setIsloading]);
  return (
    <div className="home-container">
      <MainLayout>
        <div className="main-containe">
          <div>
            {isFeedOpen && <FeedDetail handleFeedClose={handleFeedClose} />}
          </div>
          {!isFeedOpen && (
            <div className="left-side-container">
              <FirstSide />
              <img src="images/jumia.png" alt="" className="ads-img" />
              {/* <div className="status-row">
                <StatusContainer />
              </div> */}
              <div className="select-what-display">
                {Data.map((item, index) => (
                  <div
                    key={index}
                    className={`tab-item ${
                      item.text === activeTab ? "sel-act" : "anot-wid"
                    }`}
                    onClick={() => handleTabClick(item.text)}
                  >
                    <div className="dis-sel-name">{item.text}</div>
                  </div>
                ))}
              </div>
              {activeTab === "All Posts" ? (
                <>
                  {/* {!isLoading && (
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Lottie
                        animationData={preloader}
                        style={{
                          width: "300px",
                          height: "100px",
                        }}
                      />
                    </div>
                  )} */}

                  {responseData !== null && responseData.length > 0 ? (
                    responseData.map((item, index) => (
                      <PostComp
                        handleFeedOpen={handleFeedOpen}
                        key={index}
                        postID={item.id}
                        creator={item.user}
                        comment={item.comment_text}
                        media={item.each_media}
                        hashtag={item.hashtags}
                        content={item.content}
                        reaction={item.Reaction}
                        post_reaction_count={item.post_reaction_count}
                        post_comment_count={item.post_comment_count}
                        time_since={item.time_since}
                      />
                    ))
                  ) : (
                    <>
                      {feedsArray && feedsArray.length > 0 ? (
                        feedsArray.map((item, index) => (
                          <PostComp
                            handleFeedOpen={handleFeedOpen}
                            key={index}
                            postID={item.id}
                            creator={item.user}
                            comment={item.comment_text}
                            media={item.each_media}
                            hashtag={item.hashtags}
                            content={item.content}
                            reaction={item.Reaction}
                            post_reaction_count={
                              item.post_reaction_count
                                ? item.post_reaction_count
                                : 0
                            }
                            post_comment_count={
                              item.post_comment_count
                                ? item.post_comment_count
                                : 0
                            }
                            time_since={item.time_since}
                            index={index}
                          />
                        ))
                      ) : (
                        <>
                          <div
                            style={{
                              height: 200,
                              width: "100%",
                              marginRight: 20,
                            }}
                          >
                            <Skeleton
                              variant="rectangular"
                              width={"100%"}
                              height={120}
                              style={{ borderRadius: 5 }}
                              animation="wave"
                            />
                            <Skeleton
                              variant="text"
                              sx={{ fontSize: "2rem" }}
                              style={{ borderRadius: 5 }}
                              animation="wave"
                            />
                            <Skeleton
                              variant="text"
                              sx={{ fontSize: "2rem" }}
                              width={"50%"}
                              style={{ borderRadius: 5 }}
                              animation="wave"
                            />
                          </div>
                          <div
                            style={{
                              height: 200,
                              width: "100%",
                              marginRight: 20,
                            }}
                          >
                            <Skeleton
                              variant="rectangular"
                              width={"100%"}
                              height={120}
                              style={{ borderRadius: 5 }}
                              animation="wave"
                            /> 
                            <Skeleton
                              variant="text"
                              sx={{ fontSize: "2rem" }}
                              style={{ borderRadius: 5 }}
                              animation="wave"
                            />
                            <Skeleton
                              variant="text"
                              sx={{ fontSize: "2rem" }}
                              width={"50%"}
                              style={{ borderRadius: 5 }}
                              animation="wave"
                            />
                          </div>
                        </>
                      )}
                    </>
                  )}

                  <div className="music-das-row">
                    <MusicDash />
                    <MusicDash />
                    <MusicDash />
                    <MusicDash />
                    <MusicDash />
                  </div>
                  <PostComp />
                  <div className="ticket-das-row">
                    {PromoteTicketArray && PromoteTicketArray.length > 0 ? (
                      PromoteTicketArray.map((item, index) => (
                        <SmallTicketPromoteCard
                          key={index} // Add a unique key for each item in the map function
                          description={item.desc}
                          eventId={item.id}
                          formatedDate={item.formated_date}
                          location={item.location}
                          eventImage={item.image}
                          handleEventDetailContainerClick={
                            handleEventDetailContainerClick
                          }
                        />
                      ))
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="ticket-das-row">
                    {/* <ProductDash />
                    <ProductDash />
                    <ProductDash />
                    <ProductDash />
                    <ProductDash /> */}
                  </div>

                  {/* <div className="movie-slid-box">
                    <div className="post-ead">Trending movies</div>
                    <MovieSlider />
                  </div> */}
                  <div className="mov-bxx">
                    <div className="post-ead">Trending movies</div>
                    <div className="movie-das-row">
                      <MovieDashCard />
                      <MovieDashCard />
                      <MovieDashCard />
                      <MovieDashCard />
                      <MovieDashCard />
                    </div>
                  </div>
                  <div className="you-may-know">
                    <div className="post-ead">People you may know</div>
                    {/* <div className="may-know-box">
                      {connectUsers &&
                      connectUsers.length > 0 &&
                      console.log(connectUsers) ? (
                        connectUsers.map((item, index) => (
                          <Stick
                            key={index}
                            address={item.address ? item.address : ""}
                            username={item.username}
                            coverImage={
                              item.cover_image && item.cover_image.cover_image
                                ? item.cover_image.cover_image
                                : ""
                            }
                          />
                          // <p>Yeah we made it</p>
                        ))
                      ) : (
                        <p>made it</p>
                      )}
                    </div> */}
                  </div>
                </>
              ) : null}
              {activeTab === "Images" ? (
                <PostComp handleFeedOpen={handleFeedOpen} />
              ) : null}
              {activeTab === "Products" ? (
                <div className="ticket-das-row">
                  <ProductDash />
                  <ProductDash />
                  <ProductDash />
                  <ProductDash />
                  <ProductDash />
                </div>
              ) : null}
            </div>
          )}
          <div className="middle-side-container">
            <img src="images/ads1.png" alt="" />
            <img src="images/ads2.png" alt="" />
            <img src="images/ads3.png" alt="" />
          </div>
          <div className="right-side-container">
            <SelectCategory />
            <Follower />
            <div className="mess-bxx-conn">
              <DashMessage />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
