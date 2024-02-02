import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 다음 버튼 스타일 정의
const NextButton = styled.button`
  margin-top: 20px;
  padding: 1vw 4vw;
  font-size: 1rem;
  background-color: #582fff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

// 주최자 프로필 개설 페이지 컴포넌트
const Level5 = () => {
  return (
      <div>
          힘을내요
      <Link to="/register/Level6">
        <NextButton>행사 개설하기</NextButton>
      </Link>
    </div>
  );
};

export default Level5;
