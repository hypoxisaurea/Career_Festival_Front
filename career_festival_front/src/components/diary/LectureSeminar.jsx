import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";
import FestivalHistory from "./FestivalHistory";

const LectureSeminarContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function LectureSeminar() {
  return (
    <LectureSeminarContainer>
      LectureSeminar<br/>
      <Dropdown />
      <EventInfo />
      <FestivalHistory/>
    </LectureSeminarContainer>
  );
}

export default LectureSeminar;
