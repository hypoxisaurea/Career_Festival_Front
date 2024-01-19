// src/pages/HomePage.jsx
import React from 'react';
import Recommand from '../components/home/Recommand';
import Community from '../components/home/Community';
import Diary from '../components/home/Diary';
//import { HomePageContainer, HomePickCarouselContainer, RecommandPlaceWraper, RecommandPersonalWraper, RecommandPlaceContainer,RecommandPersonalContainer } from './HomePageStyle';
//import HomePickCarousel from '../components/home/HomePickCarousel';
import dummy from "../db/RecommandedEvents.json";
import styled from 'styled-components';

//Home 전체 페이지
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  //padding: 20px;

`;


//위치 근처 추천
const RecommandPlaceContainer = styled.div`
  background-color: #f2f2f2; /*임의로 영역 확인용*/

  button{
    width: 113px;
    height: 42px;
    padding: 5px;

    color: #582fff;
    font-size: 24px;
    font-weight: 900;

    border: none;
    background: #dad1fb;
    border-radius:6px;

  }
 ` 


const RecommandPlaceWraper = styled.div`
  //그리드 3*2
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 2fr);
  gap: 10px;

  justify-content: center;
` 



//개인 키워드 추천
const RecommandPersonalContainer = styled.div`
  background-color: #f7e4ad; /*임의로 영역 확인용*/
  display: flex;
  flex-direction: column;
`

const RecommandPersonalWraper = styled.div`
  //그리드 3*1
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 10px;
`





const HomePage = () => {
  return (
    <HomePageContainer>
      
       
      <RecommandPlaceContainer>
        <h2 style={{fontSize:'24px', 
                    fontWeight: '900',
                    justifyItems: 'center'
                  }}>
          <button>용산구 ^</button> 근처 
          <span style={{color: "#582fff"}}>커리</span>
          님을 위한 행사
        </h2>
        <RecommandPlaceWraper>
          {
            dummy.RecommandedByPlace.map((item) =>{
              return(
                <Recommand
                  mainImg = {item.mainImg}
                  eventName = {item.eventName}
                  recruitmentStart = {item.recruitmentStart}
                  recruitmentEnd = {item.recruitmentEnd}
                  isLiked = {item.isLiked}
                  price = {item.price}
                  profile = {item.profile}
                />
              )
            })
          }
        </RecommandPlaceWraper>
      </RecommandPlaceContainer>

      <RecommandPersonalContainer>
        <h2 style={{fontSize:'24px', 
                    fontWeight: '900',
                    marginBottom: '10px'}}>
          이런행사 찾으셨죠?
        </h2>
        <div style={{fontSize: '20px', fontWeight: '700'}}>
          회원가입 시 선택한 <span  style={{color: "#582fff"}}>커리어 키워드</span>에 가장 부합한 행사들만 모아봤어요!
        </div>
        <RecommandPersonalWraper>
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
        </RecommandPersonalWraper>
      </RecommandPersonalContainer>
    </HomePageContainer>
  );
};

export default HomePage;
