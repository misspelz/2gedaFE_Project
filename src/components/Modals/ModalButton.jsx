const ModalButton = ({ children, onClick, type }) => {
  return (
    <button className='modal_btn' onClick={onClick} typeof={type}>
      {children}
    </button>
  );
};

export default ModalButton;
