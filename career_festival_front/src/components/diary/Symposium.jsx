import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";
import FestivalHistory from "./FestivalHistory";

const SymposiumContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function Symposium() {
  return (
    <SymposiumContainer>
      택신<br/>
      Symposium<br/>
      <Dropdown />
      <EventInfo />
      <FestivalHistory/>
    </SymposiumContainer>
  );
}

export default Symposium;
