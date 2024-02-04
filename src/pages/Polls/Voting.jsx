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
import Modal from "components/Modals/Modal";
import { IoMdClose } from "react-icons/io";
import InputField from "components/Commons/InputField";
import ActionButton from "components/Commons/Button";

const Voting = () => {
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

  const [selectedPoll, setSelectedPoll] = useState(null);
  const [Notify, setNotify] = useState(false);
  const [CastVote, setCastVote] = useState(false);
  const [viewType, setViewType] = useState("all");
  // const [pollModal, setPollModal] = useState(true);
  const [PaidPoll, setPaidPoll] = useState(false);
  const [PayNow, setPayNow] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [showPaidVotes, setShowPaidVotes] = useState(false);

  const HandleNotification = () => {
    setNotify(true);
  };

  const HandleCastVote = () => {
    setCastVote(true);
  };

  const HandlePoll = (pollData) => {
    setSelectedPoll(pollData);
    setShowPaidVotes(false);
  };

  // const HandlePollModal = () => {
  //   setPollModal(false);
  // };

  const options = [
    { title: "Python", percentage: "30" },
    { title: "Java", percentage: "40" },
  ];

  const renderPolls = () => {
    switch (viewType) {
      case "private":
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
            />
          </>
        );
      case "public":
        return (
          <Polls
            authorName="Adekola Tony"
            createdAt="Today @ 10:09am"
            question="What is your preferred programming language?"
            options={options}
            daysRemaining="5 days remaining"
            totalVotes="500"
            backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        );
      case "all":
      default:
        return (
          <>
            <Polls
              // onClick={HandlePoll}
              authorName="Alani David"
              createdAt="Today @ 2:09pm"
              question="What is your preferred programming language?"
              options={options}
              daysRemaining="1 day remaining"
              totalVotes="100"
              backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Polls2 />
            <Polls
              // onClick={HandlePoll}
              authorName="Joseph Jones"
              createdAt="Today @ 10:09am"
              question="What is your preferred programming language?"
              options={options}
              daysRemaining="5 days remaining"
              totalVotes="500"
              backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </>
        );
    }
  };

  const onSearch = () => {};
  const onFilterClick = () => {};

  const HandlePaidPoll = () => {
    setPaidPoll(true);
  };

  const HandlePayNow = () => {
    setPayNow(true);
  };

  const HandlePaySuccess = () => {
    setSuccess(true);
  };

  const HandleContinue = () => {
    setSuccess(false);
    setPayNow(false);
    setPaidPoll(false);
    setShowPaidVotes(true);
  };

  return (
    <MainLayout>
      {/* MOBILE */}
      {!selectedPoll && (
        <div className=" lg:bg-[#f5f5f5]  w-full pt-36  lg:px-10 lg:gap-6 lg:hidden">
          {!Notify && !CastVote && (
            <div className=" lg:w-[60%] overflow-x-hidden bg-[#fff] py-10 px-6">
              {/* MOBILE */}
              <h1>Voting</h1>
              <h2 className="mt-6 block lg:hidden">
                Hello {userInfo.username}
              </h2>
              <span className="text-[14px] block lg:hidden">
                What do you want to do today ?
              </span>

              <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />

              <img
                src="images/fifa.png"
                alt="fifa-image"
                className="mt-6 w-full lg:mt-10"
              />

              {/* MOBILE */}
              <CreateCastActions
                HandleNotification={HandleNotification}
                HandleCastVote={HandleCastVote}
              />

              {/* WEB */}
              <div className="pb-[40px] hidden lg:block">
                <h2 className="mt-4">Suggested Polls</h2>
                <SuggestedPolls viewType={viewType} setViewType={setViewType} />
                <h2>Promoted Polls</h2>
                <PromotedPolls viewType={viewType} setViewType={setViewType} />
                {renderPolls()}
              </div>
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
                alt="fifa-image"
                className="mt-6 w-full lg:mt-10"
              />
              <h2 className="mt-4">Suggested Polls</h2>
              <SuggestedPolls viewType={viewType} setViewType={setViewType} />
              <h2>Promoted Polls</h2>
              <PromotedPolls viewType={viewType} setViewType={setViewType} />
              {renderPolls()}
            </div>
          )}

          {/* WEB */}
          <PollsNotification setNotify={setNotify} />
        </div>
      )}

      {/* WEB */}
      {/* {!selectedPoll && ( */}
      <div className=" lg:bg-[#f5f5f5] lg:flex w-full pt-36  lg:px-10 lg:gap-6 hidden">
        {!Notify && !CastVote && (
          <div className=" lg:w-[60%] overflow-x-hidden bg-[#fff] py-10 px-6">
            {/* MOBILE */}
            <h1>Voting</h1>
            <h2 className="mt-6 block lg:hidden">Hello {userInfo.username}</h2>
            <span className="text-[14px] block lg:hidden">
              What do you want to do today ?
            </span>

            <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />

            <img
              src="images/fifa.png"
              alt="fifa-image"
              className="mt-6 w-full lg:mt-10"
            />

            {/* MOBILE */}
            <CreateCastActions
              HandleNotification={HandleNotification}
              HandleCastVote={HandleCastVote}
            />

            {/* WEB */}
            <div className="pb-[40px] hidden lg:block">
              <h2 className="mt-4">Suggested Polls</h2>
              <SuggestedPolls viewType={viewType} setViewType={setViewType} />
              <h2>Promoted Polls</h2>
              <PromotedPolls viewType={viewType} setViewType={setViewType} />
              {renderPolls()}
            </div>
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
              alt="fifa-image"
              className="mt-6 w-full lg:mt-10"
            />
            <h2 className="mt-4">Suggested Polls</h2>
            <SuggestedPolls viewType={viewType} setViewType={setViewType} />
            <h2>Promoted Polls</h2>
            <PromotedPolls viewType={viewType} setViewType={setViewType} />
            {renderPolls()}
          </div>
        )}

        {/* WEB */}
        <PollsNotification setNotify={setNotify} />
      </div>
      {/* )} */}

      {/* MOBILE */}
      {selectedPoll && (
        <div className="pt-36 lg:pt-48 px-4 flex lg:hidden flex-col justify-between w-full h-screen">
          <div className="lg:hidden w-full">
            <div
              className="cursor-pointer lg:hidden flex justify-between w-[60%]"
              onClick={() => setSelectedPoll(null)}
            >
              <img src="images/backarrow.png" alt="result-icon" width={20} />
              <div className="text-[18px] font-bold">Cast Vote</div>
            </div>

            <Polls
              // className="w-full"

              onClick={HandlePaidPoll}
              authorName="Pelz Ade"
              createdAt="Today @ 12:09pm"
              question="What is your preferred programming language?"
              options={options}
              daysRemaining="2 days remaining"
              totalVotes="500"
              backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            {showPaidVotes && (
              <div className="mt-20 text-center bg-orange-400 py-3 rounded-[30px] w-[35%] mx-auto text-white ">
                You have 40 votes
              </div>
            )}
          </div>
          <img
            src="images/fifa.png"
            alt="fifa-image"
            className="mb-6 w-full lg:mb-10 lg:hidden"
          />
        </div>
      )}

      {/* WEB */}
      {selectedPoll && !PaidPoll && (
        <div className="hidden lg:flex">
          <Modal>
            <div className="bg-white w-[50%] p-14">
              <div className="w-full flex justify-end">
                <div
                  // onClick={HandlePollModal}
                  className=" flex justify-between w-[60%] "
                >
                  <div className="text-[20px] font-bold">Cast Vote</div>
                  <IoMdClose
                    size={25}
                    onClick={() => setSelectedPoll(null)}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <Polls
                onClick={HandlePaidPoll}
                className="w-[100%] p-6 mt-4 cursor-pointer"
                authorName="Pelz Adetoye"
                createdAt="Today @ 12:09pm"
                question="What is your preferred programming language?"
                options={options}
                daysRemaining="2 days remaining"
                totalVotes="500"
                backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
              />

              {showPaidVotes && (
              <div className="mt-20 text-center bg-orange-400 py-3 rounded-[30px] w-[35%] mx-auto text-white ">
                You have 40 votes
              </div>
            )}
            </div>
          </Modal>
        </div>
      )}

      {PaidPoll && !PayNow && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <h3 className="font-bold text-center text-[18px]">Paid Poll</h3>

            <h6 className="mt-8 text-[16px] text-center">
              This is a paid poll, your contribution ensures meaningful
              insights. Participate now to support quality content and exclusive
              results
            </h6>

            <div className="mt-8 ">
              <div className="flex gap-4 mb-10">
                <InputField
                  placeholder={"Number of votes"}
                  type={"text"}

                  // onChange={handlePasswordChange}
                />
                <select name="" id="" className="w-[40%] rounded-lg mt-[10px] ">
                  <option value="NGN">NGN</option>
                  <option value="USD" className="text-[20px]">
                    USD
                  </option>
                </select>
              </div>
              <ActionButton
                label={"Proceed to pay"}
                bg={"pruplr"}
                onClick={HandlePayNow}
              />
              <ActionButton
                label={"Go Back"}
                className="mt-4  rounded-[10px]"
                // bg={"pruplr"}
                onClick={() => setPaidPoll(false)}
              />
            </div>
          </div>
        </Modal>
      )}

      {PayNow && !Success && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <h6 className="text-[16px] text-center">You are paying</h6>

            <h3 className="text-[30px] text-center text-purple-600 mt-4">
              NGN16,000.00
            </h3>

            <h6 className="mt-4 text-[16px] text-center">Being payment for</h6>

            <div className="flex justify-center">
              <h3 className="mt-4 text-center p-2 w-[100px] rounded-[10px] bg-purple-300">
                40 votes
              </h3>
            </div>

            <div className="mt-8 ">
              <ActionButton
                label={"Pay Now"}
                bg={"pruplr"}
                onClick={HandlePaySuccess}
              />
              <ActionButton
                label={"Go Back"}
                className="mt-4  rounded-[10px]"
                // bg={"pruplr"}
                onClick={() => setPayNow(false)}
              />
            </div>
          </div>
        </Modal>
      )}

      {Success && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <div className="flex justify-center">
              <img
                src="images/success.png"
                alt="payment-success-image"
                // className="mt-6 w-full lg:mt-10"
              />
            </div>
            <h6 className="mt-8 text-[16px] text-center">Payment Successful</h6>

            <div className="mt-8 ">
              <ActionButton
                label={"Continue to Poll"}
                bg={"pruplr"}
                onClick={HandleContinue}
              />
            </div>
          </div>
        </Modal>
      )}

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

export default Voting;
