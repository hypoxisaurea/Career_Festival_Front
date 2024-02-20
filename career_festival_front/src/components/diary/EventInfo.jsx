// EventInfo.jsx
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Calendar from "./Calendar";


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
  // word-wrap: break-word;
`;

const TextInput = styled.input`
  width: 100%;
  height: auto;
  color: #838383;
  font-size: 1vw;
  font-family: "Noto Sans KR";
  //font-weight: 400;
  word-wrap: break-word;
  border-radius: 0.6vw;
  border: 0.1vw #838383 solid;
  margin-top: 1.2vw;
  padding: 1vw 0 1vw 1vw;

  &::placeholder {
    color: #838383;
    font-size: 1vw;
    font-family: "Noto Sans KR";
    font-weight: 400;
  }
`;

const KeywordOptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5vw;
  margin-top: 1vw;
  input {
    font-size: 1vw;
    padding: 0.5vw;
    cursor: pointer;
    background: #ffffff;
    color: #838383;
    border-radius: 2vw;
    border: 0.1vw solid #838383;
  }
  button {
    font-size: 1vw;
  }
`;

const KeywordButton = styled.button`
  font-size: 1vw;
  padding: 0.5vw;
  cursor: pointer;
  background: #ffffff;
  color: #838383;
  border-radius: 2vw;
  border: 0.1vw solid #838383;

  ${(props) =>
    props.selected &&
    css`
      border: 2px solid #582fff;
      color: #582fff;
    `};

  &:hover {
    color: #582fff;
  }
`;


const EventInfo = ({ onInfoComplete }) => {
  const [eventName, setEventName] = useState("");
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleInputChange = (inputType, value) => {
    switch (inputType) {
      case "eventName":
        setEventName(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "eventDate":
        setEventDate(value);
        break;
      case "keywords":
        setKeywords(value);
        break;
      default:
        break;
    }
  };

  const isEmptyValue = (value) => {
    if (!value.length) return true;
    return false;
  };

  const keyDownHandler = (e) => {
    if (e.code !== "Enter") return;
    e.preventDefault();
  };

  const checkInfoComplete = () => {
    return eventName && title && eventDate && keywords;
  };

  const handleBlur = () => {
    const isComplete = checkInfoComplete();
    onInfoComplete(isComplete);
  };

   const [selectedKeywords, setSelectedKeywords] = useState([]); // 추가: 선택된 키워드 상태
   // 기타 키워드 입력을 위한 상태 추가
   const [customKeyword, setCustomKeyword] = useState("");
   const [customKeywords, setCustomKeywords] = useState([]);

   // 커리어 키워드 선택 시 호출되는 함수입니다.
   const handleKeywordSelect = (keyword) => {
     // 이미 선택된 키워드인지 확인 후 토글
     if (selectedKeywords.includes(keyword)) {
       setSelectedKeywords((prevKeywords) =>
         prevKeywords.filter((kw) => kw !== keyword)
       );
     } else {
       setSelectedKeywords((prevKeywords) => [...prevKeywords, keyword]);
     }
   };

   // 기타 키워드를 추가하는 함수
   const addCustomKeyword = () => {
     if (customKeyword.trim() !== "") {
       setSelectedKeywords((prevKeywords) => [...prevKeywords, customKeyword]);
       setCustomKeywords((prevCustomKeywords) => [
         ...prevCustomKeywords,
         customKeyword,
       ]);
       setCustomKeyword(""); // 입력 필드 초기화
     }
   };

   // 기타 키워드를 삭제하는 함수
   const removeCustomKeyword = (keywordToRemove) => {
     setSelectedKeywords((prevKeywords) =>
       prevKeywords.filter((kw) => kw !== keywordToRemove)
     );
     setCustomKeywords((prevCustomKeywords) =>
       prevCustomKeywords.filter((kw) => kw !== keywordToRemove)
     );
   };


  return (
    <InfoContainer>
      <InputContainer>
        <TitleText>행사 정보</TitleText>
        <TextInput
          placeholder="행사명을 입력해주세요."
          onChange={(e) => handleInputChange("eventName", e.target.value)}
          onBlur={handleBlur}
        />
        <TextInput
          placeholder="글의 제목을 입력해주세요."
          onChange={(e) => handleInputChange("title", e.target.value)}
          onBlur={handleBlur}
        />
      </InputContainer>

      <InputContainer>
        <TitleText>행사 일자</TitleText>
        <Calendar />
      </InputContainer>

      <InputContainer>
        <TitleText>행사 커리어 키워드</TitleText>
        <KeywordOptionList>
          {[
            "창업",
            "라이프",
            "예술",
            "IT/프로그래밍",
            "마케팅",
            "경제/금융",
            "인문/사회",
            "과학기술",
            "디자인",
            "관광/여행",
          ].map((keyword) => (
            <KeywordButton
              key={keyword}
              onClick={() => handleKeywordSelect(keyword)}
              selected={selectedKeywords.includes(keyword)}
            >
              {keyword}
            </KeywordButton>
          ))}

          {/* 기타 키워드 입력 필드 */}
          <input
            type="text"
            placeholder="기타 키워드 추가"
            value={customKeyword}
            onChange={(e) => setCustomKeyword(e.target.value)}
          />

          {/* 기타 키워드 추가 버튼 */}
          <button onClick={addCustomKeyword}>추가</button>

          {/* 기타 키워드 목록 */}
          {customKeywords.map((customKeyword) => (
            <KeywordButton
              key={customKeyword}
              onClick={() => handleKeywordSelect(customKeyword)}
              selected={selectedKeywords.includes(customKeyword)}
              onRemove={() => removeCustomKeyword(customKeyword)}
            >
              {customKeyword}
            </KeywordButton>
          ))}
        </KeywordOptionList>
      </InputContainer>
    </InfoContainer>
  );
};

export default EventInfo;
