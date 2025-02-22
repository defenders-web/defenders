import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Phishing from "./pages/module1";
import QuizA from "./pages/quiza";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Phishing" element={<Phishing />} />
        <Route path="/QuizA" element={<QuizA />} />

      </Routes>
    </Router>
  );
}

export default App;
