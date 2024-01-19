import React from "react";
import {
  ButtonContainer,
  ApplyButton,
  ConfirmButton,
  ShareButton,
  BookmarkButton,
} from "./ButtonStyle";

import {
  EnrollmentContainer,
  Category1,
  VerticalDivider,
  Category2,
  EventTitle,
  EventTag,
  HorizontalDivider,
  Profile,
  Sponsor,
  Date,
  Price,
} from "./EnrollmentStyle";

function Enrollment() {
  return (
    <EnrollmentContainer>
      <div className="info">
        <Category1>과학기술</Category1>
        <VerticalDivider />
        <Category2>워크샵</Category2>
        <EventTitle>
          제4회 홍익대학교 인공지능 캠프 <br /> [문과생 전용]
        </EventTitle>
        <EventTag>#AI #대학생</EventTag>
        <HorizontalDivider />
        <Sponsor>뉴럴웍스랩</Sponsor>
        <Date>2024년 1월 13일</Date>
        <Price>무료</Price>
      </div>

      <ButtonContainer>
        <ApplyButton>참가 신청하기</ApplyButton>
        <ConfirmButton>참가 확정하기</ConfirmButton>
        <br />
        <ShareButton>공유</ShareButton>
        <BookmarkButton>즐겨찾기</BookmarkButton>
      </ButtonContainer>
    </EnrollmentContainer>
  );
}

export default Enrollment;
