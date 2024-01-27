// src/pages/HomePage.jsx
import React from "react";
import Recommend from "../components/home/Recommend";
import dummy from "../db/RecommendedEvents.json";
import styled from "styled-components";
import Banner from "../components/home/Banner";
import organizationsData from "../db/organizationsData.json"
import OrganizationList from "../components/home/OrganizationList";


//Home 전체 페이지
const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

`;


//모든 행사 보기
const HomePageShowAll = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #838383;

  position: absolute;
  padding-top: 3rem;
  align-self: end;
`


/*개인 키워드 추천*/

//개인 키워드 추천 전체
const RecommendPersonalContainer = styled.div`
  background-color: beige;
  display: flex;
  flex-direction: column;

  width: 70vw;
`;

//컴포넌트 자리
const RecommendPersonalWraper = styled.div`
  background-color: lavender;

  width: 100%;

  // 그리드 3x2
  display: grid;
  grid-template-columns: repeat(3, 22vw);
  align-items: top;

  gap: 2vw;
`;


/* 위치 근처 추천*/

//위치 근처 추천 전체
const RecommendPlaceContainer = styled.div`
  background-color: #f2f2f2; /*임의로 영역 확인용*/

  display: flex;
  flex-direction: column;

  width: 70vw;
  margin-top: 5rem;

  
  button {
    width: 113px;
    height: 42px;
    padding: 5px;

    color: #582fff;
    font-size: 24px;
    font-weight: 900;

    border: none;
    background: #dad1fb;
    border-radius: 6px;
  }
`;


//컴포넌트 자리
const RecommendPlaceWraper = styled.div`
  background-color: lavender;
  width: 100%;


   //그리드 3*1
  display: grid;
  grid-template-columns: repeat(3, 22vw);
  grid-template-rows: 1fr;
  align-items: top;
  gap: 2vw;
`;


//주최자
const OrganizationListContainer = styled.div`
  background-color: #f9f7ff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2{
    margin-left: 15vw;
  }
`

const OrganizationslistWraper = styled.div`
   border: 1px solid red;
   width: 70vw;
   margin: 0 auto;
   
  padding-bottom: 5rem;
`

const OrganizationListBoxWrapper = styled.div`
  border: 1px solid red;
  width: 60vw;

  margin: 0 auto;


  // 그리드
  display: grid;
  grid-template-columns: repeat(4, 13.5vw);
  gap: 2vw;
`






const HomePage = () => {
  const recommendedByPersonSlice = dummy.RecommendedByPerson.slice(0, 6); // 처음 6개 아이템만 사용
  const recommendedByPlaceSlice = dummy.RecommendedByPlace.slice(0, 3); // 처음 3개 아이템만 사용
  const organizationsListSlice = organizationsData.OrganizationsList.slice(0, 4)// 처음 4개 아이템 우선 보임


  return (
    <div>
      <Banner />
      <HomePageContainer>
        <RecommendPersonalContainer>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "900",
              margin: "2rem 0 0 0"
            }}
          >
            이런행사 찾으셨죠?
          </h2>
          <HomePageShowAll>모든행사보기</HomePageShowAll>
          <div
            style={{
              fontSize: "1.3rem",
              fontWeight: "900",
              margin: "0.8rem 0 2rem 0",
            }}
          >
            회원가입 시 선택한
            <span style={{ color: "#582fff" }}> 커리어 키워드</span>에 가장
            부합한 행사들을 볼 수 있어요!
          </div>
          
          <RecommendPersonalWraper>
            {recommendedByPersonSlice.map((item) => (
              <Recommend
                style={{
                  color: "white",
                  fontSize: "0.8rem",
                }}
                key={item.eventName} // 유일한 키가 필요합니다.
                mainImg={item.mainImg}
                eventName={item.eventName}
                recruitmentStart={item.recruitmentStart}
                recruitmentEnd={item.recruitmentEnd}
                isLiked={item.isLiked}
                price={item.price}
                profile={item.profile}
              />
            ))}
          </RecommendPersonalWraper>
        </RecommendPersonalContainer>



        <RecommendPlaceContainer>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "900",
              marginBottom: "3rem",
              justifyItems: "center",
            }}
          >
            <button>지역명</button> 근처 행사 
          </h2>
          <HomePageShowAll>모든행사보기</HomePageShowAll>

          <RecommendPlaceWraper>
            {recommendedByPlaceSlice.map((item) => {
              return (
                <Recommend
                  mainImg={item.mainImg}
                  eventName={item.eventName}
                  recruitmentStart={item.recruitmentStart}
                  recruitmentEnd={item.recruitmentEnd}
                  isLiked={item.isLiked}
                  price={item.price}
                  profile={item.profile}
                />
              );
            })}
          </RecommendPlaceWraper>
        </RecommendPlaceContainer>




        <OrganizationListContainer>
          <h2><span>219</span>명의 주최자</h2>
          <OrganizationslistWraper>
            <OrganizationListBoxWrapper>
              {organizationsListSlice.map((item)=>{
                return (
                  <OrganizationList
                    profile={item.profile}
                    OrganizationName={item.OrganizationName}
                    uploadedNumber={item.uploadedNumber}
                    subscribed={item.subscribed}
                  />
                );
              })}
              
            </OrganizationListBoxWrapper>
          </OrganizationslistWraper>
        </OrganizationListContainer>
        
      </HomePageContainer>
    </div>
  );
};

export default HomePage;
