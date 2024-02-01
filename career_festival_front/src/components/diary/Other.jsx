import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";
import FestivalHistory from "./FestivalHistory";
import PeopleNetwork from "./PeopleNetwork";
import SubmitButton from "./SubmitButton";

const OtherContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function Other() {
  const [isFestivalHistoryComplete, setFestivalHistoryComplete] = useState(false);
  const [isEventInfoComplete, setEventInfoComplete] = useState(false);
  const [isPeopleNetworkComplete, setPeopleNetworkComplete] = useState(false);

  const handleFestivalHistoryComplete = (isComplete) => {
    setFestivalHistoryComplete(isComplete);
  };

  const handleEventInfoComplete = (isComplete) => {
    setEventInfoComplete(isComplete);
  };

  const handlePeopleNetworkComplete = (isComplete) => {
    setPeopleNetworkComplete(isComplete);
  };

  return (
    <OtherContainer>
      택신<br />
      Other<br />
      <Dropdown />
      <EventInfo onInfoComplete={handleEventInfoComplete} />
      <FestivalHistory onComplete={handleFestivalHistoryComplete} />
      <PeopleNetwork onComplete={handlePeopleNetworkComplete} />
      <SubmitButton
        isComplete={isFestivalHistoryComplete && isEventInfoComplete && isPeopleNetworkComplete}
      />
    </OtherContainer>
  );
}

export default Other;
