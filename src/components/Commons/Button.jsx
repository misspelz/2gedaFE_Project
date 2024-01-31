const ActionButton = ({ bg, label, type, handleLogin }) => {
  return (
    <div className="act-btn-cont">
      <button onClick={handleLogin} type={type} className={`action-btn ${bg}`}>
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
