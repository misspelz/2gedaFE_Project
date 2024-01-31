import { AiFillDelete } from "react-icons/ai";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import "./style.css";
const PostFormPhotoModal = ({
  handleClosePhotoModalClick,
  images,
  setImages,
}) => {
  // const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const droppedImages = Array.from(e.dataTransfer.files);
    setImages([...images, ...droppedImages]);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };
  const handleDeleteItem = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1); // Remove the item at the specified index
    setImages(updatedImages);
  };
  return (
    <>
      <div
        className="post-img-cont-box"
        onDrop={handleImageDrop}
        onDragOver={preventDefault}
      >
        { images.length > 0 ? (
          images.map((file, index) => {
            if (file.type.startsWith("image/")) {
              // Display images using <img> element
              return (
                <div className="im-vi-bxb" key={index}>
                  <div
                    className="delete-item"
                    onClick={() => handleDeleteItem(index)}
                  >
                    <AiFillDelete />
                    <div className="del-tss">Delete</div>
                  </div>
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    // alt={`User's Image ${index + 1}`}
                    alt=""
                    className="tem-pic"
                  />
                </div>
              );
            } else if (file.type.startsWith("video/"))  {
              return (
                <div className="im-vi-bxb">
                  <div
                    className="delete-item"
                    onClick={() => handleDeleteItem(index)}
                  >
                    <AiFillDelete />
                    <div className="del-tss">Delete</div>
                  </div>
                  <video key={index} autoPlay={false} className="tem-video">
                    <source src={URL.createObjectURL(file)} type={file.type} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            }
            return null; // Ignore unsupported file types
          })
        ) : (
          <>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-input"
            />
            <label htmlFor="image-input" className="dra-im">
              <MdOutlineAddPhotoAlternate />
              <div className="add-vid">Add Photos/Videos</div>
              <div className="or-dr">or drag and drop</div>
            </label>
          </>
        )}
      </div>
      {images.length > 0 && (
        <>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="image-input"
          />
          <label htmlFor="image-input" className="add-new-pic-or">
            <MdOutlineAddPhotoAlternate />
            <div className="add-nnew">Add new</div>
          </label>
        </>
      )}
    </>
  );
};

export default PostFormPhotoModal;
