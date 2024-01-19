import React from "react";
import styled from "styled-components";

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
const BannerB = styled.div`
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

const Banner = () => {
  return (
    <TopContainer>
      <HomeP style={{ marginTop: "1vw" }}>
        커리어 페스티벌 <PickText>pick!</PickText>
      </HomeP>
      <BannerAndPopular>
        <BannerB>배너</BannerB>
        <Popularsearches>인기검색어</Popularsearches>
      </BannerAndPopular>
    </TopContainer>
  );
};

export default Banner;
