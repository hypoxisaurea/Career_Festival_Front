// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import DetailFestivalPage from "./pages/DetailFestivalPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
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
import DiaryHeader from "./components/header/DiaryHeader";
import MyPage from "./pages/MyPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 홈페이지 */}
          <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
          {/* 로그인,회원가입 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<SignupPage />} />
          <Route path="/participant" element={<Participant />} />
          <Route path="/organizer" element={<Organizer />} />
          {/* 기록장 */}
          <Route path="/diary" element={<><DiaryHeader /><Diary /><Footer /></>} />
          <Route path="/addDiary" element={<><DiaryHeader /><AddDiary /><Footer /></>} />
          <Route path="/diary/exhibitionfair" element={<><DiaryHeader /><ExhibitionFair /><Footer /></>} />
          <Route path="/diary/lectureseminar" element={<><DiaryHeader /><LectureSeminar /><Footer /></>} />
          <Route path="/diary/other" element={<><DiaryHeader /><Other /><Footer /></>} />
          <Route path="/diary/symposium" element={<><DiaryHeader /><Symposium /><Footer /></>} />
          {/* 행사목록 */}
          <Route path="/festival-list" element={<><Header /><FestivalListPage /><Footer /></>} />
          <Route path="/detail" element={<><Header /><DetailFestivalPage /><Footer /></>} />
          {/* 커뮤니티 */}
          <Route path="/community" element={<><Header /><Community /><Footer /></>} />
          <Route path="/mypage" element={<><Header /><MyPage /><Footer /></>} />
          {/* 행사 등록하기 */}
          <Route path="/register" element={<><Header /><RegisterPage /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
