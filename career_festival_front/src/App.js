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
import FestivalListPage from "./pages/FestivalListPage";
import RegisterPage from "./pages/RegisterPage";
import ExhibitionFair from "./components/diary/ExhibitionFair";
import LectureSeminar from "./components/diary/LectureSeminar";
import Other from "./components/diary/Other";
import Symposium from "./components/diary/Symposium";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<SignupPage />} />
          <Route path="/participant" element={<Participant />} />
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/diary/exhibitionfair" element={<><Header /><ExhibitionFair /><Footer /></>} />
          <Route path="/diary/lectureseminar" element={<><Header /><LectureSeminar /><Footer /></>} />
          <Route path="/diary/other" element={<><Header /><Other /><Footer /></>} />
          <Route path="/diary/symposium" element={<><Header /><Symposium /><Footer /></>} />
          <Route path="/festival-list" element={<><Header /><FestivalListPage /><Footer /></>} />
          <Route path="/detail" element={<><Header /><DetailFestivalPage /><Footer /></>} />
          <Route path="/community" element={<><Header /><Community /><Footer /></>} />
          <Route path="/diary" element={<><Header /><Diary /><Footer /></>} />
          <Route path="/addDiary" element={<><Header /><AddDiary /><Footer /></>} />
          <Route path="/register" element={<><Header /><RegisterPage /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
