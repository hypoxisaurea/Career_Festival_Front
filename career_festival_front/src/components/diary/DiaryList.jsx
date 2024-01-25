import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListContainer = styled.div``;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`;

const DiaryContainer = styled.div`
  width: 30vw;
  height: 20vw;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.6vw;
  border: 1px #d9d9d9 solid;
  padding: 2vw 1.5vw 2vw 1.5vw;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 0.01vw;
  background: #d9d9d9;
  margin: 1vw 0 2vw 0;
`;

const EventTitleText = styled.div`
  color: black;
  font-size: 1.2vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  display: inline-block;
`;

const DateText = styled.div`
  color: black;
  font-size: 1.2vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  display: inline-block;
  float: right;
`;

const DiaryTitleText = styled.div`
  color: black;
  font-size: 1.1vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const DiaryContentText = styled.div`
  color: #838383;
  font-size: 1vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin: 3vw 0 7vw 0;
`;

const TypeTagContainer = styled.div`
  padding: 0.25vw 0.6vw 0.25vw 0.6vw;
  display: inline-block;

  border-radius: 1vw;
  border: 1px #838383 solid;

  color: #838383;
  font-size: 0.9vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const GenreTagContainer = styled.div`
  padding: 0.25vw 0.6vw 0.25vw 0.6vw;
  margin-left: 0.5vw;
  display: inline-block;

  border-radius: 1vw;
  border: 1px #582fff solid;

  color: #582fff;
  font-size: 0.9vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const DiaryList = () => {
  return (
    <ListContainer>
      <ContentContainer>
        <DiaryContainer>
          <EventTitleText>5th UMC 해커톤</EventTitleText>
          <DateText>2024.12.14</DateText>
          <HorizontalDivider />
          <DiaryTitleText>나의 첫 해커톤</DiaryTitleText>
          <DiaryContentText>
            서버 파트로 해커톤에 참여해 약 1박 2일의 시간 동안 ...
          </DiaryContentText>
          <TypeTagContainer>학술대회</TypeTagContainer>
          <GenreTagContainer>경제/금융</GenreTagContainer>
        </DiaryContainer>
      </ContentContainer>
    </ListContainer>
  );
};

export default DiaryList;
