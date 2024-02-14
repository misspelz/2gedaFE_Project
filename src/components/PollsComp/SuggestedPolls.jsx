import React, { useEffect, useState } from "react";
import { Polls } from "./Polls";
import styles from "./SuggestedPolls.module.css";
import { SuggestedPollsApi } from "utils/ApICalls";
import toast from "react-hot-toast";
import optionss from "utils/options.json";

export const SuggestedPolls = ({ HandlePoll }) => {
  const [suggestedPolls, setSuggestedPolls] = useState([]);
  // console.log("suggestedPolls", suggestedPolls);
  const [loading, setLoading] = useState(true);

  const initialOptions = [
    { title: "Python", percentage: "20" },
    { title: "Java", percentage: "40" },
  ];

  const GetSuggestedPolls = async () => {
    try {
      const res = await SuggestedPollsApi();
      if (res.status === 200) {
        setSuggestedPolls(res?.data);
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetSuggestedPolls();
  }, []);

  if (loading) {
    return <p className="mt-5">Please wait...</p>;
  }

  if (!suggestedPolls || suggestedPolls.length === 0) {
    return <p className="mt-5">No polls to display</p>;
  }

  return (
    <div className="flex w-full gap-6  overflow-auto">
      {suggestedPolls.slice(0, 4).map((poll, index) => (
        <Polls
          key={index}
          onClick={() => HandlePoll(poll)}
          authorName={poll.username}
          createdAt={poll.created_at}
          question={poll.question}
          // options={initialOptions}
          optionList={
            poll?.options_list?.length > 0 ? poll?.options_list : optionss
          }
          daysRemaining={poll.daysRemaining || "No duration"}
          totalVotes={poll.vote_count}
          backgroundImageUrl={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
      ))}
    </div>
  );
};
