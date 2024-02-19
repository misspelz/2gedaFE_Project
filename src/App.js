import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Landing from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import PersonalDetails from "./pages/PersonalDetails";
import SearchPage from "./pages/SearchPage";
import Chat from "./pages/Chat";
import Commerce from "./pages/Commerce";
import CategoryPage from "./pages/Commerce/Category";
import BusinessDirectory from "./pages/BussinessDirectory";
import Ticket from "./pages/Ticket";
// import BusinessProfile from './pages/BusinessProfile';
import Connect from "./pages/Connect";
import Stereo from "./pages/Stereo";
import NonAuthStero from "./pages/Stereo/NonAuthStero";
// import AddProfile from './pages/Profile/AddProfile';
import EditProfile from "./components/Modals/EditProfile";
import TicketDashCard from "./components/TicketComp/TicketDashCard";
import CantVote from "./components/Modals/Vote/Cant/CantVote";
import PollsSearch from "./components/PollsComp/PollsSearch";
import Voting from "./pages/Polls/Voting";
import Voted from "./components/Modals/Vote/Cant/Voted";
import SuccessPoll from "./components/Modals/Vote/SuccessPoll";
import MyPolls from "./pages/Polls/MyPolls";
import PollResult from "./components/Modals/Vote/PollResult";
import CreatePoll from "./components/Modals/Vote/CreatePoll/CreatePoll";
import ComingSoonPage from "./pages/ComingSoon";
import PrivacyPolicy from "./components/LandinComp/Privacy";
import { Toaster } from "react-hot-toast";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import FeedDetail from "pages/FeedDetail/FeedDetail";

/**
 * ---------------------------
 * PROFILE PAGE DEV
 * ---------------------------
 */
import Profile from "./pages/Profile";
import RewardLayout from "./Layout/RewardLayout";
import Rewards from "./pages/Rewards/Rewards";
import Payouts from "./pages/Rewards/Payouts";
import Histories from "./pages/Rewards/Histories";
import Payment from "./pages/Rewards/Payment";
import BusinessProfile from "./pages/BusinessProfile/BusinessProfile";
import ManageBusiness from "pages/ManageBusiness/ManageBusiness";
import { ModalContextProvider } from "Context/ModalContext";
import { setupAxios } from "./api";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function App() {
	useEffect(() => {
		setupAxios();
	});
	return (
		<>
			<ModalContextProvider>
				<div className="App">
					<ScrollToTop />
					<Toaster
						toastOptions={{
							style: {
								maxWidth: "700px",
								padding: "12px 16px",
								fontSize: "17px",
								fontWeight: "400",
							},
							error: {
								style: {
									color: "red",
								},
							},
							success: {
								style: {
									color: "green",
								},
							},
						}}
						position="top-center"
						reverseOrder={false}
					/>
					<Routes>
						<Route index path="/Signup" element={<Signup />} />
						<Route index path="/Signin" element={<Signin />} />
						<Route index path="/" element={<Landing />} />
						<Route index path="/Home" element={<Home />} />
						<Route index path="/Home/:feedId" element={<FeedDetail />} />
						<Route index path="/reset-password" element={<ForgotPassword />} />
						<Route index path="/verify" element={<Verify />} />
						{/* <Route
          path="/verify"
          element={<ProtectedRoutes element={<Verify />} />}
        /> */}
						{/* <Route
          path="/forgot"
          element={<ProtectedRoutes element={<ForgotPassword />} />}
        /> */}
						<Route
							path="/personaldetail"
							element={<ProtectedRoutes element={<PersonalDetails />} />}
						/>
						<Route
							path="/search"
							element={<ProtectedRoutes element={<SearchPage />} />}
						/>
						<Route
							path="/chat"
							element={<ProtectedRoutes element={<Chat />} />}
						/>
						<Route
							path="/CanVote"
							element={<ProtectedRoutes element={<CantVote />} />}
						/>
						<Route
							path="/CreatePoll"
							element={<ProtectedRoutes element={<CreatePoll />} />}
						/>
						<Route
							path="/ComingSoonPage"
							element={<ProtectedRoutes element={<ComingSoonPage />} />}
						/>
						<Route
							path="/Voted"
							element={<ProtectedRoutes element={<Voted />} />}
						/>
						<Route
							path="/MyPolls"
							element={<ProtectedRoutes element={<MyPolls />} />}
						/>
						<Route
							path="/PollResult"
							element={<ProtectedRoutes element={<PollResult />} />}
						/>
						{/* <Route index path="/Voting" element={<Voting />} /> */}
						<Route
							path="/Voting"
							element={<ProtectedRoutes element={<Voting />} />}
						/>
						<Route
							path="/PrivacyPolicy"
							element={<ProtectedRoutes element={<PrivacyPolicy />} />}
						/>
						<Route
							path="/SuccessPoll"
							element={<ProtectedRoutes element={<SuccessPoll />} />}
						/>
						<Route
							path="/PollsSearch"
							element={<ProtectedRoutes element={<PollsSearch />} />}
						/>
						<Route
							path="/CantVote"
							element={<ProtectedRoutes element={<CantVote />} />}
						/>
						<Route
							path="/TicketDashCard"
							element={<ProtectedRoutes element={<TicketDashCard />} />}
						/>
						<Route
							path="/commerce"
							element={<ProtectedRoutes element={<Commerce />} />}
						/>
						<Route
							path="/category"
							element={<ProtectedRoutes element={<CategoryPage />} />}
						/>
						<Route
							path="/business"
							element={<ProtectedRoutes element={<BusinessDirectory />} />}
						/>
						<Route
							path="/ticket"
							element={<ProtectedRoutes element={<Ticket />} />}
						/>
						<Route
							path="/connect"
							element={<ProtectedRoutes element={<Connect />} />}
						/>
						{/* <Route
          path='/addprofile'
          element={<ProtectedRoutes element={<AddProfile />} />}
        /> */}
						<Route
							path="/EditProfile"
							element={<ProtectedRoutes element={<EditProfile />} />}
						/>
						<Route
							path="/stereo"
							element={<ProtectedRoutes element={<Stereo />} />}
						/>
						<Route
							path="/bussprofile"
							element={<ProtectedRoutes element={<BusinessProfile />} />}
						/>
						<Route
							path="/stereo/nonauth"
							element={<ProtectedRoutes element={<NonAuthStero />} />}
						/>

						{/* PROFILE PAGE */}
						<Route
							path="/profile"
							element={<ProtectedRoutes element={<Profile />} />}
						/>

						<Route
							index
							path="/business-profile"
							element={<ProtectedRoutes element={<BusinessProfile />} />}
						/>

						<Route
							index
							path="manage-business"
							element={<ProtectedRoutes element={<ManageBusiness />} />}
						/>

						<Route
							path="/"
							element={<ProtectedRoutes element={<RewardLayout />} />}
						>
							<Route element={<Navigate replace to="rewards" />} />
							<Route path="rewards" element={<Rewards />} />

							<Route path="rewards/histories" element={<Histories />} />
							<Route path="rewards/payouts" element={<Payouts />} />
							<Route path="rewards/payment" element={<Payment />} />
						</Route>
					</Routes>
				</div>
			</ModalContextProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}

export default App;
