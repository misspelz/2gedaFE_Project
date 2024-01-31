const CommentInputField = () => {
  return (
    <>
      <div className={`chat-input-field `}>
        <textarea
          type="text"
          className="mess-inpt lig"
          placeholder="Type your comment here"
        />
      </div>
    </>
  );
};

export default CommentInputField;
