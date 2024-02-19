// src/pages/DetailFestival.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Enrollment from "../components/eventDetail/Enrollment";
import EventDetail from "../components/eventDetail/EventDetail";
import QnA from "../components/eventDetail/QnA";
import QnAList from "../components/eventDetail/QnAList";
import Contact from "../components/eventDetail/Contact";
import Join from "../components/eventDetail/Join";
import CommentList from "../components/eventDetail/CommentList";
import dummy from "../db/RecommendedEvents.json";

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
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const event = dummy.RecommendedByPerson.find(
      (event) => event.id === parseInt(eventId)
    );
    setEventData(event);
  }, [eventId]);

  return (
    <DetailFestivalPageContainer>
      <DetailContainer>
        <EventDetail eventData={eventData} />
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
