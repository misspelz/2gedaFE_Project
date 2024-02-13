import React, { useState, useEffect } from "react";
import "./styles.css";
import MainLayout from "Layout/MainLayout";
import { Polls } from "components/PollsComp/Polls";
import { Polls2 } from "components/PollsComp/Polls2";
import { PollsNotification } from "components/PollsComp/RightComp";
import { FindPolls } from "components/PollsComp/FindPolls";
import CreatePoll from "components/Modals/Vote/CreatePoll/CreatePoll";
import { Dialog } from "@mui/material";
import { MyPollsCategories } from "components/PollsComp/MyPollsCategories";
import ClosePoll from "components/Modals/Vote/ClosePoll";
import PollResult from "components/Modals/Vote/PollResult";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MyPollsApi } from "utils/ApICalls";
import toast from "react-hot-toast";
import optionss from "utils/options.json";

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

  // const options = [
  //   { title: "C#", percentage: "20" },
  //   { title: "Kotlin", percentage: "10" },
  // ];

  const renderPolls = () => {
    switch (viewType) {
      case "active":
        if (!pollsDetails || pollsDetails.length === 0) {
          return <p className="mt-20">Please wait...</p>;
        } else {
          const isActive = pollsDetails.filter((poll) => poll.is_active);
          return isActive.length > 0 ? (
            isActive?.map((poll, index) => (
              <Polls
                key={index}
                onClick={HandlePoll}
                authorName={poll.username}
                createdAt={poll.created_at}
                question={poll.question}
                // options={initialOptions}
                optionList={
                  poll?.options_list?.length > 0 ? poll?.options_list : optionss
                }
                daysRemaining={poll.duration}
                totalVotes={poll.vote_count}
                backgroundImageUrl={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                } // take note
                myPolls={true}
                onClose={handleShowcloseModal}
                onView={handleViewResults}
                className="border p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
              />
            ))
          ) : (
            <p className="mt-20">No active polls</p>
          );
        }
      case "ended":
        if (!pollsDetails || pollsDetails.length === 0) {
          return <p className="mt-20">Loading polls...</p>;
        } else {
          const isEnded = pollsDetails.filter((poll) => poll.is_ended);
          return isEnded.length > 0 ? (
            isEnded?.map((poll, index) => (
              <Polls
                key={index}
                onClick={HandlePoll}
                authorName={poll.username}
                createdAt={poll.created_at}
                question={poll.question}
                // options={initialOptions}
                optionList={
                  poll?.options_list?.length > 0 ? poll?.options_list : optionss
                }
                daysRemaining={poll.duration}
                totalVotes={poll.vote_count}
                backgroundImageUrl={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                } // take note
                myPolls={true}
                onClose={handleShowcloseModal}
                onView={handleViewResults}
                className="border p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
              />
            ))
          ) : (
            <p className="mt-20">No polls to display</p>
          );
        }
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
              // options={initialOptions}
              optionList={
                poll?.options_list?.length > 0 ? poll?.options_list : optionss
              }
              daysRemaining={poll.duration}
              totalVotes={poll.vote_count}
              backgroundImageUrl={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              } // take note
              myPolls={true}
              onClose={handleShowcloseModal}
              onView={handleViewResults}
              className="border p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
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
      console.log("error", error);
      toast.error(error.response.data.error || "An error occurred");
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
                <CreatePoll
                  onClose={setShowCreateModal}
                  fetchPolls={handleMyPolls}
                />
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
    </MainLayout>
  );
};

export default MyPolls;
