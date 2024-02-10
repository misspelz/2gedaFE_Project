import React, { useState, useEffect } from "react";
import "./styles.css";
import MainLayout from "Layout/MainLayout";
import { Polls } from "components/PollsComp/Polls";
import { PollsNotification } from "components/PollsComp/RightComp";
import { SuggestedPolls } from "components/PollsComp/SuggestedPolls";
import { FindPolls } from "components/PollsComp/FindPolls";
import { Notifications } from "components/PollsComp/Notification";
import { CreateCastActions } from "components/PollsComp/CreateCastActions";
import { PromotedPolls } from "components/PollsComp/PromotedPolls";
import CreatePoll from "components/Modals/Vote/CreatePoll/CreatePoll";
import { Dialog, DialogContent } from "@mui/material";
import Modal from "components/Modals/Modal";
import { IoMdClose } from "react-icons/io";
import InputField from "components/Commons/InputField";
import ActionButton from "components/Commons/Button";
import { MyPollsApi } from "utils/ApICalls";
import toast from "react-hot-toast";
import optionss from "utils/options.json";

const Voting = () => {
  const userInfoString = localStorage.getItem("2gedaUserInfo");

  const userInfo = JSON.parse(userInfoString);

  const [selectedPoll, setSelectedPoll] = useState(false);
  // console.log("singlePoll", selectedPoll);

  const [Notify, setNotify] = useState(false);
  const [CastVote, setCastVote] = useState(false);
  const [viewType, setViewType] = useState("all");

  const [showCreateModal, setShowCreateModal] = useState(false);

  const [PaidPoll, setPaidPoll] = useState(false);
  const [PayNow, setPayNow] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [showPaidVotes, setShowPaidVotes] = useState(false);
  const [pollsDetails, setPollsDetails] = useState([]);
  console.log("pollsDetails", pollsDetails);

  const [singlePoll, setSinglePoll] = useState({});
  console.log("singlePoll", singlePoll);

  const [loading, setLoading] = useState(true);

  const [showCloseModal, setShowCloseModal] = useState(false);
  const [viewResults, setViewResults] = useState(false);
  const [numberOfVotes, setNumberOfVotes] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [conversionRate, setConversionRate] = useState(1);

  const [payNowAmount, setPayNowAmount] = useState(0);

  const handleNumberOfVotesChange = (e) => {
    const input = e.target.value;
    // Check if input is a valid number
    if (!isNaN(input)) {
      const votes = parseFloat(input);
      setNumberOfVotes(votes);
      // Calculate amount based on the number of votes and rate per vote (2000 per vote)
      setPayNowAmount(
        votes * 2000 * (selectedCurrency === "USD" ? 1 / 1900 : 1)
      );
    } else {
      // Handle invalid input, for example, clear the input field or show an error message
      // For now, setting the number of votes to empty string
      setNumberOfVotes("");
    }
  };

  // const handleNumberOfVotesChange = (e) => {
  //   const votes = parseFloat(e.target.value);
  //   setNumberOfVotes(votes);
  //   // Calculate amount based on the number of votes and rate per vote (2000 per vote)
  //   setPayNowAmount(votes * 2000 * (selectedCurrency === "USD" ? 1 / 1900 : 1));
  // };

  const handleCurrencyChange = (e) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
    // Update payment amount based on the selected currency
    setPayNowAmount(numberOfVotes * 2000 * (currency === "USD" ? 1 / 1900 : 1));
  };

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch(
          `API_URL?base=${selectedCurrency}&symbols=USD`
        );
        const data = await response.json();
        setConversionRate(data.rates.USD);
      } catch (error) {
        console.error("Error fetching conversion rate: ", error);
      }
    };

    fetchConversionRate();
  }, [selectedCurrency]);

  const HandleNotification = () => {
    setNotify(true);
  };

  const HandleCastVote = () => {
    setCastVote(true);
  };

  const HandlePoll = (pollData) => {
    console.log("pollData", pollData);
    setSinglePoll(pollData);
    setSelectedPoll(true);
    setShowPaidVotes(false);
  };

  const handleShowcloseModal = () => {
    setShowCloseModal((prev) => !prev);
  };

  const handleViewResults = () => {
    setViewResults((prev) => !prev);
  };

  const options = [
    { title: "Python", percentage: "30" },
    { title: "Java", percentage: "40" },
  ];

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

  const renderPolls = () => {
    switch (viewType) {
      case "private":
        if (!pollsDetails || pollsDetails.length === 0) {
          return <p className="mt-20">Please wait...</p>;
        } else {
          const isPrivate = pollsDetails.filter(
            (poll) => poll.privacy.toLowerCase() === "private"
          );
          return isPrivate.length > 0 ? (
            isPrivate?.map((poll, index) => (
              <Polls
                key={index}
                onClick={() => HandlePoll(poll)}
                authorName={poll.username}
                createdAt={poll.created_at}
                question={poll.question}
                // options={options}
                optionList={poll.options_list.length > 0 ? poll.options_list : optionss}
                daysRemaining={poll.duration}
                totalVotes={poll.vote_count}
                backgroundImageUrl={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                } // take note
                // myPolls={true}
                // onClose={handleShowcloseModal}
                // onView={handleViewResults}
                className="border p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
              />
            ))
          ) : (
            <p className="mt-20">No polls to display</p>
          );
        }
      case "public":
        if (!pollsDetails || pollsDetails.length === 0) {
          return <p className="mt-20">Loading polls...</p>;
        } else {
          const isPublic = pollsDetails.filter(
            (poll) => poll.privacy.toLowerCase() === "public"
          );
          return isPublic.length > 0 ? (
            isPublic?.map((poll, index) => (
              <Polls
                key={index}
                onClick={() => HandlePoll(poll)}
                authorName={poll.username}
                createdAt={poll.created_at}
                question={poll.question}
                // options={options}
                optionList={poll.options_list.length > 0 ? poll.options_list : optionss}
                daysRemaining={poll.duration}
                totalVotes={poll.vote_count}
                backgroundImageUrl={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                } // take note
                // myPolls={true}
                // onClose={handleShowcloseModal}
                // onView={handleViewResults}
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
              onClick={() => HandlePoll(poll)}
              authorName={poll.username}
              createdAt={poll.created_at}
              question={poll.question}
              optionList={
                poll.options_list.length > 0 ? poll.options_list : optionss
              }
              daysRemaining={poll.duration}
              totalVotes={poll.vote_count}
              backgroundImageUrl={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              className="border p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
            />
          ));
        }
    }
  };

  const onSearch = () => {};
  const onFilterClick = () => {};

  const HandlePaidPoll = () => {
    if (singlePoll.type.toLowerCase() === "paid") {
      setPaidPoll(true);
    }
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

  const [castVotes, setCastVotes] = useState(false);

  const CastPaidVotes = () => {
    setCastVotes(true);
  };

  const [allVotesValue, setAllVotesValue] = useState(0);

  const handleAll = () => {
    setAllVotesValue(numberOfVotes);
  };

  const HandleVoteSubmit = () => {
    toast.success("Vote Casted Successfully");
    setAllVotesValue(null);
    setCastVotes(false);
    setNumberOfVotes("");
    setSelectedPoll(null);
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
                showCreateModal={() => setShowCreateModal((prev) => !prev)}
              />
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
              <SuggestedPolls HandlePoll={HandlePoll} />
              <h2>Promoted Polls</h2>
              <PromotedPolls HandlePoll={HandlePoll} />

              {/* tabs */}
              <div className="flex justify-between  mt-16 lg:mt-20">
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "all" ? "bg-purple-900 text-white" : ""
                  }`}
                  onClick={() => setViewType("all")}
                >
                  All
                </button>
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "public" ? "bg-purple-900 text-white" : ""
                  }`}
                  onClick={() => setViewType("public")}
                >
                  Public
                </button>
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "private" ? "bg-purple-900 text-white" : ""
                  }`}
                  onClick={() => setViewType("private")}
                >
                  Private
                </button>
              </div>
              {renderPolls()}
            </div>
          )}

          {/* WEB */}
          <PollsNotification
            setNotify={setNotify}
            showCreateModal={() => setShowCreateModal((prev) => !prev)}
          />
        </div>
      )}

      {/* WEB */}
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
              <h2 className="mt-4">Suggested Polls</h2>
              <SuggestedPolls HandlePoll={HandlePoll} />
              <h2>Promoted Polls</h2>
              <PromotedPolls HandlePoll={HandlePoll} />

              {/* tabs */}
              <div className="flex justify-between  mt-16 lg:mt-20">
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "all" ? "bg-purple-900 text-white" : ""
                  }`}
                  onClick={() => setViewType("all")}
                >
                  All
                </button>
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "public" ? "bg-purple-900 text-white" : ""
                  }`}
                  onClick={() => setViewType("public")}
                >
                  Public
                </button>
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "private" ? "bg-purple-900 text-white" : ""
                  }`}
                  onClick={() => setViewType("private")}
                >
                  Private
                </button>
              </div>
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
            <h2 className="mt-4">Suggested Polls</h2>
            <SuggestedPolls HandlePoll={HandlePoll} />
            <h2>Promoted Polls</h2>
            <PromotedPolls HandlePoll={HandlePoll} />
            {renderPolls()}
          </div>
        )}

        {/* WEB */}
        <PollsNotification
          setNotify={setNotify}
          showCreateModal={() => setShowCreateModal((prev) => !prev)}
        />
      </div>

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
              // className="w-full" singlePoll
              onClick={HandlePaidPoll}
              authorName={singlePoll.username}
              createdAt={singlePoll.created_at}
              question={singlePoll.question}
              options={options}
              optionList={singlePoll?.options_list}
              daysRemaining={singlePoll.daysRemaining || "No duration"}
              totalVotes={singlePoll.vote_count}
              backgroundImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
              {!castVotes && (
                <div className="w-full flex justify-end">
                  <div className=" flex justify-between w-[60%]">
                    <div className="text-[20px] font-bold">Cast Vote</div>
                    <IoMdClose
                      size={25}
                      onClick={() => setSelectedPoll(null)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {!showPaidVotes && (
                <Polls
                  onClick={HandlePaidPoll}
                  className="w-[100%] p-6 mt-4 cursor-pointer"
                  authorName={singlePoll.username}
                  createdAt={singlePoll.created_at}
                  question={singlePoll.question}
                  // options={options}
                  optionList={singlePoll.options_list}
                  daysRemaining={singlePoll.daysRemaining || "No duration"}
                  totalVotes={singlePoll.vote_count}
                  backgroundImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
              )}

              {showPaidVotes && !castVotes && (
                <>
                  <Polls
                    onClick={CastPaidVotes}
                    className="w-[100%] p-6 mt-4 cursor-pointer"
                    authorName={singlePoll.username}
                    createdAt={singlePoll.created_at}
                    question={singlePoll.question}
                    // options={options}
                    optionList={singlePoll.options_list}
                    daysRemaining={singlePoll.daysRemaining || "No duration"}
                    totalVotes={singlePoll.vote_count}
                    backgroundImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  />
                  <div className="mt-20 text-center bg-orange-400 py-3 rounded-[30px] w-[35%] mx-auto text-white ">
                    You have {numberOfVotes} votes
                  </div>
                </>
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
                  type={"number"}
                  value={numberOfVotes}
                  onChange={handleNumberOfVotesChange}
                />
                <select
                  name="currency"
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="w-[40%] rounded-lg mt-[10px] outline-none"
                >
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <ActionButton
                label={"Proceed to Pay"}
                bg={"pruplr"}
                onClick={HandlePayNow}
                className="font-semibold"
              />
              <ActionButton
                label={"Go Back"}
                className="mt-4 rounded-[10px] hover:text-[#fff] hover:bg-[pruplr] border-[1px] border-purple-600 text-purple-600 font-semibold"
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
              {selectedCurrency === "NGN" ? "NGN" : "$"}
              {payNowAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h3>

            <h6 className="mt-4 text-[16px] text-center">Being payment for</h6>

            <div className="flex justify-center">
              <h3 className="mt-4 text-center p-2 w-[100px] rounded-[10px] bg-purple-300">
                {numberOfVotes} votes
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
                className="mt-4 rounded-[10px] hover:text-[#fff] hover:bg-[pruplr] border-[1px] border-purple-600 text-purple-600 font-semibold"
                onClick={() => {
                  setNumberOfVotes("");
                  setSelectedCurrency("NGN");
                  setPayNowAmount(0);
                  setPayNow(false);
                }}
              />
            </div>
          </div>
        </Modal>
      )}

      {Success && !castVotes && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <div className="flex justify-center">
              <img src="images/success.png" alt="payment-success-image" />
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

      {castVotes && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <div className="flex justify-end">
              <IoMdClose
                size={25}
                onClick={() => {
                  setCastVotes(false);
                  setAllVotesValue(null);
                }}
                className="cursor-pointer"
              />
            </div>
            <h6 className="mt-8 text-[16px] text-center">
              How many votes do you want to cast for this selection?
            </h6>
            <div className="relative">
              <InputField
                placeholder={"Enter amount"}
                type="text"
                value={allVotesValue}
                className="text-red-500"
                onChange={(e) => setAllVotesValue(e.target.value)}
              />
              <button
                className="absolute top-[28%] right-2 text-[13px] rounded-[5px] py-2 px-4 font-bold bg-[#D0D5DD]"
                onClick={handleAll}
              >
                All
              </button>
            </div>
            <div className="mt-8 ">
              <ActionButton
                label={"Vote"}
                bg={"pruplr"}
                onClick={HandleVoteSubmit}
              />
            </div>
          </div>
        </Modal>
      )}
    </MainLayout>
  );
};
export default Voting;
