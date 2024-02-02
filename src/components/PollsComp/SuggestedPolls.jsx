import React from "react";
import { Polls } from "./Polls";
import styles from "./SuggestedPolls.module.css";

export const SuggestedPolls = () => {
  return (
    <div className={`${styles.container} mt-8 lg:mt-2`}>
      <div className="flex gap-6 min-w-[800px]">
        <Polls />
        <Polls />
        <Polls />
      </div>
    </div>
  );
};
