import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Banner from "../components/home/Banner";
import Filter from "../components/home/Filter";
import Checkbox from "../components/home/Checkbox";
import InterestArea from "../components/signup/InterestArea";
import FilterKeyword from "../components/home/Filterkeyword";
import Recommend from "../components/home/Recommend";
import dummy from "../db/RecommendedEvents.json";


// 중간 컨테이너에 대한 스타일링
const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3vw;
  padding: 4vw 0 6vw 0;
`;
 // 필터 및 지역 컴포넌트를 담는 컨테이너에 대한 스타일링
const FilterAndAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;

//필터
const FilterContainer = styled.div`
  width: 100%;
  justify-content: center;
  color: #582fff;
  font-size: 1.2rem;
  font-weight: bold;
`;
// 필터 초기화 버튼에 스타일을 적용한 컴포넌트
const StyledResetButton = styled.button`
  width: 80%;
  background-color: transparent;
  color: #838383;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 6vw;

  &:hover {
    text-decoration: underline;
  }
`;
// 필터 단락에 대한 스타일링
const FilterP = styled.p`
  font-weight: bold;
  color: #000000;
  font-size: 1rem;
`;

//지역
const AreaContainer = styled.div`
  width: 100%;
  height: 10%;
  color: #000000;
  font-size: 1rem;
  font-weight: bold;
`;
const Area = styled.div`
  width: 100%;
  margin-top:1vw;
`;

//행사유형
const Eventtype = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #000000;
  margin-top: -1vw;
  font-size: 1rem;
  font-weight: bold;
`;
// 홈 중간 컨테이너에 대한 스타일링
const HomeMiddleContainer = styled.div`
  padding-top: 2vw;
  padding-bottom: 1vw;
  display: flex;
  justify-content: space-between;
`;

 // 행사 목록 컨테이너에 대한 스타일링
const Eventlist = styled.div`
  width: 50vw;
  height: 85vw;
`;

// 페스티벌 리스트 래퍼에 대한 스타일링 
const FestivalListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 18vw);
  gap: 2vw;
  align-items: top;
  margin-top: 1vw;
`;
//키워드
const KeywordContainer = styled.div`
  display: flex;
  font-size:26px;
  font-weight: bold;
`;
//슬라이드 행사목록 넘김
const Silder = styled.div`
  width: 1vw;
  border: 1px solid;
  flex-shrink: 0;
  margin: 5vw auto 0;
  justify-content: center;
`;

// 하단-주최자
const LowerContaniner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f9f7ff;
  gap: 4vw;
  padding: 4vw 0 4vw 0;
`;
// 이벤터 컨테이너에 대한 스타일링
const Eventer = styled.div`
  width: 50vw;
  height: 10vw;
  border-radius: 20px;
  border: 1px solid;
`;
const FestivalListPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);

  // 행사 유형을 선택할 때 호출되는 함수입니다.
  const handleEventTypeSelect = (eventType) => {
    if (selectedEventTypes.includes(eventType)) {
      setSelectedEventTypes(
        selectedEventTypes.filter((type) => type !== eventType)
      );
    } else {
      setSelectedEventTypes([...selectedEventTypes, eventType]);
    }
  };
  // 선택된 필터를 제거하는 함수
  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  // 필터 초기화 함수
  const resetFilters = () => {
    setSelectedFilters([]);
    setSelectedArea("seoul");
    setSelectedCity("");
    setSelectedEventTypes([]);
  };

  // useEffect를 사용하여 컴포넌트가 처음 마운트될 때 실행될 로직 추가
  useEffect(() => {
    // 초기값으로 서울을 선택하도록 설정
    handleAreaSelect("seoul");
  }, []);

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

  return (
    <div>
      {/* 상단 영역 */}
      <Banner />

      {/* 중간 영역 */}
      <MiddleContainer>
        {/* 필터, 지역, 행사유형 영역 */}
        <FilterAndAreaContainer>
          <FilterContainer>
            필터
            {/* 필터 초기화 버튼 */}
            <StyledResetButton onClick={resetFilters}>
              필터 초기화 ⟳
            </StyledResetButton>
            <FilterP>행사분야</FilterP>
            <Filter
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </FilterContainer>
          <AreaContainer>
            지역
            <Area>
              <InterestArea
                style={{}}
                selectedArea={selectedArea}
                handleAreaSelect={handleAreaSelect}
                selectedCity={selectedCity}
                handleCitySelect={handleCitySelect}
                isModalOpen={isModalOpen}
                handleModalToggle={handleModalToggle}
                closeModal={closeModal}
              />
            </Area>
          </AreaContainer>
          <Eventtype>
            행사유형
            <Checkbox
              selectedOptions={selectedEventTypes}
              handleOptionSelect={handleEventTypeSelect}
            />
          </Eventtype>
        </FilterAndAreaContainer>

        {/* 행사목록 영역 */}
        <Eventlist>
          <KeywordContainer> 000 개의 행사를 찾았어요!</KeywordContainer>
          <FilterKeyword
            selectedFilters={selectedFilters}
            removeFilter={removeFilter}
          />
          <FestivalListWrapper>
            {dummy.RecommendedByPerson.map((item) => {
              return (
                <Recommend
                  //style={{ fontSize: "0.5rem" }}
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
          </FestivalListWrapper>
          <Silder>1</Silder>
          <HomeMiddleContainer></HomeMiddleContainer>
        </Eventlist>
      </MiddleContainer>
      <LowerContaniner>
        <Eventer>219 명의 주최자</Eventer>
      </LowerContaniner>
    </div>
  );
};

export default FestivalListPage;