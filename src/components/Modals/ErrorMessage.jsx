const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        fontSize: '12px',
        color: 'red',
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
