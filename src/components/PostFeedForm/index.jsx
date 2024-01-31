import PostFormModal from "../Modals/PostFormModal";
// import PostFormPhotoModal from "../Modals/PostFormPhotoModal";

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
