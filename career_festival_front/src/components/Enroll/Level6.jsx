import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 7vw;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
`;

const Content = styled.div`
  font-size: 0.8rem;
  margin-top: 1vw;
  white-space: pre-line;
  color: #838383;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventTypeButton = styled.button`
  margin-top: 1vw;
  padding: 1vw 5vw;
  font-size: 1rem;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-color: ${(props) => (props.isSelected ? "#582fff" : "#ccc")};
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
`;

const CustomInput = styled.input`
  //padding: 1vw;
  margin: 0.5vw;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
`;

// 다음 버튼 스타일 정의
const NextButton = styled.button`
  margin-top: 3vw;
  padding: 1vw 4vw;
  font-size: 1rem;
  background-color: #582fff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Level6 = () => {
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [customEventType, setCustomEventType] = useState("");

  // EventTypeButton 클릭 핸들러
  const handleEventTypeClick = (eventType) => {
    setSelectedEventType(eventType);
  };

  // CustomInput 변경 핸들러
  const handleCustomEventTypeChange = (event) => {
    setCustomEventType(event.target.value);
  };

  // 다음 버튼 클릭 핸들러
  const handleNextButtonClick = () => {
    // Level7 컴포넌트로 전달할 정보 객체 생성
    const eventData = {
      part: `${selectedEventType || ""}%2F${customEventType || ""}`
    };

    // JSON 문자열로 변환하여 URL 쿼리 파라미터로 전달
    const queryString = new URLSearchParams(eventData).toString();

    // Level7 컴포넌트로 이동하면서 URL 쿼리 파라미터 전달
    window.location.href = `/register/Level7?${queryString}`;
  };

  return (
    <div>
      <Container>
        <Title>행사 유형을 선택해주세요.</Title>
        <Content>5분이면 행사를 개설할 수 있어요!</Content>
        <ButtonContainer>
          <EventTypeButton
            isSelected={selectedEventType === "강연세미나"}
            onClick={() => handleEventTypeClick("강연세미나")}
          >
            강연/세미나
          </EventTypeButton>
          <EventTypeButton
            isSelected={selectedEventType === "학술대회"}
            onClick={() => handleEventTypeClick("학술대회")}
          >
            학술대회
          </EventTypeButton>
          <EventTypeButton
            isSelected={selectedEventType === "전시박람회"}
            onClick={() => handleEventTypeClick("전시박람회")}
          >
            전시/박람회
          </EventTypeButton>
          <EventTypeButton
            isSelected={selectedEventType === "기타"}
            onClick={() => handleEventTypeClick("기타")}
          >
            기타<br></br>{" "}
            <CustomInput
              type="text"
              placeholder="기타 행사 유형 입력하세요."
              value={customEventType}
              onChange={handleCustomEventTypeChange}
            />
          </EventTypeButton>
          <Link to="/register/Level7">
            <NextButton onClick={handleNextButtonClick}>다음</NextButton>
          </Link>
        </ButtonContainer>
      </Container>
    </div>
  );
};

export default Level6;
