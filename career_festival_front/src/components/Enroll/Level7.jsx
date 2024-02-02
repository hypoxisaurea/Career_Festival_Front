// Level7.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NextButton,
  PurpleTitle,
  Title,
  Level7Container,
  SubTitle,
  HL, //HorizenLine
  KeyworldOptionList,
  KeywordButton,
  InputFestivalName, // 추가: InputFestivalName 컴포넌트 import
} from "./Level7Style"; // Level7Style 파일에서 NextButton 스타일을 불러옴

const Level7 = () => {
  // 상태 정의
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [customKeyword, setCustomKeyword] = useState("");
  const [customKeywords, setCustomKeywords] = useState([]); // 초기값을 빈 배열로 변경
  const [eventName, setEventName] = useState("");
  // 함수 정의
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

  const addCustomKeyword = () => {
    if (customKeyword.trim() !== "") {
      setSelectedKeywords((prevKeywords) => [...prevKeywords, customKeyword]);
      setCustomKeywords((prevCustomKeywords) => [
        ...prevCustomKeywords,
        customKeyword
      ]);
      setCustomKeyword(""); // 입력 필드 초기화
    }
  };

  const removeCustomKeyword = (keywordToRemove) => {
    setSelectedKeywords((prevKeywords) =>
      prevKeywords.filter((kw) => kw !== keywordToRemove)
    );
    setCustomKeywords((prevCustomKeywords) =>
      prevCustomKeywords.filter((kw) => kw !== keywordToRemove)
    );
  };

  return (
    <Level7Container>
      <PurpleTitle>기본설정</PurpleTitle>
      <SubTitle>행사에 대한 기본설정이에요.</SubTitle>
      <HL/>
      <Title>모집기간</Title>

      <PurpleTitle>행사 상세 정보</PurpleTitle>
      <SubTitle>행사에 대해 자세히 설명해주세요!</SubTitle>
      <HL/>

      {/* 추가: 커리어 키워드 입력 부분입니다. */}
      <p>행사분야</p>
      <KeyworldOptionList>
        {[
          "창업",
          "라이프",
          "예술",
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
      </KeyworldOptionList>
      
      <Title>행사명</Title>
      {/* 행사명 입력 부분을 컴포넌트로 교체 */}
      <InputFestivalName
        placeholder="행사명을 입력하세요"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      
      <Title>간단 소개</Title>
      <Title>관심지역</Title>
      <Title>행사 대표이미지</Title>
      <Title>행사 일정</Title>
      <Title>행사 신청 외부사이트</Title>
      <Title>행사 정보</Title>
      
      <Link to="/">
        <NextButton>행사개설</NextButton>
      </Link>
    </Level7Container>
  );
};

export default Level7;
