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
import { Dialog, DialogContent } from "@mui/material";
import { MyPollsCategories } from "components/PollsComp/MyPollsCategories";

const MyPolls = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [responseData, setResponseData] = useState(null);
  // const [promoted, setPromoted] = useState(null);
  // const [suggested, setSuggested] = useState(null);

  const userInfoString = localStorage.getItem("2gedaUserInfo");

  const userInfo = JSON.parse(userInfoString);
  // console.log("userInfo", userInfo);

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   const token = localStorage.getItem("authTOken");
  //   console.log(`Token ${token}`);
  //   const makeRequest = async () => {
  //     try {
  //       const promotedResponse = await fetch(`${url}/poll/promoted/`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Token ${token}`,
  //         },
  //       });

  //       const response = await fetch(`${url}/poll/polls/`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Token ${token}`,
  //         },
  //       });

  //       const suggestedResponse = await fetch(`${url}/poll/suggested-polls/`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Token ${token}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         console.log("Response not ok");
  //       }

  //       const responseBody = await response.json();
  //       console.log(responseBody);
  //       setResponseData(responseBody);
  //       localStorage.setItem("allPolls", JSON.stringify(responseBody));

  //       const promotedResponseBody = await promotedResponse.json();
  //       setPromoted(promotedResponseBody);
  //       localStorage.setItem(
  //         "promotedPolls",
  //         JSON.stringify(promotedResponseBody)
  //       );

  //       const suggestedBody = await suggestedResponse.json();
  //       setSuggested(suggestedBody);
  //       localStorage.setItem("suggestedPolls", JSON.stringify(suggestedBody));
  //       // Check if responseData is not null before mapping
  //     } catch (error) {
  //       console.log(error);
  //       // Handle errors as needed
  //     } finally {
  //       // setIsLoading(true); // Move this line if needed based on your requirement
  //       console.log("Finally block executed");
  //     }
  //   };

  //   makeRequest();
  // }, []);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const castVote = async (pollsId, content, cost) => {
  //   const data = {
  //     post_id: pollsId,
  //     content: content,
  //     cost: cost,
  //   };
  //   try {
  //     const token = localStorage.getItem("authTOken");
  //     const response = await fetch(`${url}/poll/votes/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Token ${token}`,
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (!response.ok) {
  //       console.log("Response not ok");
  //     }

  //     const responseBody = await response.json();
  //     console.log(responseBody);

  //     // Check if responseData is not null before mapping
  //   } catch (error) {
  //     console.log(error);
  //     // Handle errors as needed
  //   } finally {
  //   }
  // };

  // const retrieved = localStorage.getItem("suggestedPolls");
  // const retrievedArrayString = JSON.parse(retrieved);
  // const promotedPollsretrieved = localStorage.getItem("promotedPolls");
  // const promotedPollsArrayString = JSON.parse(promotedPollsretrieved);
  // const allPollsretrieved = localStorage.getItem("allPolls");
  // const allPollsArrayString = JSON.parse(allPollsretrieved);

  const [Notify, setNotify] = useState(false);
  const [CastVote, setCastVote] = useState(false);
  const [viewType, setViewType] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const HandleNotification = () => {
    setNotify(true);
  };

  const HandleCastVote = () => {
    setCastVote(true);
  };

  const renderPolls = () => {
    switch (viewType) {
      case "private":
        return (
          <>
            <Polls />
            <Polls />
          </>
        );
      case "public":
        return <Polls />;
      case "all":
      default:
        return (
          <>
            <Polls />
            <Polls2 />
            <Polls />
          </>
        );
    }
  };

  const onSearch = () => {};
  const onFilterClick = () => {};

  return (
    <MainLayout>
      <div className=" lg:bg-[#f5f5f5] lg:flex w-full pt-36  lg:px-10 lg:gap-6 ">
        {!Notify && !CastVote && (
          <div className=" lg:w-[60%] overflow-x-hidden bg-[#fff] py-10 px-6">
            {/* MOBILE */}
            <h1>My Polls</h1>
            <h2 className="mt-6 block lg:hidden">Hello {userInfo.username}</h2>
            <span className="text-[14px] block lg:hidden">
              What do you want to do today ?
            </span>

            <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />

            <img
              src="images/fifa.png"
              alt="fifa"
              className="mt-6 w-full lg:mt-10"
            />

            {/* MOBILE */}
            <CreateCastActions
              HandleNotification={HandleNotification}
              HandleCastVote={HandleCastVote}
              showCreateModal={() => setShowCreateModal((prev) => !prev)}
            />

            {/* WEB */}
            <div className="pb-[40px] hidden lg:block">
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
          </div>
        )}

        {/* MOBILE */}
        {Notify && <Notifications setNotify={setNotify} />}

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
