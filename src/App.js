import React from "react";
import "./App.css";
import Landing from "./pages/landing/landing";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/sign-up/signup";
import Home from "./pages/home/home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
