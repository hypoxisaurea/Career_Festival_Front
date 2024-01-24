import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";

const SymposiumContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function Symposium() {
  return (
    <SymposiumContainer>
      Symposium<br/>
      <Dropdown />
      <EventInfo />
    </SymposiumContainer>
  );
}

export default Symposium;
