import React from "react";
import MusicDash from "components/Dashboard/MusicDas";
import PostComp from "components/Dashboard/PostComp";
import ProductDash from "components/Dashboard/product-card/ProductDAs";
import SmallTicketPromoteCard from "components/Dashboard/smallTicketsPromoted";
import MovieSlider from "components/Home/Movieslider/MovieSlider";
import Stick from "components/Dashboard/Stick";
import PostImage from "assets/images/sample-post-image.png";
import PostAvatar from "assets/images/sample-avatar.png";
import ProductImage from "assets/images/sample-product.png";
import MovieDashCard from "components/Home/Movieslider/MovieCards";
import { useGetAllFeeds } from "api/hooks/feeds";

const Feeds = () => {
    const {data, isLoading, isError} = useGetAllFeeds()
    console.log(data)
	const mockCreator = {
		cover_image: { cover_image: PostAvatar },
		username: "John Doe",
		address: {
			country: "Nigeria",
			current_city: "Lagos",
		},
	};

	const mockReaction = [
		{ userId: 1, emoji: "👍", user: { username: "user 01" } },
	];

	const mockMedia = [
		{ media: PostImage },
		{ media: ProductImage },
		{ media: PostImage },
		{ media: ProductImage },
		{ media: PostImage },
		{ media: ProductImage },
	];

	return (
		<div style={{ maxWidth: "560px" }}>
            {/* {
                data
            } */}
			<PostComp
				postID={"item id"}
				creator={data?.[0].user}
				comment={"some random comment"}
				media={data?.[0].each_media}
				hashtag={"hashtag"}
				content={"Some random content"}
				reaction={mockReaction}
				post_reaction_count={3}
				post_comment_count={4}
				time_since={"2hr ago"}
				shared
			/>

			<div className="music-das-row">
				{[1, 2, 3, 4, 5, 6, 7].map((item) => (
					<MusicDash key={item} />
				))}
			</div>

			<PostComp
				postID={"item id"}
				creator={mockCreator}
				comment={"some random comment"}
				media={mockMedia.slice(0, 1)}
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
						description={"Lagos festival"}
						eventId={"id123"}
						formatedDate={"Feb 24 2024"}
						location={"Ikeja city mall"}
						eventImage={PostImage}
					/>
				))}
			</div>

			<PostComp
				postID={"item id"}
				creator={mockCreator}
				comment={"some random comment"}
				media={mockMedia.slice(0, 2)}
				hashtag={"hashtag"}
				content={"Some random content"}
				reaction={mockReaction}
				post_reaction_count={3}
				post_comment_count={4}
				time_since={"2hr ago"}
				shared
			/>

			<div className="ticket-das-row">
				{[1, 2, 3, 4, 5, 6, 7].map((item) => (
					<MovieDashCard key={item} />
				))}
			</div>

			<PostComp
				postID={"item id"}
				creator={mockCreator}
				comment={"some random comment"}
				media={mockMedia.slice(0, 3)}
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
				postID={"item id"}
				creator={mockCreator}
				comment={"some random comment"}
				media={undefined}
				hashtag={"hashtag"}
				content={"Some random content"}
				reaction={mockReaction}
				post_reaction_count={3}
				post_comment_count={4}
				time_since={"2hr ago"}
				shared
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
					postID={"item id"}
					creator={mockCreator}
					comment={"some random comment"}
					media={mockMedia.slice(0, 4)}
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
