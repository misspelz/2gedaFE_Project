import PostFormModal from "../../../components/Modals/PostFormModal";

const PostFeedFormCont = ({
  hdClose,
  isModalOpen,
  selectedIcon,
  handleIconClick,
}) => {
  return (
    <>
      {isModalOpen && (
        <div className="modal-full-container">
          <PostFormModal
            handleCloseMainContainerClick={hdClose}
            selectedIcon={selectedIcon}
            handleIconClick={handleIconClick}
          />
        </div>
      )}
    </>
  );
};

export default PostFeedFormCont;
