import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 페이지 전체를 감싸는 컨테이너 스타일 정의
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  margin-top: 20px;
  text-align: center;
  padding: 10vw; // 뷰포트 너비의 10%만큼 여백 추가
  //height: 100vh; // 화면 높이의 100%로 설정
`;

// 주요 제목 스타일 정의
const Main = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
`;

// 입력 관련 요소들을 감싸는 컨테이너 스타일 정의
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  font-size: 1rem;
`;

// 입력 필드 스타일 정의
const InputField = styled.input`
  width: 300px;
  padding: 10px;
  margin-top: 2vw;
  font-size: 1rem;
  border: 0.1vw solid #838383;
  border-radius: 0.5vw;
`;

// 내용을 담는 요소 스타일 정의
const Contents = styled.div`
  font-size: 0.8rem;
  margin-top: 20px;
  white-space: pre-line; // 줄 바꿈을 유지하기 위해 설정
`;

// 강조 텍스트 스타일 정의
const StyledText = styled.span`
  color: #582fff; // 보라색으로 설정
  font-weight: bold;
`;


// 다음 버튼 스타일 정의
const NextButton = styled.button`
  margin-top: 2vw;
  padding: 1vw 4vw;
  font-size: 14px;
  background-color: #582fff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

// 주최자 프로필 개설 페이지 컴포넌트
const Level1 = () => {
  const [organizerName, setOrganizerName] = useState("");

  // 주최자 이름 입력 시 상태 업데이트
  const handleNameChange = (event) => {
    setOrganizerName(event.target.value);
  };

  return (
    <Container>
      <Main>주최자 프로필 개설</Main>
      <InputContainer>
        <label htmlFor="organizerName">주최자의 이름을 입력해주세요.</label>
        <Contents>
        커리어페스티벌에서 <StyledText>프로필명</StyledText>이 됩니다.
        {"\n"}웹 내에서 공개될 프로필로 참가자들에게 보여질 내용입니다.
        </Contents>
        
        <InputField
          type="text"
          placeholder="예시) 박시현"
          id="organizerName"
          value={organizerName}
          onChange={handleNameChange}
        />
      </InputContainer>
      
      <Link to="/register/Level2">
        <NextButton>
          다음
        </NextButton>
      </Link>
    </Container>
  );
};

export default Level1;
