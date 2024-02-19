// src/pages/DetailFestival.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Enrollment from "../components/eventDetail/Enrollment";
import EventDetail from "../components/eventDetail/EventDetail";
import QnA from "../components/eventDetail/QnA";
import QnAList from "../components/eventDetail/QnAList";
import Contact from "../components/eventDetail/Contact";
import Join from "../components/eventDetail/Join";
import CommentList from "../components/eventDetail/CommentList";
import axios from "axios";

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
  const [eventData, setEventData] = useState({
    eventName: "",
    recruitmentStart: "",
    recruitmentEnd: "",
    eventCost: "",
    eventStart: "",
    specAddress: "",
    keywordName: "",
    category: "",
    eventMainImageUrl: "",
    eventInformImageUrl: "",
  });

  useEffect(() => {
    const fetchEventDetailData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/detail/${item.id}`
        );

        setEventData(response.data);

        console.log("Event detail data fetching에 성공했습니다.");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEventDetailData();
  }, []);

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
