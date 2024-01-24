import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  margin-top: 2.7vw;
`;

const TitleText = styled.div`
  color: black;
  font-size: 1.4vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: auto;
  color: #838383;
  font-size: 1vw;
  font-family: "Noto Sans KR";
  font-weight: 400;
  word-wrap: break-word;
  border-radius: 0.8vw;
  border: 0.1vw #838383 solid;
  margin-top: 1vw;
  padding: 0.5vw 0 0 1vw;

  &::placeholder {
    color: #838383;
    font-size: 1vw;
    font-family: "Noto Sans KR";
    font-weight: 400;
  }
`;

const EventInfo = () => {
  return (
    <InfoContainer>
      <InputContainer>
        <TitleText>행사 정보</TitleText>
        <TextInput placeholder="행사명을 입력해주세요." />
        <TextInput placeholder="글의 제목을 입력해주세요." />
      </InputContainer>

      <InputContainer>
        <TitleText>행사 일자</TitleText>
        <TextInput placeholder="행사를 다녀온 날짜를 입력해주세요." />
      </InputContainer>

      <InputContainer>
        <TitleText>행사 커리어 키워드</TitleText>
        <TextInput>행사 명</TextInput>
      </InputContainer>
    </InfoContainer>
  );
};

export default EventInfo;
