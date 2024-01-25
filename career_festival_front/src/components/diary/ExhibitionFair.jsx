import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";
import FestivalHistory from "./FestivalHistory";

const ExhibitionFairContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function ExhibitionFair() {
  return (
    <ExhibitionFairContainer>
      택신<br/>
      ExhibitionFair<br/>
      <Dropdown />
      <EventInfo />
      <FestivalHistory />
    </ExhibitionFairContainer>
  );
}

export default ExhibitionFair;
