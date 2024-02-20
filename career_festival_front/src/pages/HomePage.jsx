// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import Recommend from "../components/home/Recommend";
import dummy from "../db/RecommendedEvents.json";
import styled from "styled-components";
import Header from "../components/header/Header";
import Banner from "../components/home/Banner";
import InterestArea from "../components/signup/InterestArea";
import { Link } from "react-router-dom";
import axios from 'axios';


//Home 전체 페이지
const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;


//모든 행사 보기
const HomePageShowAllLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: #838383;
  text-decoration-line: none;

  position: absolute;
  padding-top: 3rem;
  align-self: end;
  @media screen and (max-width: 600px) {
    font-size: 1.5vw;
  }
`;


/*개인 키워드 추천*/

//개인 키워드 추천 전체
const RecommendPersonalContainer = styled.div`
  //background-color: beige;
  display: flex;
  flex-direction: column;
  width: 70vw;

  h2{
    font-size: 1.5rem;
    font-weight: 900;
    margin: 2rem 0 0 0;

    @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
  }
`;

const PersonalContainerDiv = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
  margin: 1vw 0 1.5vw 0;
  

  @media screen and (max-width: 600px) {
    font-size: 2vw;
  }
`

//컴포넌트 자리
const RecommendPersonalWraper = styled.div`
  //background-color: lavender;

  width: 100%;

  // 그리드 3x2
  display: grid;
  grid-template-columns: repeat(3, 22vw);
  align-items: top;

  gap: 2vw;


  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;


/* 위치 근처 추천*/

//위치 근처 추천 전체
const RecommendPlaceContainer = styled.div`
  //background-color: #f2f2f2; /*임의로 영역 확인용*/

  display: flex;
  flex-direction: column;

  width: 70vw;
  margin-top: 5vw;
  margin-bottom: 5vw;

  h2{
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 3rem;
    justify-items: center;

    @media screen and (max-width: 600px) {
    font-size: 2vw;
  }
  }

`;


//컴포넌트 자리
const RecommendPlaceWraper = styled.div`
  //background-color: lavender;
  width: 100%;


   //그리드 3*1
  display: grid;
  grid-template-columns: repeat(3, 22vw);
  grid-template-rows: 1fr;
  align-items: top;
  gap: 2vw;

  @media screen and (max-width: 600px) {
    font-size: 1vw;}
`;



const HomePage = () => {
  const recommendedByPersonSlice = dummy.RecommendedByPerson.slice(0, 6); // 처음 6개 아이템만 사용
  const recommendedByPlaceSlice = dummy.RecommendedByPlace.slice(0, 3); // 처음 3개 아이템만 사용

  const [userName, setUserName] = useState(""); // 사용자 이름 상태

  //------------------------------------------------------
  // 지역 설정 모달
  //------------------------------------------------------
  
  //지역명
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");

  
  // useEffect를 사용하여 컴포넌트가 처음 마운트될 때 실행될 로직 추가
  useEffect(() => {
    // 초기값으로 서울을 선택하도록 설정
    handleAreaSelect("seoul");
  }, []);

  useEffect(() => {
    // 서버에서 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        // 서버로 요청 보내기
        console.log("1. 서버로 요청을 보내겠습니다");
        const response = await fetch("http://localhost:9000/");
        if (!response.ok) {
          throw new Error("서버로부터 데이터를 가져오는데 실패했습니다.");
        }
        // JSON 형태로 응답을 받아옴
        const data = await response.json();
        // 받아온 데이터 로그로 출력
        console.log("서버로부터 받은 데이터:", data);
      } catch (error) {
        console.error("데이터를 가져오는 중 에러가 발생했습니다:", error);
      }
    };

    // fetchData 함수 실행
    fetchData();
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  // 모달 창을 열거나 닫는 함수를 정의합니다.
  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  // 모달 닫기 함수를 정의합니다.
  const closeModal = () => {
    setModalOpen(false);
  };

  // 시/도를 선택할 때 호출되는 함수입니다.
  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setSelectedCity("");
  };

  // 시/군/구를 선택할 때 호출되는 함수입니다.
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setModalOpen(false);
  };



//-----------------------------------------------------
// 날짜 형변환
// datetime 형식을 "-년 -월 -일 -시 -분" 형태로 변환하는 함수
//------------------------------------------------------
function formatDateTime(datetimeString) {
  const dateTime = new Date(datetimeString); // 문자열을 Date 객체로 변환
  const year = dateTime.getFullYear(); // 연도 추출
  const month = dateTime.getMonth() + 1; // 월 추출 (0부터 시작하므로 1을 더함)
  const day = dateTime.getDate(); // 일 추출
  const hours = dateTime.getHours(); // 시간 추출
  const minutes = dateTime.getMinutes(); // 분 추출

  // 한 자리 숫자일 경우 앞에 0을 추가하여 두 자리로 만듦
  const formattedMonth = month < 10 ? '0' + month : month;
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  // 포맷된 문자열 반환
  return `${year}년 ${formattedMonth}월 ${formattedDay}일 ${formattedHours}시 ${formattedMinutes}분`;
}



//------------------------------------------------------
// api
//------------------------------------------------------
const [eventNames, setEventNames] = useState([]);
const [eventRandom, setEventRandom] = useState([]);
const [eventViews, setEventViews] = useState([]);
const [eventRegion, setEventRegion] = useState([]);

useEffect(() => {
  const fetchEventData = async () => {
    try {
      const response = await axios.get('http://localhost:9000');

      // eventViews datetime 변환 함수
      const modifiedEvent = (events) =>{
        return events.map(event => ({
        ...event,
        recruitmentStart: formatDateTime(event.recruitmentStart),
        recruitmentEnd: formatDateTime(event.recruitmentEnd)
      }))};

      const modifiedEventViews = modifiedEvent(response.data.eventViews);
      const modifiedEventRandom = modifiedEvent(response.data.eventRandom);

      setEventNames(response.data.eventNames);
      setEventRandom(modifiedEventRandom);
      setEventViews(modifiedEventViews);
      setEventRegion(response.data.eventRegion);
      console.log(modifiedEventViews);
      console.log(modifiedEventRandom);


      console.log('데이터 fetching에 성공했습니다.');

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchEventData();
}, []);

  return (
    <div>
      <Header userName={userName} />
      <Banner />
      <HomePageContainer>
        <RecommendPersonalContainer>
          <h2>이런행사 찾으셨죠? </h2>
          <HomePageShowAllLink to ="/festival-list">모든행사보기</HomePageShowAllLink>
          <PersonalContainerDiv>
            회원가입 시 선택한
            <span style={{ color: "#582fff" }}> 커리어 키워드</span>에 가장
            부합한 행사들을 볼 수 있어요!
          </PersonalContainerDiv>

          <RecommendPersonalWraper>
            {eventViews.map((item) => (
              <Recommend
                style={{
                  color: "white",
                  fontSize: "0.8rem",
                }}
                key={item.eventName} // 유일한 키가 필요합니다.
                eventMainFileUrl={item.eventMainFileUrl}
                eventName={item.eventName}
                recruitmentStart={item.recruitmentStart}
                recruitmentEnd={item.recruitmentEnd}
                isLiked={item.isLiked}
                eventCost={item.eventCost}
                organizerProfileUrl={item.organizerProfileUrl}
              />
            ))}
          </RecommendPersonalWraper>
        </RecommendPersonalContainer>

        <RecommendPlaceContainer>
          <h2>
            <span>
              {/* 지역명 */}
              <InterestArea
                style={{}}
                selectedArea={selectedArea}
                handleAreaSelect={handleAreaSelect}
                selectedCity={selectedCity}
                handleCitySelect={handleCitySelect}
                isModalOpen={isModalOpen}
                handleModalToggle={handleModalToggle}
                closeModal={closeModal}
                buttonText="지역명"
              />
            </span>
            근처 행사
          </h2>
          <HomePageShowAllLink to ="/festival-list">모든행사보기</HomePageShowAllLink>

          <RecommendPlaceWraper>
          {eventRandom.map((item) => (
              <Recommend
                style={{
                  color: "white",
                  fontSize: "0.8rem",
                }}
                key={item.eventName} // 유일한 키가 필요합니다.
                eventMainFileUrl={item.eventMainFileUrl}
                eventName={item.eventName}
                recruitmentStart={item.recruitmentStart}
                recruitmentEnd={item.recruitmentEnd}
                isLiked={item.isLiked}
                eventCost={item.eventCost}
                organizerProfileUrl={item.organizerProfileUrl}
              />
            ))}
          </RecommendPlaceWraper>
        </RecommendPlaceContainer>
      </HomePageContainer>
    </div>
  );
};

export default HomePage;
