
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

const Level7 = () => {
  return (
    <div>
      뿡~
      <Link to="/">
        <NextButton>행사개설</NextButton>
      </Link>
    </div>
  );
};

export default Level7;
