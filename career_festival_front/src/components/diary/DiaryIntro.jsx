import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div``;

const ColorText = styled.div`
  color: #582fff;
  font-family: "Noto Sans KR";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const NormalText = styled.div`
  color: black;
  font-family: "Noto Sans KR";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const TitleText = styled.div`
  color: black;
  font-family: Rubik;
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

function RecordIntro() {
  return (
    <IntroContainer>
      <ColorText>김커리</ColorText>
      <NormalText>님, 안녕하세요?</NormalText>
    </IntroContainer>
  );
}

export default RecordIntro;
