const ActionButton = ({
  bg,
  label,
  type,
  onClick,
  className = "act-btn-cont w-full",
  disabled,
}) => {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        type={type}
        className={`action-btn ${bg} w-full hover:bg-purple-700 disabled:opacity-55 disabled:cursor-not-allowed transition duration-500`}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
