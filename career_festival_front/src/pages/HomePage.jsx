// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Recommand from '../components/home/Recommand';
import Community from '../components/home/Community';
import Diary from '../components/home/Diary';
import { HomePageContainer, LinkContainer,RecommandPlaceContainer,RecommandPersonalContainer } from './HomePageStyle';
import HomePickCarousel from '../components/home/HomePickCarousel';

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePickCarousel />
       {/*<LinkContainer>
        <Link to="/festival-list">행사목록</Link>
        <Link to="/diary">기록장</Link>
        <Link to="/community">커뮤니티</Link>
  </LinkContainer> */}
      <RecommandPlaceContainer>
        <h2>위치 근처 사용자 님을 위한 행사</h2>
        <Recommand />
      </RecommandPlaceContainer>

      <RecommandPersonalContainer>
        <h2>이런행사 찾으셨죠?</h2>
        <div>회원가입 시 선택한 커리어 키워드에 가장 부합한 행사들만 모아봤어요!</div>
        <Recommand />
      </RecommandPersonalContainer>
    </HomePageContainer>
  );
};

export default HomePage;
