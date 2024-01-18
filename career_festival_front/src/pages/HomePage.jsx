// src/pages/HomePage.jsx
import React from 'react';
import Recommand from '../components/home/Recommand';
import Community from '../components/home/Community';
import Diary from '../components/home/Diary';
import { HomePageContainer, HomePickCarouselContainer, RecommandWraper,RecommandPlaceContainer,RecommandPersonalContainer } from './HomePageStyle';
import HomePickCarousel from '../components/home/HomePickCarousel';
import dummy from "../db/RecommandedEvents.json";

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePickCarouselContainer>
        <HomePickCarousel />
      </HomePickCarouselContainer>
      
       
      <RecommandPlaceContainer>
        <h2>위치 근처 사용자 님을 위한 행사</h2>
        <RecommandWraper>
          {
            dummy.RecommandedByPlace.map((item) =>{
              return(
                <Recommand
                  mainImg = {item.mainImg}
                  eventName = {item.eventName}
                  recruitmentStart = {item.recruitmentStart}
                  recruitmentEnd = {item.recruitmentEnd}
                  price = {item.price}
                />
              )
            })
          }
        </RecommandWraper>
      </RecommandPlaceContainer>

      <RecommandPersonalContainer>
        <h2>이런행사 찾으셨죠?</h2>
        <div>회원가입 시 선택한 커리어 키워드에 가장 부합한 행사들만 모아봤어요!</div>
        <RecommandWraper>
          {
            dummy.RecommandedByPerson.map((item) =>{
              return(
                <Recommand
                  mainImg = {item.mainImg}
                  eventName = {item.eventName}
                  recruitmentStart = {item.recruitmentStart}
                  recruitmentEnd = {item.recruitmentEnd}
                  price = {item.price}
                  />
              )
            })
          }
        </RecommandWraper>
      </RecommandPersonalContainer>
    </HomePageContainer>
  );
};

export default HomePage;
