// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import DetailFestivalPage from "./pages/DetailFestivalPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Recommend from "./components/home/Recommend";
import Community from "./components/home/Community";
import Diary from "./components/diary/Diary";
import AddDiary from "./components/diary/AddDiary";
import Participant from "./components/signup/Participant";
import Organizer from "./components/signup/Organizer";
import "./App.css";
import FestivalListPage from "./pages/FestivalListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/participant" element={<Participant />} />
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/festival-list" element={<><Header /><FestivalListPage /><Footer /></>} />
          <Route path="/detail" element={<><Header /><DetailFestivalPage /><Footer /></>} />
          <Route path="/community" element={<><Header /><Community /><Footer /></>} />
          <Route path="/diary" element={<><Header /><Diary /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
