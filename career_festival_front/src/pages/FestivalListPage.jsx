import React from "react";
import { useState} from "react";
import styled from "styled-components";
import Banner from "../components/home/Banner";
import Filter from "../components/home/Filter";
import Checkbox from "../components/home/Checkbox";
import FilterKeyword from "../components/home/Filterkeyword";
import Recommand from "../components/home/Recommand";
import dummy from "../db/RecommandedEvents.json";


// 중간-필터+지역+행사목록
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  gap: 4vw;
  padding: 4vw 0 6vw 0;
`;

const FilterAndAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;
//필터
const FilterContainer = styled.div`
  width: 200px;
  height: 500px;
  // border-radius: 20px;
  // border: 1px solid #000000;
  justify-content: center;
  color: #582fff;
  font-size: 1rem;
  font-weight: bold;
`;
const FilterP = styled.p`
  font-weight: bold;
  color: #000000;
  font-size: 0.8rem;
`;
//지역
const Area = styled.div`
  width: 200px;
  height: 100px;
  // border-radius: 20px;
  // border: 1px solid #000000;
  justify-content: center;
  color: #000000;
  font-size: 0.8rem;
  font-weight: bold;
`;
// 지역 셀렉트 박스 스타일
const SelectBox = styled.select`
  width: 80%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-size: 1rem;
  color: gray;
`;
//행사유형
const Eventtype = styled.div`
  width: 200px;
  height: 200px;
  // border-radius: 20px;
  // border: 1px solid #000000;
  justify-content: center;
  color: #000000;
  font-size: 0.8rem;
  font-weight: bold;
`;

const HomeMiddleContainer = styled.div`
  padding-top: 2vw;
  padding-bottom: 1vw;
  display: flex;
  justify-content: space-between;
`;
//행사목록가장큰틀
const Eventlist = styled.div`
  width: 50vw;
  height: 85vw;
`;

//3x3배열
const FestivalListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
  align-items: center;
  margin-top: 1vw;
`;
//키워드
const KeywordContainer = styled.div`
  width: 5vw;
  height: 2vw;
  margin-left: 2vw;
  border-radius: 20px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f7ff; // 원하는 배경색 설정
  color: #582fff; // 원하는 텍스트 색상 설정
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

// 하단-주최자?
const LowerContaniner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f9f7ff;
  gap: 4vw;
  padding: 4vw 0 4vw 0;
`;

const Eventer = styled.div`
  width: 50vw;
  height: 10vw;
  border-radius: 20px;
  border: 1px solid;
`;


const FestivalListPage = () => {
   const [selectedFilters, setSelectedFilters] = useState([]);

   const handleCheckboxChange = (category) => {
     if (selectedFilters.includes(category)) {
       setSelectedFilters(
         selectedFilters.filter((filter) => filter !== category)
       );
     } else {
       setSelectedFilters([...selectedFilters, category]);
     }
   };

   const removeFilter = (filter) => {
     setSelectedFilters(selectedFilters.filter((f) => f !== filter));
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
            필터<FilterP>행사분야</FilterP>
            <Filter
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </FilterContainer>
          <Area>
            지역
            <SelectBox>
              <option value="seoul">서울</option>
              <option value="busan">부산</option>
              <option value="incheon">인천</option>
            </SelectBox>
          </Area>
          <Eventtype>
            행사유형
            <Checkbox />
          </Eventtype>
        </FilterAndAreaContainer>

        {/* 행사목록 영역 */}
        <Eventlist>
          152 개의 행사를 찾았어요!
          <FilterKeyword
            selectedFilters={selectedFilters}
            removeFilter={removeFilter}
          />
          <FestivalListWrapper>
            {dummy.RecommandedByPerson.map((item) => {
              return (
                <Recommand
                  style={{ fontSize: "0.5rem" }}
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
          <HomeMiddleContainer>
            {/* <FestivalList>행사아이템</FestivalList> */}
          </HomeMiddleContainer>
        </Eventlist>
      </MiddleContainer>
      <LowerContaniner>
        <Eventer>219 명의 주최자</Eventer>
      </LowerContaniner>
    </div>
  );
};

export default FestivalListPage;