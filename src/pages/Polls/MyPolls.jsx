import React, { useState, useEffect } from "react";
import "./styles.css";
import MainLayout from "Layout/MainLayout";
import PollsSearch from "components/PollsComp/PollsSearch";
import CanVote from "components/Modals/Vote/Can/CanVote";
import SearchBox from "components/SearchComp/searchBox";
import Notify from "components/Modals/Vote/Notification/Notify";
// import { Modal } from "react-bootstrap";
import { url } from "utils";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { Polls } from "components/PollsComp/Polls";
import { Polls2 } from "components/PollsComp/Polls2";
import { PollsNotification } from "components/PollsComp/RightComp";
import { SuggestedPolls } from "components/PollsComp/SuggestedPolls";
import { FindPolls } from "components/PollsComp/FindPolls";
import { Notifications } from "components/PollsComp/Notification";
import { CreateCastActions } from "components/PollsComp/CreateCastActions";
import { PromotedPolls } from "components/PollsComp/PromotedPolls";
import CreatePoll from "components/Modals/Vote/CreatePoll/CreatePoll";
import { Dialog } from "@mui/material";
import { MyPollsCategories } from "components/PollsComp/MyPollsCategories";
import ClosePoll from "components/Modals/Vote/ClosePoll";
import PollResult from "components/Modals/Vote/PollResult";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MyPollsApi } from "utils/ApICalls";
import toast from "react-hot-toast";

const MyPolls = () => {
  const userInfoString = localStorage.getItem("2gedaUserInfo");

  const userInfo = JSON.parse(userInfoString);

  const [Notify, setNotify] = useState(false);
  const [CastVote, setCastVote] = useState(false);
  const [showMyPolls, setShowMyPolls] = useState(false);
  const [viewType, setViewType] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [PaidPoll, setPaidPoll] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [showPaidVotes, setShowPaidVotes] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [viewResults, setViewResults] = useState(false);
  const nav = useNavigate();

  const [pollsDetails, setPollsDetails] = useState([]);
  console.log("pollsDetails", pollsDetails);

  const [loading, setLoading] = useState(true);

  const goBack = () => nav("/Voting");
  const HandleNotification = () => {
    setNotify(true);
  };

  const HandleCastVote = () => {
    setCastVote(true);
  };
  const handleShowMyPolls = () => {
    setShowMyPolls((prev) => !prev);
  };

  const HandlePaidPoll = () => {
    setPaidPoll(true);
  };

  const HandlePoll = (pollData) => {
    setSelectedPoll(pollData);
    setShowPaidVotes(false);
  };

  const handleShowcloseModal = () => {
    setShowCloseModal((prev) => !prev);
  };

  const handleViewResults = () => {
    setViewResults((prev) => !prev);
  };

  const options = [
    { title: "Python", percentage: "20" },
    { title: "Java", percentage: "10" },
  ];

  const renderPolls = () => {
    switch (viewType) {
      case "active":
        return (
          <>
            <Polls
              onClick={HandlePoll}
              authorName="Pelz Adetoye"
              createdAt="Today @ 12:09pm"
              question="What is your preferred programming language?"
              options={options}
              daysRemaining="2 days remaining"
              totalVotes="500"
              backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
              myPolls={true}
              onClose={handleShowcloseModal}
              onView={handleViewResults}
            />
            <Polls
              // onClick={HandlePoll}
              authorName="Ade Michael"
              createdAt="Yesterday @ 12:09pm"
              question="What is your preferred programming language?"
              options={options}
              daysRemaining="4 days remaining"
              totalVotes="200"
              backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
              myPolls={true}
              onClose={handleShowcloseModal}
              onView={handleViewResults}
            />
          </>
        );
      case "ended":
        return (
          <Polls
            authorName="Adekola Tony"
            createdAt="Today @ 10:09am"
            question="What is your preferred programming language?"
            options={options}
            daysRemaining="5 days remaining"
            totalVotes="500"
            backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
            myPolls={true}
            onClose={handleShowcloseModal}
            onView={handleViewResults}
          />
        );
      case "all":
      default:
      if (!pollsDetails || pollsDetails.length === 0) {
        return <p className="mt-20">Loading polls...</p>;
      } else {
        return pollsDetails.map((poll, index) => (
          <Polls
            key={index}
            onClick={HandlePoll}
            authorName={poll.username}
            createdAt={poll.created_at}
            question={poll.question}
            options={options} // take note
            daysRemaining={poll.duration}
            totalVotes={poll.vote_count}
            backgroundImageUrl={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} // take note
            myPolls={true}
            onClose={handleShowcloseModal}
            onView={handleViewResults}
          />
        ));
      }
    }
  };

  const onSearch = () => {};
  const onFilterClick = () => {};

  const handleMyPolls = async (e) => {
    try {
      const response = await MyPollsApi();
      console.log("pollsresponse", response);
      console.log("pollsdata", response?.data);
      setPollsDetails(response?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    handleMyPolls();
  }, []);

  return (
    <MainLayout>
      <div className=" lg:bg-[#f5f5f5] lg:flex w-full pt-36  lg:px-10 lg:gap-6 ">
        {!Notify && !CastVote && !showMyPolls && (
          <>
            <div className=" lg:w-[60%] overflow-x-hidden bg-[#fff] py-10 px-6">
              <div className="flex gap-3">
                <FaArrowLeftLong
                  onClick={goBack}
                  className="cursor-pointer text-lg"
                />
                <h1>My Polls</h1>
              </div>

              <div className="hidden lg:block">
              <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />
              </div>

              <img
                src="images/fifa.png"
                alt="fifa"
                className="mt-6 w-full lg:mt-10"
              />

              

              <div className="pb-[40px] ">
                <MyPollsCategories
                  viewType={viewType}
                  setViewType={setViewType}
                />
                {renderPolls()}
              </div>
              <Dialog
                open={showCreateModal}
                onClose={() => setShowCreateModal((prev) => !prev)}
                fullWidth
              >
                <CreatePoll onClose={setShowCreateModal} />
              </Dialog>
              <Dialog open={showCloseModal} onClose={handleShowcloseModal}>
                <ClosePoll closeModal={handleShowcloseModal} />
              </Dialog>
              <Dialog open={viewResults} onClose={handleViewResults} fullWidth>
                <PollResult closeModal={handleViewResults} />
              </Dialog>
            </div>
          </>
        )}

        {/* MOBILE */}
        {CastVote && (
          <div className="px-4 lg:hidden pb-[40px]">
            <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />

            <img
              src="images/fifa.png"
              alt="fifa"
              className="mt-6 w-full lg:mt-10"
            />
            <MyPollsCategories viewType={viewType} setViewType={setViewType} />
            {renderPolls()}
          </div>
        )}

        {showMyPolls && (
          <div className="px-4 lg:hidden pb-[40px]">
            <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />

            <img
              src="images/fifa.png"
              alt="fifa"
              className="mt-6 w-full lg:mt-10"
            />
            <MyPollsCategories viewType={viewType} setViewType={setViewType} />
            {renderPolls()}
          </div>
        )}

        {/* WEB */}
        <PollsNotification
          setNotify={setNotify}
          showCreateModal={() => setShowCreateModal((prev) => !prev)}
        />
      </div>

      {/* <div className="main-containe bus-box-con "> */}
      {/* <div className="left-side-container buss-all-container p-4"> */}
      {/* <h2 className="head-line bus-dir ">Voting</h2>
            <PollsSearch />
            <img src="images/jumia.png" alt="" className="ads-img" />

            <div className="pollsBox">
              <h2 className="head-line bus-dir">Suggested polls</h2>
              <div className="grid" style={{ overflowX: "auto" }}>
                {suggested && suggested.length > 1 ? (
                  suggested.map((item, index) => (
                    <CanVote
                      key={index}
                      voteOptions={item.options_list ? item.options_list : []}
                      creator={item.username ? item.username : "unknown user"}
                      question={item.question ? item.question : ""}
                      duration={item.duration ? item.duration : ""}
                      castVote={castVote}
                      voteId={item.vote_id ? item.vote_id : ""}
                    />
                  ))
                ) : (
                  <>
                    {retrievedArrayString &&
                      retrievedArrayString.length > 1 &&
                      retrievedArrayString.map((item, index) => (
                        <CanVote
                          key={index}
                          voteOptions={
                            item.options_list ? item.options_list : []
                          }
                          creator={
                            item.username ? item.username : "unknown user"
                          }
                          question={item.question ? item.question : ""}
                          duration={item.duration ? item.duration : ""}
                          castVote={castVote}
                          voteId={item.vote_id ? item.vote_id : ""}
                        />
                      ))}
                  </>
                )}
              </div>
            </div>

            <div className="pollsBox">
              <h2 className="head-line bus-dir">Promoted polls</h2>
              <div className="grid" style={{ overflowX: "auto" }}>
                {promoted && promoted.length > 1 ? (
                  promoted.map((item, index) => (
                    <CanVote
                      key={index}
                      voteOptions={item.options_list ? item.options_list : []}
                      creator={item.username ? item.username : "unknown user"}
                      question={item.question ? item.question : ""}
                      duration={item.duration ? item.duration : ""}
                      castVote={castVote}
                      voteId={item.vote_id ? item.vote_id : ""}
                    />
                  ))
                ) : (
                  <>
                    {promotedPollsArrayString &&
                      promotedPollsArrayString.length > 1 &&
                      promotedPollsArrayString.map((item, index) => (
                        <CanVote
                          key={index}
                          voteOptions={
                            item.options_list ? item.options_list : []
                          }
                          creator={
                            item.username ? item.username : "unknown user"
                          }
                          question={item.question ? item.question : ""}
                          duration={item.duration ? item.duration : ""}
                          castVote={castVote}
                          voteId={item.vote_id ? item.vote_id : ""}
                        />
                      ))}
                  </>
                )}
              </div>
            </div> */}

      {/* <div className="tabs">
              <div className="oval purple">All</div>
              <div className="oval">Public</div>
              <div className="oval">Private</div>
            </div> */}

      {/* <div className="col">
              {responseData && responseData.length > 1 ? (
                responseData.map((item, index) => (
                  <CanVote
                    key={index}
                    voteOptions={item.options_list ? item.options_list : []}
                    creator={item.username ? item.username : "unknown user"}
                    question={item.question ? item.question : ""}
                    duration={item.duration ? item.duration : ""}
                    castVote={castVote}
                    voteId={item.vote_id ? item.vote_id : ""}
                  />
                ))
              ) : (
                <>
                  {allPollsArrayString &&
                    allPollsArrayString.length > 1 &&
                    allPollsArrayString.map((item, index) => (
                      <CanVote
                        key={index}
                        voteOptions={item.options_list ? item.options_list : []}
                        creator={item.username ? item.username : "unknown user"}
                        question={item.question ? item.question : ""}
                        duration={item.duration ? item.duration : ""}
                        castVote={castVote}
                        voteId={item.vote_id ? item.vote_id : ""}
                      />
                    ))}
                </>
              )} */}

      {/* <img src="images/jumia.png" alt="" className="ads-img" />
              <CanVote />
              <CanVote onClick={openModal} />
              <CanVote /> */}
      {/* </div> */}
      {/* </div> */}

      {/* <div
            className="left-side-container"
            style={{
              maxWidth: "525px",
              padding: "20px",
              background: "#fff",
            }}
          >
            <SearchBox />
            <Notify />
          </div> */}

      {/* <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Connect Modal"
          >
            <CanVote />
            <button onClick={closeModal}>Close Modal</button>
          </Modal>
        </div> */}
    </MainLayout>
  );
};

// const Votingg = () => {
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const token = localStorage.getItem("authTOken");
//     console.log(`Token ${token}`);
//     const makeRequest = async () => {
//       try {
//         const response = await fetch(`${url}/poll/polls/`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Token ${token}`,
//           },
//         });

//         if (!response.ok) {
//           console.log("Response not ok");
//         }

//         const responseBody = await response.json();
//         console.log(responseBody);
//         setResponseData(responseBody);

//         // Check if responseData is not null before mapping
//       } catch (error) {
//         console.log(error);
//         // Handle errors as needed
//       } finally {
//         // setIsLoading(true); // Move this line if needed based on your requirement
//         console.log("Finally block executed");
//       }
//     };

//     makeRequest();
//   }, []);

//   return (
//     <>
//       {responseData &&
//         responseData.length > 1 &&
//         responseData.map((item, index) => <p>Voting</p>)}
//     </>
//   );
// };

export default MyPolls;
