import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";

const ExhibitionFairContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function ExhibitionFair() {
  return (
    <ExhibitionFairContainer>
      ExhibitionFair<br/>
      <Dropdown />
      <EventInfo />
    </ExhibitionFairContainer>
  );
}

export default ExhibitionFair;
