const ActionButton = ({
  bg,
  label,
  type,
  onClick,
  className = "act-btn-cont w-full",
}) => {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        type={type}
        className={`action-btn ${bg} w-full hover:bg-purple-700 transition duration-500`}
      >
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
