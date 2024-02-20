import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // AuthContext import 추가
import dummy from "../../db/RecommendedEvents.json";

const InfoContainer = styled.div`
  width: 100%;
  margin: 1.8vw 0 1.8vw 0;
`;

const DateContainer = styled.div``;

const ApplyContainer = styled.div`
  margin: 1vw 0 1vw 0;
`;

const PriceContainer = styled.div`
  margin-bottom: 1vw;
`;

const PlaceContainer = styled.div``;

const Title = styled.div`
  color: #838383;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 1.8vw;
  display: inline-block;
`;

const Content = styled.div`
  color: black;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-block;
`;

function Info({
  eventStart,
  recruitmentStart,
  recruitmentEnd,
  eventCost,
  specAddress,
}) {
  return (
    <InfoContainer>
      <DateContainer>
        <Title>일시</Title>
        <Content>{eventStart}</Content>
      </DateContainer>
      <ApplyContainer>
        <Title>신청</Title>
        <Content>
          {recruitmentStart} ~ {recruitmentEnd}
        </Content>
      </ApplyContainer>
      <PriceContainer>
        <Title>비용</Title>
        <Content>{eventCost}</Content>
      </PriceContainer>
      <PlaceContainer>
        <Title>위치</Title>
        <Content>{specAddress}</Content>
      </PlaceContainer>
    </InfoContainer>
  );
}

export default Info;
