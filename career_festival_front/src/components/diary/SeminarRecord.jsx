import React, { useState } from "react";
import styled from "styled-components";

const RecordContainer = styled.div`
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-top: 2.7vw;
  display: flex;
  flex-direction: column;
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
  min-height: 60vh;
  color: #838383;
  font-size: 1vw;
  font-family: "Noto Sans KR";
  font-weight: 400;
  word-wrap: break-word;
  border-radius: 0.6vw;
  border: 0.1vw #838383 solid;
  margin-top: 1.2vw;
  padding: 0.5vw 0 0 1vw;

  &::placeholder {
    color: #838383;
    font-size: 1vw;
    font-family: "Noto Sans KR";
    font-weight: 400;
  }
`;

const BottomContainer = styled.div`
  display: inline-block;
  background-color: red;

  border-bottom-left-radius: 0.6vw;
  border-bottom-right-radius: 0.6vw;
`;

const CountContainer = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  text-align: right;
  float: right;
  margin: 4vw 1vw 1.5vw 0;
`;

const CountText = styled.span`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const CountColorText = styled.span`
  color: #582fff;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  margin: 23px 0 0 0;
`;

function SeminarRecord() {
  let [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(
      e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
    );
  };

  return (
    <RecordContainer>
      <InputContainer>
        <TitleText>행사 기록</TitleText>
        <TextInput
          placeholder="다녀온 강연/세미나 내용을 정리해주세요."
          onChange={onInputHandler}
          maxLength="5000"
        />

        <HorizontalDivider />

        <BottomContainer>
          <CountContainer>
            <CountColorText>{inputCount}</CountColorText>
            <CountText>/5000자</CountText>
          </CountContainer>
        </BottomContainer>
      </InputContainer>

      <InputContainer>
        <TitleText>인맥 네트워킹</TitleText>
      </InputContainer>
    </RecordContainer>
  );
}

export default SeminarRecord;
