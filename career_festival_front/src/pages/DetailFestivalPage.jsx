// src/pages/DetailFestival.jsx
import React from "react";
import {
  EnrollmentContainer,
  EventDetailContainer,
} from "./DetailFestivalPageStyle";
import Enrollment from "../components/enrollment/Enrollment";
import EventDetail from "../components/eventDetail/EventDetail";

const DetailFestivalPage = () => {
  return (
    <div>
      <EventDetailContainer>
        <EventDetail />
      </EventDetailContainer>
    </div>
  );
};

export default DetailFestivalPage;