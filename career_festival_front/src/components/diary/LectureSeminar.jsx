import React, { useState } from "react";
import styled from "styled-components";
import EventInfo from "./EventInfo";
import SeminarRecord from "./SeminarRecord";
import PeopleNetwork from "./PeopleNetwork";
import { Link } from "react-router-dom";

const LectureSeminarContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:2vw;
  }
`;

const Button = styled(Link)`
  padding: 10px;
  background-color: #582fff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function LectureSeminar() {
  const [isEventInfoComplete, setEventInfoComplete] = useState(false);
  const [isPeopleNetworkComplete, setPeopleNetworkComplete] = useState(false);
  const [isSeminarRecordComplete, setIsSeminarRecordComplete] = useState({
    isComplete: false,
    missingInputs: [],
  });

  const handleEventInfoComplete = (isComplete) => {
    setEventInfoComplete(isComplete);
  };

  const handlePeopleNetworkComplete = (isComplete) => {
    setPeopleNetworkComplete(isComplete);
  };

  const handleSeminarRecordComplete = (isComplete) => {
    setIsSeminarRecordComplete(isComplete);
  };

  const onClick = () => {
    // 여기에 버튼을 클릭했을 때 실행할 코드를 작성합니다.
  };

  return (
    <LectureSeminarContainer>
      <EventInfo onInfoComplete={handleEventInfoComplete} />
      <SeminarRecord onComplete={handleSeminarRecordComplete} />
      <PeopleNetwork onComplete={handlePeopleNetworkComplete} />
 <div className="centered">
        <Button to="/diary">등록하기</Button>
</div>
    </LectureSeminarContainer>
  );
}

export default LectureSeminar;
