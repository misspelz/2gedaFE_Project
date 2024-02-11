import React from "react";

const ActionButton = ({
  bg,
  label,
  type,
  onClick,
  loading,
  className = "act-btn-cont w-full",
  disabled,
}) => {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        type={type}

        disabled={loading} // Disable the button while loading
        className={`action-btn ${bg} w-full hover:bg-purple-700 transition duration-500 text-[16px]`}

      >
        {loading ? "Loading..." : label} {/* Display loading text when loading */}
      </button>
    </div>
  );
};

export default ActionButton;
