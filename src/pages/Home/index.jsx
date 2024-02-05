import React, { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import FirstSide from "../../components/Dashboard/FirstSide";
import Follower from "../../components/Dashboard/Follower";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import FeedDetail from "../../components/Home/FeedDetail/FeedDetail";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./style.css";
import LifestyleStatus from "../../components/Home/Lifestyle-status/LifestyleStatus";
import FeedLocations from "../../components/Home/Feeds/Locations/Locations";
import Feedvideos from "../../components/Home/Feeds/Videos/Feedvideos";
import Feedimages from "../../components/Home/Feeds/Images/Feedimages";
import FeedsProducts from "../../components/Home/Feeds/Products/Products";
import Feeds from "components/Home/Feeds/All-feeds/Feeds";
import FeedsMusic from "components/Home/Feeds/Music/FeedsMusic";


const CustomTabPanel = (props) => {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box sx={{ p: 3 }}>
			<Box>{children}</Box>
		  </Box>
		)}
	  </div>
	);
}

const Home = () => {
	const [isFeedOpen, setIsFeedOpen] = useState(false);

	const handleFeedOpen = () => {
		setIsFeedOpen(true);
	};
	const handleFeedClose = () => {
		setIsFeedOpen(false);
	};

	const [activeTab, setActiveTab] = React.useState(0);

	const handleChange = (event, newValue) => {
		setActiveTab(newValue);
	};

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
							<LifestyleStatus />
							<Box>
								<Box sx={{ maxWidth: { xs: 320, sm: 580 }, bgcolor: 'background.paper' }}>
									<Tabs
										value={activeTab}
										onChange={handleChange}
										variant="scrollable"
										scrollButtons="auto"
										className="custom-tabs"
										aria-label="scrollable tabs"
									>
										<Tab label="All posts" />
										<Tab label="Images" />
										<Tab label="Videos" />
										<Tab label="Products" />
										<Tab label="Voice notes" />
										<Tab label="Location" />
										<Tab label="Music"/>
										<Tab label="Files"/>
									</Tabs>
								</Box>
								<CustomTabPanel value={activeTab} index={0}>
									<Feeds handleFeedOpen={handleFeedOpen}/>
								</CustomTabPanel>
								<CustomTabPanel value={activeTab} index={1}>
									<Feedimages />
								</CustomTabPanel>
								<CustomTabPanel value={activeTab} index={2}>
									<Feedvideos />
								</CustomTabPanel>
								<CustomTabPanel value={activeTab} index={3}>
									<FeedsProducts />
								</CustomTabPanel>
								<CustomTabPanel value={activeTab} index={4}>
									Voice notes
								</CustomTabPanel>
								<CustomTabPanel value={activeTab} index={5}>
									<FeedLocations />
								</CustomTabPanel>
								<CustomTabPanel value={activeTab} index={6}>
									<FeedsMusic />
								</CustomTabPanel>
								<CustomTabPanel value={activeTab} index={7}>
									Files
								</CustomTabPanel>
							</Box>						
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
