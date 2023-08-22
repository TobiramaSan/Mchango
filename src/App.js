import React from "react";
import "./App.css";
import Landing from "./pages/landing/landing";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/sign-up/signup";
import Home from "./pages/home/home";
import CreateGroup from "./pages/create/create";
import Profile from "./pages/profile/profile";
import Success from "./components/success/success";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/success" element={<Success />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
