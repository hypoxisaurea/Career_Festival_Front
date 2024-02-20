// src/pages/DetailFestival.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { eventId } = useParams();

  const [eventName, setEventName] = useState("");
  const [recruitmentStart, setRecruitmentStart] = useState("");
  const [recruitmentEnd, setRecruitmentEnd] = useState("");
  const [eventCost, setEventCost] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [specAddress, setSpecAddress] = useState("");
  const [keywordName, setKeywordName] = useState("");
  const [category, setCategory] = useState("");
  const [eventMainImageUrl, setEventMainImageUrl] = useState("");
  const [eventInformImageUrl, setEventInformImageUrl] = useState("");
  const [managerEmail, setmanagerEmail] = useState("");
  const [managerName, setmanagerName] = useState("");

  const [organizerName, setorganizerName] = useState("");
  const [organizerProfileFileUrl, setorganizerProfileFileUrl] = useState("");

  useEffect(() => {
    const fetchEventDetailData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/event/${eventId}`
        );

        const eventInfo = response.data.eventInformation[0];

        setEventName(eventInfo.eventName);
        setEventCost(eventInfo.eventCost);
        setRecruitmentStart(eventInfo.recruitmentStart);
        setRecruitmentEnd(eventInfo.recruitmentEnd);
        setEventStart(eventInfo.eventStart);
        setSpecAddress(eventInfo.specAddress);
        setKeywordName(eventInfo.keywordName);
        setCategory(eventInfo.category);
        setEventMainImageUrl(eventInfo.eventMainImageUrl);
        setEventInformImageUrl(eventInfo.eventInformImageUrl);
        setmanagerEmail(eventInfo.managerEmail);
        setmanagerName(eventInfo.managerName);

        console.log("Event Info data fetching에 성공했습니다.");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchEventOrganizerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/event/${eventId}`
        );

        const organizerInfo = response.data.organizerInformation;

        setorganizerName(organizerInfo.organizerName);
        setorganizerProfileFileUrl(organizerInfo.organizerProfileFileUrl);

        console.log("Event Organizer data fetching에 성공했습니다.");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEventDetailData();
    fetchEventOrganizerData();
  }, [eventId]);

  return (
    <DetailFestivalPageContainer>
      <DetailContainer>
        <EventDetail
          eventName={eventName}
          eventCost={eventCost}
          recruitmentStart={recruitmentStart}
          recruitmentEnd={recruitmentEnd}
          eventStart={eventStart}
          specAddress={specAddress}
          keywordName={keywordName}
          category={category}
          eventMainImageUrl={eventMainImageUrl}
          eventInformImageUrl={eventInformImageUrl}
        />
        <Enrollment
          eventName={eventName}
          eventCost={eventCost}
          recruitmentStart={recruitmentStart}
          recruitmentEnd={recruitmentEnd}
          eventStart={eventStart}
          specAddress={specAddress}
          keywordName={keywordName}
          category={category}
          eventMainImageUrl={eventMainImageUrl}
          eventInformImageUrl={eventInformImageUrl}
          organizerName={organizerName}
          organizerProfileFileUrl={organizerProfileFileUrl}
        />
      </DetailContainer>
      <QnA />
      <QnAList />
      <Contact managerName={managerName} managerEmail={managerEmail} />
      <Join />
      <CommentList />
    </DetailFestivalPageContainer>
  );
};

export default DetailFestivalPage;
