import React from "react";
import { Polls } from "./Polls";
import styles from "./SuggestedPolls.module.css";

export const SuggestedPolls = () => {
  const options = [
    { title: "Python", percentage: "30" },
    { title: "Java", percentage: "40" },
  ];
  return (
    <div className={`${styles.container} mt-8 lg:mt-2`}>
      <div className="flex gap-6 min-w-[800px]">
        <Polls
          authorName="Dave Jones"
          createdAt="Today @ 10:09am"
          question="What is your preferred programming language?"
          options={options}
          daysRemaining="5 days remaining"
          totalVotes="500"
          backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Polls
          authorName="Joseph Tony"
          createdAt="Today @ 10:09am"
          question="What is your preferred programming language?"
          options={options}
          daysRemaining="5 days remaining"
          totalVotes="500"
          backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Polls
          authorName="Ade Jones"
          createdAt="Today @ 10:09am"
          question="What is your preferred programming language?"
          options={options}
          daysRemaining="5 days remaining"
          totalVotes="500"
          backgroundImageUrl="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};
