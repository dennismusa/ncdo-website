import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"; // note: capital P
import Donate from "./components/Donate";
import WatchVideo from "./components/WatchVideo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/watch-video" element={<WatchVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
