import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";
import FestivalHistory from "./FestivalHistory";
import SeminarRecord from "./SeminarRecord";
import PeopleNetwork from "./PeopleNetwork";

const LectureSeminarContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function LectureSeminar() {
  return (
    <LectureSeminarContainer>
      LectureSeminar
      <br />
      <Dropdown />
      <EventInfo />
      <SeminarRecord />
      <PeopleNetwork/>
    </LectureSeminarContainer>
  );
}

export default LectureSeminar;
