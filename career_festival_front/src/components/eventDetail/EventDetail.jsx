import React from "react";
import Menu from "../eventDetail/Menu";
import Info from "../eventDetail/Info";
import styled from "styled-components";
import Map from "./Map";

const DetailContainer = styled.div`
  width: 50%;
`;

const Thumbnail = styled.img`
  width: 50vw;
  height: 25vw;
  //background: #d9d9d9;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 2px;
  background: #d9d9d9;
  margin: 19px 0 29px 0; //임시
`;

const FileContainer = styled.div`
  width: 100%;
  height: 800px; //임시
  background: #d9d9d9;
  margin: 56px 0 56px 0;
  text-align: center;
  align-items: center;
`;

const PlaceContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 65px 0 50px 0;
  display: block;
`;

const Subtitle = styled.div`
  color: black;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

function EventDetail({ mainImg }) {
  return (
    <DetailContainer>
      <Thumbnail />
      <Menu />
      <HorizontalDivider />
      <Info />
      <HorizontalDivider />
      <FileContainer>상세 내용</FileContainer>
      <PlaceContainer>
        <Subtitle>행사위치</Subtitle>
      </PlaceContainer>
    </DetailContainer>
  );
}

export default EventDetail;
