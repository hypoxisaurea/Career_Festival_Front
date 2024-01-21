// src/pages/DetailFestival.jsx
import React from "react";
import styled from "styled-components";
import Enrollment from "../components/enrollment/Enrollment";
import EventDetail from "../components/eventDetail/EventDetail";
import QnA from "../components/qna/QnA";
import QnAList from "../components/qna/QnAList";
import Contact from "../components/contact/Contact";
import Join from "../components/commentList/Join";
import CommentList from "../components/commentList/CommentList";

const DetailFestivalPageContainer = styled.div`
  width: 1453px;
  height: 100%;
  padding: 81px 115px 0 114px;
`;

const DetailContainer = styled.div`
  display: flex;
`;

const DetailFestivalPage = () => {
  return (
    <DetailFestivalPageContainer>
      <DetailContainer>
        <EventDetail />
        <Enrollment />
      </DetailContainer>
      <QnA />
      <QnAList />
      <Contact />
      <Join />
      <CommentList />
    </DetailFestivalPageContainer>
  );
};

export default DetailFestivalPage;
