import { Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Landing from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import PersonalDetails from "./pages/PersonalDetails";
import SearchPage from "./pages/SearchPage";
import Chat from "./pages/Chat";
import { useEffect } from "react";
import Commerce from "./pages/Commerce";
import CategoryPage from "./pages/Commerce/Category";
import BusinessDirectory from "./pages/BussinessDirectory";
import Ticket from "./pages/Ticket";
import Profile from "./pages/Profile";
import BusinessProfile from "./pages/BusinessProfile";
import Connect from "./pages/Connect";
import Stereo from "./pages/Stereo";
import NonAuthStero from "./pages/Stereo/NonAuthStero";
import AddProfile from "./pages/Profile/AddProfile";
import EditProfile from "./components/Modals/EditProfile";
import TicketDashCard from "./components/TicketComp/TicketDashCard";
import CantVote from "./components/Modals/Vote/Cant/CantVote";
import PollsSearch from "./components/PollsComp/PollsSearch";
import Voting from "./pages/Polls/Voting";
import Voted from "./components/Modals/Vote/Cant/Voted";
// import Paid from "./components/Modals/Paid/Paid";
import SuccessPoll from "./components/Modals/Vote/SuccessPoll";
import MyPolls from "./components/Modals/Vote/MyPolls";
import PollResult from "./components/Modals/Vote/PollResult";
import NonAuthNavbar from "./Layout/NonAuthNav/NonAuthNavbar";
import CreatePoll from "./components/Modals/Vote/CreatePoll/CreatePoll";
import ComingSoonPage from "./pages/ComingSoon";
import PrivacyPolicy from "./components/LandinComp/Privacy";
// import { EventContextProvider } from "./Context/EventContext/EventContext";
// import { AuthProvider } from "./Context/AuthContext";
import { Toaster } from 'react-hot-toast';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Toaster
        toastOptions={{
          style: {
            maxWidth: '700px',
            padding: '12px 16px',
            fontSize: '17px',
            fontWeight: '400'
          },
          error: {
            style: {
              color: 'red'
            }
          },
          success: {
            style: {
              color: 'green'
            }
          }
        }}
        position="top-center"
        reverseOrder={false}
      />
      {/* <AuthProvider> */}
      <Routes>
        {/* <Route index path="/" element={<Home />} /> */}
        <Route index path="/Home" element={<Home />} />
        <Route index path="/Signup" element={<Signup />} />
        <Route index path="/Signin" element={<Signin />} />
        <Route index path="/" element={<Landing />} />
        <Route index path="/verify" element={<Verify />} />
        <Route index path="/forgot" element={<ForgotPassword />} />
        <Route index path="/personaldetail" element={<PersonalDetails />} />
        <Route index path="/search" element={<SearchPage />} />
        <Route index path="/chat" element={<Chat />} />
        <Route index path="/NonAuthNavbar" element={<NonAuthNavbar />} />
        <Route index path="/CanVote" element={<CantVote />} />
        <Route index path="/CreatePoll" element={<CreatePoll />} />
        <Route index path="/ComingSoonPage" element={<ComingSoonPage />} />
        <Route index path="/Voted" element={<Voted />} />
        <Route index path="/MyPolls" element={<MyPolls />} />
        <Route index path="/PollResult" element={<PollResult />} />
        <Route index path="/Voting" element={<Voting />} />
        <Route index path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route index path="/SuccessPoll" element={<SuccessPoll />} />
        <Route index path="/PollsSearch" element={<PollsSearch />} />
        <Route index path="/CantVote" element={<CantVote />} />
        <Route index path="/TicketDashCard" element={<TicketDashCard />} />
        <Route index path="/commerce" element={<Commerce />} />
        <Route index path="/category" element={<CategoryPage />} />
        <Route index path="/business" element={<BusinessDirectory />} />
        <Route index path="/ticket" element={<Ticket />} />
        <Route index path="/connect" element={<Connect />} />
        <Route index path="/addprofile" element={<AddProfile />} />
        <Route index path="/EditProfile" element={<EditProfile />} />
        <Route index path="/profile" element={<Profile />} />
        <Route index path="/stereo" element={<Stereo />} />
        <Route index path="/bussprofile" element={<BusinessProfile />} />
        <Route index path="/stereo/nonauth" element={<NonAuthStero />} />
      </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
