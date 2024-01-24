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
import Participant from "./components/signup/Participant";
import Organizer from "./components/signup/Organizer";
import "./App.css";
import FestivalListPage from "./pages/FestivalListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/festival-list" element={<FestivalListPage />} />
          <Route path="/detail" element={<DetailFestivalPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/participant" element={<Participant />} />
          <Route path="/organizer" element={<Organizer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
