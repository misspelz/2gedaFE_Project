import React, { useEffect, useState } from "react";
import { Polls } from "./Polls";
import styles from "./SuggestedPolls.module.css";
import { SuggestedPollsApi } from "utils/ApICalls";
import toast from "react-hot-toast";

export const SuggestedPolls = () => {
  const [suggestedPolls, setSuggestedPolls] = useState([]);
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
      console.log(error);
      toast.error(error.message || "An error occurred");
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
    <div className={`${styles.container} mt-8 lg:mt-2`}>
      <div className="flex gap-6 min-w-[800px]">
        {suggestedPolls.slice(0, 3).map((poll, index) => (
          <Polls
            key={index}
            authorName={poll.username}
            createdAt={poll.created_at}
            question={poll.question}
            options={initialOptions}
            daysRemaining={poll.daysRemaining}
            totalVotes={poll.vote_count}
            backgroundImageUrl={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
          />
        ))}
      </div>
    </div>
  );
};
