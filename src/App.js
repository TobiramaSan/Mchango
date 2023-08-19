import React from "react";
import "./App.css";
import Landing from "./pages/landing/landing";
// import { Routes, Route } from "react-router-dom";
// import SignUp from "./pages/sign-up/signup";
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/welcome" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes> */}
      <Landing />
    </div>
  );
}

export default App;
