import {
  BiSolidLike,
  BiLike,
  BiMessageAlt,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import Comment from "./Comment";
import PostMenu from "../Modals/PostMenu";
import { useState } from "react";
import { url } from "../../utils";

const PostComp = ({
  index,
  disnone,
  redmar,
  handleFeedOpen,
  creator,
  comment,
  media,
  hashtag,
  content,
  reaction,
  post_reaction_count,
  post_comment_count,
  time_since,
  postID,
}) => {
  const [isPostMenuDone, setIsPostMenuDone] = useState(false);
  const [ setIsLoading] = useState(false);
  const [ setResponseData] = useState(null);

  const handlePostMenuClickDone = () => {
    setIsPostMenuDone(!isPostMenuDone);
  };

  const [commentList, setCommentList] = useState([]);
  const [likeList, setLikeList] = useState([]);

  function addToLikes(index) {
    setLikeList([...likeList, index]);
  }

  function handleLike(index) {
    if (likeList.includes(index)) {
      const updatedList = likeList.filter((number) => number !== index);
      setLikeList(updatedList);
    } else {
      addToLikes(index);
      const token = localStorage.getItem("authToken");

      const formData = {
        post_id: parseInt(postID),
        reaction_type: "like",
      };

      const makeRequest = async () => {
        try {
          const response = await fetch(`${url}/feed/react/post/`, {
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
          setIsLoading(true);
          console.log(responseBody);
        } catch (error) {
          console.log(error);
        } finally {
          console.log("Finally block executed");
        }
      };

      makeRequest();
    }
  }

  return (
    <div className={`postcom ${redmar}`}>
      <div className="post-comp-container">
        <div className="profile-time">
          <div className="post-profile" style={{}}>
            {creator && creator.cover_image && (
              <img src={creator.cover_image.cover_image} alt="" />
            )}
            <div className="post-profile-details">
              {creator && creator.username && (
                <div className="post-profile-name">{creator.username}</div>
              )}

              {creator && creator.username && (
                <div className="autor-ooby">Pharmacist</div>
              )}

              {creator && creator.address && (
                <div className="autor-location">
                  {creator.address.current_city},{creator.address.country}
                </div>
              )}
            </div>
          </div>
          {time_since && <div className="time-posted">{time_since}</div>}
        </div>
        <hr className="feed-hr" />
        <div className="post-body-box" onClick={handleFeedOpen}>
          {content && (
            <div className="post-body-text">
              {content}
              <br />
              <br />
              {/* <a href="www.ileifetech.com/freshmen">
                www.ileifetech.com/freshmen
              </a> */}
            </div>
          )}
        </div>
        <div className="dob-img flex" onClick={handleFeedOpen}>
          {media && <div className="post-media lay-post">
            <img src={media[1]?.media} alt="" />
          </div>}
        </div>
        <div className="post-likes-co">
          <div className="likes-per-post">
            <div className="likes-bx">
              <BiSolidLike className="likes" />
            </div>
            <div className="smil">🥰</div>
            <div className="smil">&#x1F60A;</div>
          </div>
          <div className="liker-name-and-total">
            {reaction && reaction.length > 3
              ? `${reaction[0].user.username} and ${post_reaction_count - 1}`
              : post_reaction_count}
          </div>
        </div>
        <div className="post-likes-box">
          <div className="posted-likes-cont">
            <div className="icon-text">
              {likeList.includes(index) ? (
                <>
                  <BiLike
                    style={{ color: "blue" }}
                    onClick={() => handleLike(index)}
                    className="like"
                  />
                  <div className="con-test">
                    {post_reaction_count ? post_reaction_count + 1 : 1}
                  </div>
                </>
              ) : (
                <>
                  <BiLike onClick={() => handleLike(index)} className="like" />
                  <div className="con-test">
                    {post_reaction_count && post_reaction_count}
                  </div>
                </>
              )}
            </div>
            {commentList.includes(index) ? (
              <div className="icon-text">
                <BiMessageAlt className="mess" />
                <div className="con-test">
                  {likeList.filter((number) => number === index).length +
                    1 +
                    post_comment_count}
                </div>
              </div>
            ) : (
              <div className="icon-text">
                <BiMessageAlt className="mess" />
                <div className="con-test">
                  {post_comment_count > 0 ? post_comment_count : 0}
                </div>
              </div>
            )}

            <div className="icon-text">
              <FiShare2 className="share" />
              <div className="con-test">
                {post_reaction_count && post_reaction_count}
              </div>
            </div>
          </div>
          <div className="click-dot" onClick={handlePostMenuClickDone}>
            <BiDotsHorizontalRounded className="dot" />
          </div>

          {isPostMenuDone && (
            <div className="post-menu-cont-bx">
              <PostMenu />
            </div>
          )}
        </div>
      </div>
      <Comment
        index={index}
        setCommentList={setCommentList}
        commentList={commentList}
        disnone={disnone}
        postID={postID}
      />
    </div>
  );
};

export default PostComp;
