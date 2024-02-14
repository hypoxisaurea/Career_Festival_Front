// src/pages/DetailFestival.jsx
import React from "react";
import styled from "styled-components";
import Enrollment from "../components/eventDetail/Enrollment";
import EventDetail from "../components/eventDetail/EventDetail";
import QnA from "../components/eventDetail/QnA";
import QnAList from "../components/eventDetail/QnAList";
import Contact from "../components/eventDetail/Contact";
import Join from "../components/eventDetail/Join";
import CommentList from "../components/eventDetail/CommentList";

const DetailFestivalPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100%;
  padding: 2vw 15vw;
`;

const DetailContainer = styled.div`
  display: flex;
  width: 100%;
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
