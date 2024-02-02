// Level7.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NextButton } from "./Level7Style"; // Level7Style 파일에서 NextButton 스타일을 불러옴

const Level7 = () => {
  return (
    <>
      뿡~
      <Link to="/">
        <NextButton>행사개설</NextButton>
      </Link>

    </>
  );
};

export default Level7;