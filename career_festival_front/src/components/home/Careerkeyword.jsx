// Careerkeyword.jsx
import React, { useState } from "react";
import styled, { css } from "styled-components";


const KeywordOptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  input {
    padding: 8px;
    cursor: pointer;
    background: #ffffff;
    color: #838383;
    border-radius: 18px;
    border: 1px solid #838383;
  }
`;

const KeywordButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background: #ffffff;
  color: #838383;
  border-radius: 18px;
  border: 1px solid #838383;

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

const Careerkeyword = ({}) => {
  
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
  );
};

export default Careerkeyword;
