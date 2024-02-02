import { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import FirstSide from "../../components/Dashboard/FirstSide";
import Follower from "../../components/Dashboard/Follower";
import PostComp from "../../components/Dashboard/PostComp";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import MusicDash from "../../components/Dashboard/MusicDas";
import Data from "../../utils/datahome.json";
import FeedDetail from "../../components/Home/FeedDetail/FeedDetail";
import SmallTicketPromoteCard from "../../components/Dashboard/smallTicketsPromoted";
import PostImage from "../../assets/images/sample-post-image.png"
import PostAvatar from "../../assets/images/sample-avatar.png"
import "./style.css";
import ProductDash from "../../components/Dashboard/ProductDAs";
import MovieSlider from "../../components/Home/Movieslider/MovieSlider";
import Stick from "../../components/Dashboard/Stick";

const Home = () => {
	const [isFeedOpen, setIsFeedOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("All Posts");

	const handleFeedOpen = () => {
		setIsFeedOpen(true);
	};
	const handleFeedClose = () => {
		setIsFeedOpen(false);
	};
	const handleTabClick = (text) => {
		setActiveTab(text);
	};

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

	const mockMedia = [{}, {media: PostImage}]

	return (
		<div className="home-container">
			<MainLayout>
				<div className="main-containe">
					<div>
						{isFeedOpen && <FeedDetail handleFeedClose={handleFeedClose} />}
					</div>
					{!isFeedOpen && (
						<div className="left-side-container">
							<FirstSide />
							<img src="images/jumia.png" alt="" className="ads-img" />
							<div className="select-what-display">
								{Data.map((item, index) => (
									<div
										key={index}
										className={`tab-item ${
											item.text === activeTab ? "sel-act" : "anot-wid"
										}`}
										onClick={() => handleTabClick(item.text)}
									>
										<div className="dis-sel-name">{item.text}</div>
									</div>
								))}
							</div>
							{activeTab === "All Posts" ? (
								<>
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
										{
											[1, 2, 3, 4, 5, 6, 7].map((item) => (
												<MusicDash key={item} />
											))
										}										
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
										{
											[1, 2, 3, 4, 5, 6, 7].map((item) => (
												<SmallTicketPromoteCard
													key={item}
													description={"small description"}
													eventId={"id123"}
													formatedDate={"date Feb 24"}
													location={"Location"}
													eventImage={PostImage}
												/>
											))
										}
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
										{
											[1, 2, 3, 4, 5, 6, 7].map((item) => (
												<ProductDash key={item}/>
											))
										}
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
											{
												[1, 2, 3, 4, 5, 6, 7].map((item) => (
													<Stick key={item}/>
												))
											}
										</div>
									</div>

									{
										[1, 2, 3, 4, 5].map((item) => (
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
										))
									}
								</>
							) : null}
						</div>
					)}
					<div className="middle-side-container">
						<img src="images/ads1.png" alt="" />
						<img src="images/ads2.png" alt="" />
						<img src="images/ads3.png" alt="" />
					</div>
					<div className="right-side-container">
						<SelectCategory />
						<Follower />
						<div className="mess-bxx-conn">
							<DashMessage />
						</div>
					</div>
				</div>
			</MainLayout>
		</div>
	);
};

export default Home;
