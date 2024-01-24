// 디자인이 아직 안나온듯?
// src/components/home/Diary.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DiaryIntro from "./DiaryIntro";

const AddDiaryButton = styled(Link)`
  background-color: transparent;
  border: 0;

  color: #582fff;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  text-decoration: none;
`;

const Diary = () => {
  return <AddDiaryButton to="/addDiary">추가하기</AddDiaryButton>;
};

export default Diary;
