const InputField = ({ placeholder, type, onChange }) => {
  return (
    <div className="inp-cont">
      <input
        type={type}
        className="form-inp"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
