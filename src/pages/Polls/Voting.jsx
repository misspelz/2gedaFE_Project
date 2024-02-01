import React, { useState, useEffect } from "react";
import "./styles.css";
import MainLayout from "../../Layout/MainLayout";
import PollsSearch from "../../components/PollsComp/PollsSearch";
// import CantVote from "../../components/Modals/Vote/Cant/CantVote";
import CanVote from "../../components/Modals/Vote/Can/CanVote";
// import Poll from "../../components/Modals/Vote/Can/Poll";
import SearchBox from "../../components/SearchComp/searchBox";
import Notify from "../../components/Modals/Vote/Notification/Notify";
import { Modal } from "react-bootstrap";
import { url } from "../../utils";
import { IoIosNotificationsOutline } from "react-icons/io";

const Voting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [promoted, setPromoted] = useState(null);
  const [suggested, setSuggested] = useState(null);

  const userInfoString = localStorage.getItem("2gedaUserInfo");

  const userInfo = JSON.parse(userInfoString);
  // console.log("userInfo", userInfo);

  useEffect(() => {
    window.scrollTo(0, 0);

    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      try {
        const promotedResponse = await fetch(`${url}/poll/promoted/`, {
          method: "GET",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        });

        const response = await fetch(`${url}/poll/polls/`, {
          method: "GET",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        });

        const suggestedResponse = await fetch(`${url}/poll/suggested-polls/`, {
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
        console.log(responseBody);
        setResponseData(responseBody);
        localStorage.setItem("allPolls", JSON.stringify(responseBody));

        const promotedResponseBody = await promotedResponse.json();
        setPromoted(promotedResponseBody);
        localStorage.setItem(
          "promotedPolls",
          JSON.stringify(promotedResponseBody)
        );

        const suggestedBody = await suggestedResponse.json();
        setSuggested(suggestedBody);
        localStorage.setItem("suggestedPolls", JSON.stringify(suggestedBody));
        // Check if responseData is not null before mapping
      } catch (error) {
        console.log(error);
        // Handle errors as needed
      } finally {
        // setIsLoading(true); // Move this line if needed based on your requirement
        console.log("Finally block executed");
      }
    };

    makeRequest();
  }, []);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const castVote = async (pollsId, content, cost) => {
    const data = {
      post_id: pollsId,
      content: content,
      cost: cost,
    };
    try {
      const token = localStorage.getItem("authTOken");
      const response = await fetch(`${url}/poll/votes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log("Response not ok");
      }

      const responseBody = await response.json();
      console.log(responseBody);

      // Check if responseData is not null before mapping
    } catch (error) {
      console.log(error);
      // Handle errors as needed
    } finally {
    }
  };
  const retrieved = localStorage.getItem("suggestedPolls");
  const retrievedArrayString = JSON.parse(retrieved);
  const promotedPollsretrieved = localStorage.getItem("promotedPolls");
  const promotedPollsArrayString = JSON.parse(promotedPollsretrieved);
  const allPollsretrieved = localStorage.getItem("allPolls");
  const allPollsArrayString = JSON.parse(allPollsretrieved);

  return (
    <MainLayout>
      <div className=" lg:bg-[#f5f5f5] lg:flex  h-screen w-full pt-36 px-6 lg:px-10 lg:gap-6">
        <div className=" lg:w-[60%] bg-[#fff] py-10 px-6">
          <h1>Voting</h1>
          <h2 className="mt-6 block lg:hidden">Hello {userInfo.username}</h2>
          <span className="text-[14px] block lg:hidden">
            What do you want to do today ?
          </span>
          <div className="hidden lg:flex">
          <input type="text" placeholder="Find polls" className="text-[14px]" />
          </div>
          <img src="images/fifa.png" alt="fifa-image" className="mt-6 w-full" />

          <div className="px-4 mt-12 block lg:hidden">
            <div className="flex justify-between">
              <div className="flex items-center gap-6">
                <img src="images/create.png" alt="create-icon" width={25} />
                <span className="text-[13px] font-[500]">Create poll</span>
              </div>
              <div className="bg-[#D0D5DD] rounded-full flex items-center justify-center relative">
                <IoIosNotificationsOutline size={20} />
                <div className="absolute top-[6px] right-4 bg-purple-800 text-white rounded-[45%] w-4 text-center">
                  3
                </div>
              </div>
            </div>
            <div className="mt-14 flex justify-between">
              <div className="flex items-center gap-6">
                <img src="images/cast.png" alt="create-icon" width={25} />
                <span className="text-[13px] font-[500]">Cast vote</span>
              </div>

              <div className="bg-[#FF8A15] p-3 text-white rounded-[30px]">
                25 new polls
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-[40%] py-10 px-6 bg-[#fff]">
          <div className="flex items-center gap-6 mt-4 border p-4 rounded-[10px]">
            <img src="images/create.png" alt="create-icon" width={25} />
            <p className="text-[13px] font-[500] mt-3">My polls</p>
          </div>
        </div>
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

export default Voting;
