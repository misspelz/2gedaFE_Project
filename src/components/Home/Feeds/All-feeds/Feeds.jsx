import React from "react";
import MusicDash from "components/Dashboard/MusicDas";
import PostComp from "components/Dashboard/PostComp";
import ProductDash from "components/Dashboard/ProductDAs";
import SmallTicketPromoteCard from "components/Dashboard/smallTicketsPromoted";
import MovieSlider from "components/Home/Movieslider/MovieSlider";
import Stick from "components/Dashboard/Stick";
import PostImage from "assets/images/sample-post-image.png"
import PostAvatar from "assets/images/sample-avatar.png"
import ProductImage from "assets/images/sample-product.png";
import MovieDashCard from "components/Home/Movieslider/MovieCards";

const Feeds = ({handleFeedOpen}) => {
    const mockCreator = {
		cover_image: {cover_image: PostAvatar},
		username: "John Doe",
		address: {
			country: "Nigeria",
			current_city: "Lagos"
		}
	}

	const mockReaction = [
		{ userId: 1, emoji: "👍", user: {username: "user 01"} }
	]

	const mockMedia = [{media: PostImage}, {media: ProductImage}, {media: PostImage}, {media: ProductImage}]

    
	return (
		<div style={{maxWidth: "560px"}}>
			<PostComp
				handleFeedOpen={handleFeedOpen}
				postID={"item id"}
				creator={mockCreator}
				comment={"some random comment"}
				media={mockMedia}
				hashtag={"hashtag"}
				content={"Some random content"}
				reaction={mockReaction}
				post_reaction_count={3}
				post_comment_count={4}
				time_since={"2hr ago"}
			/>

			<div className="music-das-row">
				{[1, 2, 3, 4, 5, 6, 7].map((item) => (
					<MusicDash key={item} />
				))}
			</div>

			<PostComp
				handleFeedOpen={handleFeedOpen}
				postID={"item id"}
				creator={mockCreator}
				comment={"some random comment"}
				media={mockMedia}
				hashtag={"hashtag"}
				content={"Some random content"}
				reaction={mockReaction}
				post_reaction_count={3}
				post_comment_count={4}
				time_since={"2hr ago"}
			/>

			<div className="ticket-das-row">
				{[1, 2, 3, 4, 5, 6, 7].map((item) => (
					<SmallTicketPromoteCard
						key={item}
						description={"small description"}
						eventId={"id123"}
						formatedDate={"date Feb 24"}
						location={"Location"}
						eventImage={PostImage}
					/>
				))}
			</div>

			<PostComp
				handleFeedOpen={handleFeedOpen}
				postID={"item id"}
				creator={mockCreator}
				comment={"some random comment"}
				media={mockMedia}
				hashtag={"hashtag"}
				content={"Some random content"}
				reaction={mockReaction}
				post_reaction_count={3}
				post_comment_count={4}
				time_since={"2hr ago"}
			/>


			<div className="ticket-das-row">
				{[1, 2, 3, 4, 5, 6, 7].map((item) => (
					<MovieDashCard key={item} />
				))}
			</div>

			<PostComp
				handleFeedOpen={handleFeedOpen}
				postID={"item id"}
				creator={mockCreator}
				comment={"some random comment"}
				media={mockMedia}
				hashtag={"hashtag"}
				content={"Some random content"}
				reaction={mockReaction}
				post_reaction_count={3}
				post_comment_count={4}
				time_since={"2hr ago"}
			/>
			
			<div className="ticket-das-row">
				{[1, 2, 3, 4, 5, 6, 7].map((item) => (
					<ProductDash key={item} />
				))}
			</div>

			<PostComp
				handleFeedOpen={handleFeedOpen}
				postID={"item id"}
				creator={mockCreator}
				comment={"some random comment"}
				media={mockMedia}
				hashtag={"hashtag"}
				content={"Some random content"}
				reaction={mockReaction}
				post_reaction_count={3}
				post_comment_count={4}
				time_since={"2hr ago"}
			/>

			<div className="movie-slid-box">
				<div className="post-ead">Trending movies</div>
				<MovieSlider />
			</div>

			<div className="you-may-know">
				<div className="post-ead">People you may know</div>
				<div className="may-know-box">
					{[1, 2, 3, 4, 5, 6, 7].map((item) => (
						<Stick key={item} />
					))}
				</div>
			</div>

			{[1, 2, 3, 4, 5].map((item) => (
				<PostComp
					key={item}
					handleFeedOpen={handleFeedOpen}
					postID={"item id"}
					creator={mockCreator}
					comment={"some random comment"}
					media={mockMedia}
					hashtag={"hashtag"}
					content={"Some random content"}
					reaction={mockReaction}
					post_reaction_count={3}
					post_comment_count={4}
					time_since={"2hr ago"}
				/>
			))}
		</div>
	);
};

export default Feeds;
