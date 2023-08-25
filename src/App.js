import React from "react";
import "./App.css";
import Landing from "./pages/landing/landing";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/sign-up/signup";
import Home from "./pages/home/home";
import CreateGroup from "./pages/create/create";
import Profile from "./pages/profile/profile";
import Success from "./components/success/success";
import Group from "./pages/Group/group";
import Chats from "./pages/chats/chats";
import ConnectWallet from "./components/connectWallet/connectWallet";
import GroupDetails from "./pages/groupinfo/groupDetails";
import Notification from "./pages/notification/notification";
import SuccessAdmin from "./components/popupAdmin/successAdmin";
import FailedAdmin from "./components/popupAdmin/failedAdmin";
import Upgrade from "./pages/upgrade/upgrade";
import GroupInfo from "./pages/chats/groupInfo/OverPayChat";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/group-details" element={<GroupDetails />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/failed-add" element={<FailedAdmin />} />
        <Route path="/group" element={<Group />} />
        <Route path="/group-info" element={<GroupInfo />} />
        <Route path="/success" element={<Success />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success-added" element={<SuccessAdmin />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </div>
  );
}

export default App;
