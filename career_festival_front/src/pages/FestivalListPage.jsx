import React from "react";
import styled from "styled-components";
// import FestivalList from "../components/home/FestivalList";

// 상단-배너+인기검색어
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f7ff;
`;

const BannerAndPopular = styled.div`
  display: flex;
  gap: 3vw;
  margin: 2vw auto;
`;

const HomeP = styled.p`
  color: #000000;
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 15vw;
`;

const PickText = styled.span`
  color: #582fff;
  font-weight: bold;
`;

//배너
const Banner = styled.div`
  width: 1000px;
  height: 200px;
  background-color: #d9d9d9;
  padding: 20px;
`;

//인기검색어
const Popularsearches = styled.div`
  width: 170px;
  height: 250px;
  border-radius: 20px;
  border: 1px solid;
`;

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
const Filter = styled.div`
  width: 200px;
  height: 500px;
  border-radius: 20px;
  border: 1px solid #000000;
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
  border-radius: 20px;
  border: 1px solid #000000;
  justify-content: center;
  color: #000000;
  font-size: 0.8rem;
  font-weight: bold;
`;
// 지역 셀렉트 박스 스타일
const SelectBox = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-size: 1rem;
`;
//행사유형
const Eventtype = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid #000000;
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
  height: 60vw;
  border-radius: 20px;
  border: 1px solid;
`//3x3배열
const FestivalListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
  padding: 2vw;
`;
//행사아이템하나하나
const FestivalItem = styled.div`
  width: 100%;
  height: 15vw;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
`;
//키워드
const Keyword = styled.div`
  width: 5vw;
  height: 2vw;
  margin-left: 2vw;
  border-radius: 20px;
  border: 1px solid;
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
  return (
    <div>
      {/* 상단 영역 */}
      <TopContainer>
        <HomeP style={{ marginTop: "1vw" }}>
          커리어 페스티벌 <PickText>pick!</PickText>
        </HomeP>
        <BannerAndPopular>
          <Banner>배너</Banner>
          <Popularsearches>인기검색어</Popularsearches>
        </BannerAndPopular>
      </TopContainer>
      {/* 중간 영역 */}
      <MiddleContainer>
        {/* 필터, 지역, 행사유형 영역 */}
        <FilterAndAreaContainer>
          <Filter>
            필터<FilterP>행사분야</FilterP>
          </Filter>
          <Area>
            지역
            <SelectBox>
              <option value="seoul">서울</option>
              <option value="busan">부산</option>
              <option value="incheon">인천</option>
            </SelectBox>
          </Area>
          <Eventtype>행사유형</Eventtype>
        </FilterAndAreaContainer>

        {/* 행사목록 영역 */}
        <Eventlist>
          152 개의 행사를 찾았어요!
          <Keyword></Keyword>
          <FestivalListWrapper>
            <FestivalItem>1</FestivalItem>
            <FestivalItem>2</FestivalItem>
            <FestivalItem>3</FestivalItem>
            <FestivalItem>4</FestivalItem>
            <FestivalItem>5</FestivalItem>
            <FestivalItem>6</FestivalItem>
            <FestivalItem>7</FestivalItem>
            <FestivalItem>8</FestivalItem>
            <FestivalItem>9</FestivalItem>
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
