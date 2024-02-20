import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // AuthContext import 추가
import dummy from "../../db/RecommendedEvents.json";

const InfoContainer = styled.div`
  width: 100%;
  margin: 27px 0 28px 0;
`;

const DateContainer = styled.div``;

const ApplyContainer = styled.div`
  margin: 19px 0 19px 0;
`;

const PriceContainer = styled.div`
  margin-bottom: 17px;
`;

const PlaceContainer = styled.div``;

const Title = styled.div`
  color: #838383;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 22px;
  display: inline-block;
`;

const Content = styled.div`
  color: black;
  font-family: "Noto Sans KR";
  font-size: 15px;
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
