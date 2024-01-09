// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Recommand from '../components/home/Recommand';
import Community from '../components/home/Community';
import Diary from '../components/home/Diary';
import { HomePageContainer, LinkContainer } from './HomePageStyle';

const HomePage = () => {
  return (
    <HomePageContainer>
      
      <LinkContainer>
        <Link to="/festival-list">행사목록</Link>
        <Link to="/diary">기록장</Link>
        <Link to="/community">커뮤니티</Link>
      </LinkContainer>
      <h2>Home Page</h2>
      <Recommand />
      {/* Add home page content here */}
      
    </HomePageContainer>
  );
};

export default HomePage;
