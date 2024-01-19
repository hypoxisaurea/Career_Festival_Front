import React from "react";
import {
  DetailContainer,
  Thumbnail,
  Menu,
  HorizontalDivider,
  InfoContainer,
  FileContainer,
  PlaceContainer,
  NoticeContainer,
  NoticeContent,
  QnAContainer,
  ContactContainer,
  ContactTitle,
  ContactContent,
  Subtitle,
} from "./EventDetailStyle";

function EventDetail() {
  return (
    <DetailContainer>
      <Thumbnail />
      <Menu />
      <HorizontalDivider />
      <InfoContainer />
      <HorizontalDivider />
      <FileContainer />
      <PlaceContainer>
        <Subtitle>행사위치</Subtitle>
      </PlaceContainer>
      <NoticeContainer>
        <Subtitle>안내사항</Subtitle>
        <NoticeContent>등록된 안내사항이 없습니다</NoticeContent>
      </NoticeContainer>
      <QnAContainer>
        <Subtitle>문의하기</Subtitle>
      </QnAContainer>
      <ContactContainer>
        <ContactTitle>담당자</ContactTitle>
        <ContactContent>뉴럴웍스랩</ContactContent>
        <br />
        <ContactTitle>이메일</ContactTitle>
        <ContactContent>camp@neuralworks.io</ContactContent>
        <br />
        <ContactTitle>연락처</ContactTitle>
        <ContactContent>01012341234</ContactContent>
      </ContactContainer>
    </DetailContainer>
  );
}

export default EventDetail;
