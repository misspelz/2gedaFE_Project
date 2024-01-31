import { useState } from "react";
import { url } from "../../utils";

const Comment = ({
  disnone,
  postID,
  commentList,
  setCommentList,
  likeList,
  setLikeList,
  index
}) => {
  const [isLoading, setIsloading] = useState(false);
  const [ setResponseData] = useState(null);
  const [commentText, setCommentText] = useState("");

  function handleAddComment(index) {
    setCommentList([...commentList, index]);
  }

  function handleComment() {
    handleAddComment(index);
    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      setIsloading(true);
      const formData = {
        post_id: parseInt(postID),
        content: commentText,
      };

      try {
        const response = await fetch(`${url}/feed/create-comment/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          console.error(`Error: ${errorMessage}`);
        }

        const responseBody = await response.json();
        setResponseData(responseBody);

        // Move setIsLoading inside the try block if you want it to be set only on success

        console.log(responseBody);
      } catch (error) {
        console.log(error);
        // Handle errors as needed
      } finally {
        setCommentText(" ");

        setIsloading(false); // Move this line if needed based on your requirement
        console.log("Finally block executed");
      }
    };
    makeRequest();
  }

  return (
    <div className={`comment-container ${disnone}`}>
      <div className="post-ead">Comment</div>
      <div className="inp-coment">
        <textarea
          name=""
          className="comment-inp"
          id=""
          value={commentText}
          placeholder="Your comment goes here"
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        ></textarea>
        {/* <ComBtn /> */}
        <div className="com-btn-box">
          <button onClick={() => handleComment()} className="com-btn">
            {isLoading ? "Posting" : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
