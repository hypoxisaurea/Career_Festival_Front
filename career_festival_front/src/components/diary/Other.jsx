import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";
import FestivalHistory from "./FestivalHistory";
import PeopleNetwork from "./PeopleNetwork";
const OtherContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function Other() {
  return (
    <OtherContainer>
      택신<br/>
      Other<br/>
      <Dropdown />
      <EventInfo />
      <FestivalHistory/>
      <PeopleNetwork/>
    </OtherContainer>
  );
}

export default Other;
