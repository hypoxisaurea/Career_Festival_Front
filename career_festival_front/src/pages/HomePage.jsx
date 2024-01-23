// src/pages/HomePage.jsx
import React from "react";
import Recommand from "../components/home/Recommand";
import dummy from "../db/RecommandedEvents.json";
import styled from "styled-components";
import Banner from "../components/home/Banner";

//Home 전체 페이지
const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 8vw 0 8vw;
`;



//개인 키워드 추천
const RecommandPersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2vw;
`;

const RecommandPersonalWraper = styled.div`
  // 그리드 3x2
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
`;


//위치 근처 추천
const RecommandPlaceContainer = styled.div`
  //background-color: #f2f2f2; /*임의로 영역 확인용*/
  width: 80%;
  margin-top: 3vmax;
  margin-bottom: 15vmax;

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

const RecommandPlaceWraper = styled.div`
   //그리드 3*1
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 5vmax 2vmax;
`;

const HomePage = () => {
  const recommendedByPersonSlice = dummy.RecommandedByPerson.slice(0, 6); // 처음 6개 아이템만 사용

  return (
    <div>
      <Banner />
      <HomePageContainer>
        <RecommandPersonalContainer>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "900",
              marginBottom: "10px",
            }}
          >
            이런행사 찾으셨죠?
          </h2>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "2vmax",
            }}
          >
            회원가입 시 선택한
            <span style={{ color: "#582fff" }}> 커리어 키워드</span>에 가장
            부합한 행사들을 볼 수 있어요!
          </div>
          <RecommandPersonalWraper>
            {recommendedByPersonSlice.map((item) => (
              <Recommand
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
          </RecommandPersonalWraper>
        </RecommandPersonalContainer>

        <RecommandPlaceContainer>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "900",
              marginBottom: "2vmax",
              justifyItems: "center",
            }}
          >
            <button>지역명</button> 근처 행사
          </h2>
          <RecommandPlaceWraper>
            {dummy.RecommandedByPlace.map((item) => {
              return (
                <Recommand
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
          </RecommandPlaceWraper>
        </RecommandPlaceContainer>
      </HomePageContainer>
    </div>
  );
};

export default HomePage;
