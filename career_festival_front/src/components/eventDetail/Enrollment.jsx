import React, { useState } from "react";
import styled from "styled-components";
import PopUp from "./PopUp";

const EnrollmentContainer = styled.div`
  width: 20vw;
  height: 25vw;
  margin-left: 2vw;

  background: white;
  box-shadow: 0px 1vw 1vw rgba(0, 0, 0, 0.25);
`;

const InfoContainer = styled.div`
margin: 1vw 2vw 1vw 2vw;
`;

const ReportContainer = styled.div`
  color: #582fff;
  font-size: 0.7vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin: 2px 0 0 0;
  display: inline-block;
  float: right;
`;

const SponsorContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

const ButtonContainer = styled.div`
  margin: 1vw 2vw 0 1.5vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1vw;
`;

const Category1 = styled.div`
  color: black;
  font-size: 0.8vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
`;

const VerticalDivider = styled.div`
  width: 0.1vw;
  height: 1vw;
  background: #838383;
  margin: 0 1vw 0 1vw;
  display: inline-block;
`;

const Category2 = styled.div`
  color: black;
  font-size: 0.8vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
`;

const EventTitle = styled.div`
  width: 100%;
  height: 4vw;
  margin: 1vw 0 0 0;
  color: black;
  font-size: 1.1vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const EventTag = styled.div`
  border-radius: 1vw;
  border: 1px #582fff solid;

  color: #582fff;
  font-size: 0.8vw;
  font-family: "Rubik";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
  margin: 1% 3.5% 0 0; 
  padding: 2% 3.5% 2% 3.33%;
`;

const HorizontalDivider = styled.div`
  width: 338px;
  height: 1px;
  background: #d9d9d9;
  margin: 16px 0 0 0;
`;

const Profile = styled.div`
  width: 29px;
  height: 29px;
  background: #d9d9d9; //임시
  border-radius: 70%;
  display: inline-block;
  //overflow: hidden;
  //object-fit: cover;
  margin: 0 8px 0 0;
  align-items: flex-start;
`;

const Sponsor = styled.div`
  color: black;
  font-size: 0.9vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
  align-items: flex-start;
  margin: 3px 0 0 8px;
`;

const Date = styled.div`
  color: black;
  font-size: 0.8vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  margin: 1vw 0 0 0;
  display: inline-block;
`;

const Price = styled.div`
  color: #582fff;
  font-size: 0.8vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  margin: 1vw 0 0 0;
  display: inline-block;
  float: right;
`;

const ApplyButton = styled.button`
  width: 8vw;
  height: 3vw;
  background: #582fff;
  border-radius: 0.5vw;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  display: inline-block;
`;

const ConfirmButton = styled.button`
  width: 8vw;
  height: 3vw;
  background: #582fff;
  border-radius: 0.5vw;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  display: inline-block;
`;

const ShareButton = styled.button`
  width: 8vw;
  height: 3vw;
  background: #e3dcff;
  border-radius: 0.5vw;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  display: inline-block;
`;

const BookmarkButton = styled.button`
  width: 8vw;
  height: 3vw;
  background: #e3dcff;
  border-radius: 0.5vw;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  display: inline-block;
`;

function Enrollment() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModal(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setModal(false);
  };

  return (
    <EnrollmentContainer>
      <InfoContainer>
        <Category1>과학기술</Category1>
        <VerticalDivider />
        <Category2>강연/세미나</Category2>
        <ReportContainer
          onClick={() => openModal("행사신고가 완료되었습니다!")}
        >
          신고하기
        </ReportContainer>
        <EventTitle>
          제4회 홍익대학교 인공지능 캠프 <br /> [문과생 전용]
        </EventTitle>
        <EventTag>IT/프로그래밍</EventTag>
        <EventTag>과학기술</EventTag>
        <HorizontalDivider />
        <SponsorContainer>
          <Profile />
          <Sponsor>뉴럴웍스랩</Sponsor>
        </SponsorContainer>
        <Date>2024년 1월 13일</Date>
        <Price>무료</Price>
      </InfoContainer>

      <ButtonContainer>
        <ApplyButton
          onClick={() =>
            openModal(
              "해당 행사는 외부 사이트 링크가 없습니다. 주최자의 이메일로 신청부탁드립니다."
            )
          }
        >
          참가 신청하기
        </ApplyButton>
        <ConfirmButton>참가 확정하기</ConfirmButton>
        <ShareButton>공유</ShareButton>
        <BookmarkButton
          onClick={() => openModal("관심 행사에 등록되었습니다!")}
        >
          즐겨찾기★
        </BookmarkButton>
      </ButtonContainer>

      {modal && (
        <PopUp onClose={closeModal}>
          <p>{modalContent}</p>
        </PopUp>
      )}
    </EnrollmentContainer>
  );
}

export default Enrollment;
