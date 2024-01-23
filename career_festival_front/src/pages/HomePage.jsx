// src/pages/HomePage.jsx
import React from "react";
import Recommend from "../components/home/Recommend";
import dummy from "../db/RecommendedEvents.json";
import styled from "styled-components";
import Banner from "../components/home/Banner";
import OrganizationList from "../components/home/OrganizationList";


//Home 전체 페이지
const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 65%;
  //padding: 0 8vw 0 8vw;
`;



/*개인 키워드 추천*/

//개인 키워드 추천 전체
const RecommendPersonalContainer = styled.div`
  background-color: beige;
  display: flex;
  flex-direction: column;
  //margin: 2vw;
`;

const RecommendPersonalWraper = styled.div`
  // 그리드 3x2
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
`;


//위치 근처 추천
const RecommendPlaceContainer = styled.div`
  background-color: #f2f2f2; /*임의로 영역 확인용*/
  
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

const RecommendPlaceWraper = styled.div`
   //그리드 3*1
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 5vmax 2vmax;
`;


//주최자






const HomePage = () => {
  const recommendedByPersonSlice = dummy.RecommendedByPerson.slice(0, 6); // 처음 6개 아이템만 사용

  return (
    <div>
      <Banner />
      <HomePageContainer>
        <RecommendPersonalContainer>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "900",
              paddingTop: "5rem",
              marginBottom: "1rem",
            }}
          >
            이런행사 찾으셨죠?
          </h2>
          <div
            style={{
              fontSize: "1.3rem",
              fontWeight: "900",
              marginBottom: "2rem",
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
              paddingTop: "10rem",
              marginBottom: "2rem",
              justifyItems: "center",
            }}
          >
            <button>지역명</button> 근처 행사
          </h2>
          <RecommendPlaceWraper>
            {dummy.RecommendedByPlace.map((item) => {
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
        <OrganizationList/>
      </HomePageContainer>
    </div>
  );
};

export default HomePage;
