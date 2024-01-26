import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";
import FestivalHistory from "./FestivalHistory";
import PeopleNetwork from "./PeopleNetwork";

const SymposiumContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#4caf50")};
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

function Symposium() {
  return (
    <SymposiumContainer>
      택신<br/>
      Symposium<br/>
      <Dropdown />
      <EventInfo />
      <FestivalHistory/>
      <PeopleNetwork/>
    </SymposiumContainer>
  );
}

export default Symposium;
