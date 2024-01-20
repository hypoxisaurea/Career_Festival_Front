// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import DetailFestivalPage from './pages/DetailFestivalPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Recommand from './components/home/Recommand';
import Community from './components/home/Community';
import Diary from './components/home/Diary';
import './App.css';
import FestivalListPage from './pages/FestivalListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailFestivalPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/festival-list" element={<FestivalListPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
