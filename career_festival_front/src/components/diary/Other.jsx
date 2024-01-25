import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";

const OtherContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function Other() {
  return (
    <OtherContainer>
      Other<br/>
      <Dropdown />
      <EventInfo />
    </OtherContainer>
  );
}

export default Other;
