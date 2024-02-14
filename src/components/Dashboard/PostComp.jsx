import {
  BiSolidLike,
  BiMessageAlt,
} from "react-icons/bi";
import Comment from "./Comment";
import PostMenu from "../Modals/post-menu/PostMenu";
import { useState } from "react";
import PostmediaGrid from "./post-media-grid/PostmediaGrid";
import Sharepost from "components/Home/Sharepost/Sharepost";
import Likepost from "components/Home/Likepost/Likepost";
import { Link } from "react-router-dom";

const PostComp = ({
  index,
  disnone,
  redmar,
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

  const [commentList, setCommentList] = useState([]);

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
				<Link to={`/Home/${postID}`} className="post-body-box">
					<div>
						{content && (
							<div className="post-body-text">
								{content}
								<br />
								<br />
							</div>
						)}
					</div>
				</Link>
				<Link to={`/Home/${postID}`}>
					<div>
						{media && <PostmediaGrid media={media} />}
					</div>
				</Link>
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
							<Likepost />
							<div className="con-test">
								{post_reaction_count && post_reaction_count}
							</div>
						</div>
						{commentList.includes(index) ? (
							<div className="icon-text">
								<BiMessageAlt className="mess" />
								<div className="con-test">{50}</div>
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
							<Sharepost />
							<div className="con-test">
								{post_reaction_count && post_reaction_count}
							</div>
						</div>
					</div>
					<PostMenu />
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
