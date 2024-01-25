import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div``;
const HelloContainer = styled.div`
  margin-bottom: 2vw;
`;
const ContentContainer = styled.div``;

const ColorText = styled.div`
  color: #582fff;
  font-family: "Noto Sans KR";
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  display: inline-block;
`;

const NormalText = styled.div`
  color: black;
  font-family: "Noto Sans KR";
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: inline-block;
`;

const TitleText = styled.div`
  color: black;
  font-family: Rubik;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-block;
`;

function RecordIntro() {
  return (
    <IntroContainer>
      <HelloContainer>
        <ColorText>김커리</ColorText>
        <NormalText>님, 안녕하세요?</NormalText>
      </HelloContainer>
      <ContentContainer>
        <NormalText>행사에서 얻었던 정보들을</NormalText>
      </ContentContainer>
      <ContentContainer>
        <TitleText>Career Festival</TitleText>
        <NormalText>에 모아서 기록해보세요!</NormalText>
      </ContentContainer>
    </IntroContainer>
  );
}

export default RecordIntro;
